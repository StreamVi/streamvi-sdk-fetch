const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Постобработка сгенерированных API файлов
 * Добавляет автоматическую подстановку версий для параметра v
 * Исправляет форматирование в Markdown документации
 */

const apiDir = path.join(__dirname, '../src/generated/api2');

/**
 * Извлекает версию из имени метода
 */
function extractVersionFromMethodName(methodName) {
  // Ищем паттерн V{число} в конце (последнее вхождение)
  const versionMatch = methodName.match(/.*V(\d+)(?:Raw)?$/);
  if (versionMatch) {
    return versionMatch[1];
  }
  
  // Ищем паттерн _v{число} в конце
  const underscoreVersionMatch = methodName.match(/_v(\d+)$/);
  if (underscoreVersionMatch) {
    return underscoreVersionMatch[1];
  }
  
  return null;
}

/**
 * Исправляет форматирование в Markdown файлах документации
 */
function processMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let updatedContent = content;
  let totalChanges = 0;

  // Исправляем HTML-сущности в типах параметров
  // Заменяем &#39; на '
  const htmlEntityPattern = /&#39;/g;
  const htmlEntityMatches = updatedContent.match(htmlEntityPattern);
  if (htmlEntityMatches) {
    updatedContent = updatedContent.replace(htmlEntityPattern, "'");
    totalChanges += htmlEntityMatches.length;
    console.log(`  🔧 Исправлено HTML-сущностей &#39;: ${htmlEntityMatches.length}`);
  }

  // Заменяем &#124; на |
  const pipeEntityPattern = /&#124;/g;
  const pipeEntityMatches = updatedContent.match(pipeEntityPattern);
  if (pipeEntityMatches) {
    updatedContent = updatedContent.replace(pipeEntityPattern, '|');
    totalChanges += pipeEntityMatches.length;
    console.log(`  🔧 Исправлено HTML-сущностей &#124;: ${pipeEntityMatches.length}`);
  }

  // Исправляем дублирование типов в таблицах параметров
  // Паттерн: [**'type'**]**Array<'type'>** -> **'type'**
  const duplicateTypePattern = /\[\*\*([^*]+)\*\*\]\*\*Array<[^>]+>\*\*/g;
  updatedContent = updatedContent.replace(duplicateTypePattern, (match, type) => {
    totalChanges++;
    console.log(`  🔧 Исправлено дублирование типа: ${match} -> **${type}**`);
    return `**${type}**`;
  });

  // Исправляем неправильное форматирование типов с квадратными скобками
  // Паттерн: [**string**] -> **string**
  const bracketTypePattern = /\[\*\*([^*]+)\*\*\]/g;
  updatedContent = updatedContent.replace(bracketTypePattern, (match, type) => {
    totalChanges++;
    console.log(`  🔧 Убраны лишние скобки: ${match} -> **${type}**`);
    return `**${type}**`;
  });

  // Исправляем экранирование символов | в типах union
  // Заменяем \| на |, но только внутри типов
  const unionTypePattern = /\*\*'[^']+'\s*\\\|\s*'[^']+'/g;
  updatedContent = updatedContent.replace(unionTypePattern, (match) => {
    const fixed = match.replace(/\\\|/g, ' \\| ');
    if (fixed !== match) {
      totalChanges++;
      console.log(`  🔧 Исправлено экранирование в union типе: ${match} -> ${fixed}`);
    }
    return fixed;
  });

  if (totalChanges > 0) {
    fs.writeFileSync(filePath, updatedContent);
  }
  
  return { totalChanges };
}

/**
 * Обрабатывает один API файл для fetch-генератора
 */
function processFetchApiFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let updatedContent = content;
  let totalChanges = 0;

  // Для fetch-генератора ищем паттерны в queryParameters
  // Ищем: if (requestParameters['v'] != null) { queryParameters['v'] = requestParameters['v']; }
  // Заменяем на: if (requestParameters['v'] != null) { queryParameters['v'] = requestParameters['v']; } else { queryParameters['v'] = 'X'; }
  
  const fetchQueryPattern = /(async\s+(\w*V\d+)Raw[\s\S]*?)if\s*\(\s*requestParameters\['v'\]\s*!=\s*null\s*\)\s*\{\s*queryParameters\['v'\]\s*=\s*requestParameters\['v'\];\s*\}(?!\s*else)/g;
  
  updatedContent = updatedContent.replace(fetchQueryPattern, (match, methodBlock, methodName) => {
    const version = extractVersionFromMethodName(methodName);
    if (version) {
      totalChanges++;
      console.log(`  🎯 Fetch Query: добавляю автоподстановку v="${version}" для ${methodName}`);
      return match.replace(
        /if\s*\(\s*requestParameters\['v'\]\s*!=\s*null\s*\)\s*\{\s*queryParameters\['v'\]\s*=\s*requestParameters\['v'\];\s*\}/,
        `if (requestParameters['v'] != null) {
            queryParameters['v'] = requestParameters['v'];
        } else {
            queryParameters['v'] = '${version}';
        }`
      );
    }
    return match;
  });

  // Для fetch-генератора ищем паттерны в FormData
  // Ищем: if (requestParameters['v'] != null) { formParams.append('v', requestParameters['v'] as any); }
  // Заменяем на: if (requestParameters['v'] != null) { formParams.append('v', requestParameters['v'] as any); } else { formParams.append('v', 'X' as any); }
  
  const fetchFormDataPattern = /(async\s+(\w*V\d+)Raw[\s\S]*?)if\s*\(\s*requestParameters\['v'\]\s*!=\s*null\s*\)\s*\{\s*formParams\.append\('v',\s*requestParameters\['v'\]\s*as\s*any\);\s*\}(?!\s*else)/g;
  
  updatedContent = updatedContent.replace(fetchFormDataPattern, (match, methodBlock, methodName) => {
    const version = extractVersionFromMethodName(methodName);
    if (version) {
      totalChanges++;
      console.log(`  🎯 Fetch FormData: добавляю автоподстановку v="${version}" для ${methodName}`);
      return match.replace(
        /if\s*\(\s*requestParameters\['v'\]\s*!=\s*null\s*\)\s*\{\s*formParams\.append\('v',\s*requestParameters\['v'\]\s*as\s*any\);\s*\}/,
        `if (requestParameters['v'] != null) {
            formParams.append('v', requestParameters['v'] as any);
        } else {
            formParams.append('v', '${version}' as any);
        }`
      );
    }
    return match;
  });

  if (totalChanges > 0) {
    fs.writeFileSync(filePath, updatedContent);
  }
  
  return { totalChanges };
}

/**
 * Обрабатывает один API файл для старого формата (обратная совместимость)
 */
function processLegacyApiFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let updatedContent = content;
  let totalChanges = 0;

  // 1. Добавляем автоподстановку для Query параметров
  // Ищем: if (v !== undefined) { localVarQueryParameter['v'] = v; }
  // Заменяем на: if (v !== undefined) { localVarQueryParameter['v'] = v; } else { localVarQueryParameter['v'] = 'X'; }
  
  // Используем более простой подход - ищем все методы с версиями и обрабатываем их по отдельности
  const lines = content.split('\n');
  let currentMethodName = null;
  let currentMethodVersion = null;
  let inIfStatement = false;
  let ifStatementType = null; // 'query' или 'formdata'
  let ifStartIndex = -1;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Ищем начало метода с версией
    const methodMatch = line.match(/(\w*V\d+):\s*async/);
    if (methodMatch) {
      currentMethodName = methodMatch[1];
      currentMethodVersion = extractVersionFromMethodName(currentMethodName);
    }
    
    // Если мы внутри метода с версией, ищем паттерны для замены
    if (currentMethodName && currentMethodVersion) {
      // Ищем начало if statement для v параметра (разные варианты форматирования)
      if ((line.includes('if (v !== undefined)') || line.includes('if (v != undefined)')) && !inIfStatement) {
        inIfStatement = true;
        ifStartIndex = i;
        
        // Определяем тип if statement
        if (i + 1 < lines.length && lines[i + 1].includes("localVarQueryParameter['v'] = v;")) {
          ifStatementType = 'query';
        } else if (i + 1 < lines.length && lines[i + 1].includes("localVarFormParams.append('v', v as any);")) {
          ifStatementType = 'formdata';
        }
      }
      
      // Ищем конец if statement
      if (inIfStatement && line.trim() === '}' && !line.includes('} else {')) {
        // Проверяем что следующая строка не содержит else
        if (i + 1 >= lines.length || !lines[i + 1].includes('} else {')) {
          const indentation = lines[ifStartIndex].match(/^(\s*)/)[1];
          
          if (ifStatementType === 'query') {
            lines[i] = `${indentation}} else {
${indentation}    localVarQueryParameter['v'] = '${currentMethodVersion}';
${indentation}}`;
            totalChanges++;
            console.log(`  🎯 Legacy Query: добавляю автоподстановку v="${currentMethodVersion}" для ${currentMethodName}`);
          } else if (ifStatementType === 'formdata') {
            lines[i] = `${indentation}} else {
${indentation}    localVarFormParams.append('v', '${currentMethodVersion}' as any);
${indentation}}`;
            totalChanges++;
            console.log(`  🎯 Legacy FormData: добавляю автоподстановку v="${currentMethodVersion}" для ${currentMethodName}`);
          }
        }
        
        inIfStatement = false;
        ifStatementType = null;
        ifStartIndex = -1;
      }
    }
    
    // Сбрасываем текущий метод когда встречаем конец метода
    if (line.includes('},') && currentMethodName) {
      currentMethodName = null;
      currentMethodVersion = null;
      inIfStatement = false;
      ifStatementType = null;
      ifStartIndex = -1;
    }
  }
  
  if (totalChanges > 0) {
    updatedContent = lines.join('\n');
    fs.writeFileSync(filePath, updatedContent);
  }
  
  return { totalChanges };
}

