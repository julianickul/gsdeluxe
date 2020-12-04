# Верстка - GSDeluxe основана на теме Adminto_v3.1

Доступно для просмотра на https://julianickul.github.io/gsdeluxe/

## Используемые технологии
* Gulp 
* SCSS
* SVG
* Bootstrap 4.1

## Рабочая среда
### Prerequisites
Необходима предустановка
- NodeJs
- Gulp, Gulp CLI

Для инициализации проекта в корневой директории запустить команду:
```npm install```

### Сборка
Сборка проекта обуществляется с помощью **Gulp**
В корне проекта запустить 
* ```gulp``` - Запускает проект в режиме разработки. При этом происходит первоначальная сборка проекта, запуск локального сервера, инициализация вотчеров
* ```gulp build``` - Сборка проекта для продакшена

## Файловая структура
```
GSDeluxe
├── dist
│   │   ├── assets
│   │   ├   ├── css
│   │   ├   ├── data
│   │   ├   ├── fonts
│   │   ├   ├── images
│   │   ├   ├── js
│   │   ├   ├── libs
│   │   ├── add_deposit.html
│   │   ├── add_place.html
│   │   ├── add_place_success.html
│   │   ├── change_password.html
│   │   ├── create_login.html
│   │   ├── events.html
│   │   ├── index.html
│   │   ├── jackpot_group.html
│   │   ├── jackpot_history.html
│   │   ├── jackpot_list.html
│   │   ├── launcher_options.html
│   │   ├── main.html
│   │   ├── main_news.html
│   │   ├── main_testovy_zal.html
│   │   ├── money_statistics.html
│   │   ├── move_deposit.html
│   │   ├── my_jackpots.html
│   │   ├── terminals_ban.html
├── src
│   ├── css
│   ├── data
│   ├── fonts
│   ├── html
│   │   ├── blocks
│   │   │   ├── breadcrumbs
│   │   │   ├── cards
│   │   │   ├── forms
│   │   │   ├── layout
│   │   │   ├── modals
│   │   │   ├── news
│   │   │   ├── tables
│   │   │   ├── tabs
│   │   │   ├── tree
│   ├── images
│   │   ├── attached-files
│   │   ├── big
│   │   ├── email
│   │   ├── gallery
│   │   ├── GSDeluxe
│   │   ├── small
│   │   ├── users
│   ├── js
│   │   ├── GSDeluxe
│   │   ├── pages
│   │   ├── vendor
│   ├── scss
│   │   ├── custom
│   │   ├── GSDeluxe
│   │   ├── vendor
├── gulpfile.js
├── package.json
├── README.md
```


* ```dist``` - Скомпилированные файлы
    * ```assets``` - шрифты, изображения, svg-спрайты
        * ```css``` - собранные CSS файлы. В основном подключаются bootstrap, icons, app
        * ```data``` - данные, которые используются для демонстрации работы ajax плагина jstree (В финальный код не включать)
        * ```fonts``` - шрифты иконок (Шрифты для текста прописаны в CSS и подключаются через CDN-строку)
        * ```images``` - картинки темы, по большей части в папке содержаться презентационные картинки, которые в проект включать не следует. Рекомендуется включить только изображения `sprite.svg`, `loading.gif`, `clear.png`, `jstree.png`, `multiple-arrow.png`
        * ```js```
            * ```pages``` - примеры инициализации определенных скриптов в теме. Эти файлы следует подключать по необходимости и проверять код, т.к. зачастую скриптыы прописаны под определенные id
            * ```app.js``` - файл копируется из папки `./src/js`. В файле происходит инициализация компонентов темы. Этот файл не менялся. Возможно для минификации подгружаемого контента, следует проверить необходимость подключения тех или иных скриптов.
            * ```vendor.js``` - это общая сборка следующих файлов `jquery.js`, `bootstrap.bundle.js`, `jquery.slimscroll.js`, `metisMenu.js`, `waves.js`, `jquery.waypoints.min.js`, `jquery.counterup.min.js` (Сборка `vendor.js` настраивается в Gulpfile)
        * ```libs``` - JS + CSS скопированный из `node_modules`. Файлы-исходники подключаются из этой папки как доп. плагины (Например, select2, jstree...)
