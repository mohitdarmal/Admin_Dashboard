import React from "react";
import ImagePath from "../../Constants/ImagePath";
import "./LeftSideBar.css"
import Search from "../Search/Search";
import { NavLink } from "react-router-dom";

const LeftSideBar = () => {

    const hideSideBar = () => {
        var leftSidebar = document.querySelector(".left_sidebar");
        var contents = document.querySelector(".contents");
        contents.classList.toggle("content_full_width")
        leftSidebar.classList.toggle("left_sidebar_shrink");
    }

    const navItems = [
        {
            id: 1,
            name : 'Information',
            iconImg : ImagePath.INFORMATION,
            iconName : 'bx bx-chevron-down',
            url:''            
        },
        {
            id: 2,
            name : 'Products',
            iconImg : ImagePath.PRODUCTS,
            iconName : 'bx bx-chevron-down',
            url:'/products'
        },
        {
            id: 3,
            name : 'Sales',
            iconImg : ImagePath.SALES,
            iconName : 'bx bx-chevron-down',
            url:'/products'
        },
        {
            id: 4,
            name : 'Quatations',
            iconImg : ImagePath.QUOTATIONS,
            iconName : 'bx bx-chevron-down',
            url:'/products'
        },
        {
            id: 5,
            name : 'Purchases',
            iconImg : ImagePath.PURCHASES,
            iconName : 'bx bx-chevron-down',
            url:'/products'
        },
        {
            id: 6,
            name : 'Expenses',
            iconImg : ImagePath.EXPENSES,
            iconName : 'bx bx-chevron-down',
            url:'/products'
        },
        {
            id: 7,
            name : 'Stock transfer',
            iconImg : ImagePath.STOCK_TRANSFER,
            iconName : 'bx bx-chevron-down',
            url:'/products'
        },
        {
            id: 8,
            name : 'Stock Adjustment',
            iconImg : ImagePath.STOCK_ADJUSTMENT,
            iconName : 'bx bx-chevron-down',
            url:'/products'
        },
        {
            id: 9,
            name : 'User Managment',
            iconImg : ImagePath.USER_MANAGEMENT,
            iconName : 'bx bx-chevron-down',
            url:'/products'
        },
        {
            id: 10,
            name : 'Calendar',
            iconImg : ImagePath.CALENDER,
            iconName : 'bx bx-chevron-down',
            url:'/products'
        },
        {
            id: 11,
            name : 'Contacts',
            iconImg : ImagePath.CONTACTS,
            iconName : 'bx bx-chevron-down',
            url:'/products'
        },
        {
            id: 12,
            name : 'Reports',
            iconImg : ImagePath.REPORTS,
            iconName : 'bx bx-chevron-down',
            url:'/products'
        },
    ]

    return(
        <div className="left_sidebar">
        {/* START LOGO */}
            <div className="logo_sec">
                <img onClick={hideSideBar} alt="menu_icon" className="menu_icon" src={ImagePath.HEMBURGER_MENU} />
                <img className="hide_on_shrink" alt="logo" src={ImagePath.LOGO} />
            </div>  
        {/* END LOGO */}

        {/* START SEARCH */}                
            <div className="search_sec_dark">
                <Search placeHolderName="Search" />
            </div>
        {/* END SEARCH */}

        {/* START NAVITEMS */}
            <div className="nav_items">
            {navItems.map((navItem) => {
                return(
                    <NavLink key={navItem.id} className="leftsidebar_item" to={navItem.url}> <img src={navItem.iconImg} alt={ImagePath.name} /> <span className="navitem_icon"> {navItem.name}  <i className={navItem.iconName} ></i> </span></NavLink>
                )
            })} 
             
            </div>
        {/* END NAVITEMS */}

        {/* START SETTINGS AND SUBSCRIPTION */}
          <div className="setting_subs">  
            <NavLink className="leftsidebar_item" to=""> <img src={ImagePath.SETTINGS} alt="settings"/> <span className="navitem_icon"> Settings  </span></NavLink>
            <NavLink className="leftsidebar_item" to=""> <img src={ImagePath.SUBSCRIPTIONS} alt="subscriptions"/> <span className="navitem_icon"> Subscriptions  </span></NavLink>
          </div>
        {/* END SETTINGS AND SUBSCRIPTION */}

        {/* START LOGOUT BUTTON */}
            <NavLink className="leftsidebar_item" to=""> <img src={ImagePath.LOGOUT} alt="information"/> <span className="navitem_icon color-white"> Logout  </span></NavLink>
        {/* END LOGOUT BUTTON */}

        </div>
    )
}

export default LeftSideBar;