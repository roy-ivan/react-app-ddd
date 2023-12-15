import { useState } from "react";
import { CheckBoxProps } from "../../interfaces/checkbox-props";

const CheckBox = ({ onCheck, label }: CheckBoxProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    setChecked(input.checked);
    onCheck(input.checked);
  };

  return (
    <div>
      <input type="checkbox" id="check" checked={checked} onChange={handleChange} />
      &nbsp;
      <label htmlFor="check">{label}</label>
    </div>
  );
};

export default CheckBox;
