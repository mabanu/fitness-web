import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CardioPage from "./components/pages/CardioPage";
import NutritionPage from "./components/pages/NutritionPage";
import StretchPage from "./components/pages/StretchPage";
import WorkoutPage from "./components/pages/WorkoutPage";
import NavBar from "./components/navBar/NavBar";


function App() {

  return (
    <BrowserRouter>
        <>
            <NavBar />
        </>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cardio' element={<CardioPage />} />
            <Route path='/nutrition' element={<NutritionPage />} />
            <Route path='/stretch' element={<StretchPage />} />
            <Route path='/workout' element={<WorkoutPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
