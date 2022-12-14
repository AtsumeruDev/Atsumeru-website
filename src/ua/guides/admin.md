# Адміністрування

У цьому розділі розташовано опис функцій, які доступні тільки Адміністраторам

## Перевірити, чи скачано контент за посиланнями

Дає змогу перевірити, чи скачаний та імпортований контент, у якого в [Метаданих](./metadata.md) вказані надані посилання

<img style="display: block; margin: 0 auto" src="/assets/media/ru/guides/admin-check-links.png">
<p style="text-align: center; font-size:75%">Інтерфейс перевірки посилань</p>

## Очистити кеш сервера <Badge type="error" vertical="middle" text="Небезпечно" />

Змушує сервер повністю очистити кеш обкладинок і запускає [сервіс кешування](./import.md#кешування-обкладинок-генерація-прев-ю)

:::c-warning
Тривалість цієї процедури прямо пропорційна кількості імпортованих файлів
:::

## Створити унікальні хеші архівів <Badge type="error" vertical="middle" text="Небезпечно" />

Для кожного `Архіву` і `Серії` створює унікальні статичні хеші та записує їх у [book_info.json](./metadata.md#book-info-json) метадані

:::c-warning
Тривалість цієї процедури прямо пропорційна кількості імпортованих файлів
:::

## Записати всі метадані в архіви <Badge type="error" vertical="middle" text="Небезпечно" />

Якщо для прискорення редагування метаданих запис здійснювався тільки в базу даних, можливо запустити процес запису всіх метаданих із бази в [book_info.json](./metadata.md#book-info-json) файли

:::c-tip
Просунуті користувачі, знайомі з [SQLite](https://www.sqlite.org/index.html)базами даних, можуть масово змінювати дані `Архівів` безпосередньо в базі та використовувати цю функцію для запису змін у файли
:::

:::c-warning
Тривалість цієї процедури прямо пропорційна кількості імпортованих файлів
:::