* ```src``` - Исходный код:
    * ```css``` - В папке находится CSS для иконок. Эта папка является частью темы
    * ```data``` - данные, которые используются для демонстрации работы ajax плагина jstree (В финальный код не включать)
    * ```fonts``` - шрифты иконок (Шрифты для текста прописаны в CSS и подключаются через CDN-строку)
    * ```html``` - шаблоны страниц.
        * ```blocks``` - части шаблонов страниц, разбитые по блокам
            * ```breadcrumbs```
            * ```cards``` - Блоки с главной "Generate code", "Code to money", "General information", "Club statistics" и т д
            * ```forms```
            * ```layout``` - футер, хедер, спрайт
            * ```modals```
            * ```news```
            * ```tables```
            * ```tabs```
            * ```tree```
    * ```images``` - картинки темы, по большей части в папке содержаться презентационные картинки, которые в проект включать не следует. Рекомендуется включить только изображения `sprite.svg`, `loading.gif`, `clear.png`, `jstree.png`, `multiple-arrow.png`
        * ```attached-files``` - картинки темы для примера
        * ```big``` - картинки темы для примера
        * ```email``` - картинки темы для примера
        * ```gallery``` - картинки темы для примера
        * ```GSDeluxe``` - эти картинки исходники для SVG спрайта.
        * ```small```- картинки темы для примера
        * ```users``` - картинки темы для примера
    * ```js```
        * ```GSDeluxe```
        * ```pages```
        * ```vendor```
    * ```scss``` - файлы CSS разбитые тематически
        * ```custom```
        * ```GSDeluxe``` - файлы кастомизации темы
        * ```vendor```

* ```gulpfile.js```  — Файл сборки проекта
* ```package.json``` — Список зафисимостей, описание проекта, инструкции сборки


## Используемые сторонние скрипты

https://select2.org/ Для кастомных селектов:
* реализация иерархии опций
* мультивыбор в виде тегов на базе html тега `select`
- launcher_options.html
- move_place.html

https://www.jstree.com/ Для организации древовидной структуры 
в файлах 
- add_deposit.html
- move_deposit.html
- my_jackpots.html

http://jdewit.github.io/bootstrap-timepicker/ -  Компонент выбора времени
на страницах:
- events.html
- jackpot_history.html
- money_statistics.html

https://github.com/uxsolutions/bootstrap-datepicker - Компонент календаря
на страницах:
- events.html
- jackpot_history.html
- money_statistics.html


`gdx-table.js` - Скрипт для сворачивания таблиц. Применяется на страницах. Исходные файлы в папке `src\js\GSDeluxe\`
- add_place_success.html
- change_password.html
- jackpot_group.html
- jackpot_history.html
- jackpot_list.html
- main.html
- main_news.html
- main_testovy_zal.html
- money_statistics.html
- my_jackpots.html
- terminals_ban.html

http://ludo.cubicphuse.nl/jquery-treetable/ - Скрипт для создания иерархической структуры таблицы
Если для таблицы необходимо создать иерархию, то сначала применяется скрипт 
`
<script>
$("#your_table_id").treetable();
</script>
`
Затем инициализируется скрипт `gdx-table`, который навешивает обработчик для сворачивания/разворачивания ячеек таблицы на малых разрешениях.
**В файл `jquery-treetable.js` были внесены изменения, чтобы соблюсти отступы для toggle-элементов, которые разварачивают/сворачивают ячейки таблицы на малых разрешениях**
**Использовать файл, который лежит в `src\js\GSDeluxe\jquery.treetable.js` Этот файл копируется средствами gulp в `dist\assets\js\pages\jquery.treetable.js`**







# Ниже приводится стандартный README темы


# Adminto - Admin and Dashboard Template

Thank you for purchasing Adminto :). The following guideline will help you to get started with adminto and its documentation.

#### Docs

The `docs` directory contains all the static resources required for docs and examples. To view, just open in your favourite browser!
```
$ open docs/index.html
```

Once you open the documentation. Just click on `Setup` link from left, this would open up page (`docs/setup.html`) containing instructions to get started with setup. Optionally you can review below described quick setup guide.


#### Gulp

We've included Gulp file (gulpfile.js) to help you get started with theme and build automation. You'll need to install Node.js and Gulp before using our included gulpfile.js. Note that the detailed instructions are available in `docs/setup.html` too.

To install Node visit [https://nodejs.org/download](https://nodejs.org/download/).

To install gulp, run the following command:
```
$ npm install gulp -g
```

When you're done, install the rest of the theme's dependencies:
```
$ npm install
```

From here on out, simply run `gulp` from your terminal and you're good to go!

+  `gulp` - recompiles and minifies theme assets into `dist` directory and starts local server serving the theme.

+  `gulp build` - recompiles and minifies theme assets into `dist` folder.

  
#### Support

If you experience any problems with the above instruction, or if you think you've found a bug with theme - please don't hesitate to reach out to support@coderthemes.com.