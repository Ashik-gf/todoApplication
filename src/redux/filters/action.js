import { COLORCHNGED, STATUSSCHANGED } from "./actionType"

export const colorChanged =(color, chnagedType)=>{
    console.log(color, chnagedType)
    return{
        type: COLORCHNGED,
        playload:{
            color,
            chnagedType
        }
    }
}
 export const statusChanged =(status)=>{
    return{
        type: STATUSSCHANGED,
        playload:status,
    }
}