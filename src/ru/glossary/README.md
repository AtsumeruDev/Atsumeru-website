# Глоссарий

**`Архив`** - минимальная цельная единица контента. Представляет собой набор данных импортированного файла (путь к файлу, [Метаданные](/ru/guides/metadata.md), уникальный хеш и тд), которым оперирует сервер

**`Серия` или `контент`** - сборная структура из любого количества `Архивов`. Представляет собой общие данные из всех `Архивов` в данной `Серии`. Используется для составления списков импортированного контента и содержит в себе метаданные данной серии (названия на разных языках, статусы, авторы, описание и тд). `Серия` всегда создается автоматически во время импортирования на основе настроек оного или определенных *стандартных* правил формирования. `Серию` можно только редактировать или удалить

**`Глава`** - атомарная единица `Архива`. Список глав формируется автоматически во время импортирования на основе папок в корне `Архива`. Одна папка - одна `Глава`
:::c-danger
Из изображений в корне архива также создается `Глава` с названием самого `Архива`. Старайтесь избегать размещения изображений в корне, если такое поведение вам не нравится
:::

**`Хеш архива`** - уникальный *идентификатор*, которым оперирует сервер и клиенты для идентификации импортированного `Архива`. По умолчанию создается из пути к `Архиву`, но может быть статичным, записанным в `book_info.json` [Метаданные](/ru/guides/metadata.md), что позволяет присвоить один и тот же идентификатор даже после перемещения `Архива` в файловой системе и не терять историю чтения [Пользователей](/ru/guides/users.md). У данного хеша всегда есть префикс `atsumeru`

**`Хеш серии`** - то же самое, что и `Хеш архива`, но для `Серии`. Создается из пути к директории с `Архивами`. Также может быть статичным из [Метаданных](/ru/guides/metadata.md). У данного хеша всегда есть префикс `atsumeru-serie`