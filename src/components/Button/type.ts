type buttonType='button'|'submit'
type varientType='primary'|'secondary'|"ternary"

export interface ButtonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    type?:buttonType
    classes?:string
    onClick?:()=>void
    loading?:boolean
    varient?:varientType
}

