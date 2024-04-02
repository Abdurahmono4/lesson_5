import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="pageNotFound-container">
      <h1>👇PageNotFound👇</h1>
      <h2>404</h2>
      <img src="https://dribbble.com/shots/6464002-Useberry-404-Page" alt="" />

      <NavLink to="/">Home Page</NavLink>
    </div>
  );
}

export default PageNotFound;
