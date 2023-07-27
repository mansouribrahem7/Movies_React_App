import { useState } from "react";
export default function Register() {
  let [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    password: "",
  });
  function bindUserData(e) {
    let userData = { ...user };
    userData[e.target.name] = e.target.value;

    setUser(userData);
  }
  function sendDataToApi(e) {
    e.preventDefault();
    console.log("sent...");
  }
  return (
    <>
      <form onSubmit={sendDataToApi}>
        <label htmlFor="first_name">first_name :</label>
        <input
          type="text"
          className="form-control my-input"
          id="first_name"
          name="first_name"
          onChange={bindUserData}
        />
        <label htmlFor="last_name">last_name :</label>
        <input
          type="text"
          className="form-control my-input"
          id="last_name"
          name="last_name"
          onChange={bindUserData}
        />
        <label htmlFor="age"> age :</label>
        <input
          type="text"
          className="form-control my-input"
          id="age"
          name="age"
          onChange={bindUserData}
        />
        <label htmlFor="email"> email :</label>
        <input
          type="text"
          className="form-control my-input"
          id="email"
          name="email"
          onChange={bindUserData}
        />
        <label htmlFor="password"> password :</label>
        <input
          type="text"
          className="form-control my-input"
          id="password"
          name="password"
          onChange={bindUserData}
        />
        <button type="submit" className="btn btn-info">
          submit
        </button>
      </form>
    </>
  );
}
