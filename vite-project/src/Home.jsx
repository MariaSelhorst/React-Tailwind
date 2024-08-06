import { useState } from "react";
import Logo from "./assets/portao-torii.svg"
import Footer from "./components/Footer"

function Home() {

    const [showSuccess, setSuccess] = useState(false);
    const [showError, setError] = useState(false);

    const sucess = () => {
        setSuccess(true)
        setTimeout(() => setSuccess(false), 5000)
    }

    const error = () => {
        setError(true)
        setTimeout(() => setError(false), 5000)
    } 

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
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 flex-col">
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
                    <div className="flex justify-between">
                        <button className="bg-[#1da1f2] hover:bg-[#4e545c] text-white rounded-lg py-2 px-4" onClick={sucess}>
                            Ler Mais 
                        </button>
                        <button className="bg-[#1da1f2] hover:bg-[#4e545c] text-white rounded-lg py-2 px-4" onClick={error}>
                            Próximo 
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-4 mt-14">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead className="bg-[#d10f0f] text-white">
                    <tr>
                        <th className="py-2 px-4 border-b">Nome</th>
                        <th className="py-2 px-4 border-b">Idade</th>
                        <th className="py-2 px-4 border-b">Cidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-100 border-b ">
                        <td className="py-2 px-4 text-center">João</td>
                        <td className="py-2 px-4 text-center">30</td>
                        <td className="py-2 px-4 text-center">São Paulo</td>
                    </tr>
                    <tr className="bg-white border-b">
                        <td className="py-2 px-4 text-center">Maria</td>
                        <td className="py-2 px-4 text-center">25</td>
                        <td className="py-2 px-4 text-center">Rio de Janeiro</td>
                    </tr>
                    <tr className="bg-gray-100 border-b">
                        <td className="py-2 px-4 text-center">Pedro</td>
                        <td className="py-2 px-4 text-center">35</td>
                        <td className="py-2 px-4 text-center">Belo Horizonte</td>
                    </tr>
                </tbody>
            </table>
        </div>
        {showSuccess && (
                <div className="absolute top-4 right-4 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg" role="alert">
                    <strong className="font-bold"> Sucesso!</strong>
                    <span className="block sm:inline">Você vai ler mais!</span>
                </div>
                )}
        {showError && (
                <div className="absolute top-4 right-4 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg" role="alert">
                    <strong className="font-bold">Erro!</strong>
                    <span className="block sm:inline"> Não foi possível passar para o próximo.</span>
                </div>
                )}
        </div>
        <Footer></Footer>
        </>
    );
}

export default Home;
