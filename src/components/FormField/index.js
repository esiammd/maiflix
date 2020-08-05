import React from "react";
import { FormFieldWrapper, Label, Input } from "./style.js";

const FormField = ({ label, type, name, value, onChange }) => {
  const isTypeTextArea = type === "textarea";
  const tag = isTypeTextArea ? "textarea" : "input";

  return (
    <FormFieldWrapper>
      <Label>
        <Input
          as={tag}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <Label.Text>{label}:</Label.Text>
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
