-- Количество пользователей с платными тарифыми
SELECT COUNT(DISTINCT project_id)
FROM plan_restream2user, users
WHERE users.referer_id=34479
  AND users.user_id=plan_restream2user.project_id
  AND plan_restream2user.plan_restream_id<>1
  AND date_end>CURRENT_TIMESTAMP
  AND date_start<CURRENT_TIMESTAMP