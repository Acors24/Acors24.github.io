import React from "react";
import Image from "./Image";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { twMerge } from "tailwind-merge";

interface GalleryProps {
  images: {
    src: string;
    caption: string;
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
      } mx-1 rounded-full shadow transition-all duration-300`}
      onClick={onClick}
    />
  );
}

function ControlButtonContainer({
  children,
  className,
}: React.ComponentProps<"div">) {
  return (
    <div
      className={twMerge("absolute h-full z-50 flex items-center", className)}
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
  const imageContainerRef = React.useRef<HTMLDivElement>(null);

  const selectNextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    selectImage(newIndex);
  };

  const selectPreviousImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    selectImage(newIndex);
  };

  const selectImage = (index: number) => {
    imageContainerRef.current?.children[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <div className="relative">
        <ControlButtonContainer className="left-0">
          <ControlButton onClick={selectPreviousImage}>
            <ArrowLeftIcon height={24} width={24} />
          </ControlButton>
        </ControlButtonContainer>
        <ControlButtonContainer className="right-0">
          <ControlButton onClick={selectNextImage}>
            <ArrowRightIcon height={24} width={24} />
          </ControlButton>
        </ControlButtonContainer>
        <div
          ref={imageContainerRef}
          className="flex gap-2 overflow-hidden rounded drop-shadow-xl"
        >
          {images.map(({ src }) => (
            <Image key={src} src={src} />
          ))}
        </div>
      </div>
      <p className="text-center">{images[currentImageIndex].caption}</p>
      <div className="flex justify-center my-2">
        {images.map((_, index) => (
          <MiniButton
            key={index}
            selected={index === currentImageIndex}
            onClick={() => selectImage(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
