import classNames from "classnames"
import type{ ButtonTypes } from "./type"


const getBtnClasses=({varient,loading,classes,size}:ButtonTypes)=>{
    const className=classNames(
    'bg-blue-500 hover:bg-blue-300 rounded font-bold text-white cursor-pointer px-1 py-0.5 ',
    {
        'bg-primary text-white font-bold ':varient==='primary',
        'bg-secondary text-white font-bold ':varient==='secondary',
        'bg-ternary text-white font-bold ': varient==='ternary',
        'cursor-not-allowed opacity-50 ': loading==true,
        'py-0.5 px-1':size==='sm',
        'py-2 px-4 ':size==='md',
        'py-3 px-6 ':size==='lg', 

    },
    classes
)
return className

}

export const Loader:React.FC=()=>{
    return(
        <span className='w-5 h-5 border-4 border-white border-t-slate-500 rounded-full animate-spin '></span>
    )
}
export default getBtnClasses
