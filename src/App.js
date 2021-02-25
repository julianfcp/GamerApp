import Home from "./pages/Home";
// Styles
import GlobalStyles from "./components/GlobalStyles";
// Router
import { Route } from "react-router-dom";

function App() {
  //path={["/game/:id", "/"]}  renders the home component with to differents routes
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
