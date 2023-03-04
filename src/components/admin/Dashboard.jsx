import React from "react";
import { useNavigate } from "react-router-dom";
import Child from "./Child"

const Dashboard = () => {
  const history = useNavigate();
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) history("/login");
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };

  return (
    <>
      <button onClick={logoutHandler} className="btn btn-success text-left">
        Logout
      </button>
	    <Child/>
    </>
  );
};

export default Dashboard;
