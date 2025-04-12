import { ChangeEventHandler } from "react";
import classes from "./Input.module.css";

interface InputProps {
	value: string;
	type: string;
	placeholder: string;
	onChange: ChangeEventHandler;
}

function Input({ ...props }: InputProps) {
	return <input {...props} className={classes.input} />;
}

export default Input;
