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
  let newState = { ...state };
  switch (action.type) {
    case "LOGIN":
      console.log(`${action.value}`);
      let newState1 = handleLogin(newState, action.value);
      console.log(newState1);
      state = { ...newState1 };
      return state;
    case "UPDATE_USER":
      console.log("Update user");
      newState.updateUser = action.value;
      state = { ...newState };
      return state;
    case "UPDATE":
      console.log("update");
      newState1 = handleUpdate(newState, action.value);
      newState1.updateUser = {};
      state = { ...newState1 };
      console.log(state);
      return state;
    case "DELETE":
      console.log("delete");
      const newUsers = newState.allUsers.filter(
        d => d.email !== action.value.email
      );
      newState.allUsers = newUsers;
      state = { ...newState };
      console.log(state);
      return state;
    case "REGISTER":
      console.log("Register");
      const data = action.value;
      console.log(data);
      newState.allUsers.push(data);
      state = { ...newState };
      console.log(state);
      return state;
    case "LOGOUT":
      console.log("logout");
      newState.currentUser = {};
      state = { ...newState };
      return state;
    default:
      return state;
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
