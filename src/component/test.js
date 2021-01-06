import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./style/test.scss";

function Test(props) {
  const [checklist, setChecklist] = useState([]);
  const Checklist = checklist.map((checker, index) => {
    return (
      <div key={"checklist" + index}>
        <div class="form-check m-3">
          <div className="row">
            <div className="col-5">
              <input
                id={checker.name}
                class="form-check-input"
                type="checkbox"
              />
              <input
                id={checker.name}
                className="form-control form-control-sm ml-2"
                type="text"
                placeholder="Enter Checklist Name"
                for={checker.name}
                id="input-grey"
              />
            </div>
            <div className="col-7">
              <div className="row">
                <label for="time-picker" className="col-3">
                  Deadline :
                </label>

                <input
                  id="time-picker"
                  className="form-control col-4 input-grey"
                  type="datetime-local"
                  id="input-grey"
                />
              </div>
            </div>
          </div>
        </div>
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
            <div className="form-group row">
              <div className="col-7">
                <input
                  className="form-control-lg"
                  type="text"
                  placeholder="Enter your Todo Title"
                  id="input-grey"
                />
              </div>

              <div className="col-5">
                <div className="row">
                  <label for="time-picker" className="col-4">
                    Expired
                  </label>
                  <div className="col-8">
                    <input
                      id="time-picker"
                      class="form-control"
                      type="datetime-local"
                      id="input-grey"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="ml-3 col-8">
                <input
                  id="description"
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Enter your Todo Description"
                  id="input-grey"
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
            variant="secondary"
            size="sm"
            className="btn-add-checklist ml-2 mt-0"
          >
            Add Checklist
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
