import React from "react";
import FormToDo from "./FormToDo";
import TaskList from './TaskList';

const Container = () => {
    return (
        <div>
        <FormToDo/>
        <TaskList/>
        </div>
    );
}

export default Container;