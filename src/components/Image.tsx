import React from "react";

export default function Image({ src, className }: React.ComponentProps<"img">) {
  return (
    <img src={src} alt="" className={`rounded drop-shadow-xl ${className}`} />
  );
}
