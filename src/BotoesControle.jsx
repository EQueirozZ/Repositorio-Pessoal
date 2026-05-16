// Essa é uma outra forma de se criar um componente, que seria uma arrow function, uma forma diferente de se criar uma função que também funciona.
// Nessse código foi criado um operador ternário "condição ? expr1 : expr2", que permite avaliar uma condição e retornar um de dois valores, debaixo de uma instrução if, else. Ideal para atribuições simples e para aumentar a legibilidade do código.
// Quando colocamos apenas uma função, o navegador irá chamar essa função assim que ler o código, por isso deve se usar uma arrow function
// Uma arrow function pode ser usada quando queremos chamar uma função que chama outra função, como exemplo, na linha de código do botão de play e pause.
// Quando vai ser chamada uma função ela pode ser feita de duas maneiras, chamar no momento em que a linha ser lida usando o () ou somente colocar o nome da função.

const BotoesControle = (props) => {
    return <div className='caixa-botoes'>
        <button onClick={props.retrocederFaixa}>
            <i className="bi bi-skip-start"></i>
        </button>
        <button>
            <i className="bi bi-arrow-counterclockwise"></i>
        </button>
        <button onClick={props.tocarOuPausarFaixa}> 
            <i className={`bi bi-${props.taTocando ? "pause" : "play"}-circle-fill`}></i> 
        </button>
        <button>
            <i className="bi bi-arrow-clockwise"></i>
        </button>
        <button onClick={props.avancarFaixa}>
            <i className="bi bi-skip-end"></i>
        </button>
    </div>
};

export default BotoesControle;