import React from "react";
import Image from "./Image";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
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
      className={twMerge(
        "absolute h-full z-10 p-2 flex items-center pointer-events-none select-none",
        className
      )}
    >
      {children}
    </div>
  );
}

function ControlButton(props: React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className="bg-white p-2 rounded-full shadow hover:shadow-md hover:bg-slate-100 transition-all duration-100 pointer-events-auto"
    />
  );
}

function Gallery({ images }: Readonly<GalleryProps>) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const imageContainerRef = React.useRef<HTMLDivElement>(null);
  const dialogRef = React.useRef<HTMLDialogElement>(null);

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

  const navigationButtons = (
    <>
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
    </>
  );

  // useEffect(() => {
  //   const hideDialog = () => {
  //     if (dialogRef.current?.open && window.innerWidth < 1024) {
  //       dialogRef.current?.close();
  //       console.log("closed");
  //     }
  //   };
  //   window.addEventListener("resize", hideDialog);
  //   return () => window.removeEventListener("resize", hideDialog);
  // }, []);

  return (
    <div>
      <div className="relative">
        {navigationButtons}
        <div
          ref={imageContainerRef}
          className="flex gap-2 overflow-hidden snap-x snap-mandatory rounded drop-shadow-xl"
        >
          {images.map(({ src }) => (
            <Image
              key={src}
              src={src}
              onClick={() => dialogRef.current?.showModal()}
              className="pointer-events-auto cursor-pointer snap-center"
            />
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
      <dialog
        ref={dialogRef}
        className="content-center h-full backdrop:bg-black/50 z-50 bg-transparent"
      >
        <button
          onClick={() => dialogRef.current?.close()}
          className="absolute top-0 right-0 bg-white rounded-full p-2 hover:bg-slate-100 transition-all duration-100 z-10"
        >
          <Cross2Icon height={24} width={24} />
        </button>
        <div className="relative">
          {navigationButtons}
          <Image src={images[currentImageIndex].src} className="m-auto w-4/5" />
          <p className="text-center text-white [filter:drop-shadow(0px_0px_4px_black)] m-2">
            {images[currentImageIndex].caption}
          </p>
        </div>
      </dialog>
    </div>
  );
}

export default Gallery;
