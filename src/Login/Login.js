import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import "./Login.module.css";



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

const state = {
  users: []
};


const errors = {
  email: "invalid user email",
  pass: "invalid password",
};

function Login(params) {


  async function componentDidMount() {
    const response = await fetch('/users');
    const body = await response.json();
    this.setState({clients: body});
  }


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

  let emailHandler = ( email ) => {

    // don't remember from where i copied this code, but this works.
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ( re.test(email) ) {
        // this is a valid email address
        // call setState({email: email}) to update the email
        // or update the data in redux store.
    }
    else {
      <p className="error">{errorMessages.message}</p>
        // invalid email, maybe show an error to the user.
    }

}

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
   <div class={classes.bodyForm}>
    <div class={classes.loginForm}>
      <form  onSubmit={handleSubmit}>
        <h3 class={classes.title}>Sign In</h3>
          <div class={classes.inputContainer}>
            <label htmlFor="email">User email </label>
            <input type="text" name="email" ref={emailInputRef} onChange={emailHandler} required />
            {renderErrorMessage("email")}
          </div>
      
        <div class={classes.inputContainer}>
          <label htmlFor="password">Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div class={classes.buttonContainer}>
          <button class={classes.buttonSubmit} type="submit" >Log In</button>
        </div>
        {isSubmitted && <p>User is successfully logged in</p>}
      </form>
    </div>
    </div>
 
  );

  return (
    <body>
      <div class="login-form">
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </body>
  );
}

export default Login;
