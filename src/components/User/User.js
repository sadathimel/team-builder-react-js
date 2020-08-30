import React, { useState } from "react";

const User = (props) => {
    const {name,email,picture,website,phone}= props.user;
    const addMember = props.addMember;
    const [mobile,setMobile] = useState('');
    const fullName = name.first + ' ' + name.last;
    const userStyle = {
        border: '2px solid red',
        margin: '10px',
        borderRadius: '10px', 
        padding: '10px',
        display: 'flex',
        width: '40%'

    }

    const showPhone = ()=> setMobile(phone)
  return (
    <div style = {userStyle}>
      <div>
        <img src={picture.large} alt="" />
      </div>
      <div>
  <h1>Name:{fullName}</h1>
  <p>Email:{email}</p>
        <p>
          <a target="blank" href={website}>
            Learn about me
          </a>
        </p>
  <p>Phone:{mobile}</p>
        <button onClick={showPhone}>Show Phone</button>
        <button onClick={() => addMember(fullName)}>Add me</button>
      </div>
    </div>
  );
};

export default User;
