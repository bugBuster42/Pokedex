import './App.css';
import PokemonCard from "./components/PokemonCard"
import { useState } from "react";


function App() {


  const [pokemonList, setPokemonList] = useState([
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ]);


  const pokemon = pokemonList[pokemonIndex];
  
  const [pokemonIndex, setPokemonIndex] = useState(0);


  const handleRename = () => {
    const newPokemonList = [...pokemonList];
    newPokemonList[pokemonIndex] = {
      ...newPokemonList[pokemonIndex],
      name: "Super Pikachu"
    };
    setPokemonList(newPokemonList);
  };


  return (
    <div>
     <PokemonCard pokemon={pokemon}/>
     {pokemonIndex > 0 ? <button onClick={() =>setPokemonIndex(pokemonIndex -1)}>Pokemon précedent</button> : null}
     {pokemonIndex < pokemonList.length - 1 ?  <button onClick={() =>setPokemonIndex(pokemonIndex +1)}>Pokemon suivant</button> : null }
     <button onClick={handleRename}>Renomme le en : Super Pikachu</button>
    </div>
  );

  

}

export default App;
