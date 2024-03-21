import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database/";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";

type Module = {
    _id: string;
    name: string;
    description: string;
    course: string | undefined;
};
function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();
    return (
        <>
            <div className="button-list1">
                <button className="btn btn-secondary btn-custom-sm" onClick={() => {/* Collapse all functionality */}}>Collapse All</button>
                <button className="btn btn-secondary btn-custom-sm" onClick={() => {/* View progress functionality */}}>View Progress</button>
                <select className="btn btn-secondary btn-custom-sm" onChange={(e) => {/* Handle publish/unpublish all */}}>
                    <option>Publish All</option>
                    <option>Unpublish All</option>
                </select>
                <button className="btn btn-danger" onClick={() => {/* Add module functionality */}}>+ Module</button>
                <button className="btn btn-option" onClick={() => {/* Additional options functionality */}} aria-label="More options">
                    <FaEllipsisV /> </button>
            </div><hr/>
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ flex: 1, marginRight: "10px" }}>
                            <input
                                style={{
                                    padding: "8px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    fontSize: "14px",
                                    marginBottom: "5px",
                                    width: "100%",
                                }}
                                value={module.name}
                                onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
                                }/>
                            <textarea
                                style={{
                                    padding: "8px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    fontSize: "14px",
                                    marginBottom: "5px",
                                    resize: "vertical",
                                    minHeight: "80px",
                                    width: "100%",
                                }}
                                value={module.description}
                                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
                                }/>
                        </div>
                        <div>
                            <button
                                style={{
                                    backgroundColor: "blue",
                                    color: "#ffffff",
                                    border: "none",
                                    borderRadius: "5px",
                                    padding: "8px 16px",
                                    marginLeft: "10px",
                                }}
                                onClick={() => dispatch(updateModule(module))}>
                                Update
                            </button>
                            <button
                                style={{
                                    backgroundColor: "green",
                                    color: "#ffffff",
                                    border: "none",
                                    borderRadius: "5px",
                                    padding: "8px 16px",
                                    marginLeft: "10px",
                                }}
                                onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                                Add
                            </button>
                        </div>
                    </div>
                </li>
                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={module._id} className="list-group-item">
                        <div>
                            <FaEllipsisV className="me-2" />
                            {module.name}
                            <span className="float-end">
   <button
       style={{
           backgroundColor: "red",
           color: "#ffffff",
           border: "none",
           borderRadius: "5px"

       }}
       onClick={() => dispatch(deleteModule(module._id))}>
                                Delete
                            </button>
  <button
      style={{
          backgroundColor: "green",
          color: "#ffffff",
          border: "none",
          borderRadius: "5px"

      }}
      onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>

<FaCheckCircle className="text-success" />
<FaPlusCircle className="ms-2" />
<FaEllipsisV className="ms-2" />
</span>
                        </div>

                            <ul className="list-group">

                                    <li className="list-group-item">
                                        <FaEllipsisV className="me-2" />
                                        {module.description}
                                        <span className="float-end">
<FaCheckCircle className="text-success" />
<FaEllipsisV className="ms-2" />
</span>
                                    </li>

                                <li className="list-group-item">
                                    <FaEllipsisV className="me-2" />
                                    {module._id}
                                    <span className="float-end">
<FaCheckCircle className="text-success" />
<FaEllipsisV className="ms-2" />
</span>
                                </li>

                            </ul>

                    </li>
                ))}
            </ul>
        </>
    );
}
export default ModuleList;