import axios from "src/lib/axios";

export const eventsApi = {
  createEvent(event) {
    return axios.post("/events", event);
  },
  findAll() {
    return axios.get("/events");
  },
};
