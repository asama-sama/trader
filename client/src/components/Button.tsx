import { MouseEventHandler } from 'react'

const Button = ({ text, onClick } : {text: string, onClick: MouseEventHandler}) => {
  return (<div onClick={onClick}>{text}</div>)
}

export default Button
