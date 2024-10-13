import React from "react";
import "./inputForm.scss";

const InputForm = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
}) => {
  return (
    <div>
      <input
        className="form-input"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default InputForm;
