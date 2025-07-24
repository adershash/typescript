import React from 'react'
import type { CardProps } from './type'
import classNames from 'classnames'




const Card:React.FC<CardProps> = ({children,varient,classes}) => {
    const classnames=classNames('card',{
    'bg-green-500 ':varient==='fill',
    'border bg-transpernt border-green-500 border-solid':varient==='outline'
},
    classes)
  return (
    <div className={classnames}>
      {children}
    </div>
  )
}

export default Card
