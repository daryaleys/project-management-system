import { SelectHTMLAttributes } from "react";
import classes from "./Select.module.css";

export type SelectOptions = {
	value: string;
	name: string;
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	options: SelectOptions[];
	defaultValue: string;
	value: string;
	disabled?: boolean;
	onValueChange(value: string): void;
}

function Select({ options, defaultValue, value, disabled = false, onValueChange }: SelectProps) {
	return (
		<select className={classes.select} value={value} onChange={(e) => onValueChange(e.target.value)} disabled={disabled}>
			<option value="">{defaultValue}</option>
			{options.map((option) => (
				<option value={option.value} key={option.value}>
					{option.name}
				</option>
			))}
		</select>
	);
}

export default Select;
