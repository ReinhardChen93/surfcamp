import React from "react";
import type { HeadingProps } from "@/types";
export function Heading({ heading, linkId }: Readonly<HeadingProps>) {
  return (
    <h3 className="article-headline" id={linkId}>
      {heading}
    </h3>
  );
}