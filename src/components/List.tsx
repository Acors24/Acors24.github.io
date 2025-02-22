import React from "react";

export default function List({ children }: React.ComponentProps<"ul">) {
  return <ul className="list-disc list-outside pl-6 *:my-1">{children}</ul>;
}
