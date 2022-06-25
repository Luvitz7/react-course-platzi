import React ,{useState, useContext} from 'react';
import { TodoContext } from '../TodoContext';

export const TodoIcon = (status, IconValue) => {
    const {
        TodoFilter,
    } = useContext(TodoContext);
    console.log(TodoFilter);
    const [IconValue, setIconValue] = useState(IconValue);
    const [iconStatus, seticonStatus] = useState(false)

    return (
        <span className={`icon icon-Check ${props.complete && 'icon-check--active'}`} onClick={props.onComplete}>
            {IconValue}
        </span>
    )
}
