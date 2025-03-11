import { IoDocument } from "react-icons/io5"
import Icon from "./icon-sidebar"
import ItemSidebar from "./item-sidebar"
import { GrDocumentStore } from "react-icons/gr"
import { FaUserPlus } from "react-icons/fa"
import LogoSesp from "../logo"

function Sidebar() {
  return (
    <div className="items-start sidebar flex flex-col">
      <LogoSesp />
      <ItemSidebar >
        <IoDocument />
        Cadastro GMS
      </ItemSidebar>
      <ItemSidebar >
      <GrDocumentStore />
        Cadastro Dados
      </ItemSidebar>
      <ItemSidebar >
      <FaUserPlus />
        Cadastro Fornecedor
      </ItemSidebar>      
    </div>
  )
}

export default Sidebar