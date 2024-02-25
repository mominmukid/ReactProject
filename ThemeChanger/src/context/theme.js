import { useContext,createContext } from "react";

export const ThemeContext=createContext({
   themode:'light',
   DarkTheme :()=>{},
   LightTheme :()=>{}
})

export const ThemeProvider=ThemeContext.Provider;

export default function useTheme(){
  return  useContext(ThemeContext);
}
