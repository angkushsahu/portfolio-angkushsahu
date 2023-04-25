import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from "react-hook-form";

export interface InputProps {
    type?: string;
    id: string;
    title: string;
    label: string;
    register: UseFormRegisterReturn<string>;
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}
