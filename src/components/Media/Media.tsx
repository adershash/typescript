import type { MediaProps } from "./type"

const Media:React.FC<MediaProps> = ({src,alt,type,containerClasses,mediaClasses, ...restProps}) => {

    if(type==='image'){
        const imageRestProps={...restProps} as React.ImgHTMLAttributes<HTMLImageElement>
 
  return (
    
    <div className={containerClasses}>
      <img src={src} alt={alt} className={mediaClasses} {...imageRestProps}/>
    </div>
    
  )
}else{
    const videoRestProps={...restProps} as React.VideoHTMLAttributes<HTMLVideoElement>
    return(
        <div className={containerClasses}>
            <video src={src} className={mediaClasses} {...videoRestProps}></video>
        </div>
    )
}
}

export default Media
