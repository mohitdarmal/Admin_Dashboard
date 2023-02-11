import React from "react";
import Search from "../../Components/Search/Search";
import ImagePath from "../../Constants/ImagePath";
import "./TopHeader.css"

const TopHeader = () => {

  const hideSideBar = () => {
    var leftSidebar = document.querySelector(".left_sidebar");
    var contents = document.querySelector(".contents");
    contents.classList.toggle("content_full_width")
    leftSidebar.classList.toggle("left_sidebar_shrink");
}

    return(
        <div className="top_header">
            <div className="top_header_search">
                <i onClick={hideSideBar} className="uil uil-bars mobile_menu"></i>
                <Search placeHolderName="Search"/>
            </div>
            <div className="top_header_profile">
              <div className="d-flex align-items-center">
                <div><p className="welcome_msg mb-0">Welcome back, <br/><strong>Abdullah</strong></p> </div>
                <div className="bell_icon"><i className='bx bx-bell' ></i></div>
                <div className="profile_img"><img src={ImagePath.PROFILE_IMG} alt="profile_img" /> <i className='bx bx-caret-down' ></i></div>
              </div>
            </div>
    </div> 
    )
}

export default TopHeader