[Назад](index.html)

# Модальное окно подтверждения удаления сущности

## template

`id="delete-confirm-modal"`

## name

`"DeleteConfirmModal"`

## imports

`import { onEscapePress } from "../utils/keysevents";` - обработчик нажатия клавиши "Escape".

## props

`props: {
    title: String,
    entityTitle: String,
  },`

- `title` - заголовок окна.
- `entityTitle` - название удаляемой сущности.

## methods

- `toHide()` - скрывает модальное окно.
- `toDelete()` - генерирует событие удаления для родительского компонента `this.$emit("emitOnDeleteConfirmModal")`.
- `onEscapePress()` - обработчик события закрытия окна по нажатию клавиши "Escape".

[Назад](index.html)
