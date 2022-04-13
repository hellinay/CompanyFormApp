import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";


const database = [
  {
    useremail: "user1",
    password: "pass1",
  },
  {
    useremail: "user2",
    password: "pass2",
  },
];

const errors = {
  email: "invalid user email",
  pass: "invalid password",
};

function Login(params) {
  let navigate = useNavigate();
  const emailInputRef = useRef();

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrorMessage = (email) =>
    email === errorMessages.email && (
      <p className="error">{errorMessages.message}</p>
    );

  //const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  //const passwordClasses = passwordHasError
  //? "form-control invalid"
  // : "form-control";

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
    var { email, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.useremail === email.value);

    console.log(userData);
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ email: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Useremail not found
      setErrorMessages({ email: "email", message: errors.email });
    }

    navigate("./main", { replace: true });
    // console.log(user.useremail)
    console.log(email.value);
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h3 className="title">Sign In</h3>
        <div className="box-container">
          <div className="input-container">
            <label htmlFor="email">Useremail </label>
            <input type="text" name="email" ref={emailInputRef} required />
            {renderErrorMessage("email")}
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="password">Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input className="button-submit" type="submit" />
        </div>
        {isSubmitted && <p>User is successfully logged in</p>}
      </form>
    </div>
  );

  return (
    <body>
      <div className="login-form">
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </body>
  );
}

export default Login;
