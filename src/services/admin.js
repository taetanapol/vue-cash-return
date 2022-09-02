const API = "http://laravel-api-cash-return.local/api/v1";
// export function getAdmin() {
//   return fetch(API).then((res) => res.json());
// }

export function createAdmin(data) {

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(API + "/register", requestOptions).then((res) => res.json());
}

export function signinAdmin(data) {

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    return fetch(API + "/signin", requestOptions).then((res) => res.json());
}