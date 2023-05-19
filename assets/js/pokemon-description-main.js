
const card = document.getElementById('card')

const maxRecords = 151
const limit = 1;
let offset = 0;

function convertPokemonCard(pokemon){
    return `
    
        <header class="icons ">
            <span><a href="../index.html"><i class="fa-solid fa-arrow-left" ></i></a></span>
           <span><i class="heart fa-sharp fa-regular fa-heart" ></i></span> 
        </header>
   
        <div class="focus-in-contract-bck">
            <h1 class="pad-0-2">${pokemon.name}</h1>
        </div>
     
        <div class="content-display-type">
            <div class="box-display-type">
            ${pokemon.types.map((type) => `<li class="type display-type ${type}">${type}</li>`).join('')}
                
            </div>
            <div>
                <span class="types">#${pokemon.number}</span>
            </div>            
        </div>
      
        <div class="content-photo animation-span">
            <img class="photo" src="${pokemon.photo}" alt="${pokemon.name}" srcset="">
        </div>
     
        <div class=" content-bottom">
               
             <div class="content-bottom-list-01 ">
                 <span>About</span>
                 <span>Base Status</span>
                 <span>Evolution</span>
                 <span>Moves</span>
             </div>
        
            <div class="content-bottom-list-02 ">
            
                <div class="content-coll-01">
                    <span>Species</span>
                    <span>Height</span>
                    <span>weight</span>
                    <span>Abilities</span>
                </div>
          
                <div class="content-coll-02 ">
                    <span>${pokemon.species}</span>
                    <span>2' 3,6* (${pokemon.height} cm) </span>
                    <span>15,2 lbs (${pokemon.weight} Kg)</span>
                    <span>${pokemon.ability}</span>
                </div>
            </div>            
          
            <h3 class="sub-title">Breeding</h3>

            <div class="content-bottom-list-03">
                <div class="content-coll-03">
                    <span>Gender</span>
                    <span>Egg Groups</span>
                    <span>Egg Cycle</span>
                </div>
                <div class="content-coll-04">
                   <div class="content-row-coll">
                        <div><i class="fa-solid fa-mars"></i> 87,5%</div>
                        <div><i class="fa-solid fa-mercury"></i> 12,5%</div>
                   </div> 
                   <div class="content-coll">
                        <span>Monster</span>
                        <span>Grass</span>
                   </div>                    
                    
                </div>
            </div>
        </div>      
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons) => {
        const newHtml = pokemons.map(convertPokemonCard).join('')
        card.innerHTML += newHtml 
    })
   
}

loadPokemonItens(offset, limit)


