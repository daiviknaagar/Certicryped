const trialFunc = (num)=>{
    console.log(5 * num);
}

const variables = (state = { trialFunc, variable_1: null }, action) => {
    switch (action.type) {
      case 'UPDATE_VARIABLE_1':
        
        return { ...state, variable_1: action?.data };
      
      default:
        return state;
    }
  };
  
  export default variables;
  