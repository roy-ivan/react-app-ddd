import { ReactNode, useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

type ReactPortalProps = {
  children: ReactNode;
  wrapperId: string;
};

const ReactPortal = ({ children, wrapperId }: ReactPortalProps) => {
  const [wrapper, setWrapper] = useState<Element | null>(null);

  useLayoutEffect(() => {
    const existingWrapper = document.querySelector(`#${wrapperId}`);

    if (existingWrapper) {
      setWrapper(existingWrapper);
      return;
    }

    const newWrapper = document.createElement("div");
    newWrapper.setAttribute("id", wrapperId);
    document.body.appendChild(newWrapper);
    setWrapper(newWrapper);

    return () => {
      document.body.removeChild(newWrapper);
    };
  }, [wrapperId]);

  return wrapper ? createPortal(children, wrapper) : null;
};

export default ReactPortal;
