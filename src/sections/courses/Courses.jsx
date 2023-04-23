import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { coursesEs, coursesEn } from '../../data';
import { CardCourses } from '..';
import './Courses.css';

export const Courses = () => {
    const [ courses, setCourses ] = useState( coursesEs )
    const { i18n } = useTranslation();

    useEffect(() => {
        switch (i18n.language) {
            case 'es':
                setCourses( coursesEs );
                break;
            case 'en':
                setCourses( coursesEn );
                break;
            default:
                break;
        }
    }, [ i18n.language ])
    

    return (
        <div className="box-courses">
            {courses.map((course) => (
                <CardCourses key={course.id} data={course} />
            ))}
        </div>
    );
};
