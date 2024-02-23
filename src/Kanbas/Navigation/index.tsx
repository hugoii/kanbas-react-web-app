import React from "react";
import  "./index.css";
import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaRegUserCircle, FaBook,
    FaRegCalendarAlt ,FaInbox, FaHistory, FaDesktop, FaArrowUp, FaQuestionCircle }
    from "react-icons/fa";
function KanbasNavigation() {
    const links = [
        { label:"N", icon: null },
        { label: "Account", icon: <FaRegUserCircle className="fs-2 icon-white" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
        { label: "Courses", icon: <FaBook className="fs-2" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
        { label: "Inbox", icon: <FaInbox className="fs-2" />},
        { label: "History", icon: <FaHistory className="fs-2" /> },
        { label: "Studio", icon: <FaDesktop className="fs-2" />},
        { label: "Commons", icon: <FaArrowUp className="fs-2" /> },
        { label: "Help", icon: <FaQuestionCircle className="fs-2" /> },
    ];
    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation  d-none d-md-block" >
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}> {link.icon}
                        <span className="label-white">{link.label}</span></Link>
                </li>
            ))}
        </ul>
    );
}
export default KanbasNavigation;