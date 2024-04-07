import React from 'react';

const UserData = ({ user }) => {
  return (
    <>
      {user.map((curUser) => {
        const { id, name, email } = curUser;
        return (
          <tr key={id}> {/* Ensure each row has a unique 'key' prop */}
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
          </tr>
        );
      })}
    </>
  );
};

export default UserData;
