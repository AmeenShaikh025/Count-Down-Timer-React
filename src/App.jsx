import React, { Component } from "react";
import "./App.css";
import Clock from "./Clock";
import { Form, FormControl } from "react-bootstrap";

class App extends Component {
  state = {
    deadline: "December 31, 2019",
    newDeadline: ""
  };

  changeDeadline(e) {
    e.preventDefault();
    this.setState({ deadline: this.state.newDeadline });
    this.setState({ newDeadline: "" });
    this.mainInput.value = "";
  }

  render() {
    return (
      <div className="App">
        <div className="App-title text-uppercase">
          Countdown to {this.state.deadline}
        </div>
        <Clock deadline={this.state.deadline} />
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <Form inline={false}>
                <FormControl
                  className="Deadline-input"
                  ref={ref => (this.mainInput = ref)}
                  onChange={event =>
                    this.setState({ newDeadline: event.target.value })
                  }
                  placeholder="Eg: 20 January 2020"
                />
                <button
                  className="btn-common btn"
                  onClick={e => this.changeDeadline(e)}
                >
                  Submit
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
