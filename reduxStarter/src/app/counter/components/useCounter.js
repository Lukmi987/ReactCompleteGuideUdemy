import {useDispatch, useSelector} from "react-redux";
import {changeCounter} from "../actions";
import {ADD, DECREMENT, INCREMENT, SUBTRACT} from "../../../constants/keys";

const useCounter = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)

    return {
        counter,
        incrementCounter: () => dispatch(changeCounter(INCREMENT)),
        decrementCounter: () =>dispatch(changeCounter(DECREMENT)),
        addCounter: () =>dispatch(changeCounter(ADD)),
        subtractCounter: () =>dispatch(changeCounter(SUBTRACT))
    }
};

export default useCounter