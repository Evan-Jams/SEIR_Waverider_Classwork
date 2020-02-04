console.log('yo');

const data = [
  { name: "Megatron", address: "Cybertron" },
  { name: "Some guy", address: "Some street" },
  { name: "Grace Hopper", address: "Arlington, Virginia" },
  { name: "Ching Shih", address: "The High Seas" },
  { name: "Slimer", address: "The Library" },
  { name: "Umbra", address: "The Void" },
  { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
  { name: "Matt Huntington", address: "Remote" },
  { name: "Ronald McDonald", address: "Casa del McDonalds" },
  { name: "Jem", address: "Starlight Music" }
];


const populateData = (list) => {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        const $infoContainer = $('<div>').addClass('info-container');
        const $nameDiv = $('<div>').addClass('name').text(list[i].name);
        const $addressDiv = $('<div>').addClass('address').text(list[i].address);
        $infoContainer.append($nameDiv, $addressDiv);
        $('body').append($infoContainer);
    }
}

// Object destructuring
const addData = ({ name, address }) => {
    data.push({ name: name, address: address })
    $('body').empty();
    populateData(data);
}

const ric = {
    name: 'Ric Mershon',
}


$(() => {
    populateData(data);
    addData({address: 'Cool Mershon Million Dollar Estate', name: 'Ric Mershon'})
    const $btn = $('<button>').addClass('click-me').text('Click Me Please');
    $btn.on('click', () => { addData(ric) });
    $('body').append($btn);
})
