import './TodoItem.css'

export function TodoItem(props) {
    return (
        <li className={`itemTodo ${props.complete && 'itemTodo-complete'}`}>
            <span className={`icon icon-Check ${props.complete && 'icon-check--active'}`} onClick={props.onComplete}>√</span>
            <p className={`task-p ${props.complete && 'task-p--complete'}`}>{props.text}</p>
            <span className='icon icon-delete' onClick={props.onDelete}>X</span>
        </li>
    );
};

