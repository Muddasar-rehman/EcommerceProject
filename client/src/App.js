import "./App.css";
import Header from "./components/Header";
import ShoesRoutes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./global/GlobalState";
// import history from "./history";
function App() {
  return (
    <div className="App">
      <StateProvider>
        <Router>
          <Header />
          <ShoesRoutes />
        </Router>
      </StateProvider>
    </div>
  );
}

export default App;
