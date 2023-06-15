import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FoodTracksPage } from "./pages/FoodTracksPage";
import { FoodTrackFormPage } from "./pages/FoodTrackFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <BrowserRouter>
            <div className="md:container md:mx-auto">
                <Navigation />
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<FoodTracksPage />} />
                    <Route
                        path="/add-tracking"
                        element={<FoodTrackFormPage />}
                    />
                    <Route
                        path="/foodtracks/:id"
                        element={<FoodTrackFormPage />}
                    />
                </Routes>
                <Toaster />
            </div>
        </BrowserRouter>
    );
}

export default App;
