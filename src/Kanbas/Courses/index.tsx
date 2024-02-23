import {assignments, courses} from "../Database";
import {Navigate, Route, Routes, useLocation, useParams,Link} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";



function Courses() {
    const { courseId, assignmentId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const courseNumberWithName = course ? `${course.number}  ${course.name}` : '';
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);


    const lastPathname = pathnames[pathnames.length - 1];
    const breadcrumbNameMap = {
        Home: "Home",
        Modules: "Modules",
        Assignments: "Assignments",
        Grades: "Grades",
        Piazza: "Piazza",


    };

    const breadcrumbTitle = lastPathname in breadcrumbNameMap ? breadcrumbNameMap[lastPathname as keyof typeof breadcrumbNameMap] : null;

    let breadcrumbPaths = [{ name: courseNumberWithName, path: `/Kanbas/Courses/${courseId}` }];


    if (lastPathname in breadcrumbNameMap) {
        breadcrumbPaths.push({ name: breadcrumbNameMap[lastPathname as keyof typeof breadcrumbNameMap], path: location.pathname });
    }


    if (pathnames.includes('Assignments') && lastPathname !== 'Assignments') {
        const assignment = assignments.find(a => a._id === lastPathname);
        if (assignment) {

            if (!breadcrumbPaths.some(b => b.name === 'Assignments')) {
                breadcrumbPaths.push({ name: 'Assignments', path: `/Kanbas/Courses/${courseId}/Assignments` });
            }
            breadcrumbPaths.push({ name: assignment.title, path: location.pathname });
        }
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb" >

                    <li className="breadcrumb-item">
                        <Link to={`/Kanbas/Courses/${courseId}`} style={{ color: 'red' }}>
                            <HiMiniBars3 style={{  marginRight: '5px' , marginLeft: '25px'}} />
                            {breadcrumbPaths[0].name}
                        </Link>
                    </li>
                    {breadcrumbPaths.slice(1).map((item, index) => (
                        <li key={index} className={`breadcrumb-item ${index === breadcrumbPaths.length - 2 ? 'active' : ''}`} aria-current={index === breadcrumbPaths.length - 2 ? 'page' : undefined}>
                            {index === breadcrumbPaths.length - 2 ? (
                                item.name
                            ) : (
                                <Link to={item.path}>{item.name}</Link>

                            )}
                        </li>
                    ))}
                </ol>

            </nav>
                {/* The button is aligned to the right within the flex container */}
                <button className="btn-custom-sm">
                    <i className="fa fa-eye"></i> Student View
                </button>
            </div>
            <hr />
            <CourseNavigation />
            <div >
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{ left: "320px", top: "50px" }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Modules" element={<h1>Modules</h1>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<h1>Assignments</h1>} />
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;