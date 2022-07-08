import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

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

        <Counter></Counter>
        <Users></Users>

        <Produc name={Products[0].name} price={Products[0].price}></Produc>
        <Produc name={Products[1].name} price={Products[1].price}></Produc>
        <Produc name={Products[2].name} price={Products[2].price}></Produc>

        <Person name="Shuvo" gfname="Nomita"></Person>
        <Person name="Lemon" gfname="Ritu"></Person>
        <Person name="Hridoy" gfname="Onamika"></Person>
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data=> setUsers(data));
  })
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(users => <li>{unstable_renderSubtreeIntoContainer.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  
  const [count, setCount] = useState(10);
  const handelIncrease = () => {
    setCount(count + 1);
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ () =>setCount(count + 1)}>Increase</button>
      <button onClick={ () =>setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Produc(props){
  const producStyle={
    border:'1px solid blue',
    borderRadius:'5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '10px'
  }

return (
  <div style={producStyle}>
    <h3>{props.name}</h3>
    <h5>{props.price}</h5>
    <button>Buy Now</button>
  </div>
)
}

function Person (props) {
  const personStyle={
    border:'2px solid red',
    margin:'10px',
    width: '500px'
  }
  return (
  <div style={personStyle}>
   <h1>Nayok:{props.name}</h1>
    <h3> Naika:{props.gfname}</h3>
  </div>
  )
}

export default App;
