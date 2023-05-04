import { useState } from "react"

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched

    const valueChangeHnadler = (e) => {
        setEnteredValue(e.target.value)
        if (e.target.value.trim() !== '') {
        }
    }

    const inputBlurHandler = (e) => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHnadler,
        inputBlurHandler,
        reset
    }
}

export default useInput