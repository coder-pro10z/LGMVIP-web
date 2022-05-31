import React from 'react'
import { FlexGrid } from './UserGrid.styled';
import UserItem from './UserItem'


const UserGrid = ({userData}) => {
    return (
        <FlexGrid className="d-flex grid center">
            {userData.map((user) => <UserItem key={user.id} user={user}/>)}
        </FlexGrid>
    )
}

export default UserGrid
