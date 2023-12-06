
function Header() {
    let num = 123;
    const pessoas = {
        nome:  "Jaques",
        cargo: "",
        ID: "#" + num
    }

    return(
        <header>
            <h1 className="text-center text-cyan-700 font-bold text-5xl my-8">Seja Bem-Vindo {pessoas.nome}</h1>
        </header>
    )
}

export default Header;