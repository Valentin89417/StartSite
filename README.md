# StartSite Привет друг))
Сборка для быстрого старта самописного Сайта.
Включает Настроеный Gulp для работы с Scss

Клонируем репозиторий
git clone https://github.com/Valentin89417/StartSite.git

при первом запуске: 
1)устоновить nodejs: https://nodejs.org/en/
npm install --global gulp-cli


Для установки Gulp в проект дожны быть файлы:
1) package.json
2) gulpfile.js

проверяем обовления плагина: ncu
для загрузки необходимых файлов:  npm i

Настройка Gulp:
Вся настройка происходит в файле gulpfile.js после установки плагинов.
Плагины искать здесь:  https://gulpjs.com/plugins/
локальной установки плагина: npm install --save-dev (Имя_плагина)


Установка старонних Библиотек:
https://bower.io/ также требует установленого Git
в файле .bowerrc - указываем путь куда будут сохранятся библиотеки
Команда для загрузки: bower i имя_библиотеки


Bootstrap 4: https://bootstrap-4.ru/docs/4.0/getting-started/introduction/
Иконки смотреть: https://fontawesome.ru/all-icons/


------------------------------------------------------------------------------
//Работа с GitHub

git status
git add .
git commit -m 'Cribs'
git push


//Отслеживаем состояние репозитория
git status

//Добавим файлы в репозиторий
git add index.html (добавит html файл)
git add .          (добавит все файлы)

//Создаём коммит
git commit –am "Cribs"
–a означает: добавить все изменения в индекс до передачи.
-m : сообщение.

//Отправить комит в удалённый репозиторий
git push 

//посмотреть ветки 
git branch

//Создание ветки
git branch имя_ветки

//Переключение на нужную ветку
git checkout имя_ветки

//Базовая настройка Git
git config --global user.name "-Name-"
git config --global user.email "-Email-"

//проверка настроек 
git config --list
//или 
git config user.name
git config user.email