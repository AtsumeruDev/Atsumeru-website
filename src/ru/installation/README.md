# Подготовка

:::c-tip
Гайд актуален для сервера версии `1.0.0+`
:::

Установка `Atsumeru` очень простая и состоит из пары шагов

### Основные способы установки

- Использование `Java` и [Jar](./jar.md) файла сервера
- Использование [Docker](./docker.md) контейнера с `Docker` или `Docker Compose`

### Дополнительные необходимые приложения

Так как сервер не предоставляет WebUI для управления сервером, дополнительно необходимо скачать [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/apple.png"> через который и будет происходить управление

Приложение не требует установки, но требует наличие установленного [Microsoft Visual C++ 2010 (x64)](https://www.microsoft.com/ru-ru/download/details.aspx?id=26999) и [Microsoft Visual C++ 2015 (x64)](https://www.microsoft.com/ru-ru/download/details.aspx?id=53840) для Windows систем

:::c-danger
Приложение работает только под Windows x64, Linux x64 и Mac OS x64 (работа на M1/M2 не тестировалась)
:::