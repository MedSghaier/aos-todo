import { Route, Switch } from "react-router-dom";

// Pages
import Home from "../pages/home/home.page";
import TasksPage from "../pages/tasks/tasks.page";
import DetailPage from "../pages/detail/detail.page";

//Components
import Header from "../components/header/header.component";

const Wrapper = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Switch>
          <Route path="/app/home" component={Home} />
          <Route path="/app/tasks/:id" component={DetailPage} />
          <Route path="/app/tasks" component={TasksPage} />
        </Switch>
      </main>
    </>
  );
};

export default Wrapper;
