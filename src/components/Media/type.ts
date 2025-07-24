type mediaType='image'|'video'

type Mediacommonprops={
    src:string,
    alt?:string,
    type:mediaType,
    containerClasses?:string,
    mediaClasses?:string,
    
}

type MediaImageProps=Mediacommonprops & React.ImgHTMLAttributes<HTMLImageElement>

type MediaVideoProps=Mediacommonprops & React.VideoHTMLAttributes<HTMLVideoElement>

export type MediaProps=MediaImageProps | MediaVideoProps