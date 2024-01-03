import { useState } from "react";

function Login() {
    
    const [action, setAction] = useState("Not Login");

    return (
        <div className="flex flex-col m-auto my-52 bg-slate-400 py-10">
            <header className="header flex flex-col items-center gap-2 max-w-full mt-8">
                <div className="font-bold text-5xl text-violet-700">Login</div>
                <div className="w-16 h-2 bg-violet-700 rounded-lg"></div>
            </header>
            <div className="inputs flex flex-col mt-14 gap-3">
                <div className="flex items-center m-auto w-96 h-20 bg-gray-500 rounded-md justify-center text-lg">
                    <div className="mr-4 text-sky-300">Nome</div>
                    <img src="" alt="" />
                    <input placeholder="Nome" className="rounded-md border-none outline-none" type="text" />
                </div>
                <div className="flex items-center m-auto w-96 h-20 bg-gray-500 rounded-md justify-center text-lg">
                    <div className="mr-4 text-sky-300">E-mail</div>
                    <img src="" alt="" />
                    <input placeholder="E-mail" className="rounded-md border-none outline-none" type="email" />
                </div>
                <div className="flex items-center m-auto w-96 h-20 bg-gray-500 rounded-md justify-center text-lg">
                    <div className="mr-4 text-sky-300">Senha</div>
                    <img src="" alt="" />
                    <input placeholder="Password" className="rounded-md border-none outline-none" type="password" />
                </div>
            </div>
            <div className="flex gap-8 my-16 mx-auto">
                <div className="flex justify-center items-center w-52 h-14 text-white bg-violet-700 rounded-3xl text-lg font-bold cursor-pointer hover:bg-violet-300 hover:text-gray-900"><button onClick={()=> setAction("Login")}>Login</button></div>
            </div>
        </div>
    )
}

export default Login;