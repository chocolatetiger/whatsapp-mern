import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton, Avatar } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import db from "./firebase";
function Sidebar() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQE8WmqCwyrhkA/profile-displayphoto-shrink_100_100/0/1585927610891?e=1616025600&v=beta&t=rErv91SHxDdVBKYfQTn7HC_JBcdOJyZJzfzaFijx018" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
