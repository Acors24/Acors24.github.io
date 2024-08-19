interface ImageProps {
    src: string;
    alt: string;
}

export default function Image({ src, alt }: Readonly<ImageProps>) {
    return (
        <img src={src} alt={alt} className="rounded-lg drop-shadow-2xl" />
    );
}