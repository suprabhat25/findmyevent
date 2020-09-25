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

    //Adding constraints to the inputs fields.
    if (name === "") {
      this.setState({ errors: { name: "Name field vacant." } });
      return;
    }

    if (storyline === "") {
      this.setState({ errors: { storyline: "Storyline vacant." } });
      return;
    }

    if (release === "") {
      this.setState({ errors: { release: "Release date is required" } });
      return;
    }

    const newEvent = {
      name,
      storyline,
      release,
    };

    this.props.addEvent(newEvent);

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
        {" "}
        {/*We use the .mb-3 utility class to ensure that the input group gets a proper margin bottom. */}
        <div className="card-header">Add Event</div> {/* Bootstrap used here*/}
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter the Name here"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Storyline"
              name="storyline"
              placeholder="Enter Storyline here"
              value={storyline}
              onChange={this.onChange}
              error={errors.storyline}
            />
            <TextInputGroup
              label="Release"
              name="release"
              placeholder="Enter Release Date here"
              value={release}
              onChange={this.onChange}
              error={errors.release}
            />
            <input
              type="submit"
              value="Add Event"
              className="btn btn-success btn-block"
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
