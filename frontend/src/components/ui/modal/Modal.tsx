import { ReactNode, useContext } from "react";
import classes from "./Modal.module.css";
import { ModalContext } from "../../../context/ModalContext";

function Modal({ children }: { children: ReactNode }) {
	const modalContext = useContext(ModalContext);

	return (
		<div className={classes.modal} onMouseDown={() => modalContext.closeModal()}>
			<div className={classes.modalWrap}>
				<div className={classes.modalContent} onMouseDown={(e) => e.stopPropagation()}>
					{children}
				</div>
			</div>
		</div>
	);
}

export default Modal;
