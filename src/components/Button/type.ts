type buttonType='button'|'submit'
type varientType='primary'|'secondary'|"ternary"
type buttonSize='sm'|'md'|'lg'

export interface ButtonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    type?:buttonType
    classes?:string
    onClick?:()=>void
    loading?:boolean
    varient?:varientType
    size?:buttonSize
}

