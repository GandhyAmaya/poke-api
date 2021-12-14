const button = document.getElementById("button_battle");

async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
}

function updatePokemon(firstPokemon, secondPokemon) {
  window.image.setAttribute("src", firstPokemon.sprites.front_default);
  window.image2.setAttribute("src", secondPokemon.sprites.front_default);
  window.pokemon.textContent = firstPokemon.name;
  window.pokemon2.textContent = secondPokemon.name;
  window.typePokemon.textContent = firstPokemon.types.map(
    (type) => type.type.name
  );
  window.typePokemon2.textContent = secondPokemon.types.map(
    (type) => type.type.name
  );

  getPokemonUrl(firstPokemon, secondPokemon);
}

async function battlePokemon(firstPokemon, pokemon2_type, host_pk2) {
  let poke_1 = 0;
  let poke_2 = 0;
  console.log("suma", poke_1, poke_2);
  //double_damage_from
  for (let index = 0; index < host_pk2.length; index++) {
    let j = 0;
    for (
      let k = 0;
      k < pokemon2_type.damage_relations.double_damage_from.length;
      k++
    ) {
      if (j === 0 && firstPokemon.types.length < 2) {
        if (
          firstPokemon.types[j].type.name ===
          pokemon2_type.damage_relations.double_damage_from[k].name
        ) {
          j = j + 1;
          if (index === 1) {
            console.log("double_damage_from1");
            poke_1 = poke_1 + 70;
            poke_2 = poke_2 - 70;
          }
        }
      } else if (
        firstPokemon.types.length > 1 &&
        firstPokemon.types.length <= 2
      ) {
        if (
          firstPokemon.types[j].type.name ===
          pokemon2_type.damage_relations.double_damage_from[k].name
        ) {
          console.log("double_damage_from2");
          poke_1 = poke_1 + 70;
          poke_2 = poke_2 - 70;
        }
      }
    }
  }
  //double_damage_to
  for (let index = 0; index < host_pk2.length; index++) {
    let j = 0;
    for (
      let k = 0;
      k < pokemon2_type.damage_relations.double_damage_to.length;
      k++
    ) {
      if (j === 0) {
        if (
          firstPokemon.types[0].type.name ===
          pokemon2_type.damage_relations.double_damage_to[k].name
        ) {
          j = j + 1;
          if (index === 1) {
            console.log("double_damage_to1");
            poke_1 = poke_1 - 70;
            poke_2 = poke_2 + 70;
          }
        }
      } else if (
        firstPokemon.types.length > 1 &&
        firstPokemon.types.length <= 2
      ) {
        if (
          firstPokemon.types[j].type.name ===
          pokemon2_type.damage_relations.double_damage_to[k].name
        ) {
          console.log("double_damage_to2");
          poke_1 = poke_1 - 70;
          poke_2 = poke_2 + 70;
        }
      }
    }
  }
  //half_damage_from
  for (let index = 0; index < host_pk2.length; index++) {
    let j = 0;
    for (
      let k = 0;
      k < pokemon2_type.damage_relations.half_damage_from.length;
      k++
    ) {
      console.log("hola", j);
      if (j === 0) {
        if (
          firstPokemon.types[0].type.name ===
          pokemon2_type.damage_relations.half_damage_from[k].name
        ) {
          j = j + 1;
          if (index === 1) {
            console.log("half_damage_from1");
            poke_1 = poke_1 + 30;
            poke_2 = poke_2 - 30;
          }
        }
      } else if (
        firstPokemon.types.length > 1 &&
        firstPokemon.types.length <= 2
      ) {
        if (
          firstPokemon.types[j].type.name ===
          pokemon2_type.damage_relations.half_damage_from[k].name
        ) {
          console.log("half_damage_from2");
          poke_1 = poke_1 + 30;
          poke_2 = poke_2 - 30;
        }
      }
    }
  }
  //half_damage_to
  for (let index = 0; index < host_pk2.length; index++) {
    let j = 0;
    for (
      let k = 0;
      k < pokemon2_type.damage_relations.half_damage_to.length;
      k++
    ) {
      if (j === 0) {
        if (
          firstPokemon.types[0].type.name ===
          pokemon2_type.damage_relations.half_damage_to[k].name
        ) {
          j = j + 1;
          if (index === 1) {
            console.log("half_damage_to1");
            poke_1 = poke_1 - 30;
            poke_2 = poke_2 + 30;
          }
        }
      } else if (
        firstPokemon.types.length > 1 &&
        firstPokemon.types.length <= 2
      ) {
        if (
          firstPokemon.types[j].type.name ===
          pokemon2_type.damage_relations.half_damage_to[k].name
        ) {
          console.log("half_damage_to2");
          poke_1 = poke_1 - 30;
          poke_2 = poke_2 + 30;
        }
      }
    }
  }
  //no_damage_from
  for (let index = 0; index < host_pk2.length; index++) {
    for (
      let k = 0;
      k < pokemon2_type.damage_relations.no_damage_from.length;
      k++
    ) {
      if (j === 0) {
        if (
          firstPokemon.types[0].type.name ===
          pokemon2_type.damage_relations.no_damage_from[k].name
        ) {
          j = j + 1;
          if (index === 1) {
            console.log("no_damage_from1");
            poke_1 = poke_1 + 0;
            poke_2 = poke_2 + 0;
          }
        }
      } else if (
        firstPokemon.types.length > 1 &&
        firstPokemon.types.length <= 2
      ) {
        if (
          firstPokemon.types[j].type.name ===
          pokemon2_type.damage_relations.no_damage_from[k].name
        ) {
          console.log("no_damage_from2");
          poke_1 = poke_1 + 0;
          poke_2 = poke_2 + 0;
        }
      }
    }
  }
  //no_damage_to
  for (let index = 0; index < host_pk2.length; index++) {
    for (
      let k = 0;
      k < pokemon2_type.damage_relations.no_damage_to.length;
      k++
    ) {
      if (j === 0) {
        if (
          firstPokemon.types[0].type.name ===
          pokemon2_type.damage_relations.no_damage_to[k].name
        ) {
          j = j + 1;
          if (index === 1) {
            console.log("no_damage_to1");
            poke_1 = poke_1 + 0;
            poke_2 = poke_2 + 0;
          }
        }
      } else if (
        firstPokemon.types.length > 1 &&
        firstPokemon.types.length <= 2
      ) {
        if (
          firstPokemon.types[j].type.name ===
          pokemon2_type.damage_relations.no_damage_to[k].name
        ) {
          console.log("no_damage_to2");
          poke_1 = poke_1 + 0;
          poke_2 = poke_2 + 0;
        }
      }
    }
  }
  //result_pokemon1 =
  console.log("suma", poke_1, poke_2);
  // pokemonsWinner(poke_1,poke_2);
}

