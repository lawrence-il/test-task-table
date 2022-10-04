# Test-task-table

## Получить исходный код приложения
`git clone https://github.com/lawrence-il/test-task-table.git`

### Шаги для запуска сервера
---
#### Перейти в папку с приложением
`cd test-task-table`
#### Перейти в папку server
`cd server`
#### Скачать пакеты и их зависимости
`npm i`
##### При ошибки npm i
`npm i --legacy-peer-deps`
#### Для создания БД
`npx sequelize-cli db:create`
#### Для создания таблиц
`npx sequelize-cli db:migrate`
#### Для внесения данных в таблицу
`npx sequelize-cli db:seed:all`
#### Запустить приложение
`npm start`


### Шаги для запуска web-приложения
---
#### Перейти в папку с приложением
`cd test-task-table`
#### Перейти в папку client
`cd client`
#### Скачать пакеты и их зависимости
`npm i`
##### При ошибки npm i
`npm i --legacy-peer-deps`
#### Запустить приложение
`npm start`
