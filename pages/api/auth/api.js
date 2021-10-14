import axios from "axios";

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

export const login = async (userName, email, passwordHash) => {
  return await axios.post(baseUrl + '/api/v1/Auth/Token', { userName, email, passwordHash }, {
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

export const createTask = async (name, description, priority, taskDone) => {
  return await axios({
    method: "POST",
    url: baseUrl + '/api/v1/TaskController/CreateTask',
    data: {
      name,
      description,
      priority,
      taskDone,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      },
    }
  }
  );
};

export const getTaskById = async (id, name, description, time, createTime, priority, taskDone) => {
  return await axios.post(baseUrl + '/api/v1/TaskController/GetTaskByID', {
    id,
    name,
    description,
    time,
    createTime,
    priority,
    taskDone
  });
};

export const getAllTasks = async () => {
  const response = await axios.get(baseUrl + '/api/v1/TaskController/GetAllTask', {
  }); 
  return response.data
};

export const getTaskByPriority = async () => {
  return await axios.get(baseUrl + '/api/v1/TaskController/GetTaskOrderByPriority', {
  });
};

export const getTaskByDate = async (date) => {
  return await axios.get(baseUrl + '/api/v1/TaskController/GetTaskOrderByDateTime?date=07/10/2021', {
    date
  });
};

export const getTaskToday = async (id) => {
  return await axios.get(baseUrl + '/api/v1/TaskController/GetTaskToday', {
    id
  });
};

export const deleteTask = async (id) => {
  return await axios.delete(baseUrl + `/api/v1/TaskController/DeleteTask/?id=${id}`, {
  });
};

// export const updateTask = async (id) => {
//   return await axios.put(baseUrl + '/api/v1/TaskController/UpdateTask', {
//     id
//   });
// };

export const updateTask = async (id, name, description, priority, taskDone) => {
  return await axios({
    method: "PUT",
    url: baseUrl + '/api/v1/TaskController/UpdateTask',
    data: {
      id,
      name,
      description,
      priority,
      taskDone,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      },
    }
  }
  );
};