import { useEffect, useState } from "react";
import type { PokemonsType } from "../../types/PokemonType";

function Pokemons() {
  const [pokemonsJson, setPokemonJson] = useState<PokemonsType[] | null>(null);

  // recupérer des pokemons (useEffect / fetch)
  useEffect(() => {
    // exécuté lors du montage du composant
    fetch("https://tyradex.vercel.app/api/v1/pokemon")
      .then((reponseAPI) => {
        return reponseAPI.json();
      })
      .then((datasJson) => {
        setPokemonJson(datasJson);
      });
  }, []);

  // de les afficher (map)
  return (
    <>
      <h2>Pokemons</h2>
      <section>
        {pokemonsJson === null
          ? ""
          : pokemonsJson
              .filter((pokemon) => {
                return pokemon.generation === 2;
              })
              .map((filteredPokemon) => {
                return (
                  <h3 key={filteredPokemon.pokedex_id}>
                    {filteredPokemon.name.fr} ({filteredPokemon.generation})
                  </h3>
                );
              })}
      </section>
    </>
  );
}

export default Pokemons;
