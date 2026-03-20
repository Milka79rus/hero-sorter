# Hero Sorter (Matchers)
[![Check Code](https://github.com/Milka79rus/hero-sorter/actions/workflows/run.yml/badge.svg)](https://github.com/Milka79rus/hero-sorter/actions/workflows/run.yml)

Проект реализует функцию сортировки персонажей по уровню их здоровья (от большего к меньшему).
## Особенности реализации
* **Чистые функции**: Оригинальный массив не мутирует благодаря использованию оператора spread (`[...]`).
* **Deep Equality**: Тесты используют матчер `.toEqual()`, так как `.toBe()` проверяет идентичность ссылок, а не содержимое объектов.
* **100% Coverage**: Весь код покрыт unit-тестами.

## Технологический стек
* JavaScript (ES6+)
* Jest (Testing)
* ESLint (Linting)
* GitHub Actions (CI)

## Запуск проекта
1. Установка зависимостей:
   ```bash
   npm install
   ```
2. Запуск тестов и отчета по покрытию:
   ```bash
   npm test
   ```
3. Проверка стиля кода (ESLint):
   ```bash
   npm run lint
   ```




