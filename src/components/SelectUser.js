import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function SelectUser({ userList, retrieveUser}) {

  const dropDownJSX = (
    <DropdownButton id="dropdown-basic-button" title="Select User">
      {userList.map((userData) => (
        <Dropdown.Item key={userData.id} onSelect={() => retrieveUser(userData)}> {userData.name} </Dropdown.Item>
      ))}
    </DropdownButton>
  );

  return (
    <div>
      {dropDownJSX}
    </div>
  );
}
