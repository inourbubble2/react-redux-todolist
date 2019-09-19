export const inputTask = (task) => ({ //태스크를 추가하는 함수
    type: 'INPUT_TASK',
    payload: {
        task
    }
});

export const addTask = (task) => ({ //태스크를 입력하는 함수
    type: 'ADD_TASK',
    payload: {
        task
    }
});