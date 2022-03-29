const chars = [
    {
        id: 1,
        name: 'Goku',
        age: 37,
        url: 'https://static.wikia.nocookie.net/asbanimestarbattle/images/0/09/Goku.png/revision/latest?cb=20210312120539',
        born: '03/12/1984',
        type: 'Zaiyan'
    },{
        id: 2,
        name: 'Gohan',
        age: 18,
        url: 'https://i.pinimg.com/474x/28/ab/6e/28ab6e61adbc9a645f6648b49a2c85ec.jpg',
        born: '08/10/2005',
        type: 'Zaiyan/Terrestre'
    },{
        id: 3,
        name: 'Chichi',
        age: 37,
        url: 'https://i.pinimg.com/474x/c3/e1/aa/c3e1aaa183a2a41386689bf06c234958.jpg',
        born: '03/02/1985',
        type: 'Terrestre'
    },{
        id: 4,
        name: 'Vegeta',
        age: 38,
        url: 'https://c-cl.cdn.smule.com/rs-s79/arr/ed/30/c7ec8fa2-f958-4e4d-b40d-00acb3be8fbb.jpg',
        born: '20/03/1983',
        type: 'Zaiyan'
    },{
        id: 6,
        name: 'Picoro',
        age: 33,
        url: 'https://image.jimcdn.com/app/cms/image/transf/none/path/s287f212058b45620/image/i14851a1761e0b93d/version/1383274350/image.png',
        born: '03/12/1990',
        type: 'Namek'
    },{
        id: 7,
        name: 'Krilin',
        age: 38,
        url: 'https://storage.gra.cloud.ovh.net/v1/AUTH_296c7803aa594af69d39b970927c8fb9/media/avatars/61/61x6ciYmrMnqo2Or.jpeg',
        born: '03/12/1983',
        type: 'Terrestre'
    },
];

const toCard = (char) => {
    return `
    <div class="card" style="width: 18rem;">
        <img src="${char.url}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${char.name}</h5>
            <p class="card-text">${char.type}</p>
        </div>
    </div>
    `
};

const toCards = (characters) => {
    return `
    <div class='row'>
        ${characters.map(char => toCard(char))}
    </div>`
};

const filterType = () => {
    let filter = document.getElementById('filter').value;
    if (filter)
    {
        document.getElementById('container').innerHTML = toCards(chars.filter(elem => elem.type.toLowerCase() === filter.toLowerCase()));
    }
    else
    {
        document.getElementById('container').innerHTML = toCards(chars);
    }
}

const filterId = () => {
    let filter = document.getElementById('findId').value;
    let FoundChar = chars.find(elem => elem.id == filter);
    if (FoundChar)
    {
        document.getElementById('container').innerHTML = toCards([].concat(FoundChar));
    }
    else
    {
        document.getElementById('container').innerHTML = toCards(chars);
    }
}

window.onload = () => {
    document.getElementById('container').innerHTML = toCards(chars);
};