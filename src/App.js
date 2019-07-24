//Dependencies
import React from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

// Components
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = props => {
  const state = useSelector(state => state);

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dispatch an action here to add an item
  };

  console.log("App props", props);
  console.log("App state", state);

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} />
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
