import logo from './logo.svg';
import './App.css';

function App() {
  const Products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name: 'PDF', price:'$80.99'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Produc name={Products[0].name} price={Products[0].price}></Produc>

        <Person name="Shuvo" gfname="Nomita"></Person>
        <Person name="Lemon" gfname="Ritu"></Person>
        <Person name="Hridoy" gfname="Onamika"></Person>
      </header>
    </div>
  );
}

function Produc(props){
  const producStyle={
    border:'1px solid blue',
    borderRadius:'5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }

return (
  <div style={producStyle}>
    <h2>{props.name}</h2>
    <h1>{props.price}</h1>
    <button>Buy Now</button>
  </div>
)
}

function Person (props) {
  const personStyle={
    border:'2px solid red',
    margin:'10px',
  
  }
  return (
  <div style={personStyle}>
   <h1>Nayok:{props.name}</h1>
    <h3> Naika:{props.gfname}</h3>
  </div>
  )
}

export default App;
