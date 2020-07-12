## About this project

Сделать страничку на которой будет 3 выпадающих списка с сохранением выбранных значений в url

1. Реализуйте 3 выпадающих списка, значения которых загружаются из API и не кэшируются

- Услуги - api/test/v1/search/terms
- Бренды - api/test/v1/search/brands_terms
- Стили - api/test/v1/search/styles

При загрузке страницы все 3 выпадающих списка отображаются и доступны пользователю для выбора.

2. При выборе значения из списка обновляйте URL страницы сохраняя выбранные значения
   /s-{service_slug}/ - для услуг
   /b-{brand_slug}/ - для брендов
   /st-{style_slug}/ - для стилей

Примеры URL когда выбраны 1, 2 или все 3 значения в выпадающих списках
http://localhost:3000/b-daihatsu
http://localhost:3000/s-zamina-zcheplennia/st-barokko
http://localhost:3000/s-zamina-zcheplennia/b-daihatsu/st-barokko

3. При обновлении страницы отображение выбранных значений выпадающих списков не должны пропадать

- Получение значений для выпадающих списков - api/test/v1/search/parse_link

Документация swagger - https://beta.autobooking.com/api-docs/index.html?urls.primaryName=Test%20API%20V1%20Docs
