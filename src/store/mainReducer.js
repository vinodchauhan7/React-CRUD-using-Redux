const initialState = {
  currentUser: {},
  allUsers: [
    {
      name: "admin",
      age: "27",
      email: "admin@gmail.com",
      password: "admin"
    },
    {
      name: "vinod",
      age: "27",
      email: "vinodc45@gmail.com",
      password: "vinod"
    }
  ]
};

/**
 * This is the reducer method which response
 * on actions.
 * @param {initialState} state
 * @param {*} action
 */
const reducer = (state = initialState, action) => {
  let newState = { ...initialState };
  switch (action.type) {
    case "LOGIN":
      console.log(`${action.value}`);
      newState = handleLogin(newState, action.value);
      console.log(newState);
      return newState;
    default:
      return newState;
  }
};

let handleLogin = (newState, loginObject) => {
  console.log(`${loginObject.password} +" "+ ${loginObject.email}`);

  newState.allUsers.forEach(element => {
    if (
      element.email === loginObject.email &&
      element.password === loginObject.password
    ) {
      newState.currentUser = element;
      return newState;
    }
  });
  return newState;
};
export default reducer;
