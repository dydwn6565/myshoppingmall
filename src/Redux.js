import { combineReducers, createStore, applyMiddleware } from "redux";
export const initialValues = {
  user: {
    userId: "",
    email: "",
    uid: "",
    coupon: {},
    order: {},
  },
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { user: action.payload };

    default:
      return state;
  }
};

export const rankingInitialValues = {
  ranking: {},
};

export const rankingReducer = (state, action) => {
  switch (action.type) {
    case "ranking":
      return { ...state, ranking: action.payload };
    case "ranking_items":
      return { ...state, ranking: state.ranking };
    default:
      return state;
  }
};

// const rootReducer = combineReducers({
//   userLogin: userReducer,
//   ranking: rankingReducer,
// });

// const store = createStore(rootReducer);
// store.subscribe(() => console.log("Updated state", store.getState()));
