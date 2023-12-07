
function Ativos() {

    function getRandomNumber() {
        return Math.floor(Math.random() * 500);
    }

    const nomeAtivos = ["Notebook", "Teclados" , "Mouse", "Monitor", "Id"];
    const listaNomeDeAtivos = nomeAtivos.map(ativos => <th>{ativos}</th>)
    const listaDeAtivos = nomeAtivos.map(ativos => <td data-cell={ativos}>{getRandomNumber()}</td>)

    return(
        <div className="wrapper">
            <table>
                <caption>Gestão de Ativos</caption>
                <tr>
                    {listaNomeDeAtivos}
                </tr>

                <tr>
                    {listaDeAtivos}
                </tr>
                <tr>
                    {listaDeAtivos}
                </tr>
                <tr>
                    {listaDeAtivos}
                </tr>
                <tr>
                    {listaDeAtivos}
                </tr>
                <tr>
                    {listaDeAtivos}
                </tr>
                <tr>
                    {listaDeAtivos}
                </tr>
                <tr>
                    {listaDeAtivos}
                </tr>
            </table>
        </div>
    )
}

export default Ativos;
