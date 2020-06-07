import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEvent } from "../../actions/eventActions";

class AddEvent extends Component {
  state = {
    name: "",
    storyline: "",
    release: "",
    errors: {},
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, storyline, release } = this.state;

    // Check For Errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (storyline === "") {
      this.setState({ errors: { storyline: "Storyline is required" } });
      return;
    }

    if (release === "") {
      this.setState({ errors: { release: "Release  is required" } });
      return;
    }

    const newEvent = {
      name,
      storyline,
      release,
    };

    this.props.addEvent(newEvent);

    //// SUBMIT EVENT ////

    // Clear State
    this.setState({
      name: "",
      storyline: "",
      release: "",
      errors: {},
    });

    this.props.history.push("/");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, storyline, release, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Event</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Storyline"
              name="storyline"
              placeholder="Enter Storyline"
              value={storyline}
              onChange={this.onChange}
              error={errors.storyline}
            />
            <TextInputGroup
              label="Release"
              name="release"
              placeholder="Enter Release"
              value={release}
              onChange={this.onChange}
              error={errors.release}
            />
            <input
              type="submit"
              value="Add Event"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

AddEvent.propTypes = {
  addEvent: PropTypes.func.isRequired,
};

export default connect(null, { addEvent })(AddEvent);
