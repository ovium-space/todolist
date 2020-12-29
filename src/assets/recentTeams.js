import '../styles/recentTeam.scss';

function RecentTeams(props) {
    let teamdata = ['team1', 'team2', 'team3'] //อย่าส่งมาเกิน 3

    function teamClicked(team){
        console.log(team)
      }

    return (
        <div>
            <div className="recent-body">
                <p className="recent-team-title m-start-0">Recent Teams</p>
                <div className="recent-team-feed m-start-0">
                    {
                        teamdata.map((data) => {
                            return (
                                <div onClick={() => teamClicked(data)} className="recent-team-box m-start-0">
                                    <p className="team-name">{data}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default RecentTeams;