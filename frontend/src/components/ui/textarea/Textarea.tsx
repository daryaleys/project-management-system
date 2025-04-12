import { TextareaHTMLAttributes } from "react";
import classes from "./Textarea.module.css";

function Textarea({ ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
	return <textarea {...props} className={classes.textarea}></textarea>;
}

export default Textarea;
