import Logo from "../assets/portao-torii.svg"
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <nav className="bg-[#d10f0f] p-4">
      <div className = "container mx-auto flex arguments-between-elements">
        {/*Logo*/}
        <div className="w-20">
          <Link to="/">
            <img className="h-8"
            src={Logo} 
            alt="" />
          </Link>
        </div>

        <div className="hidden md:flex space-x-9 ">
          <Link to="/" className="text-white font-bold mt-1 hover:text-[#fcd614]">Home</Link>
          <Link to="/produto" className="text-white font-bold mt-1 hover:text-[#fcd614]"> Produtos </Link>
          <Link to="/contato" className="text-white font-bold mt-1 hover:text-[#fcd614]"> Contatos </Link>
          <Link to="/sobre" className="text-white font-bold mt-1 hover:text-[#fcd614]"> Sobre </Link>
        </div>
      </div>
    </nav>
        </>
    )
}

export default Navbar;