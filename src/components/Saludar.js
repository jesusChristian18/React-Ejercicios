import React from "react";
export default function Saludar(props){
    const {userInfo, saludarFn} = props;
    const {nombre = "Anonimo",apellido, edad, color} = userInfo;
    
    
    return (
        <div>
            <p>Hola {nombre}, tiene {edad} años, su color favorito es el {color}</p>
            <button onClick={()=> props.saludarFn(nombre,apellido,edad) }>Saludar</button>
        </div>
    );
}