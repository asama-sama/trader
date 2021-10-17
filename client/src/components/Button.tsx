import IButton from '../types/IButton'

const Button = ({ text, onClick, color, selected, disabled } : IButton ) => 
{
  color = selected ? 'bg-yellow-600' : color
  color = disabled ? 'bg-gray-500' : color

  const cursor = disabled ? '' : 'cursor-pointer'

  return (<div 
    onClick={onClick} 
    className={`${color} w-44 h-12 text-center flex flex-col 
      justify-center rounded-md ${cursor}`}>
      <span className='text-gray-700 text-lg select-none'>
        {text}
      </span>
    </div>)
}

export default Button
