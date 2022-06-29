import React, { Component } from "react";
import moment from "moment";
import { ErrorMessage, Field, Form, Formik } from "formik";
import TodoDataService from "../../../api/todo/TodoDataService";
import AuthenticationService from "../AuthenticationService";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.params.id,
      description: "",
      targetDate: moment(new Date()).format("YYYY-MM-DD"),
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    if (this.state.id === -1 || this.state.id === "-1") {
      return;
    }

    let username = AuthenticationService.getUserLoggedIn();

    TodoDataService.getTodosByUserAndId(username, this.state.id).then((res) =>
      this.setState({
        description: res.data.description,
        targetDate: moment(res.data.targetDate).format("YYYY-MM-DD"),
      })
    );
  }

  onSubmit(values) {
    let username = AuthenticationService.getUserLoggedIn();

    const todo = {
      id: this.state.id,
      description: values.description,
      targetDate: values.targetDate,
    };

    if (this.state.id === -1 || this.state.id === "-1") {
      TodoDataService.createTodo(username, todo).then(() => this.props.navigate(`/todos`));
    } else {
      TodoDataService.updateTodo(username, todo).then(() => this.props.navigate(`/todos`));
    }
    console.log(values, todo);
  }

  validate(values) {
    let errors = {};

    if (!values.description) {
      errors.description = "Description should not empty!";
    } else if (values.description.length < 5) {
      errors.description = "Description should be greater than 4 characters!";
    }

    if (moment(values.targetDate).isBefore(moment(new Date()).format("YYYY-MM-DD"))) {
      errors.targetDate = "Target date should not less than today!";
    } else if (!moment(values.targetDate).isValid()) {
      errors.targetDate = "Target date is not valid!";
    }

    return errors;
  }

  render() {
    let { description, targetDate } = this.state;
    return (
      <div>
        <h1>Todo</h1>
        <div className="container">
          <Formik
            initialValues={{ description, targetDate }}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={this.onSubmit}
            validate={this.validate}
            enableReinitialize={true}
          >
            {(props) => (
              <Form>
                <fieldset className="form-group">
                  <label>Description</label>
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="alert alert-warning"
                  />
                  <Field className="form-control" type="text" name="description" />
                  <label>Target Date</label>
                  <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
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
