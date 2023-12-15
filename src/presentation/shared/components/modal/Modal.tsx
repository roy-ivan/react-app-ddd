// Modal.tsx
import { ModalProps } from "../../interfaces/moda-props";
import styles from "./modal.module.scss";
import ReactPortal from "./react.portal";

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
