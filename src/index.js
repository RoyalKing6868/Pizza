import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const time = new Date().getHours();
const isOpen = (time<10 || time>22)?false:true;
const App = () =>{
  return (
    <div className='container'>
    <Header/>
    <Menu/>
    <Footer/>
    </div>
  )
}
const Header = () =>{
  return (
    <div className='header'>
      <h1>Pizzeria</h1>
    </div>
  )
}
const Menu =()=>{
  return(
    <div className='menu'>
      <h2>Our Menu</h2>
      <ul className='pizzas'>
      {pizzaData.map((pizza) => (
        <PizzaCard pizzaObj={pizza} key={pizzaData.name}/>
      ))}
      </ul>
    </div>
  )
}
const PizzaCard =(props) =>{
  return(
    <li className={`pizza ${props.pizzaObj.soldOut?"sold-out":""}`}>
      <img src={props.pizzaObj.photoName}/>
      <div>
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
      <span>{(props.pizzaObj.soldOut)?"Sold Out": props.pizzaObj.price}</span>
      </div>
    </li>
  )
}
const Footer =()=>{
  return (
    <div>
    {isOpen?(
      <div className='order'>
          <p>It's {time} we are currently Open</p>
          <button className='btn'>Order Now</button>
      </div>
    ):
      <div>
        <p>Sorry It's {time} We Are Closed Now, Opening time is 10 am :)</p>
      </div>
    }
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
