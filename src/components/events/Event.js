import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteEvent } from "../../actions/eventActions";

class Event extends Component {
  state = {
    showEventInfo: false,
  };

  onDeleteClick = (id) => {
    //// DELETE EVENT ////
    this.props.deleteEvent(id);
  };

  render() {
    const { id, name, storyline, release } = this.props.event;
    const { showEventInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={() =>
              this.setState({
                showEventInfo: !this.state.showEventInfo,
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`event/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: "pointer",
                float: "right",
                color: "black",
                marginRight: "1rem",
              }}
            />
          </Link>
        </h4>
        {showEventInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Storyline: {storyline}</li>
            <li className="list-group-item">Release: {release}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

export default connect(null, { deleteEvent })(Event);
