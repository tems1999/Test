SELECT title.title_name_th, users.first_name, users.last_name, users.age
, users.email, users.username, 
programming_language.Programming_name_en
FROM users
JOIN title ON users.titleid = title.titleid
JOIN programming_language ON users.programmingid = programming_language.programmingid
WHERE users.age < 25;