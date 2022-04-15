import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import QuestionBox from "../QuestionForm.js/QuestionBox";

function MainPage(params) {
  let navigate = useNavigate();

  function handleBuild(params) {
    navigate("/formBuilder", { replace: true });
  }


  return (
    <>
      <h1>Main Page</h1>
      <form id={params.fb-render}></form>
      <Button onClick={handleBuild}>Build Form</Button>
      <QuestionBox></QuestionBox>
    </>
  );
}

export default MainPage;
