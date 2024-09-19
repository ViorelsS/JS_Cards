let data = [
    {
        name: 'Adrian',
        age: 34,
    },
    {
        name: 'Dollie',
        age: 22,
    },
    {
        name: 'Jonathan',
        age: 34,
    },
    {
        name: 'Katherine',
        age: 18,
    },
    {
        name: 'Elsie',
        age: 38,
    },
    {
        name: 'Gerald',
        age: 27,
    },
    {
        name: 'Leonard',
        age: 33,
    },
    {
        name: 'Dustin',
        age: 39,
    },
];

const info = document.querySelector('#info');

let details = data.map(
    (item) => '<div>' + item.name + ' is ' + item.age + ' year old' + '</div>'
);

info.innerHTML = details.join('\n');
