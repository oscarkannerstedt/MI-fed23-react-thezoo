import * as React from "react"
import fallbackImage from "../assets/noImageFound.jpg";

interface ImageWithFallbackProps {
    src: string;
    alt: string;
    className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({src, alt, className}: ImageWithFallbackProps) => {
    const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        (event.target as HTMLImageElement).src = fallbackImage;
    }

    return <img src={src} alt={alt} onError={handleError} className={className} />
}