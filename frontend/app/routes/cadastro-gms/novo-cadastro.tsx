import FormNovoCadastro from "~/components/forms/cad-contrato-gms/form-novo-cadastro";
import LabelStatusForm from "~/components/forms/label-status-form";
import LabelTopForm from "~/components/forms/label-top-form";


const NovoCadastro = ({children}:any) => {
    const currentYear = new Date()
    return (
        <div className="flex flex-col gap-2 h-dvh justify-between">
        <LabelTopForm  title="NOVO CADASTRO" currentYear={currentYear.getFullYear().toLocaleString()}/>       
         {children}
        <LabelStatusForm  status="atualizado 5min atrás" currentYear={currentYear.toLocaleString()}/>   
        </div>
    )
}

export default NovoCadastro;

