export const initialValues = {
  user: {
    userId: "",
    email: "",
    uid: "",
    coupon: {},
    order: {},
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { user: action.payload };

    default:
      return state;
  }
};

//  { reducer, initialValues };
