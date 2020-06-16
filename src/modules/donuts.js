// Action type constants go here
const ADD_ORDER = 'ADD_ORDER'
const CLEAR_FORM = 'CLEAR_FORM'
const HANDLE_NAME_CHANGE = 'HANDLE_NAME_CHANGE'
const HANDLE_FLAVOR_CHANGE = 'HANDLE_FLAVOR_CHANGE'

// Action creators go here
const addDonutOrder = order => {
  return {
    type: ADD_ORDER,
    order
  }
}

const clearForm = () => {
  return {
    type: CLEAR_FORM
  }
}

const handleFieldChange = event => {
  if (event.target.name === "newName") {
    const newName = event.target.value
    return {
      type: HANDLE_NAME_CHANGE,
      newName
    }
  } else {
    const newFlavor = event.target.value
    return {
      type: HANDLE_FLAVOR_CHANGE,
      newFlavor
    }
  }
}

// Reducer and its initialState go here

const initialState = {
  donutOrderList: [
    {
      id: 1,
      name: 'Brianna',
      flavor: 'Everything Bagel Doughnut'
    },
    {
      id: 2,
      name: "Alex",
      flavor: 'Blackberry Hibiscus'
    },
    {
      id: 3,
      name: 'Dan',
      flavor: 'The biggest coffee roll ever'
    }
  ]
}

const donuts = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ORDER:
      const newOrders = state.donutOrderList.concat(action.order)
      return {...state, donutOrderList: newOrders}
    case CLEAR_FORM:
      return {...state, name: '', flavor: ''}
    case HANDLE_NAME_CHANGE:
      return {...state, name: action.newName}
    case HANDLE_FLAVOR_CHANGE:
      return {...state, flavor: action.newFlavor}
    default:
      return state
  }
};

// Export statement goes here

export {
  addDonutOrder,
  clearForm,
  handleFieldChange,
  donuts
};
