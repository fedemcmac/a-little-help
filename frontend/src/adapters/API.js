const endpoint = "http://localhost:3000/api";
const signupUrl = `${endpoint}/users`;
const loginUrl = `${endpoint}/login`;
const jobsUrl = `${endpoint}/jobs`;
const validateUrl = `${endpoint}/validate`;
const dropJobUrl = `${endpoint}/drop_job`;
const acceptJobUrl = `${endpoint}/accept_job`;

const jsonify = res => {
  if (res.ok) return res.json();
  else throw res;
};

const handleServerError = response => {
  if (response.status === 401) {
    return Promise.resolve({ error: "unauthorized" });
  }
  throw response.json();
};

const saveToken = data => {
  localStorage.setItem("token", data.token);
  return data.user;
};

const constructHeaders = (moreHeaders = {}) => ({
  Authorization: localStorage.getItem("token"),
  ...moreHeaders
});

const signUp = user =>
  fetch(signupUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  })
    .then(jsonify)
    .then(saveToken)
    .catch(handleServerError);

const logIn = user =>
  fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  })
    .then(jsonify)
    .then(saveToken)
    .catch(handleServerError);

const validateUser = () => {
  if (!localStorage.getItem("token"))
    return Promise.resolve({ error: "no token" });

  return fetch(validateUrl, {
    headers: constructHeaders()
  })
    .then(jsonify)
    .then(saveToken)
    .catch(handleServerError); //////////////////////////////////////////////////
};

const postJob = job => {
  return fetch(jobsUrl, {
    method: "POST",
    body: JSON.stringify({ job }),
    headers: constructHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  })
    .then(jsonify)
    .catch(handleServerError);
};

const getJobs = () =>
  fetch(jobsUrl, {
    headers: constructHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  }).then(jsonify);

const clearToken = () => localStorage.removeItem("token");

const dropJob = id =>
  fetch(dropJobUrl, {
    method: "DELETE",
    body: JSON.stringify({ job_id: id }),
    headers: constructHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  });

const deleteJob = id =>
  fetch(`${jobsUrl}/${id}`, {
    method: "DELETE",
    headers: constructHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  });

const acceptJob = id =>
  fetch(acceptJobUrl, {
    method: "POST",
    body: JSON.stringify({ job_id: id }),
    headers: constructHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  }).then(jsonify);

const showJob = id => {
  return fetch(jobsUrl + `/${id}`)
    .then(resp => resp.json())
    .then(data => data);
};

const editJob = job => {
  return fetch(jobsUrl + `/${job.id}`, {
    method: "PATCH",
    body: JSON.stringify({ job: job }),
    headers: constructHeaders({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
  }).then(jsonify);
};

export default {
  signUp,
  logIn,
  validateUser,
  clearToken,
  postJob,
  getJobs,
  dropJob,
  acceptJob,
  editJob,
  showJob,
  deleteJob
};
