import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency){
    const[data,setData]=useState({});
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/4622c7120e48ac2e647ec4d6/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res.conversion_rates))
        console.log(data);
    },[currency]);
    return data;
}


//we designed custom hooks here