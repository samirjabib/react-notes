import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import TasksList from "./components/TasksList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
                            {/* 

                            BrowserRoutes:Este metodo nos permite tener la UI sincronizada con el URL,
                            Routes: Este metodo nos sirve para anidar un grupo de Routes.

                            Route: Nos sirve para crear el url con la propiedad path y con el element le decimos que metodo va a renderizar.

                          URL dinamica
                          <Route path="/edit-task/:id" element={<TaskForm />} />
                          cuando ponemos en el path /: Esto nos permite declarar una variable
                          que sera la que se asignara dinamicamente para poder usar PAG de manera dinamica
                          con el URL. 




                            */ }
          <Routes>
            <Route path="/" element={<TasksList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
