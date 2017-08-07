const DEFAULT_STATE = {
  list:[
    {
      task: 'Learn React Native'
    },
    {
      task: 'Learn React Native'
    },
    {
      task: 'Learn React Native'
    },
    {
      task: 'Learn React Native'
    },
    {
      task: 'Learn React Native'
    },
    {
      task: 'Learn React Native'
    }
  ]
}

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case 'TEST_ACTION':
      return {...state, ...{mock: action.payload}};
    default:
      return state
  }
}
