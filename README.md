# Primary market

## Project setup

Для корректной работы приложения необходимо:

1. Скачать архив с приложением;

2. Извлечь архив в директорию на ПК
3. В терминале перейти в директорию с файлом package.json
4. В терминале выполнить команду:

```
npm install
```

5. Для корректной загрузки данных необходимо развернуть локальный сервер. Рекумендую использовать json-server (https://github.com/typicode/json-server).
    Для установки json-serer в терминале выполнить команду:

    ```
    npm install -g json-server
    ```

6. Далее для подключения локального сервера в терминале выполнить команду:

    ```
    json-server --watch db.json
    ```

7. Для запуска приложения в терминале выполнить команду:

    ```
    npm run serve
    ```

8. Для просмотра приложения в браузере следует перейти по предложенному локальному URL (по умолчанию http://localhost:8080/)
