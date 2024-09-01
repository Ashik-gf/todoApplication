import { COLORCHNGED, STATUSSCHANGED } from "./actionType";
import { initialStates } from "./initialState";

const filterReducer =( state=initialStates, action)=>{
  switch (action.type) {
    case STATUSSCHANGED:
        return {
          ...state,
          status: action.playload,
        }
case COLORCHNGED:
  const {color, chnagedType}=action.playload
  // inside switch
  console.log(color, chnagedType);
  switch (chnagedType) {
    case "added":
      return{
        ...state,
        colors:[
          ...state.colors,
          color,
        ]
      }
  case "removed":
    return{
      ...state,
      colors: state.colors.filter(existingColor=> existingColor !== color)
    }
    default:
      return state
  }
// inside switch stped

    default:
      return state
}  
}
 export default  filterReducer;