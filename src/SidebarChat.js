import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';
function SidebarChat() {
    return (
      <div className="SidebarChat">
        <div className="SidebarChat__Avatar">
          <Avatar src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div className="sidebarchat__info">
          <p className="SidebarChat__name">Room name</p>
          <p className="SidebarChat__status">This is the last message</p>
        </div>
      </div>
    );
}

export default SidebarChat
