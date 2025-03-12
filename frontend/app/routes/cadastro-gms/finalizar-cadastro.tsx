import LabelTopForm from "~/components/forms/label-top-form";


function FinalizarCadastro() {
    const currentYear = new Date().getFullYear()
   
  return (
    <div className="w-full flex m-0">
        <LabelTopForm  title="FINALIZAR CADASTRO" currentYear={currentYear.toLocaleString()}/>
    </div>
 )
} 
export default FinalizarCadastro;