import classes from "./Select.module.css";

interface SelectProps {
	options: { value: string; name: string }[];
	defaultValue: string;
	value: string;
	handleChange(value: string): void;
}

function Select({ options, defaultValue, value, handleChange }: SelectProps) {
	return (
		<select className={classes.select} value={value} onChange={(e) => handleChange(e.target.value)}>
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
