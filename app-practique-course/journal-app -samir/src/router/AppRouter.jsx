import { JournalPage } from "../journal/pages";
import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from "../auth";



export const AppRouter = () => {
    return(
        <Routes>
        {/*Login y Registro */}
            <Route path="/auth/*"  element={<AuthRoutes/>}/> 


        { /* Journal App  */}
            <Route path = '/*' element={<JournalPage/>}/>
        </Routes>
    )
}