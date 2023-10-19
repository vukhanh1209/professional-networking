import Image from "next/legacy/image";

interface ImageWrapperProps {
    src: any,
    height?: number,
    width: number,
    alt: string,
}

const ImageWrapper = (props : ImageWrapperProps) => {
    const {src, height, width, alt} = props;

    return (
        <div 
            className={`flex items-center shrink-0 `}
        >
            <Image src={src} width={width} className="object-contain" alt={alt}/>
        </div>
    )
}

export default ImageWrapper;