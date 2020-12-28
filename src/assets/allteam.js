import "../styles/bar.scss";
import leftbutton from "./picture/leftarrow.png";
import rightbutton from "./picture/rightarrow.png";

function Teambar(props) {
  let teams = ["Team1", "Team2", "Team3", "Team4", "Team5"]; //อย่าส่งมาเกิน 5 ทีมล่ะ
  let sorter = ["Name", "Start Date", "Deadline"];

function getTeam(team){
  console.log(team)
}

  return (
    <div className="teambar-body">
      <div className="row">
        <label className="teambar-title">All Teams</label>
      <div className="sorted-selector">
        <select name="sorter">
          <option value="none" selected disabled hidden>Sort By</option>
          {
            sorter.map(data => {
              return(
                <option value={data}>{data}</option>
              )
            })
          }
        </select>
      </div>
      </div>
      
      <div className="flex-container">
        <div className="fleft button">
          <img src={leftbutton} alt="Previous" />
        </div>
        {teams.map((element) => {
          return (
            <div onClick={getTeam(element)} className='teambar-box'>
                <p>{element}</p>
            </div>
          );
        })}
        <div className="fright button">
          <img src={rightbutton} alt="Next" />
        </div>
      </div>
    </div>
  );
}

export default Teambar;
