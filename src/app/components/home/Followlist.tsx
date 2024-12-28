import Image from "next/image"
import profile from "../../../../public/images/profile.jpg"
import stefan from "../../../../public/images/stefan.jpg"
import carexport from "../../../../public/images/carexpert.jpg"
import nikkahfinder from "../../../../public/images/nikkahfinder.jpg"
import peter from "../../../../public/images/peter.jpg"
import hammad from "../../../../public/images/hammad.jpg"
export default function Followlist() {
    return (
        <div className="section-03">
            <div className="my-account-div">
                <Image className="img" src={profile} alt="profile" height={50} width={50}></Image>
                <p className="user-name">asfii_77 <br /> 
                <span className="span">Asfandyaar_Khan</span></p>
                <span className="span2">Switch</span>
            </div>
            <div className="suggestion-div">
                <p className="para-of-suggestion">Suggested for you <span>See All</span></p>
            </div>
            <div className="suggestion-account-01">
                <Image className="img" src={peter} alt="profile" height={50} width={50}></Image>
                <p className="user-name">𓆩 𝙓𝙀𝙉✪𝙓 🎧<br /> 
                <span className="span">xenox.aep</span></p>
                <span className="span2">Follow</span>
            </div>
            <div className="suggestion-account-02">
                <Image className="img" src={stefan} alt="profile" height={50} width={50}></Image>
                <p className="user-name">Stefan <br /> 
                <span className="span">Followed by lorem</span></p>
                <span className="span2">Follow</span>
            </div>
            <div className="suggestion-account-03">
                <Image className="img" src={carexport} alt="profile" height={50} width={50}></Image>
                <p className="user-name">Car_Expert01 <br /> 
                <span className="span">Followed by lorem</span></p>
                <span className="span2">Follow</span>
            </div>
            <div className="suggestion-account-04">
                <Image className="img" src={nikkahfinder} alt="profile" height={50} width={50}></Image>
                <p className="user-name">Nikkah Finder <br /> 
                <span className="span">Followed by lorem</span></p>
                <span className="span2">Follow</span>
            </div>
            <div className="suggestion-account-05">
                <Image className="img" src={hammad} alt="profile" height={50} width={50}></Image>
                <p className="user-name">Hammad Abro <br /> 
                <span className="span">hammad-abro_x</span></p>
                <span className="span2">Follow</span>
            </div>
            
        </div>
    )
}