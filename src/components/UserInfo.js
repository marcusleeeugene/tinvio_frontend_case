import React from 'react';

import '../pages/Global.css';

import phone from '../tinvio-fe-case-intern-assets/phone-24.png';
import category from '../tinvio-fe-case-intern-assets/category.png';
import shop from '../tinvio-fe-case-intern-assets/icon-24-shop.svg';

function UserInfo({ userInfo }) {

  const formattedAddress = () => {
    return userInfo.address.street + ", "
      + userInfo.address.suite + ", "
        + userInfo.address.city;
  }

  const formattedCategory = () => {
    return userInfo.company.bs.replace(/\s/g, ' \u2022 ');
  }

  if (userInfo == 0) {
    return <h2> Please select a user! </h2>
  } else {
    return (
      <div>
        <p className="bold"><img src={phone}></img>  {userInfo.phone.split(" ")[0]} </p>
        <p className="bold capitalize"><img src={category} width="24"></img>  {formattedCategory()} </p>
        <p className="bold capitalize"><img src={shop}></img>  {formattedAddress()} </p>
      </div>
    );
  }
}

export default UserInfo;
