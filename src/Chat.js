import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
function Chat() {
    return (
      <div className="Chat">
        <div className="chat__header">
          <div className="chat__header--Left">
            <Avatar />
          </div>
          <div className="chat__header__middle">
            <p className="Chat__name">Chat Name</p>
            <p className="Chat__status">Group Members</p>
          </div>
          <div className="chat__header__Right">
            <IconButton>
              <SearchIcon style={{ color: "#B1B3B5" }} />
            </IconButton>

            <IconButton>
              <MoreVertIcon style={{ color: "#B1B3B5" }} />
            </IconButton>
          </div>
        </div>
        <div className="chat__body">
          <p className="chat__msg__reciever">
            <span className="Chat__text">This is a message </span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__reciever">
            <span className="Chat__text">This is a message </span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__reciever">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>

          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>

          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>

          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>

          <p className="chat__msg__sender">
            <span className="Chat__text">This is a message</span>
            <span className="chat__timeStamp">{new Date().toUTCString()}</span>
          </p>
        </div>
        <div className="chat_inputcontainer">
          <IconButton>
            <InsertEmoticonIcon style={{ color: "#B1B3B5" }} />
          </IconButton>
          <IconButton>
            <AttachFileIcon style={{ color: "#B1B3B5" }} />
          </IconButton>
          <input
            type="text"
            placeholder="search or a new chat"
            style={{ background: "#323739", paddingLeft:10 }}
            className="chat__searchcontainer"
          />
          <IconButton>
            <KeyboardVoiceIcon style={{ color: "#B1B3B5" }} />
          </IconButton>
        </div>
      </div>
    );
}

export default Chat
