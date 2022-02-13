import React from 'react'

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
  <button
    className='bg-slate-50 rounded-lg hover:bg-slate-200'>
    {props.label}
  </button>
  )
}

export default Button
