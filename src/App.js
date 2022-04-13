import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login/Login";
import MainPage from "./Main/MainPage";
import FormBuilder from "./FormBuilder/FormBuilder";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            caseSensitive={false}
            element={<Login></Login>}
          ></Route>
          <Route
            path="/main"
            element={<MainPage></MainPage>}
          ></Route>
           <Route
            path="/formBuilder"
            caseSensitive={false}
            element={<FormBuilder></FormBuilder>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
