import { v4 as uuidv4 } from 'uuid';

function Ativos() {
    const nomeAtivos = ["Notebook", "Teclados", "Mouse", "Monitor", "Id"];
    const keysHeaders = nomeAtivos.map(() => uuidv4());
    const keysCells = nomeAtivos.map(() => uuidv4());

    const headers = nomeAtivos.map((ativo, index) => (
        <th key={keysHeaders[index]}>{ativo}</th>
    ));

    const generateRandomNumbers = (keys) => {
        return keys.map((key, index) => (
            <td key={key} data-cell={nomeAtivos[index]}>
                {Math.floor(Math.random() * (index + 1) * 500)} {/* Gera número baseado no índice */}
            </td>
        ));
    };

    const rows = Array.from({ length: 4 }, () => (
        <tr key={uuidv4()}>
            {generateRandomNumbers(keysCells)}
        </tr>
    ));

    return (
        <div className="wrapper">
            <table>
                <caption>Gestão de Ativos</caption>
                <thead>
                    <tr>{headers}</tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}

export default Ativos;
