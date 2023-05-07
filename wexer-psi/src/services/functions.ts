import axios from "./config";

export const getUserData = (auth: string) =>
  axios.get("/user/", { headers: { Authorization: auth } });

export const postUserData = (obj: object) => axios.post("/user/login", obj);

export const postUser = (obj: object) => axios.post("/user", obj);

export const putUserData = (id: string, obj: object) =>
  axios.put(`/user/${id}`, obj);

export const deleteUserData = (id: string) => axios.delete(`/user/${id}`);

export const postPatient = (obj: object) => axios.post("/patient", obj);

export const getPatient = (id: string) => axios.get(`patient/${id}`);

export const getOccurrences = (timelineId: string) =>
  axios.get(`timeline/${timelineId}`);
