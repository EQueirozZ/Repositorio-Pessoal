// Nesse arquivo é onde fica a definição do componente Capa.
// Foi definido entre () que a função definida espera receber 'props'.
// 'props' são informações que vamos passar para um componente. 
// className tem a mesma funcionalidade de um class do HTML, porém no contexto de JS o class já tem uma definição.

function Capa(props) {
    return <img className='capa' src={props.imagemCapa} alt={props.textoAlternativo} />
}

export default Capa; // com o comando export default é possível importar essa função em outro arquivo.