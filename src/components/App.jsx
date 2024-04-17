import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" component={<Home />}></Route>

          <Route path="/signup" component={<Signup />}></Route>

          <Route path="/login" component={<Login />}></Route>

          <Route path="/quiz" component={<Quiz />}></Route>

          <Route path="/result" component={<Result />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
