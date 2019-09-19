import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';

const store = createStore(tasksReducer);

//스토어를 속성에 전달
render( 
    <Provider store={store}> 
        <TodoApp />
    </Provider>, 
    document.getElementById('root')
);