const initialState = {
  currentUser: {},
  updateUser: {},
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
    case "UPDATE_USER":
      console.log("Update user");
      newState.updateUser = action.value;
      return newState;
    case "UPDATE":
      console.log("update");
      return newState;
    case "REGISTER":
      console.log("Register");
      const data = action.value;
      console.log(data);
      newState.allUsers.push(data);
      console.log(newState);
      return newState;
    default:
      return newState;
  }
};

/**
 *
 * @param {*} newState
 * @param {*} UpdateOjbect
 */
let handleUpdate = (newState, updateObject) => {
  let findUser = newState.allUsers.filter(
    data => data.email === updateObject.email
  );
  let index = newState.allUsers.indexOf(findUser[0]);
  newState.allUsers[index] = updateObject;
  console.log(newState);
  return newState;
};

/**
 * Handle Login method handle the login activity
 * @param {} newState
 * @param {*} loginObject
 */
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
