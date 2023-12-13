// Modal.tsx
import { ReactNode } from "react";
import styles from "./moda.module.scss";
import ReactPortal from "./react.portal";

// Define Modal props.
type ModalProps = {
  title: string;
  children: ReactNode;
  isOpened: boolean;
  closeModal: () => void;
};

const Modal = ({ title, children, isOpened, closeModal }: ModalProps) => {
  return (
    isOpened && (
      <ReactPortal wrapperId="modal-root">
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <div className={styles.modal_nav}>
              <div className={styles.title}>{title}</div>
              <button className={styles.close} onClick={closeModal}>
                X
              </button>
            </div>
            <hr />
            {children}
          </div>
        </div>
      </ReactPortal>
    )
  );
};

export default Modal;
