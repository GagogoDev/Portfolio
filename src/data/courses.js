const myCoursesEs = [
    {
        id: 1,
        title: 'Domina Laravel y Crea Aplicaciones de Alto Nivel con Laravel',
        institution: 'Udemy - 15.5 Horas',
        date: '2021-02-02',
    },
    {
        id: 2,
        title: 'Excel Completo - Desde Principiante Hasta Avanzado',
        institution: 'Udemy - 11.5 Horas',
        date: '2021-12-09',
    },
    {
        id: 3,
        title: 'Gestión de proyectos de software con Git y Github',
        institution: 'Edutin Academy - 42 Horas',
        date: '2022-03-25',
    },
    {
        id: 4,
        title: 'SQL - Curso completo de Bases de Datos - de 0 a Avanzado',
        institution: 'Udemy - 23 Horas',
        date: '2022-09-08',
    },
    {
        id: 5,
        title: '[2023] Gestiona tu Proyecto Scrum con Jira Agile',
        institution: 'Udemy - 5.5 Horas',
        date: '2023-04-13',
    },
    {
        id: 6,
        title: 'React: De cero a experto (Hooks y MERN)',
        institution: 'Udemy - 54 Horas',
        date: 'En curso',
    },
];

const myCoursesEn = [
    {
        id: 1,
        title: 'Master Laravel and Build High-Level Applications with Laravel',
        institution: 'Udemy - 15.5 Hous',
        date: '2021-02-02',
    },
    {
        id: 2,
        title: 'Complete Excel - Beginner to Advanced',
        institution: 'Udemy - 11.5 Hours',
        date: '2021-12-09',
    },
    {
        id: 3,
        title: 'Software project management with Git and Github',
        institution: 'Edutin Academy - 42 Hours',
        date: '2022-03-25',
    },
    {
        id: 4,
        title: 'SQL - Complete Database Course - from 0 to Advanced',
        institution: 'Udemy - 23 Hours',
        date: '2022-09-08',
    },
    {
        id: 5,
        title: '[2023] Manage your Scrum Project with Jira Agile',
        institution: 'Udemy - 5.5 Hours',
        date: '2023-04-13',
    },
    {
        id: 6,
        title: 'React: From zero to expert (Hooks and MERN)',
        institution: 'Udemy - 54 Hours',
        date: 'In progress',
    },
];

export const coursesEs = myCoursesEs.sort(function (a, b) {
    return b.id - a.id;
});

export const coursesEn = myCoursesEn.sort(function (a, b) {
    return b.id - a.id;
});
