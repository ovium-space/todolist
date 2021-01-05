import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./style/test.scss";

function Test(props) {
  const [checklist, setChecklist] = useState([]);
  const Checklist = checklist.map((checker, index) => {
    return (
      <div key={"checklist" + index}>
        <div class="form-check m-3">
          <input id={checker.name} class="form-check-input" type="checkbox"/>
        </div>
        <input
          id={checker.name}
          className="form-control form-control-sm ml-2"
          type="text"
          placeholder="Enter Checklist Name"
          for={checker.name}
        />
      </div>
    );
  });

  function AddChecklist(event) {
    let newChecklist = {
      name: "asdasdasd",
      status: true,
    };

    setChecklist([...Checklist, newChecklist]);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <form>
            <div className="form-group row m-1">
              <div>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your Todo Title"
                />
              </div>
              <div className="form-group row">
                <label for="time-picker" className="col-sm-4 col-form-label">
                  Expired
                </label>
                <div className="col-sm-8">
                  <input
                    id="time-picker"
                    class="form-control"
                    type="datetime-local"
                  />
                </div>
              </div>
            </div>
            <div className="form-group row m-1">
              <div>
                <input
                  id="description"
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Enter your Todo Description"
                />
              </div>
            </div>
          </form>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          {Checklist}
          <Button
            onClick={() => AddChecklist()}
            variant="outline-warning"
            size="sm"
          >
            Add checklist
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={props.onHide}>
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Test;
