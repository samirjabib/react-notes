import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "styled-components"


//Configuracion para el material UI creando un high order component para envolver los hijos
export const AppTheme = ( {children }) => {
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            { children }
        </ThemeProvider>
    )
}