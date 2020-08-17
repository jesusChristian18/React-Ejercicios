import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
/* import HolaMundo from "./components/HolaMundo";
import AdiosMundo from "./components/AdiosMundo"; */
import Saludar from "./components/Saludar";
function App() {
  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

  const user = {
    nombre: "christian",
    apellido: "zeva",
    edad: 22,
    color: "amarillo"
  };

  const saludarFn = (name, apellido,edad) => {
    console.log("Hola " +name +" "+ apellido +" tiene " +edad +" años");
    //mas rapido y mas optimo
    console.log(`Hola ${name} ${apellido}, tiene ${edad} años.`);
  };

  const encenderApagar = () => {
    //setStateCar(!stateCar);
    setStateCar(prevValue=>!prevValue);
  };

  const contarMas = () => {
    setContar(contar+1);
  };

  const contarMenos = () => {
   if(contar>0){
    setContar(contar-1);
   }else{
    alert("Llegaste a 0, ya no puedes disminuir mas");
   }
   
  };
 

  useEffect(() => {
   //.....
   console.log("Total: " +contar);
  }, [contar])
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Saludar userInfo = {user} saludarFn={saludarFn} ></Saludar>
      <h2>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h2>
      <button onClick={encenderApagar}>Encender / Apagar</button>
      <h3>contar: {contar}</h3>
      <div className="container">
        <div className= "row">
          <div className= "col">
          <button onClick={contarMas}>Aumentar</button>
          <button onClick={contarMenos}>Diminuir</button>
          </div>
        </div>
      </div>
      
      </header>
    </div>
  );
}

export default App;
