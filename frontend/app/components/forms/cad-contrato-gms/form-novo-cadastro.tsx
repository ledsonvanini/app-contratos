import { useFetcher } from "react-router"
import type { Route } from "types/app/+types/root";
import FormControleBasico from "./form-controle-basico";




function FormNovoCadastro(_: Route.ComponentProps) {
   let fetcher = useFetcher();

   return (
      <div className=" w-full  flex">
         
         <fetcher.Form method="post">
            <FormControleBasico />
         </fetcher.Form>
        
      </div>
   )
}
export default FormNovoCadastro;