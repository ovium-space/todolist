import "../style/bar.scss";
import leftbutton from "../picture/leftarrow.png";
import rightbutton from "../picture/rightarrow.png";

function Teambar() {
  return (
    <div class="custom">
      <div class="bar">
        <img src={leftbutton} />
        <div class="box">
          <div class="top-box">
            <label>Team</label>
          </div>
        </div>
        <div class="box">
          <div class="top-box">
            <label>Team</label>
          </div>
        </div>
        <div class="box">
          <div class="top-box">
            <label>Team</label>
          </div>
        </div>
        <div class="box">
          <div class="top-box">
            <label>Team</label>
          </div>
        </div>
        <div class="box">
          <div class="top-box">
            <label>Team</label>
          </div>
        </div>
        <img src={rightbutton} />
      </div>
    </div>
  );
}

export default Teambar;