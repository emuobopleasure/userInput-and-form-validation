import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('')
    const [enteredNameTouched, setEnteredNameTouched] = useState(false)
    // const [formIsValid, setFormIsValid] = useState(false)
    // const nameInputRef = useRef()
    // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)

    const enteredNameIsValid = enteredName.trim() !== ''
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

    let formIsValid = false

    if (enteredNameIsValid) {
        formIsValid = true
    }

    const nameInputChangeHandler = (e) => {
        setEnteredName(e.target.value)
        if (e.target.value.trim() !== '') {
        }
    }

    const nameInputBlurHandler = (e) => {
        setEnteredNameTouched(true)

        if (enteredName.trim() === '') {
            
        }
    }

    const formSubmissionHandler = (e) => {
        e.preventDefault()

        setEnteredNameTouched(true)

        if (!enteredNameIsValid) {
            return
        }

        // const enteredValue = nameInputRef.current.value
        setEnteredName('')
        setEnteredNameTouched(false)
    }

    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'
    return (
      <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName} />
          { nameInputIsInvalid && <p className="error-text">Name must not be empty</p> }
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default SimpleInput;
  