import axios from "axios";
//import { getToken } from "./[...nextAuth]";

// const api = axios.create({
//   baseUrL: "https://projetotarefa2.azurewebsites.net/"
// })

const baseUrl = "https://projetotarefa2.azurewebsites.net"

export const signup = async (userName, email, passwordHash, name, lastName) => {  // endpoint do registro
  return await axios.post(baseUrl + "/api/v1/Auth/Register", {
    userName,
    email,
    passwordHash,
    name,
    lastName,
  });
};

// export const login = async (userName, email, passwordHash) => {
//   return await axios.post(baseUrl + "/api/v1/Auth/Token", {
//     userName,
//     email,
//     passwordHash
//   });
// };

export const login = async (userName, email, passwordHash) => {
  return await axios.post(baseUrl + '/api/v1/Auth/Token', {userName, email, passwordHash}, {
    auth: {
        userName,
        email,
        passwordHash
      } 
    })
    .then((response) => {
     
      localStorage.setItem('token', JSON.stringify(response.data));
     
    });
}

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