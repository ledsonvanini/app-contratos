import { IoDocument, IoDocumentsOutline } from "react-icons/io5"
import ItemSidebar from "./item-sidebar"
import { GrDocumentStore } from "react-icons/gr"
import { FaUserPlus } from "react-icons/fa"
import LogoSesp from "../logo"
import { NavLink } from "react-router"
import { useState } from "react"
import { MdEditDocument } from "react-icons/md"

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSetIsOpen = (e: any) => {
    if (e.target.classList.contains("openCadGMS")) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(false);
    }
  }

  // const handleIsOpenOnFocus = () => {
  //   if(!isOpen) handleSetIsOpen()
  // }

  return (
    <div className="items-start sidebar flex flex-col">
      <LogoSesp />
      <div className="flex flex-col sidebar">
        <ItemSidebar >
        <IoDocumentsOutline />
          <div className="openCadGMS"
            onClick={handleSetIsOpen}
          > Cadastro GMS </div>
        </ItemSidebar>
        {isOpen && (

          <div className="flex flex-col sidebar sideOpen">
            <ItemSidebar >
              <IoDocument />
              <NavLink to="/cadastro-gms/novo-cadastro"
               
              >
                Novo Cadastro 
               </NavLink>
            </ItemSidebar>
            <ItemSidebar >
            <MdEditDocument />
              <NavLink to="/cadastro-gms/finalizar-cadastro"

              > 
              Finalizar Cadastro
               </NavLink>
            </ItemSidebar>
          </div>
        )}

      </div>
      <ItemSidebar >
        <GrDocumentStore />
        <NavLink to="/cadastro-dados"
         onClick={handleSetIsOpen}
        > Cadastro Dados </NavLink>
      </ItemSidebar>
      <ItemSidebar >
        <FaUserPlus />
        <NavLink to="/cadastro-fornecedor"
         onClick={handleSetIsOpen}
        > Cadastro Fornecedor </NavLink>

      </ItemSidebar>
    </div>
  )
}

export default Sidebar