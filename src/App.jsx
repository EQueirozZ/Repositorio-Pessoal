/* O react js permite mesclar o HTML junto ao JS. Dentro do código é possível definir "pedaços" do nosso software, que são chamados de componentes de interface e depois unir em uma coisa só.*/
// Geralmente o VSCode importa automaticamente nossos componentes.
// React = reagir. Ele dá a capacidade do sistema reagir a informações sendo atualizadas no nosso sistema e retorna atualizações para o nosso sistema. 
// Variável de estado, essa é a variável que define o controle de informações importantes do react, que são dinâmicas. O react reage a essas variáveis.
// Para usar os Hooks(ganchos), eles devem ser definidos no inicio do componente.

import { useState, useRef, useEffect } from 'react'; // Essa funcionalidade permite cosntruir variáveis de estado.
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importação do ícone.
import brasCubasImg from './assets/bras_cubas.jpeg'; /*É necessário importar o arquivo desejado como uma variável para que ele seja reconhecido no react */
import Capa from './Capa';
import SeletorCapitulos from './SeletorCapitulos';
import BotoesControle from './BotoesControle';
import livro from './assets/capitulos/livro';
import GerenciadorDeFaixa from './GerenciadorDeFaixa';

/* Para manter um código mais limpo e organizado, é interessante criar vários arquivos contendo os componentes e depois usar a função App para chamar todos eles.*/

/* Quando for criar um componente sempre colocar a nome com a primeira letra em maiusculo. */

function App() { /* Nessa parte nós definimos e estruturamos o nosso componente de interface (HTML mesclado com o JS).*/
  
  // let taTocando = true; (variável simples)
  const [taTocando, definirTaTocando] = useState(false); // Aqui já temos uma variável de estado. 
  const [faixaAtual, definirFaixaAtual] = useState(0);
  const tagAudio = useRef(null); 

  useEffect(() => {
    if(taTocando) {
      tocarFaixa();
    }
  }, [
    faixaAtual
  ])

  const informacoesLivro = {
    nome: 'Memórias Postumas de Brás Cubas',
    autor: 'Machado de Assis',
    totalCapitulos: 2,
    capa: brasCubasImg,
    capitulos: livro,
    textoAlternativo: 'Capa do livro Memórias Póstumas de Brás Cubas.',
  };
// Foi criada 3 funções para que a minha variável de estado fosse manipulada e chegar ao resultado desejado.
  const tocarFaixa = () => {
    tagAudio.current.play(); // Quando vai ser feita a conexão com usando a variável criada com função useRef, ela fica dentro de um campo chamado "current".
    definirTaTocando(true);
  };

  const pausarFaixa = () => {
    tagAudio.current.pause();
    definirTaTocando(false);
  };

  const tocarOuPausarFaixa = () => {
    if(taTocando) {
      pausarFaixa();
    } else {
      tocarFaixa();
    }
  };

  const avancarFaixa = () => {
    if(informacoesLivro.totalCapitulos === faixaAtual + 1) {
      definirFaixaAtual(0);
    } else {
      definirFaixaAtual(faixaAtual + 1)
    }
  }

  const retrocederFaixa = () => {
    if(faixaAtual === 0) {
      definirFaixaAtual(informacoesLivro.totalCapitulos - 1)
    } else {
      definirFaixaAtual(faixaAtual - 1)
    }
  }

  // O componente Capa foi chamado aqui porque ele interage com o HTML, pra isso pode ser chamada em formato de tag que fecha a si mesma.
  // As informações passadas para o componente se chama 'props'. 
  
  return ( 
    <>
      <Capa 
      imagemCapa={informacoesLivro.capa} 
      textoAlternativo={informacoesLivro.textoAlternativo}
      />
      <SeletorCapitulos capituloAtual={faixaAtual + 1} />
      <GerenciadorDeFaixa faixa={informacoesLivro.capitulos[faixaAtual]} referencia={tagAudio}/>
      <BotoesControle 
      taTocando={taTocando} 
      tocarOuPausarFaixa={tocarOuPausarFaixa}
      avancarFaixa={avancarFaixa}
      retrocederFaixa={retrocederFaixa}
      />
    </>
  );
}

export default App
