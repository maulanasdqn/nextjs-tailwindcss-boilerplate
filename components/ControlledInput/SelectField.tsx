import { FC, ReactElement } from "react";
import { TSelectField } from "./types";

const SelectField: FC<TSelectField> = (props): ReactElement => {
  return (
    <div className="flex flex-col gap-y-3">
      <label className={props.labelClassName} htmlFor={props.name}>
        {props.label}
      </label>
      <select
        value={props.value}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        name={props.name}
        required={props.required}
        className={props.className}
      >
        {props.options.map((option, index) => (
          <option
            disabled={props.optionDisabled}
            className={props.optionClassName}
            key={index}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
