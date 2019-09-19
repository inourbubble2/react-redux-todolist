import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';
import {inputTask, addTask} from '../actions/tasks';


function mapStateToProps({task, tasks}) { //스토어에 있는 task, tasks 라는 상태를 속성에 전달
    return {
        task, 
        tasks
    };
}

function mapDispatchToProps(dispatch) { //액션을 디스패치하는 함수를 속성에 전달
    return {
        addTask(task) { 
            dispatch(addTask(task));
        },
        inputTask(task) {
            dispatch(inputTask(task));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);