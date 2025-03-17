import React from "react";
import { useFetcher } from "react-router";
import type { FetcherInputProps } from "./types";

const FetcherInput: React.FC<FetcherInputProps> = ({
  endpoint,
  method = "post",
  inputType = "text",
  placeholder = "Enter value",
  value,
  onChange,
  inputClassName = "",
  showButton = false,
}) => {
  const fetcher = useFetcher();

  const handleSubmit = () => {
    const formData = new FormData();
    if (value) formData.append("data", value); // Ensure value is not undefined

    fetcher.submit(formData, { method, action: endpoint });
  }
  return (
    <div className="flex gap-2">
      <input
        type={inputType}
        name="data"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border p-2 rounded-md focus:ring-2 focus:ring-blue-500 ${inputClassName}`}
      />
      {showButton && <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>}
    </div>
  );
};

export default FetcherInput;
