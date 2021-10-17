import IButton from '../types/IButton'

const Button = ({ text, onClick, color, selected, disabled } : IButton ) => 
{
  color = `bg-${color}-500`
  color = selected ? 'bg-yellow-500' : color
  color = disabled ? 'bg-gray-500' : color

  const cursor = disabled ? '' : 'cursor-pointer'

  return (<button 
    onClick={onClick} 
    disabled={disabled}
    className={`${color} w-44 h-12 text-center flex flex-col 
      justify-center rounded-md ${cursor}`}>
      <span className='text-gray-700 text-lg select-none'>
        {text}
      </span>
    </button>)
}

export default Button
