import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Switch, Redirect } from "react-router-dom";
import * as actions from "../../actions";
import { HomePage, SingleMovie } from "../pages";

const mapStateToProps = (state) => {
  return {
    movieId: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { id } = bindActionCreators(actions, dispatch);

  return {
    changeId: (e) => id(e.id),
  };
};

const App = ({ movieId }) => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={HomePage} />
        <Route
          path="/movie"
          component={() => <SingleMovie movieId={movieId} />}
        />
      </Switch>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
