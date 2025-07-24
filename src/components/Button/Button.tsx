import React from 'react'
import type { ButtonTypes } from './type'
import getBtnClasses from './utility'
import { Loader } from './utility'

const Button :React.FC<ButtonTypes> = ({children,type,classes,onClick,loading=false,varient,size,...restprops}) => {

  const className=getBtnClasses({varient,loading,size})

  return (
   <button type={type} className={className} {...restprops}onClick={onClick} disabled={loading}>
   <span className='flex items-center justify-center gap-2'>
    {children}
    {loading&&<Loader/>}
    </span>
   </button>
  )
}


export default Button
