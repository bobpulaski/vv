[Назад](index.html)

# Модальное окно подтверждения удаления сущности

## template

`id="delete-confirm-modal"` - уникальный идентификатор для получения из DOM.

## name

`export default {
  name: "DeleteConfirmModal"}`

## props

`props: {
    title: String,
    entityTitle: String,
  },`

- `title` - заголовок окна.
- `entityTitle` - название удаляемой сущности.

## methods

- `onHide()` - скрывает модальное окно по кнопке
- `onDelete()` - генерирует событие удаления для родительского компонента `this.$emit("emitOnDeleteConfirmModal")`.

[Назад](index.html)
