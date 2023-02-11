const desorderExperiences = [
    {
        id: 1,
        direction: 'r', // r - l
        title: 'Impact',
        date: 'Ene 2022 - Actualidad',
        description:
            'Lorem ipsum Nisi labore aute do aute culpa magna nulla voluptate exercitation deserunt proident.',
    },
];

export const experiences = desorderExperiences.sort(function (a, b) {
    return b.id - a.id;
});
