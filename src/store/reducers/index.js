// Action Types
import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const rooterReducer = (state = initialState, { type, payload }) => {
  console.log("rooterReducer action", { type, payload });
  switch (type) {
    case ADD_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, payload]
        }
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(
            feature => feature.id !== payload.id
          )
        }
      };
    default:
      return state;
  }
};
