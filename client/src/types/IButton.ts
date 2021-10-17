import { MouseEventHandler } from 'react'

interface IButton {
  text: string,
  onClick: MouseEventHandler,
  color: string,
  selected?: boolean,
  disabled?: boolean
}

export default IButton
