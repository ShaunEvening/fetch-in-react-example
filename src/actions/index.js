export const INPUT_CHANGE = 'INPUT_CHANGE';
export const GET_POKE = "GET_POKE"
export const SEND_POKE = "SEND_POKE"


export const inputChange = value => ({
  type: INPUT_CHANGE,
  payload: value,
});


export const getPoke = value => ({
  type: GET_POKE,
  payload: value,
});



export const sendPoke = value => {
  console.log(value);
return{
  type: SEND_POKE,
  payload: value,
}};