function main() {
  try {
    console.log('🔧 Запуск постобработки API файлов...');
    console.log('🎯 Цель: добавить автоподстановку версий для параметра v и исправить форматирование документации');
    console.log('=' .repeat(80));
    
    // Нормализуем пути для Windows
    const fetchApiPath = path.resolve(apiDir, 'src', 'apis');
    const axiosApiPath = path.resolve(apiDir, 'api');
    const docsPath = path.resolve(apiDir, 'docs');
    
    // Обрабатываем новые TypeScript файлы API (fetch)
    const fetchApiPattern = path.join(fetchApiPath, '*.ts').replace(/\\/g, '/');
    console.log(`🔍 Ищем новые Fetch API файлы в: ${fetchApiPath}`);
    
    const fetchApiFiles = glob.sync(fetchApiPattern);
    console.log(`🔍 Найдено новых Fetch API файлов: ${fetchApiFiles.length}`);
    console.log('');
    
    let totalFetchChanges = 0;
    let processedFetchFiles = 0;
    
    for (const filePath of fetchApiFiles) {
      const fileName = path.basename(filePath);
      console.log(`📦 Обрабатываем Fetch API: ${fileName}`);
      
      const result = processFetchApiFile(filePath);
      if (result.totalChanges > 0) {
        processedFetchFiles++;
        totalFetchChanges += result.totalChanges;
        console.log(`  ✅ Добавлено автоподстановок: ${result.totalChanges}`);
      } else {
        console.log(`  ⏭️  Изменений не требуется`);
      }
    }

    // Обрабатываем старые TypeScript файлы API (legacy формат) - если они еще существуют
    const legacyApiPattern = path.join(axiosApiPath, '*.ts').replace(/\\/g, '/');
    console.log('');
    console.log(`🔍 Ищем старые Legacy API файлы в: ${axiosApiPath}`);
    
    const legacyApiFiles = glob.sync(legacyApiPattern);
    console.log(`🔍 Найдено старых Legacy API файлов: ${legacyApiFiles.length}`);
    console.log('');
    
    let totalLegacyChanges = 0;
    let processedLegacyFiles = 0;
    
    for (const filePath of legacyApiFiles) {
      const fileName = path.basename(filePath);
      console.log(`📦 Обрабатываем Legacy API: ${fileName}`);
      
      const result = processLegacyApiFile(filePath);
      if (result.totalChanges > 0) {
        processedLegacyFiles++;
        totalLegacyChanges += result.totalChanges;
        console.log(`  ✅ Добавлено автоподстановок: ${result.totalChanges}`);
      } else {
        console.log(`  ⏭️  Изменений не требуется`);
      }
    }

    // Обрабатываем Markdown файлы документации
    const docsPattern = path.join(docsPath, '*.md').replace(/\\/g, '/');
    console.log('');
    console.log(`🔍 Ищем файлы документации в: ${docsPath}`);
    
    const docsFiles = glob.sync(docsPattern);
    console.log(`🔍 Найдено файлов документации: ${docsFiles.length}`);
    console.log('');
    
    let totalDocsChanges = 0;
    let processedDocsFiles = 0;
    
    for (const filePath of docsFiles) {
      const fileName = path.basename(filePath);
      console.log(`📄 Обрабатываем документацию: ${fileName}`);
      
      const result = processMarkdownFile(filePath);
      if (result.totalChanges > 0) {
        processedDocsFiles++;
        totalDocsChanges += result.totalChanges;
        console.log(`  ✅ Исправлений форматирования: ${result.totalChanges}`);
      } else {
        console.log(`  ⏭️  Изменений не требуется`);
      }
    }
    
    console.log('');
    console.log('=' .repeat(80));
    console.log('✅ Постобработка завершена');
    console.log(`📊 Результаты:`);
    console.log(`   Fetch API файлы (новые):`);
    console.log(`   • Файлов обработано: ${fetchApiFiles.length}`);
    console.log(`   • Файлов изменено: ${processedFetchFiles}`);
    console.log(`   • Всего автоподстановок добавлено: ${totalFetchChanges}`);
    console.log(`   Legacy API файлы (старые):`);
    console.log(`   • Файлов обработано: ${legacyApiFiles.length}`);
    console.log(`   • Файлов изменено: ${processedLegacyFiles}`);
    console.log(`   • Всего автоподстановок добавлено: ${totalLegacyChanges}`);
    console.log(`   Документация:`);
    console.log(`   • Файлов обработано: ${docsFiles.length}`);
    console.log(`   • Файлов изменено: ${processedDocsFiles}`);
    console.log(`   • Всего исправлений форматирования: ${totalDocsChanges}`);
    
    const totalApiChanges = totalFetchChanges + totalLegacyChanges;
    
    if (totalApiChanges > 0) {
      console.log('');
      console.log('💡 Теперь методы автоматически подставляют версию:');
      console.log('   • userGetProfileV1({ language: "ru" }) - автоматически добавляет v="1"');
      console.log('   • paySettingGetSettingV3({ language: "ru" }) - автоматически добавляет v="3"');
      console.log('   • Можно переопределить: userGetProfileV1({ v: "2", language: "ru" }) - использует v="2"');
    }

    if (totalDocsChanges > 0) {
      console.log('');
      console.log('📝 Исправлено форматирование в документации:');
      console.log('   • Убраны HTML-сущности (&#39; -> \', &#124; -> |)');
      console.log('   • Исправлено дублирование типов в таблицах параметров');
      console.log('   • Убраны лишние квадратные скобки в типах');
    }
    
  } catch (error) {
    console.error('❌ Ошибка при постобработке:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Запускаем только если скрипт вызван напрямую
if (require.main === module) {
  main();
}

// Экспорты для тестирования
module.exports = {
  extractVersionFromMethodName,
  processApiFile: processLegacyApiFile, // для обратной совместимости с тестами
  processFetchApiFile,
  processLegacyApiFile,
  processAxiosApiFile: processLegacyApiFile, // алиас для обратной совместимости
  processMarkdownFile
}; 