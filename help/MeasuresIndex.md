[Назад](index.html)

# Единицы измерения (MeasuresIndex)

## template

`id="measure-index"` - идентификатор.

## components

**`<DeleteConfirmModal>`** - модальное окно подтверждения удаления сущности.

- `title="Удаление единицы измерения"` - передача заголовка.
- `:entity-title` - передача названия удаляемой сущности.
- `@emitOnDeleteConfirmModal="deleteMeasuresById(measureId)"` - слушатель события нажатия кнопки "Удалить".

**`<MeasureCreateModal>`** - модальное окно добавления единицы измерения.

- `@emitOnMeasureCreateModal` = "" = слушатель события нажатия кнопки "Создать".

## methods
- `getMeasures()` - получение всех записей;
- `createMeasure(measureData)` - создание одной записи;
- `deleteMeasure()` - удаление записи;
- `showMeasureCreateModal()` - отображение окна добавление записи;
- `showDeleteConfirmModal(id, name)`
- ``


[Назад](index.html)
