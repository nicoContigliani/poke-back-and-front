


const poke = []
const url = 'https://pokeapi.co/api/v2/pokemon/';
const max = 150;
const min = 1


const cuerpoTabla = document.querySelector("#cuerpoTabla")



const luz = async () => {

    const cuerpoTabla = document.querySelector("#cuerpoTabla");
    const row = cuerpoTabla.insertRow()




    for (let i = 1; i < 11; i++) {
        const id = Math.round(Math.random() * (max - min) + min);
        const pokemons = await axios.get(`${url}${id}`);

        display(pokemons);
    }

}




const display = async (pokemons) => {



    const names = pokemons.data.name;
    const imagen = pokemons.data.sprites.front_default
    const bE = pokemons.data.base_experience;
    const heights = ` ${pokemons.data.height}`;
    const weights = ` ${pokemons.data.weight}`;

    const insertTypess = [];
    pokemons.data.types.forEach(types => insertTypess.push(`${types.type.name}`))
    const type = insertTypess.join(" ")

    const insertAbilities = []
    pokemons.data.abilities.forEach(ability => insertAbilities.push(`${ability.ability.name}`))
    const abiliti = insertAbilities.join(" ")

    cuerpoTabla.innerHTML += `<tr> <td>${names}</td> <td><img src="" alt="" srcset=${imagen}></td>  <td>${bE}</td> <td>${heights}</td> <td>${weights}</td> <td>${type}</td> <td>${abiliti}</td> <td><button id="${pokemons.data.id}" class="btn btn-secondary" onclick="">Catch</button></td>  </tr>`

    console.log(pokemons)

}