async function getPokemonUrl(firstPokemon, secondPokemon) {
  const host_pk2 = secondPokemon.types.map((type) => type.type.url);
  for (let index = 0; index < host_pk2.length; index++) {
    if (index === 0) {
      console.log("Entre");
      var array1 = await getPokemonType(host_pk2[index]);

      console.log("pokeee1", array1);
    } else {
      console.log("Entre");
      var array2 = await getPokemonType(host_pk2[index]);
    }
    var result = array1 + array2;
    //array1.push(array2)
    console.log("pokeee2", result);
    /*  for (let j = 0; j < host_pk2.length; j++) {
                        var pokemon2_type = await getPokemonType(host_pk2[j]);
                    } */
  }
  battlePokemon(firstPokemon, array1, host_pk2);
}

async function getPokemonType(typeUrl) {
  const response = await fetch(typeUrl);
  const data = await response.json();
  return data;
}

async function init() {
  const firstPokemon = await getPokemon(5);
  const secondPokemon = await getPokemon(5);
  window.pokemon.textContent = firstPokemon.name;
  window.pokemon2.textContent = secondPokemon.name;
  updatePokemon(firstPokemon, secondPokemon);
}

window.search.addEventListener("change", async () => {
  const pokemon = await getPokemon(window.search.value);
  const pokemon2 = await getPokemon(window.search2.value);
  updatePokemon(pokemon, pokemon2);
});
