
import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const storedUsers = [
      { name: 'Saikiran', email: 'saikiran@email.com', login: true },
      { name: 'Ramya', email: 'ramya@email.com', login: false },
      { name: 'Anjali', email: 'anjali@email.com', login: true },
      { name: 'Ramesh', email: 'ramesh@email.com', login: false },
      { name: 'Manasa', email: 'manasa@email.com', login: true },
      { name: 'Sriram', email: 'sriram@email.com', login: false },
      { name: 'Trisha', email: 'trisha@email.com', login: true }
    ];

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      const alreadyExists = storedUsers.some(
        (user) => user.email === loggedInUser.email
      );

      const updatedUsers = alreadyExists
        ? storedUsers.map((user) =>
            user.email === loggedInUser.email
              ? { ...user, login: true }
              : user
          )
        : [...storedUsers, { ...loggedInUser, login: true }];

      setUserList(updatedUsers);
    } else {
      setUserList(storedUsers);
    }
  }, []);

  return (
    <div className="dashboard-section">
      <h2 className="dashboard-title">DASHBOARD</h2>
      <div className="dashboard-table-wrapper">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Logged In</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.login ? '✅ Yes' : '❌ No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;


