import axios from "axios";
//import { getToken } from "./[...nextAuth]";

const api = axios.create({
  baseURL: "https://projetotarefa2.azurewebsites.net/"
})

export const signup = (username, password) => {  // endpoint do registro
  return await axios.post(baseUrl + "/api/v1/Auth/Register", {
    username,
    password,
  });
};

export const login = async (username, password) => {
  return await axios.post(baseUrl + "/api/v1/Auth/Token", {
    username,
    password
  });
};

export const createTask = async(id, description) => {
  return await axios.post(baseUrl + '/api/v1/TaskController/CreateTask', {
    id,
    description
  });
};

export const getTaskById = async(id) => {
  return await axios.post(baseUrl + '/api/v1/TaskController/GetTaskByID?id=1', {
    id
  });
};

export const getAllTasks = async() => {
  return await axios.get(baseUrl +'/api/v1/TaskController/GetAllTask', {
  });
};

export const getTaskByPriority = async(id, priority) => {
  return await axios.get(baseUrl + '/api/v1/TaskController/GetTaskOrderByPriority', {
    id,
    priority
  });
};

export const getTaskByDate = async(time) => {
  return await axios.get(baseUrl + '/api/v1/TaskController/GetTaskOrderByDateTime?date=07/10/2021', {
    time
  });
};

export const getTaskToday = async(id) => {
  return await axios.get(baseUrl + '/api/v1/TaskController/GetTaskToday', {
    id
  });
};

export const deleteTask = async(id) => {
  return await axios.delete(baseUrl + '/api/v1/TaskController/DeleteTask?id=1', {
    id
  });
};

export default api;