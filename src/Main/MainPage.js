import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormRender from "../FormBuilder/FormRender";
import QuestionBox from "../QuestionForm.js/QuestionBox";

export default function MainPage({ formInput }) {
  let navigate = useNavigate();
  console.log(formInput + "MAIN");

  function handleBuild(params) {
    navigate("/formBuilder", { replace: true });
  }

  // <form id={params.fb-render}></form>

  return (
    <>
      <h1>Main Page</h1>
      <Button onClick={handleBuild}>Build Form</Button>
      <div>
        <QuestionBox></QuestionBox>
         <div
          className="content"
          dangerouslySetInnerHTML={{ __html: formInput }}
        ></div> 
      </div>
      <FormRender formInput={formInput}></FormRender>
    </>
  );
}
