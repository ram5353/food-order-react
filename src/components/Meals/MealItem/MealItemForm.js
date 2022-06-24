import { useRef, useState } from "react"
import Input from "../../UI/Input"
import classes from "./MealItemForm.module.css"

const MealItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault()
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount
        if (enteredAmount.trim().length === 0 || 
            enteredAmountNumber <1 || enteredAmount > 5) {
            setAmountIsValid(false)
            return;
        }

        props.onAddToCart(enteredAmountNumber)
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef} label="Amount" input={{
                id: 'amount_' + props.id,
                min: '1',
                max: '5',
                defaultValue: '1',
                step: '1',
                type: 'number'
            }} />
            <button>
                + Add
            </button>
            {!amountIsValid && <p>please enter a valid number(1 - 5)</p>}
        </form>
    )
}

export default MealItemForm