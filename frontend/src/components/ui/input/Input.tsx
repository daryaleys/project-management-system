import { InputHTMLAttributes } from "react";
import classes from "./Input.module.css";

function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
	return <input {...props} className={classes.input} />;
}

export default Input;
