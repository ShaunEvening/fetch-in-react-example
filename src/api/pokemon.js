export const fetchPokemon = id =>
  // console.log('fetchpoke called', id)
  fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
  .then(res => res.json()).then(res=>{
    console.log('fetchpoke called-res:', res)
    return res
  })
