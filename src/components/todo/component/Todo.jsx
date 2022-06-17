import React, { Component } from "react";
import moment from "moment";
import { Field, Form, Formik } from "formik";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.params.id,
      description: "Learning Reack",
      targetDate: moment(new Date()).format("MMMMM dd, YYYY"),
    };
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <div className="container">
          <Formik>
            {(props) => (
              <Form>
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field className="form-control" type="text" name="description" />
                  <label>Target Date</label>
                  <Field className="form-control" type="date" name="targetDate" />
                </fieldset>
                <button className="btn btn-success" type="submit">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default Todo;
