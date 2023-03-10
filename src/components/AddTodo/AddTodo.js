import React, {useState} from 'react'
import {v1 as uuid} from 'uuid'
import { Row, Col, Button, FormControl } from 'react-bootstrap'
import s from './AddTodo.module.css'

function AddTodo({todo, setTasksAndSave}) {

    const [value, setValue] = useState('')

    function saveTodo() {
        if(value) {
            setTasksAndSave(
            [...todo, {
                id: uuid(),
                title: value,
                status: true
            }]
        )
        setValue('')
        }
    }

    return (
        <Row>
            <Col className={s.addTodoForm}>
                <FormControl placeholder="Введите задачу" value={value} onChange={ (e)=>setValue(e.target.value)} />
                <Button className={s.btn} variant="secondary" onClick={saveTodo}>Сохранить</Button>
            </Col>
        </Row>
    )
}

export default AddTodo