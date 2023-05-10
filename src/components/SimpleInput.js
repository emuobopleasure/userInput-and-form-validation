import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    // const [formIsValid, setFormIsValid] = useState(false)
    // const nameInputRef = useRef()
    // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)

    const { 
      value: enteredName,
      isValid: enteredNameIsValid,
      hasError: nameInputHasError,
      valueChangeHandler: nameChangeHandler,
      inputBlurHandler: nameBlurHandler,
      reset: resetNameInput
    } = useInput(value => value.trim() !== '')

    const {
      value: enteredEmail,
      isValid: enteredEmailIsValid,
      hasError: emailInputHasError,
      valueChangeHnadler: emailChangeHandler,
      inputBlurHandler: emailBlurHandler,
      reset: resetEmailInput
    } = useInput(value => value.includes('@'))

    let formIsValid = false

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true
    }

    const formSubmissionHandler = (e) => {
        e.preventDefault()

        if (!enteredNameIsValid) {
            return
        }

        // const enteredValue = nameInputRef.current.value
        resetNameInput()
        resetEmailInput()
    }

    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'

    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

    return (
      <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName} />
          { nameInputHasError && <p className="error-text">Name must not be empty</p> }
        </div>
        <div className={emailInputClasses}>
          <label htmlFor='email'>Your E-mail</label>
          <input type='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
          { emailInputHasError && <p className="error-text">Please enter a valid email</p> }
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default SimpleInput;
  