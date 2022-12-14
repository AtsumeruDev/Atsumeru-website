# Метаданные

В `Atsumeru` основной упор делается в наполнение вашего контента метаданными. Максимально, насколько это возможно. Это упрощает поиск контента, позволяет более быстро и легко изучить описание/жанры/теги/и тд и улучшает внешний вид библиотеки

## Поддерживаемые форматы метаданных

### ComicInfo.xml

Формат метаданных придуманный для приложения `ComicRack`, который больше не разрабатывается. Формат сильно устарел и очень ограничен в оригинальном исполнении, но все еще используется некоторыми приложениями из-за отсутствия альтернативы

`Atsumeru` во время импорта извлекает `ComicInfo.xml` из архивов и читает следующие поля:  
`Title` `Circles` `Summary` `Volume` `Year` `Month` `Writer` `Publisher` `Genre` `Characters` `PageCount` 

:::c-warning
Ввиду того, что формат сильно устарел и расширять его практически бессмысленно, был разработан альтернативный формат метаданных [book_info.json](./metadata.md#book-info-json) на который опираются `Atsumeru` и [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/apple.png">
:::

### book_info.json
[<Badge vertical="middle" text="Схема формата"/>](./book-info-scheme.md)

Специально разработанный формат метаданных для всей экосистемы `Atsumeru`. Формат поддерживает большое количество полей метаданных на любой вкус и позволяет наполнять метаданными не только комиксы ([ComicInfo.xml](./metadata.md#comicinfo-xml) был разработан для комиксов), но и `Мангу`, `Хентай` и `Ранобэ`

[Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/apple.png"> содержит [редактор метаданных](./metadata.md#редактор-метаданных), который работает именно с этим форматом метаданных

:::c-tip
`Atsumeru` также может хранить и извлекать статичные уникальные хеши `Архива` и `Серии` внутри объекта `atsumeru` в метаданных, которые позволяют переимпортировать `Архивы` и `Серии` без привязки к пути файла и без потери истории чтения
:::

#### chapter_info.json
[<Badge vertical="middle" text="Схема формата"/>](./book-info-scheme.md#схема-chapter-info-json)

Вспомогательный формат метаданных для глав в архивах (одна директория - одна глава). Поддерживает почти аналогичный набор полей метаданных и позволяет организовать в архивах сложную систему из глав у каждой из которых будут свои уникальные метаданные (актуально, например, для журналов `Манги` или `Хентая`, в которых часто собраны главы разных произведений)

## Редактор метаданных

[Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/apple.png"> содержит мощный редактор метаданных в [book_info.json](./metadata.md#book-info-json) формате

Поддерживается несколько удобных и прозрачных режимов редактирования:
- редактирование импортированных `Серий` и `Архивов` на сервере
- редактирование локальных `Архивов` (файлов)
- непосредственное редактирование файла [book_info.json](./metadata.md#book-info-json)

### Открытие редактора

Открыть редактор можно несколькими путями:
- из контекстного меню `Серии`
- из контекстного меню `Архива` внутри `Серии`
- нажав <MaterialIcon icon="edit"/> на верхней панели приложения:
  - нажав на выбор файла
  - перетащив файл в окно

<img style="display: block; margin: 0 auto" src="/assets/media/ru/guides/metadata-editor.png">
<p style="text-align: center; font-size:75%">Интерфейс редактора метаданных</p>

### Редактирование

Редактор интуитивно понятен и предоставляет доступ ко всем возможным полям метаданных формата [book_info.json](./metadata.md#book-info-json), но необходимы небольшие уточнения:
- поле `Альтернативное название` предполагает запись туда названия на вашем языке
- поле `Рейтинг` стоит заполнять, если вы привязываете ваш контент ко внешним *сервисам-базам данных* по типу [Shikimori](https://shikimori.one/), [MyAnimeList](https://myanimelist.net/), [ComicVine](https://comicvine.gamespot.com/) и других. Данное поле означает позицию контента в рейтинге таких сервисов
- поле `Оценка` подразумевает среднестатистическую оценку контента по десятибальной шкале с плавающей точкой
- поле `Том` недоступно во время редактирования `Серии`. `Atsumeru` использует данное значение из метаданных `Архива` или попытается самостоятельно его определить из названия файла

У всех полей доступно расширенное контекстное меню с дополнительными функциями:

<img style="display: block; margin: 0 auto" src="/assets/media/ru/guides/metadata-editor-context-menu.png">
<p style="text-align: center; font-size:75%">Расширенное контекстное меню</p>

#### Связанные сервисы

В нижней части окна есть раздел `Связанные сервисы`, где отображается список полей поддерживаемых `Atsumeru` внешних сервисов, которые можно *привязать* к контенту. Может быть полезным для быстрой привязки контента со стороны клиента к сервисам трекинга по типу [Shikimori](https://shikimori.one/), [MyAnimeList](https://myanimelist.net/) и другим

:::c-tip
Каждое поле обладает функциями автодополнения. Достаточно вставить в соответствующее поле ссылку/идентификатор контента и второе поле будет заполнено автоматически
:::

:::c-warning
Файл метаданных [book_info.json](./metadata.md#book-info-json) поддерживает указание любых `Связанных сервисов`. Конкретный список сервисов для `Atsumeru` был отобран по усмотрению разработчика
:::

### Получение метаданных с внешних источников

[Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/apple.png"> также поддерживает функционал парсинга метаданных с поддерживаемых каталогов. Парсеры доступны для установки в **Репозитории**, который можно открыть нажав <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/earth.png"> на верхней панели приложения

Чтобы получить метаданные необходимо в [редакторе](./metadata.md#редактор-метаданных) нажать на `Получить метаданные`, вставить в поле поддерживаемую ссылку на контент и нажать <MaterialIcon icon="download"/> 

<img style="display: block; margin: 0 auto" src="/assets/media/ru/guides/metadata-editor-fetch.png">
<p style="text-align: center; font-size:75%">Интерфейс окна получения метаданных</p>

:::c-tip
Если получить метаданные по ссылке не получилось, можно вставить в поле ниже HTML-код страницы контента и повторить попытку
:::

### Сохранение

Изменив метаданных их нужно сохранить. Существует четыре режима записи при редактировании метаданных на сервере:
- в связанные `Архивы` (метаданные записываются во все `Архивы` `Серии`)
- во внешние файлы метаданных (в таком случае сохранение происходит во внешний файл [book_info.json](./metadata.md#book-info-json), который сохраняется по пути `<текущая директория>/.atsumeru/<название архива>/book_info.json`)
- только в базу данных (запись происходит только в базу данных не изменяя оригинальные файлы и не создавая отдельные файлы [book_info.json](./metadata.md#book-info-json))
- только `Серию` (изменяется только `Серия` и только в базе данных. Полезно, когда необходимо изменить только `Серию` не изменяя `Архивы`)

:::c-tip
Любой метод записи метаданных (кроме записи только `Серии`) автоматически определяет и записывает номера томов `Архивов`
:::

:::c-warning
Редактирование локальных `Архивов` (файлов) и [book_info.json](./metadata.md#book-info-json) всегда сохраняет изменения в файл
:::