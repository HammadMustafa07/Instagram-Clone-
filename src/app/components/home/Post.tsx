import Image from "next/image"
import stefan from "../../../../public/images/stefan.jpg"
import bmw from "../../../../public/images/bmw.jpg"
import carexport from "../../../../public/images/carexpert.jpg"
import supra from "../../../../public/images/supra.jpg"
import nikkahfinder from "../../../../public/images/nikkahfinder.jpg"
import peter from "../../../../public/images/peter.jpg"
import hammad from "../../../../public/images/hammad.jpg"
import mercedes from "../../../../public/images/mercedes.jpg"
import post1 from "../../../../public/images/post1.jpg"
import profileislam from "../../../../public/images/profileislam.jpg"


export default function Post() {
    return (
        <div className="section-02">
            <div className="story-section">
                <div className="story-div">

                    <div className="story-1">
                        <Image className="img" src={bmw} alt="profile-01" height={60} width={60}></Image>
                    </div>
                    <div className="story-2">
                        <Image className="img" src={stefan} alt="profile-01" height={60} width={60}></Image>
                    </div>
                    <div className="story-3">
                        <Image className="img" src={carexport} alt="profile-01" height={60} width={60}></Image>
                    </div>
                    <div className="story-4">
                        <Image className="img" src={supra} alt="profile-01" height={60} width={60}></Image>
                    </div>
                    <div className="story-5">
                        <Image className="img" src={nikkahfinder} alt="profile-01" height={60} width={60}></Image>
                    </div>
                    <div className="story-6">
                        <Image className="img" src={peter} alt="profile-01" height={60} width={60}></Image>
                    </div>
                    <div className="story-7">
                        <Image className="img" src={hammad} alt="profile-01" height={60} width={60}></Image>
                    </div>
                    <div className="story-8">
                        <Image className="img" src={mercedes} alt="profile-01" height={60} width={60}></Image>
                    </div>
                </div>
                <div className="para-div">
                    <p className="para-01">BMW</p>
                    <p className="para-02">vampiredia..</p>
                    <p className="para-03">Car Exper</p>
                    <p className="para-04">Supra mk4</p>
                    <p className="para-05">Nikkah Find..</p>
                    <p className="para-06">xenox.aep</p>
                    <p className="para-07">Hammad Abro</p>
                    <p className="para-08">Mercedes</p>
                </div>
            </div>
            <div className="post-div">
                <div className="post-heading-div">
                    <div className="img-div-post-profile">
                        <Image className="img" src={profileislam} alt="profile" height={32} width={32}></Image>
                    </div>
                    <p>imam.and.science <span>•  <span> 1d</span></span></p>
                </div>
                <div className="post">
                    <Image className="img" src={post1} alt="post1" height={450} width={400}></Image>
                </div>
            </div>
        </div>
    )
}