import { ChangeEventHandler } from "react";

export type TSelectField = {
  label: string;
  className?: string;
  labelClassName?: string;
  optionClassName?: string;
  required?: boolean;
  disabled?: boolean;
  options: Array<TOptionSelect>;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  name: string;
  defaultValue?: string;
  value: string;
  optionDisabled?: boolean;
};

export type TOptionSelect = {
  value: string;
  label: string;
};
