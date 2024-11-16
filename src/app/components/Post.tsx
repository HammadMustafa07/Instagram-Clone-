import Image from "next/image"
import profile from "../../../public/images/profile.jpg"

export default function Post() {
    return (
       <div className="post-section">
        <div className="story-div">
            <div className="one-profile div">
                <Image className="img" src={profile} alt="profile" height={56} width={56}></Image>
            </div>
            <div className="two-profile div">
                <Image className="img" src={profile} alt="profile" height={56} width={56}></Image>
            </div>
            <div className="three-profile div">
                <Image className="img" src={profile} alt="profile" height={56} width={56}></Image>
            </div>
            <div className="four-profile div">
                <Image className="img" src={profile} alt="profile" height={56} width={56}></Image>
            </div>
            <div className="five-profile div">
                <Image className="img" src={profile} alt="profile" height={56} width={56}></Image>
            </div>
            <div className="six-profile div">
                <Image className="img" src={profile} alt="profile" height={56} width={56}></Image>
            </div>
            <div className="seven-profile div">
                <Image className="img" src={profile} alt="profile" height={56} width={56}></Image>
            </div>
        </div>
       </div>
    )
}