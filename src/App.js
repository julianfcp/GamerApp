import Home from "./pages/Home";
// Styles
import GlobalStyles from "./components/GlobalStyles";
// Router
import { Route } from "react-router-dom";
// components
import Nav from "./components/Nav";

function App() {
  //path={["/game/:id", "/"]}  renders the home component with to differents routes
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
