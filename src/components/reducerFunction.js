export const ACTIONS  = {
    OPERATION: "operation",
    RESET: "reset",
    ADD: "add",
    EVALUATE: "evaluate"
  }

  let resultEv = null
  

export function reducer (state, {type, payload}) {
    switch(type){
      case ACTIONS.ADD:
          if(state.overwrite === true){
            if(resultEv){
              resultEv = null
              return { 
               ...state,
                currentInput: payload.digit
              }
            }
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
          if(payload.digit === "0" && state.currentInput === null) {
            return {
              ...state,
              currentInput: null,
            }
          }
          return {
            ...state,
            currentInput: `${state.currentInput || "" }${payload.digit}`,
            overwrite: true
          }   
      case ACTIONS.RESET:
          resultEv = null
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
            resultEv = (+ state.previousInput) + (+ state.currentInput)
              return{
                  ...state,
                  currentInput: resultEv.toString(),
                  operation: null,
                  previousInput: null,
              }
          case "-":
            resultEv = (+ state.previousInput) - (+ state.currentInput)
            return {
                ...state,
                  currentInput: resultEv.toString(),
                  operation: null,
                  previousInput: null
            }
          case "x":
            resultEv = (+ state.previousInput) * (+ state.currentInput)
            return {
                ...state,
                  currentInput: resultEv.toString(),
                  operation: null,
                  previousInput: null
            }
          case "/":
            resultEv = (+ state.previousInput) / (+ state.currentInput)
            return {
                ...state,
                  currentInput: resultEv.toString(),
                  operation: null,
                  previousInput: null
            }
          default:
            return state
        }
      default:
        return state 
    }
  
  }