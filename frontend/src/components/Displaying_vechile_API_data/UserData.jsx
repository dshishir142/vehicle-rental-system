import React from 'react';

const UserData = ({ user }) => {
  return (
    <>
      {user.map((curUser) => {
        const { Id,company,model,price,imageurl,description} = curUser;
        return (
          <tr key={Id}> {/* Ensure each row has a unique 'key' prop */}
            <td>{company}</td>
            <td>{model}</td>
            <td>{price}</td>
            <td>{imageurl}</td>
            <td>{description}</td>
          </tr>
        );
      })}
    </>
  );
};

export default UserData;
