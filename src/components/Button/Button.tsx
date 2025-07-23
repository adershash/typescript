import React from 'react'
import type { ButtonTypes } from './type'
import classNames from 'classnames'

const Button :React.FC<ButtonTypes> = ({children,type,classes,onClick,loading=false,varient,...restprops}) => {

const className=classNames(
    'bg-blue-500 hover:bg-blue-300 py-2 px-4 rounded font-bold text-white cursor-pointer',
    {
        'bg-primary text-white font-bold':varient==='primary',
        'bg-secondary text-white font-bold':varient==='secondary',
        'bg-ternary text-white font-bold': varient==='ternary',
        'cursor-not-allowed opacity-50': loading==true

    },
    classes
)
console.log(className)
  return (
   <button type={type} className={className} {...restprops}onClick={onClick} disabled={loading}>
   <span className='flex items-center justify-center gap-2'>
    {children}
    {loading&&<Loader/>}
    </span>
   </button>
  )
}

const Loader=()=>{
    return(
        <span className='w-5 h-5 border-4 border-white border-t-slate-500 rounded-full animate-spin '></span>
    )
}
export default Button
