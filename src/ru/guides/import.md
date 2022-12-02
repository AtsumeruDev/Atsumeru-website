# Импорт

После запуска сервера, его нужно наполнить своим контентом. Процесс очень простой и потребует минимальное участие в нем

## Управление директориями импорта

Окно управление директориями можно открыть нажав <MaterialIcon icon="file_open"/> на панели [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> и выбрав `Управление директориями`. В данном окне можно просмотреть список добавленных директорий, [удалять добавленные](./import.md#удаление-директории) и [добавлять новые](./import.md#добавление-новои-директории). Также, доступен запуск выборочного импортирования для отдельных директорий с подсказками о том, какой именно режим импортирования будет запущен

:::c-tip
Для удобства, дополнительно под каждой директорией отображается количество контента, которое из нее импортировано
:::

<img style="display: block; margin: 0 auto" src="/assets/media/ru/guides/import-dir-list.png">
<p style="text-align: center; font-size:75%">Интерфейс управления директориями</p>

## Добавление новой директории

Чтобы добавить новую директорию, необходимо в окне `Управление директориями` нажать на `Добавить директорию`

<img style="display: block; margin: 0 auto" src="/assets/media/ru/guides/import-dir-add.png">
<p style="text-align: center; font-size:75%">Интерфейс добавления директории</p>

В поле `Путь к директории` необходимо указать путь к желаемой директории из которой сервер попытается импортировать контент

:::c-tip
Нажав на <MaterialIcon icon="folder"/> можно открыть удобное окно выбора директории
:::

### Настройки импорта

Перед добавлением директории можно настроить некоторые параметры импорта:

:::c-danger
Настройки [Импортировать как Синглы](./import.md#импортировать-как-синглы) и [Импортировать как Синглы только файлы из корневой директории](./import.md#импортировать-как-синглы-только-фаилы-из-корневои-директории) можно не использовать, если в [Метаданных](./metadata.md) ваших файлов уже указан статус `Сингл`
:::

#### Импортировать как Синглы

Активация данного параметра заставит сервер импортировать каждый файл как `Сингл`, создавая для них отдельную `Серию` игнорирую любые другие условия импорта (не собирая автоматически `Серию` из поддиректорий и игнорируя статус из [Метаданных](./metadata.md)). Данный параметр может быть полезным, если ваш контент как-то каталогизирован (например, `Ваншоты` разных авторов рассортированы по директориям), но вы не хотите, чтобы сервер учитывал этот момент и не создавал некорректные `Серии`

#### Импортировать как Синглы только файлы из корневой директории

Активация данного параметра заставит сервер импортировать каждый файл в корне указанной директории как `Сингл` создавая для них отдельную `Серию`. Данный параметр может быть полезным, если ваш контент состоит как из `Серий`, так и из `Синглов/Ваншотов` и вы хотите импортировать их не создавая некорректные `Серии`

## Процесс импортирования

Нажав <MaterialIcon icon="save"/> `Сохранить` в диалоге добавления директории, запустится процесс импортирования на сервере. Данный процесс достаточно быстрый (~20 архивов/сек в однопоточном режиме и до 40 архивов/сек в многопоточном)

Во время импорта сервер читает [Метаданные](./metadata.md) из архивов, ищет и подготовливает обложки, формирует списки глав и автоматически создает `Серии` из файлов в поддиректориях

Сервер **не блокируется**, пока выполняется импортирование, поэтому им можно пользоваться как обычно

:::c-tip
Если у файла есть записанные [Метаданные](./metadata.md) и в них указан статус `Сингл`, сервер автоматически импортирует данных файл как `Сингл`, даже если он размещен в поддиректории с другими файлами
:::

## Кеширование обложек (генерация превью)

После окончания процесса импортирования автоматически запустится сервис кеширования обложек (генерации превью) для всех импортированных файлов, для которых обложка отсутствует. Данная операция выполняется существенно дольше, так как из каждого архива необходимо извлечь обложку, декодировать ее, уменьшить в размерах и сохранить на диск. Сервер в этот момент также **не блокируется**

### Выбор обложки `Архива`

Выбор обложки из архива происходит по некоторым критериям (с приоритетом от верхнего к нижнему):
- изображение имеет название `00000.<расширение>`
- изображение содержит в названии слово `cover`
- изображение первое в списке с поддерживаемым расширением: `jpg`, `jpeg`, `png`, `bmp`, `webp`

### Выбор обложки `Серии`

По умолчанию, обложкой `Серии` становится обложка первого `Архива`

Также можно предоставить альтернативную обложку с названием `cover.<расширение>`, где `<расширение>` можеть быть одним из: `jpg`, `jpeg`, `png`, `bmp`, `webp`. Обложку необходимо расположить в директории с остальными файлами, которые будут собраны в `Серию`

:::c-tip
Если опция [Разрешить загрузку списков с томами](/ru/installation/server-settings.md#allow-loading-list-with-volumes-true-false) включена, то сервер будет заменять обложку `Серии` на обложку первого непрочитанного `Архива`

<img style="display: block; margin: 0 auto" src="/assets/media/ru/guides/import-cover-change.png">
<p style="text-align: center; font-size:75%">Автоматическая смена обложки</p>
:::

### Выбор обложки остальных файлов

Для `PDF` и `Djvu` в качестве обложки выступает первая страница книги  
Для `ePub` в качестве обложки выступает обложка из `OPF` метаданных книги или первое изображение в архиве  
Для `FB2` в качестве обложки выступает обложка из метаданных  


## Удаление директории

Для удаления директории необходимо нажать <MaterialIcon icon="delete"/> возле директории в окне управления. Во время удаления весь связанный контент будет удален из библиотеки. История чтения остается и восстановится автоматически после повторного импортирования