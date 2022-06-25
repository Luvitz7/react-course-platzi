import './TodoList.css'

export function TodoList (props) {
    return (
        <section className='TodoList'>
            <ul className='elementoTodo'>
                {props.children}
            </ul>
        </section>
    );
};

