
function Ativos() {

    function getRandomNumber() {
        return Math.floor(Math.random() * 500);
    }

    const ativosNome = ["Notebook", "Teclados" , "Mouse", "Monitor", "Id"];
    const ativosNomeLista = ativosNome.map(ativos => <th>{ativos}</th>)

    return(
        <div className="wrapper">
            <table>
                <caption>Gestão de Ativos</caption>
                <tr>
                    {ativosNomeLista}
                </tr>

                <tr>
                    <td data-cell="Notebook">{getRandomNumber()}</td>
                    <td data-cell="Teclado">{getRandomNumber()}</td>
                    <td data-cell="Mouse">{getRandomNumber()}</td>
                    <td data-cell="Monitor">{getRandomNumber()}</td>
                    <td data-cell="ID">#{getRandomNumber()}</td>
                </tr>
                <tr>
                    <td data-cell="Notebook">{getRandomNumber()}</td>
                    <td data-cell="Teclado">{getRandomNumber()}</td>
                    <td data-cell="Mouse">{getRandomNumber()}</td>
                    <td data-cell="Monitor">{getRandomNumber()}</td>
                    <td data-cell="ID">#{getRandomNumber()}</td>
                </tr>
                <tr>
                    <td data-cell="Notebook">{getRandomNumber()}</td>
                    <td data-cell="Teclado">{getRandomNumber()}</td>
                    <td data-cell="Mouse">{getRandomNumber()}</td>
                    <td data-cell="Monitor">{getRandomNumber()}</td>
                    <td data-cell="ID">#{getRandomNumber()}</td>
                </tr>
                <tr>
                    <td data-cell="Notebook">{getRandomNumber()}</td>
                    <td data-cell="Teclado">{getRandomNumber()}</td>
                    <td data-cell="Mouse">{getRandomNumber()}</td>
                    <td data-cell="Monitor">{getRandomNumber()}</td>
                    <td data-cell="ID">#{getRandomNumber()}</td>
                </tr>
                <tr>
                    <td data-cell="Notebook">{getRandomNumber()}</td>
                    <td data-cell="Teclado">{getRandomNumber()}</td>
                    <td data-cell="Mouse">{getRandomNumber()}</td>
                    <td data-cell="Monitor">{getRandomNumber()}</td>
                    <td data-cell="ID">#{getRandomNumber()}</td>
                </tr>
                <tr>
                    <td data-cell="Notebook">{getRandomNumber()}</td>
                    <td data-cell="Teclado">{getRandomNumber()}</td>
                    <td data-cell="Mouse">{getRandomNumber()}</td>
                    <td data-cell="Monitor">{getRandomNumber()}</td>
                    <td data-cell="ID">#{getRandomNumber()}</td>
                </tr>
            </table>
        </div>
    )
}

export default Ativos;
