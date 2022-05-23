import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState} from 'react'  
import Login from "./Login/Login";
import MainPage from "./Main/MainPage";
import FormBuilder from "./FormBuilder/FormBuilder";
import FormRender from "./FormBuilder/FormRender";

function App() {

  const [formInput,setFormInput]=useState();


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
            element={<MainPage formInput={formInput}></MainPage>}
          ></Route>
           <Route
            path="/formBuilder"
            caseSensitive={false}
            element={<FormBuilder setFormInput={setFormInput}></FormBuilder>}
          ></Route>
           <Route
            path="/formRender"
            caseSensitive={false}
            element={<FormRender formInput={formInput}></FormRender>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
