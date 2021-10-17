import { fireEvent, render, screen } from '@testing-library/react';
import IButton from '../types/IButton';
import Button from './Button';

describe('button', () => {
  let btn: IButton

  beforeEach(() => {
    btn = {
      text: 'Testbtn',
      onClick: () => {},
      color: 'blue',
    }
  })
  test('renders a button', () => {
    render(<Button {...btn} />)
  
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('Testbtn')
    expect(button).not.toBeDisabled()
  })

  test('button should be disabled', () => {
    btn = {
      ...btn,
      disabled: true
    }
    render(<Button {...btn} />)
  
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  test('button is clicked', () => {
    const mockCallback = jest.fn(() => {})
    btn = {
      ...btn,
      onClick: mockCallback,
    }
    render(<Button {...btn} />)
  
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})
