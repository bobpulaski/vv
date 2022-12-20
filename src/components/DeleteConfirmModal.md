# Модальное окно для подтверждения удаления сущности

## tempalate

`id="delete-confirm-modal"` - уникальный идентификатор для получения из DOM.

## name

`export default {
  name: "DeleteConfirmModal"}`

## props

`props: {
    modalTitle: String,
    entityTitle: String,
  },`

- `modalTitle` - заголовок окна.
- `entityTitle` - название удаляемой сущности.

## methods

- `hideDeleteConfirmModal()` - скрывает модальное окно по кнопке
- `emitOnDeleteConfirmModal()` - передаёт событие подтверждения удаления в родительский компонент
