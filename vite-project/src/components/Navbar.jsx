import Logo from "../assets/portao-torii.svg"

function Navbar(){
    return(
        <>
        <nav className="bg-[#d10f0f] p-4">
      <div className = "container mx-auto flex arguments-between-elements">
        {/*Logo*/}
        <div className="w-20">
            <img className="h-8"
            src={Logo} 
            alt="" />
        </div>

        <div className="hidden md:flex space-x-9 ">
          <a href="#" className="text-white font-bold mt-1 hover:text-[#fcd614]">Home</a>
          <a href="#" className="text-white font-bold mt-1 hover:text-[#fcd614]"> Produtos </a>
          <a href="#" className="text-white font-bold mt-1 hover:text-[#fcd614]"> Contatos </a>
          <a href="#" className="text-white font-bold mt-1 hover:text-[#fcd614]"> Sobre </a>
        </div>
      </div>
    </nav>
        </>
    )
}

export default Navbar;