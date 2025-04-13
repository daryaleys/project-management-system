import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import classes from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
	children: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

function Button({ children, ...props }: ButtonProps) {
	return (
		<button {...props} className={classes.button}>
			{children}
		</button>
	);
}

export default Button;
