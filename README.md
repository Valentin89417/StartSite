# Сборка проекта на Gulp 4
Быстро настроить сборку вашего проекта на Gulp и писать код на:
- HTML
- CSS, SCSS, LESS
- Java Script, jQuery v3.5.1
# Подключённые Библиотеки
- [Bootstrap v5.2.2](https://bootstrap-5.ru/docs/5.2/getting-started/introduction/)
- [Иконки Bootstrap](https://icons.bootstrap-5.ru/)
- [Fancybox](https://fancyapps.com/docs/ui/fancybox/)
- [Swiper](https://swiperjs.com/)

## Функционал сборки
- компиляция препроцессоров LESS
- компиляция препроцессоров SASS
- минификация CSS
- автоматическое добавление префиксов CSS
- преобразования кода ECMAScript 2015 + в обратно совместимую версию JavaScript с помощью Babel
- минификация JavaScript
- объединение нескольких файлов JavaScript в один
- сжатие изображений
- отслеживание новых изображений, которые еще не были сжаты
- отслеживание изменений в файлах и автоматический запуск повторной обработки
- генерация sourcemaps
- отображение размеров файлов в терминале

## Input
|| HTML | Styles | Scripts | Images | Fonts | Source |
|:---|:------:|:-----:|:----:|:-----:|:-----:|:-----:|
| **Каталог** | / | src/css/ | src/js/ | src/images/ | src/fonts/ | src/source/ |
| **Расширение** | .html | .css, .less, .sass, .scss | .js | .jpg, .png, .gif, .svg | .ttf, .woff, .woff2 | .* |

## Output
|| HTML | CSS | JavaScript | Images | Fonts | Source |
|:---|:------:|:-----:|:----:|:-----:|:-----:|:-----:|
| **Путь** | / | assets/css/style.min.css | assets/js/ | assets/images/ | assets/fonts/ | assets/source/ |

## Зупуск:  
1. Скачать все файлы проекта  
2. В терминале перейти в каталог проекта  
3. Выполнить команду: npm i (должен быть установлен node.js)  
4. Выполнить команду: gulp (запуск таска default)  
5. Писать свой код и наслаждаться автоматической сборкой проекта. 

## Используемые NPM пакеты
[gulp](https://www.npmjs.com/package/gulp) Сборщик Gulp  
[gulp-less](https://www.npmjs.com/package/gulp-less) Компиляция Less файлов  
[sass](https://www.npmjs.com/package/sass) Компилятор Sass  
[gulp-sass](https://www.npmjs.com/package/gulp-sass) Компиляция Sass и Scss файлов  
[gulp-uglify](https://www.npmjs.com/package/gulp-uglify) Сжатие и оптимизация Java Script кода  
[gulp-babel](https://www.npmjs.com/package/gulp-babel) Преобразует Java Script в старый стандарт  
[@babel/core](https://www.npmjs.com/package/@babel/core) Ядро Babel  
[@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) Пресет для компиляции Babel  
[gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) Минификация и оптимизация CSS файлов   
[del](https://www.npmjs.com/package/del) Удаление каталогов и файлов  
[gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) Карта строк кода для инструментов  разработчика   
[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) Автоматическое добавление префиксов в CSS   
[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) Сжатие изображений   
[gulp-concat](https://www.npmjs.com/package/gulp-concat) Объединение нескольких файлов в один  
[gulp-newer](https://www.npmjs.com/package/gulp-newer) Отслеживание только новых файлов  
[gulp-rename](https://www.npmjs.com/package/gulp-rename) Переименовывает файлы    
[gulp-size](https://www.npmjs.com/package/gulp-size) Отображение информации о размерах файлов в терминале  


### Контакты
[![Telegram](https://img.shields.io/badge/-Telegram-333?style=for-the-badge&logo=telegram&logoColor=27A0D9)](https://t.me/kv89417)
[![VK](https://img.shields.io/badge/-VK-333?style=for-the-badge&logo=Vk&logoColor=27A0D9)](https://vk.com/valentin_tin_tin)
[![GitHub](https://img.shields.io/badge/-GitHub-333?style=for-the-badge&logo=GitHub&logoColor=fff)](https://github.com/Valentin89417)
