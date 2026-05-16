// Toda vez que uma informção de JS for inserida em um HTML, ela deve ser insera entre {}.
// Na linha 9 foi cria uma string interpolada, que é como se fosse uma string inteligente para preeencher a informação desejada, juntando uma parte fixa com uma parte variável.


function SeletorCapitulos (props) {
    return (
        <button classeName='seletor'>
            <i className="bi bi-list-task"></i>
            <p>{`Capítulo ${props.capituloAtual}`}</p>
        </button>
    );
}

export default SeletorCapitulos;