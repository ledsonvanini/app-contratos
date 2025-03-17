export type HTTPMethod = "get" | "post" | "put" | "delete";

export interface FetcherInputProps {
  endpoint?: string;
  method?: HTTPMethod;
  inputType?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputClassName?: string;
  showButton?: boolean;
}

export interface FetcherButtonProps {
  onClick: () => void;
  label?: string;
  className?: string;
}

export interface FetcherFormProps {
  endpoint?: string;
  method?: HTTPMethod;
  children: React.ReactNode;
  className?: string;
}
