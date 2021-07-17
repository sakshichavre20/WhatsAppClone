import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';


function Sidebar() {
    return (
      <div className="Sidebar">
        <div className="sidebar__header">
          <Avatar src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <div className="sidebar__headerRight">
            <IconButton>
              <DonutLargeIcon style={{ color: "#B1B3B5" }} />
            </IconButton>
            <IconButton>
              <ChatIcon style={{ color: "#B1B3B5" }} />
            </IconButton>
            <IconButton>
              <MoreVertIcon style={{ color: "#B1B3B5" }} />
            </IconButton>
          </div>
        </div>
        <div className="sidebar__searchbar">
          <div className="sidebar__searchcontainer">
            <SearchIcon style={{ color: "#848788" }} />
            <input
              type="text"
              placeholder="search or a new chat"
              style={{ background: "#323739", color: "#B1B3B5" }}
            />
          </div>
        </div>
        <div className="sidebar__chats">
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
        </div>
      </div>
    );
}

export default Sidebar
