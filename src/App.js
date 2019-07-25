//Dependencies
import React from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

// Components
import { ADD_FEATURE, REMOVE_FEATURE } from "./store/actions";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  console.log("App state", state);

  const removeFeature = feature => {
    // dispatch an action here to remove an item
    console.log("removeFeature feature", feature);
    dispatch({ type: REMOVE_FEATURE, payload: feature });
  };

  const addFeature = feature => {
    // dispatch an action here to add an item
    console.log("addFeature feature", feature);
    dispatch({ type: ADD_FEATURE, payload: feature });
  };

  console.log("App state", state);

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} addFeature={addFeature} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;

// const mapStateToProps = state => {
//   console.log("App mapStateToProps state", state);
//   return {
//     car: state.car,
//     store: state.store,
//     additionalPrice: state.additionalPrice
//   };
// };

// export default connect(
//   mapStateToProps,
//   {}
// )(App);
