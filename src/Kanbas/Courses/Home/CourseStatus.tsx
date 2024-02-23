import React from 'react';
import { FaBan, FaCheckCircle, FaUpload, FaBullseye, FaChartBar, FaBullhorn, FaBell, FaExclamationCircle, FaCalendar } from 'react-icons/fa';

function CourseStatus() {
    return(
    <div className="flex-grow-0 me-2 d-none d-lg-block" >

        <h5>Course Status</h5>
        <button className="unpublish"><FaBan/> Unpublish</button>
        <button className="publish"><FaCheckCircle/> Published</button>

        <div className="button-list">
            <button className="btn btn-option">
                <FaUpload/> Import Existing Content
            </button>
            <button className="btn btn-option">
                <FaUpload/> Import from Commons
            </button>
            <button className="btn btn-option">
                <FaBullseye/> Choose Home Page
            </button>

            <button className="btn btn-option">
                <FaChartBar/> View Course Stream
            </button>

            <button className="btn btn-option">
                <FaBullhorn/> New Announcement
            </button>

            <button className="btn btn-option">
                <FaChartBar/> New Analytics
            </button>
            <button className="btn btn-option">
                <FaBell/> View Notifications
            </button>
        </div>

        <div className="flex-grow-0 me-2 d-none d-lg-block" >
            <h5>To Do</h5>
            <hr/>


            <div className="title"><FaExclamationCircle style={{color: 'red'}} aria-hidden="true"/>
                Grade A1 - ENV + HTML
            </div>
            <div className="subtext"> 100 points • Sep 18 at 11:59pm</div>
            <br/>

            <div className="coming-up">
                <div className="d-flex justify-content-between align-items-center">
                    <h5>Coming Up</h5><FaCalendar/></div>
                <hr/>
                <div className="item">

                    <div className="content">
                        <div className="title"><FaCalendar/> Lecture</div>
                        <div className="subtext">CS4550.12631.202410</div>
                        <div className="date">Sep 11 at 11:45am</div>
                    </div>
                </div>

                <div className="item">

                    <div className="content">
                        <div className="title"><FaCalendar/> CS5610 06 SP23 Lecture</div>
                        <div className="subtext">CS4550.12631.202410</div>
                        <div className="date"> Sep 11 at 6pm</div>
                    </div>
                </div>


                <div className="item">

                    <div className="content">
                        <div className="title"><FaCalendar/> CS5610 Web Development Summer 1 2023 -
                            LECTURE
                        </div>
                        <div className="subtext">CS4550.12631.202410</div>
                        <div className="date">Sep 11 at 7pm</div>
                    </div>
                </div>


                <button className="btn btn-custom-sm coming-up-btn">12 more in the next week...
                </button>
            </div>

        </div>
    </div>
    )
}
export default CourseStatus;
