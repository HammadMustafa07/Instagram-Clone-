"use client"

import Image from "next/image";
import logo from "../../../public/images/Logo.png";
import profile from "../../../public/images/profile.jpg";
import reelsicon from "../../../public/SVGs/reelsicon.png"

export default function Bar() {
  // function goToPage() {
  //   window.location.href = '../pages/Chat'; // Add the target URL here
  // }

  return (
    <div className="bar">
      <div className="logo">
        <Image className="logo-att" src={logo} alt="logo" height={50} width={130} />
      </div>
      <div className="home-div">
        <i className="bi bi-house-door-fill"></i>
        <p>Home</p>
      </div>
      <div className="search-div">
        <i className="bi bi-search"></i>
        <p>Search</p>
      </div>
      <div className="explore-div">
        <i className="bi bi-compass"></i>
        <p>Explore</p>
      </div>
      <div className="reels-div">
        {/* <i className="bi bi-play-circle"></i> */}
        <Image className="img"  src={reelsicon} alt="reelsicon" height={30} width={30}></Image>
        <p>Reels</p>
      </div>
      <div className="messages-div">
        <i className="bi bi-messenger"></i>
        <p>Messages</p>
      </div>
      <div className="notifications-div">
        <i className="bi bi-bell"></i>
        <p>Notifications</p>
      </div>
      <div className="create-div">
        <i className="bi bi-plus-square"></i>
        <p>Create</p>
      </div>
      <div className="profile-div">
        <Image className="img-profile" src={profile} alt="profile" height={24} width={24} />
        <p>Profile</p>
      </div>
      <div className="more-div">
        <i className="bi bi-list"></i>
        <p>More</p>
      </div>
    </div>
  );
}
