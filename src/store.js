import { createStore } from "redux";
import { rooterReducer } from "./store/reducers";

export const store = createStore(rooterReducer);
