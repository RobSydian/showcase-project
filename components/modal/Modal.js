import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

export default function Modal({
  show,
  onClose,
  title,
  content,
  accept,
  cancel,
}) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return createPortal(
      <ModalContent
        show={show}
        onClose={onClose}
        title={title}
        content={content}
        accept={accept}
        cancel={cancel}
      />,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}
