import "../styles/bar.scss";
import leftbutton from "./picture/leftarrow.png";
import rightbutton from "./picture/rightarrow.png";

function Teambar(props) {
  let teams = ["Team1", null, null, null, null]; //อย่าส่งมาเกิน 5 ทีมล่ะ

  return (
        <div className="flex-container">
          <div className="fleft button">
            <img src={leftbutton} alt="Previous" />
          </div> 
          {teams.map((element) => {
            return (
              <div className="box">
                  <label>{element}</label>
              </div>
            );
          })}
          <div className="fright button">
            <img src={rightbutton} alt="Next" />
          </div>
        </div>
         

  );
}

export default Teambar;
