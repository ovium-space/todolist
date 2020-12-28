import TodoFeed from '../assets/todoFeed'
import RecentTeams from '../assets/recentTeams'
import Teambar from '../assets/allteam'
import '../styles/Home.scss'

function Homepage() {
    
    return(
        <div className="homepage-body">
            <div className="homepage-middle">
                <div className="homepage-todofeed">
                    <div className="asdasdasd">
                        <TodoFeed />
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
    )
}

export default Homepage;