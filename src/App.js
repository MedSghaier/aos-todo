import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import TasksPage from "./pages/tasks/tasks.page";
import DetailPage from './pages/detail/detail.page'
//Components
import Header from "./components/header/header.component";

// Styles
import './App.scss';
import Home from "./pages/home/home.page";

function App() {
  return (
    <div className="page-wrap">
      <Router>
        <Header />
        <main className="main-content">
          <Switch>
              <Route path="/login">
                <h1>about</h1>
              </Route>
              <Route path="/tasks" component={TasksPage }></Route>
              <Route path="/tasks/:id" component={DetailPage }></Route>
              <Route path="/" exact component={Home}></Route>
              {/* <Route path="/tasks/:id" component={()=>}></Route> */}
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
