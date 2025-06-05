import { createContext,useContext } from "react";

export const ThemeContext=createContext({
    themeMode : "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext);
}

//this is custom hook now no need for importing 2 useContext and ThemeContext just import useTheme