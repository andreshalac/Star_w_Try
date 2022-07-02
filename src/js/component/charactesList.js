import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { CardsPrincipal } from "./cardsPrincipal";

export const CharacterList = () => {
  const { store, actions } = useContext(Context);

  

  useEffect(() => {
    actions.listCharacters();
  }, []);

  return (
    <div className=" container mb-5  ">
      <h1 className="text-danger">People</h1>

       <div className="row flex-row flex-nowrap overflow-auto"> {/*usamos esto para crear lo de la barra horizontal */}
        {store.characters.map((item, index) => {

          
          return <CardsPrincipal key={index} title={item.name}
           description1={"Gender:"} result1={item.gender}
            description2={"Hair color:"} result2={item.hair_color}
             description3={"Eye color:"} result3={item.eye_color} index={index+1} path={"people"} img={`https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`}  />;
        })}
      </div>
    </div>
  );
};
