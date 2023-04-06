import logo from './logo.svg';
import './App.css';
import Header from "./Header"


const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook', 
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];
const precos = produtos.map(preco=> +preco.preco.replace("R$ ", "")).filter(elemento=>elemento>1500)
  const novoObjeto = []
    precos.forEach((element,index)=>{
      if(element > 1500){
        novoObjeto.push(produtos[index])
      }
    });

function App() {
  
  return (
      <div>
        <Header />
      {novoObjeto.map(({id, nome, preco, cores})=>
        <div key={id}> 
          <h1>{nome}</h1>
          <p>Preço : {preco}</p>
          <ol>
            {cores.map(cor=><li key={cor} style={{backgroundColor : cor, color: "white"}}>{cor}</li>)}
          </ol> 
        </div>
      )}
    </div>
    )
}

export default App;
