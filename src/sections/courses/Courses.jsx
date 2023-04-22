import { courses } from '../../data';
import { CardCourses } from '..';
import './Courses.css';

export const Courses = () => {
    return (
        <div className="box-courses">
            {courses.map((course) => (
                <CardCourses data={course} />
            ))}
        </div>
    );
};
