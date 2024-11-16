import Image from "next/image"
import profile from "../../../public/images/profile.jpg"

export default function Bar() {
    return (
        <div className="bar">
            <div className="logo"></div>
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
                <i className="bi bi-play-circle"></i>
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
                <Image className="img-profile" src={profile} alt="profile" height={24} width={24}></Image>
                <p>Profile</p>
            </div>
            <div className="more-div">
                <i className="bi bi-list"></i>                <p>More</p>
            </div>
        </div>
    )
}