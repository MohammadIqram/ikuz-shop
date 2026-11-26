"use client";

import { useCallback, type SyntheticEvent } from "react";
import { pathsByDataPath } from "./prototype-routes";

type PrototypeFrameProps = {
  src: string;
  title: string;
};

export default function PrototypeFrame({ src, title }: PrototypeFrameProps) {
  const connectNavigation = useCallback(
    (event: SyntheticEvent<HTMLIFrameElement>) => {
      const document = event.currentTarget.contentDocument;
      if (!document) return;

      document.querySelectorAll<HTMLAnchorElement>("a[data-path]").forEach((link) => {
        const path = pathsByDataPath[link.dataset.path ?? ""];
        if (!path) return;

        link.href = path;
        link.addEventListener("click", (clickEvent) => {
          if (
            clickEvent.button !== 0 ||
            clickEvent.metaKey ||
            clickEvent.ctrlKey ||
            clickEvent.shiftKey ||
            clickEvent.altKey
          ) {
            return;
          }

          clickEvent.preventDefault();
          window.parent.location.assign(path);
        });
      });
    },
    [],
  );

  return (
    <iframe
      className="storefront-frame"
      onLoad={connectNavigation}
      src={src}
      title={title}
    />
  );
}
