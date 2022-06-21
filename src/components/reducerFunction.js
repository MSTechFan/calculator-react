export const ACTIONS  = {
    OPERATION: "operation",
    RESET: "reset",
    ADD: "add",
    EVALUATE: "evaluate"
  }
  

export function reducer (state, {type, payload}) {
    switch(type){
      case ACTIONS.ADD:
          if(state.overwrite === true){
            if(state.currentInput.includes(".")){
              if(payload.digit === "."){
                return state
              }
              return {
                ...state,
                currentInput: `${state.currentInput || "" }${payload.digit}`,
              }
            }
          }
          if(payload.digit === "0") {
            return {
              ...state,
              currentInput: null,
              previousInput: null
            }
          }
          return {
            ...state,
            currentInput: `${state.currentInput || "" }${payload.digit}`,
            overwrite: true
          }   
      case ACTIONS.RESET:
          return {
            ...state,
            currentInput: null,
            previousInput: null,
            operation: null,
            overwrite: false,
          }
      case ACTIONS.OPERATION:
          let inputSaved = state.currentInput
          return {
            ...state,
            previousInput: inputSaved,
            currentInput: null,
            operation: `${payload.digit}`,
            overwrite: false
          }
  
      case ACTIONS.EVALUATE:
        switch(state.operation){
          case "+":
              let res = (+ state.previousInput) + (+ state.currentInput)
              return{
                  ...state,
                  currentInput: res,
                  operation: null,
                  previousInput: null
              }
  
          case "-":
  
          case "x":
  
          case "/":
  
          default:
            return state
        }
  
      default:
        return state 
    }
  
  }