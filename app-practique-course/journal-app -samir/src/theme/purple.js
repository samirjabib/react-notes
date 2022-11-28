import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


//Aqui seteamos la configuracion del tema principal de material ui, podemos modificarlo como queramos.

export const  purpleTheme = createTheme({
    palette:{
        primary:{
            main:'#262254'
        },
        secondary: {
            main:'#543884'
        },
        error:{
            main:red.A400,
        },
    },
})