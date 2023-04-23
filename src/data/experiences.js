const myExperiencesEs = [
    {
        id: 1,
        direction: 'l',
        title: 'Sodexo',
        date: '2021 Sep - 2021 Nov',
        description: `
            Practica universitaria
        `,
    },
    {
        id: 2,
        direction: 'r',
        title: 'Impact',
        date: '2022 Ene - Actualidad',
        description: `
            En el cargo de programador JR full stack
            utilizando Jquery y CodeIgniter 3 como herramientas principales y uso de metodologías ágiles
        `,
    },
];

const myExperiencesEn = [
    {
        id: 1,
        direction: 'l',
        title: 'Sodexo',
        date: '2021 Sep - 2021 Nov',
        description: `

        `,
    },
    {
        id: 2,
        direction: 'r',
        title: 'Impact',
        date: '2022 Jan - Actuality',
        description: `
            
        `,
    },
];

export const experiencesEs = myExperiencesEs.sort(function (a, b) {
    return b.id - a.id;
});

export const experiencesEn = myExperiencesEn.sort(function (a, b) {
    return b.id - a.id;
});
