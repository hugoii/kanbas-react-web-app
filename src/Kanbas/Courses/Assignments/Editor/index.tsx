import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import "./index.css";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = assignments.find(
        (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div>
            <div className="flex-fill" style={{marginTop: "70px"}}>
                <div className="d-flex justify-content-end">
                    <span className="float-end">
                         <FaCheckCircle className="text-success" /> Published
                        <button className="edit-button">
                             <FaEllipsisV className="ms-2" />
                        </button>
                    </span>
                    <br />
                </div>
                <hr />
            </div>
            <h2>Assignment Name</h2>
            <input value={assignment?.title}
                   className="form-control mb-2" /><hr/>
            <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                Save
            </button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                  className="btn btn-danger float-end">
                Cancel
            </Link>
            <br/><hr />
        </div>
    );
}
export default AssignmentEditor;