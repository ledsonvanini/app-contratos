import { FetcherInput } from "~/types";

function FormControleBasico() {
    return (
        <div className="flex gap-3 p-4">
            <FetcherInput
                inputType="text"
                placeholder="00000/0000"
                inputClassName="border-red-500 p-2"
            />
            <FetcherInput
                inputType="text"
                placeholder="Nome responsável"
                inputClassName="border-red-500 p-2 "
            />
            <FetcherInput
                inputType="text"
                placeholder="Nome responsável"
                inputClassName="border-red-500 p-2 "
            />
        </div>
    )
}

export default FormControleBasico;