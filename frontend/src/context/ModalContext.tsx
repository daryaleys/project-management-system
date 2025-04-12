import { createContext, ReactNode, useState } from "react";
import Modal from "../components/ui/modal/Modal";

export interface ModalContextType {
	opened: boolean;
	content: ReactNode;
	openModal: (content: ReactNode) => void;
	closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
	opened: false,
	content: null,
	openModal: () => {},
	closeModal: () => {},
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [opened, setOpened] = useState(false);
	const [content, setContent] = useState<ReactNode>(null);

	const openModal = (modalContent: ReactNode) => {
		setContent(modalContent);
		setOpened(true);
		document.body.style.overflow = "hidden";
	};

	const closeModal = () => {
		setOpened(false);
		setContent(null);
		document.body.style.overflow = "";
	};

	return (
		<ModalContext.Provider value={{ opened, content, openModal, closeModal }}>
			{opened && <Modal>{content}</Modal>}
			{children}
		</ModalContext.Provider>
	);
};
