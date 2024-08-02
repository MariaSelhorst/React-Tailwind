import Logo from "./assets/portao-torii.svg"

function Home() {
    return (
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
          <a href="#" className="text-white font-bold mt-1 hover:text-[#fcd614]"> Sobre </a>
        </div>
      </div>
    </nav>
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-neutral-700 rounded-lg shadow-lg max-w-sm w-full">
                <a href="#!">
                    <img
                        className="rounded-t-lg w-full h-48 object-fit"
                        src="https://d26lpennugtm8s.cloudfront.net/stores/001/246/541/rte/1024px-Kumanonachitaisha8453.jpg"
                        alt="Imagem do card"
                    />
                </a>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Portal Torii
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Um torii (japonês: 鳥居, [to.ɾi.i]) é um portão tradicional japonês mais comumente encontrado na entrada ou dentro de um santuário xintoísta, onde simbolicamente marca a transição do mundano para o sagrado.
                    </p>
                    <button className="bg-[#1da1f2] hover:bg-[#4e545c] text-white rounded-lg py-2 px-4">
                        Ler Mais 
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;
