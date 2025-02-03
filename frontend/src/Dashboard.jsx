const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
  
    if (!user) {
      return <h2>Please login first.</h2>;
    }
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Welcome, {user.username}!</h2>
        <button
          onClick={() => {
            localStorage.removeItem("loggedInUser");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>
    );
  };
  
  export default Dashboard;
  