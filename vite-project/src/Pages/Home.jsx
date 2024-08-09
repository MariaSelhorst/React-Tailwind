import { useState } from "react";
import Footer from "../components/Footer"
import Navbar from '../components/Navbar'

function Home() { 

    return (
        <>
        <Navbar/>
        <div className="flex items-center justify-center h-fit mt-20 dark:bg-gray-900 flex-col">
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
                        <button className="bg-[#1da1f2] hover:bg-[#4e545c] text-white rounded-lg py-2 px-4" >
                            Ler Mais 
                        </button>
                        <button className="bg-[#1da1f2] hover:bg-[#4e545c] text-white rounded-lg py-2 px-4" >
                            Próximo 
                        </button>
                    </div>
                </div>
            </div>
        
        </div>
        <Footer></Footer>
        </>
    );
}

export default Home;
