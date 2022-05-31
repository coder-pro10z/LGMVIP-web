import React from 'react';
import { Card } from './UserItem.styled';

const UserItem = ({ user }) => {
  return (
    <Card className="user-card d-flex">
      <div className="avatar-img">
        <img src={user.avatar} alt="Avatar Img" />
      </div>
      <div className="data">
        <h4 className="username size-20">{`${user.first_name} ${user.last_name}`}</h4>
        <p className="useremail size-20">{`${user.email}`}</p>
      </div>
    </Card>
  );
};

export default UserItem;
