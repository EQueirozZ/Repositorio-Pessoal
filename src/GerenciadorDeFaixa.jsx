// Esse metódo de dizer que vai ser chamado uma variável dentro de uma função evita com que fique digitando props.nome do objeto.

const GerenciadorDeFaixa = ({ faixa, referencia }) =>  {
    return <audio src={faixa} ref={referencia} />;
};

export default GerenciadorDeFaixa;