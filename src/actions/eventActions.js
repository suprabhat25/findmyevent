import {
  GET_EVENTS,
  DELETE_EVENT,
  ADD_EVENT,
  GET_EVENT,
  UPDATE_EVENT,
} from "./types";
import axios from "axios";

export const getEvents = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://my-json-server.typicode.com/ShrutiSemwal/eventsdata/events"
    );

    dispatch({
      type: GET_EVENTS,
      payload: res.data,
    });
  } catch (error) {
    alert(error.message);
  }
};

export const getEvent = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://my-json-server.typicode.com/ShrutiSemwal/eventsdata/events/${id}`
    );

    dispatch({
      type: GET_EVENT,
      payload: res.data,
    });
  } catch (error) {
    alert(error.message);
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    await axios.delete(
      `https://my-json-server.typicode.com/ShrutiSemwal/eventsdata/events/${id}`
    );
    dispatch({
      type: DELETE_EVENT,
      payload: id,
    });
  } catch (e) {
    dispatch({
      type: DELETE_EVENT,
      payload: id,
    });
  }
};

export const addEvent = (event) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://my-json-server.typicode.com/ShrutiSemwal/eventsdata/events",
      event
    );

    dispatch({
      type: ADD_EVENT,
      payload: res.data,
    });
  } catch (error) {
    alert(error.message);
  }
};

export const updateEvent = (event) => async (dispatch) => {
  try {
    const res = await axios.put(
      `https://my-json-server.typicode.com/ShrutiSemwal/eventsdata/events/${event.id}`,
      event
    );

    dispatch({
      type: UPDATE_EVENT,
      payload: res.data,
    });
  } catch (error) {
    alert(error.message);
  }
};
