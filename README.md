gulp# Сборка проекта на Gulp 4
Быстро настроить сборку вашего проекта на Gulp и писать код на:
- HTML
- CSS, SCSS, LESS
- Java Script, jQuery v3.5.1

# Подключённые Библиотеки
- [Bootstrap v5.2.2](https://bootstrap-5.ru/docs/5.2/getting-started/introduction/)
- [Font Awesome 6.2](https://fontawesome.com/search?o=r&m=free&f=brands)
- [Fancybox v4.0.31](https://fancyapps.com/fancybox/)
- [Swiper v4.5.0](https://swiperjs.com/)
- [AOS v2.3.1](https://michalsnik.github.io/aos/)
- [Lazysizes v5.3.1](https://afarkas.github.io/lazysizes/index.html)





## Зупуск:  
1. Скачать проект - ```git clone https://github.com/Valentin89417/StartSite.git```  (должен быть установлен [git](https://git-scm.com/downloads))
2. В терминале перейти в каталог проекта - ```cd StartSite```
3. Выполнить команду: ```npm i``` (должен быть установлен [node.js](https://nodejs.org/ru/))  
4. Выполнить команду: ```gulp``` (должен быть установлен [gulp](https://gulpjs.com/docs/en/getting-started/quick-start/))  
5. Писать свой код и наслаждаться автоматической сборкой проекта.

## Вход
|| HTML | Styles | Scripts | Images | Fonts | Source |
|:---|:------:|:-----:|:----:|:-----:|:-----:|:-----:|
| **Каталог** | src/html/ | src/css/ | src/js/ | src/images/ | src/fonts/ | src/source/ |
| **Расширение** | .html | .css, .less, .sass, .scss | .js | .jpg, .png, .gif, .svg | .ttf, .woff, .woff2 | .* |

## Выход
|| HTML | CSS | JavaScript | Images | Fonts | Source |
|:---|:------:|:-----:|:----:|:-----:|:-----:|:-----:|
| **Путь** | / | assets/css/style.min.css | assets/js/ | assets/images/ | assets/fonts/ | assets/source/ |


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
- импортирует HTML в HTML


## Шпоргалка по вёрстке

#### Пример отложенной загрузки:
Требуется добавить для img или iframe:
```class="lazyload" loading="lazy" ```
и заменить ```src="file"``` на ```data-src="file"```

```html
<!-- Для img -->
<img data-src="/assets/images/top_banner/Trek.png"
     class="lazyload"
     loading="lazy"
     width="1920" height="400" />
<!-- Для iframe -->
<iframe data-src="https://yandex.ru/map-widget/v1/?um=constructor%3A3fb3fef5c03c80a339db890ce6f4ad78991d710e0774157ed56f30f12d4e2751&amp;source=constructor" 
        class="lazyload"
        loading="lazy"
        width="100%" height="400"
        frameborder="0">
</iframe>
```


#### Пример вывода иконок Font Awesome в css:
```css
h1:before {
  content: "\f005"; // добовляем Unicode иконки через "\"
  font-family: var(--fontawesome6-font-family);
  font-weight: 400; // или 900 изменит начертание
}
```


#### Пример загрузки svg:
```html
<svg width="0" height="0">
    <!-- создаём SVG c уникальным id -->
    <symbol viewBox="0 0 32 33" fill="none" id="close">
        <path d="M25 7.5L7 25.5" stroke="#1D1D1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M25 25.5L7 7.5" stroke="#1D1D1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>
</svg>

<!-- выводим SVG по id -->
<svg width="32" height="33">
    <use xlink:href="#close"></use>
</svg>
```


#### Пример импорта HTML:
В /src/html/index.html пишем
```html
@@include('include/header.html')
```
так мы импортируем /src/html/include/header.html в свой index.html при генерации он появится в корне проекта и все папки кроме /src/html/include/ .


#### Изменение стандартной ширины container в  Bootstrap 5:
src/source/bootstrap_v5/scss/_variables.scss - 450 стр.

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
[gulp-file-include](https://www.npmjs.com/package/gulp-file-include) Импорт html в html  


### Контакты
[![Telegram](https://img.shields.io/badge/-Telegram-333?style=for-the-badge&logo=telegram&logoColor=27A0D9)](https://t.me/kv89417)
[![VK](https://img.shields.io/badge/-VK-333?style=for-the-badge&logo=Vk&logoColor=27A0D9)](https://vk.com/valentin_tin_tin)
[![GitHub](https://img.shields.io/badge/-GitHub-333?style=for-the-badge&logo=GitHub&logoColor=fff)](https://github.com/Valentin89417)
