import React from "react";

const AccessDenied = () => {
  return (
    <div className="container-access">
      <h1 className="title">Access Denied</h1>
      <p className="message">You do not have permission to access this page.</p>
      <p className="message">
        Please <span className="link">click here</span> to go back to the home
        page.
      </p>
    </div>
  );
};

export default AccessDenied;
