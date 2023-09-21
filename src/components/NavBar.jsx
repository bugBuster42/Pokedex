import PropTypes from 'prop-types';

function NavBar ({pokemonIndex,setPokemonIndex,pokemonList}) {
return (
    <div>
    {pokemonIndex > 0 ? <button onClick={() =>setPokemonIndex(pokemonIndex -1)}>Pokemon précedent</button> : null}
     {pokemonIndex < pokemonList.length - 1 ?  <button onClick={() =>setPokemonIndex(pokemonIndex +1)}>Pokemon suivant</button> : null }
    </div>
)
}

NavBar.propTypes = {
    pokemonIndex: PropTypes.number.isRequired,
    pokemonList: PropTypes.array.isRequired,
    setPokemonIndex: PropTypes.func.isRequired,
}
export default NavBar