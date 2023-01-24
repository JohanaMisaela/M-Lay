import { BrowserRouter, Route, Routes } from "react-router-dom";
import Acceuil from "./pages/Acceuil";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Acceuil/>} />
              
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
