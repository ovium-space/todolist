import '../styles/recentTeam.scss';

function RecentTeams(props) {
    let teamdata = ['team1', 'team2', 'team3'] //อย่าส่งมาเกิน 3 ทีมล่ะ

    return (
        <div>
            <div className="body">
                <p className="title m-0">Recent Teams</p>
                <div className="feed m-0">
                    {
                        teamdata.map((data) => {
                            return (
                                <div className="team-box m-0">
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