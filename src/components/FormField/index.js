import React from "react";
import { FormFieldWrapper, Label, Input } from "./style.js";

function FormField({ label, type, name, value, onChange, suggestions }) {
  const fieldId = `id_${name}`;
  const isTypeTextarea = type === "textarea";
  const tag = isTypeTextarea ? "textarea" : "input";

  const hasValue = Boolean(value);
  const hasSuggestions = Boolean(suggestions);

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
          autoComplete={hasSuggestions ? "off" : "on"}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>{label}:</Label.Text>
        {hasSuggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {suggestions.map((suggestion) => (
              <option
                value={suggestion}
                key={`suggestionFor_${fieldId}_option${suggestion}`}
              >
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  );
}

export default FormField;
