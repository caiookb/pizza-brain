import React from "react";
import { Controller, FieldValues, UseFormRegister } from "react-hook-form";
import { Text } from "..";
import { StyledInput } from "./Input.styles";

type InputProps = {
  placeholder?: string;
  control?: any;
  name: string;
  required?: boolean;
};

const Input: React.FC<InputProps> = (props: InputProps) =>
  !props.control ? (
    <StyledInput {...props}></StyledInput>
  ) : (
    <Controller
      control={props.control}
      name={props.name}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState,
      }) => (
        <>
          <StyledInput
            {...props}
            onBlur={onBlur}
            onChange={onChange}
            ref={ref}
          />
          {fieldState.error?.message && (
            <Text color={"red"}>{fieldState.error?.message}</Text>
          )}
        </>
      )}
    />
  );

export default Input;
