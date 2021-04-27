const initialState = {
  products: [],
  address: [],
  discount: 0,
  deliveryRate: 7.99,
  total: 0
};

export default (state = initialState, action) => {
  let products = [...state.products];
  switch (action.type) {
    case "ADD_PRODUCT":
      let { id } = action.payload.data;

      let index = products.findIndex((item) => {
        return item.id === id;
      });
      if (index > -1) {
        products[index].quantity += action.payload.quantity;
      } else {
        products.push({
          ...action.payload.data,
          quantity: action.payload.quantity
        });
      }
      return { ...state, products };
    case "CHANGE_PRODUCT":
      if (products[action.payload.key]) {
        if (action.payload.type === "plus") {
          products[action.payload.key].quantity++;


        } else if (action.payload.type === "minus") {
          products[action.payload.key].quantity--;
          if (products[action.payload.key].quantity <= 0) {
            products = products.filter((item, index) => index !== action.payload.key);
          }
        }
      }
      return { ...state, products };
    case "SET_DELIVERY_RATE":
      return { ...state, deliveryRate: action.payload.deliveryRate }
    case "SET_TOTAL":
      let total = action.payload.totalItems;
      return { ...state, total };
      case "SET_DISCOUNT":
      return { ...state, discount: action.payload.discount};  

    default:
      break;
  }

  return state;
};
