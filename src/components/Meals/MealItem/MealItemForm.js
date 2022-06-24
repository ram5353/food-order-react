import Input from "../../UI/Input"
import classes from "./MealItemForm.module.css"

const MealItemForm = (props) => {
    return (
        <form className={classes.form}>
            <Input label="Amount" input={{
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
        </form>
    )
}

export default MealItemForm