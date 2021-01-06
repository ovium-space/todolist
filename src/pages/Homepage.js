import TodoFeed from "../assets/todoFeed";
import RecentTeams from "../assets/recentTeams";
import Teambar from "../assets/allteam";
import Todopage from "./Todopage";
import "../styles/Home.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//style={{ textDecoration: 'none' }} เอาไว้ลบเส้นใต้ LINK

function Homepage() {
  return (
    <Router>
      <Switch>
        <Route path="/MyTodoList">
          <Todopage />
        </Route>
        <Route path="/">
          <div className="homepage-body">
            <div className="homepage-middle">
              <div className="homepage-todofeed">
                <div className="asdasdasd">
                  <Link className="Linker" to="/MyTodoList">
                    <TodoFeed />
                  </Link>
                </div>
              </div>
              <div className="recent">
                <RecentTeams />
              </div>
            </div>
            <div className="allteam">
              <Teambar />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default Homepage;
