const myExperiencesEs = [
    {
        id: 1,
        direction: 'r',
        title: 'Sodexo',
        date: '2021 Sep - 2021 Nov',
        description: `
            Practica universitaria
        `,
    },
    {
        id: 2,
        direction: 'l',
        title: 'Impact',
        date: '2022 Ene - 2023 Abr',
        description: `
            Programador JR full stack
        `,
    },
    {
        id: 3,
        direction: 'r',
        title: 'Impact',
        date: '2022 May - Actualidad',
        description: `
            Supervisor de software
        `,
    },
];

const myExperiencesEn = [
    {
        id: 1,
        direction: 'r',
        title: 'Sodexo',
        date: '2021 Sep - 2021 Nov',
        description: `
            University practice
        `,
    },
    {
        id: 2,
        direction: 'l',
        title: 'Impact',
        date: '2022 Jan - 2023 Apr',
        description: `
            Full stack developer
        `,
    },
    {
        id: 3,
        direction: 'r',
        title: 'Impact',
        date: '2022 May - Actuality',
        description: `
            Software supervisor
        `,
    },
];

export const experiencesEs = myExperiencesEs.sort(function (a, b) {
    return b.id - a.id;
});

export const experiencesEn = myExperiencesEn.sort(function (a, b) {
    return b.id - a.id;
});
