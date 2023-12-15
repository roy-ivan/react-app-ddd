import { ReactNode } from "react";

export type ModalProps = {
  title: string;
  children: ReactNode;
  isOpened: boolean;
  closeModal: () => void;
};
