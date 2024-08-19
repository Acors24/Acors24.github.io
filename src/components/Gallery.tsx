import React from "react";
import Image from "./Image";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { twMerge } from "tailwind-merge";

interface GalleryProps {
    images: {
        src: string;
        alt: string;
    }[];
}

function MiniButton({
    onClick,
    selected,
}: Readonly<{ onClick: () => void; selected?: boolean }>) {
    return (
        <button
            className={`${
                selected ? "bg-primary px-4 py-2" : "bg-slate-700 p-2"
            } mx-2 rounded-full shadow transition-all duration-300`}
            onClick={onClick}
        />
    );
}

function ControlButtonContainer({
    children,
    className,
}: Readonly<{ children: React.ReactNode; className: string }>) {
    return (
        <div
            className={twMerge(
                "absolute h-full z-50 flex items-center",
                className
            )}
        >
            {children}
        </div>
    );
}

function ControlButton({
    onClick,
    children,
}: Readonly<{ onClick: () => void; children: React.ReactNode }>) {
    return (
        <button
            className="bg-white mx-4 p-2 rounded-full shadow hover:shadow-md hover:bg-slate-100 transition-all duration-100"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

function Gallery({ images }: Readonly<GalleryProps>) {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    return (
        <div>
            <div className="relative">
                <ControlButtonContainer className="left-0">
                    <ControlButton
                        onClick={() =>
                            setCurrentImageIndex(
                                (currentImageIndex - 1 + images.length) %
                                    images.length
                            )
                        }
                    >
                        <ArrowLeftIcon height={24} width={24} />
                    </ControlButton>
                </ControlButtonContainer>
                <ControlButtonContainer className="right-0">
                    <ControlButton
                        onClick={() =>
                            setCurrentImageIndex(
                                (currentImageIndex + 1) % images.length
                            )
                        }
                    >
                        <ArrowRightIcon height={24} width={24} />
                    </ControlButton>
                </ControlButtonContainer>
                <Image
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                />
            </div>
            <p className="text-center">{images[currentImageIndex].alt}</p>
            <div className="flex justify-center my-2">
                {images.map((_, index) => (
                    <MiniButton
                        key={index}
                        selected={index === currentImageIndex}
                        onClick={() => setCurrentImageIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Gallery;
