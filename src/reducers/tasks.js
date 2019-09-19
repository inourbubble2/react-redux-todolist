const initialState = {
    task: '', //input 입력 양식에 입력된 태스크
    tasks: [] //태스크 배열
};

export default function tasksReducer(state = initialState, action) {
    switch(action.type) {
        case 'INPUT_TASK': 
            return {
                ...state,
                task: action.payload.task
            }
        case 'ADD_TASK':
            return {
                tasks: state.tasks.concat([action.payload.task])
            };
        default :
            return state;
    }
}