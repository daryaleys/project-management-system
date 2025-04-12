import { InputHTMLAttributes, useEffect, useState } from "react";
import classes from "./Input.module.css";
import useDebounce from "../../../hooks/useDebounce";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	onInputChange(value: string): void;
	debounceDelay?: number;
}

function Input({ value, debounceDelay, onInputChange, ...props }: InputProps) {
	const [inputValue, setInputValue] = useState(value as string);
	const debouncedValue = useDebounce(inputValue, debounceDelay);

	useEffect(() => {
		onInputChange(debouncedValue);
	}, [debouncedValue]);

	return <input {...props} onChange={(e) => setInputValue(e.target.value)} className={classes.input} />;
}

export default Input;
