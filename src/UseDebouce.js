
import React, { useEffect,useState } from "react";
export function useDebounce(value,delay = 500){

const [useDebouce,setUseDebouce] = useState("") ;

useEffect(()=>{
    const timer = setTimeout(()=> setUseDebouce(value),1000) ;
    return ()=> clearTimeout(timer) ;
},[value,delay])


return useDebouce ;
}