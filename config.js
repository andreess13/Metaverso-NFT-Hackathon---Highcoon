const layersOrder = [
    { name: 'Back', number: 5 },
    { name: 'Body', number: 3 },
    { name: 'Pant', number: 4 },
    { name: 'Shirt', number: 4 },
    { name: 'Face', number: 4 },
    { name: 'Mask', number: 4 },
    { name: 'Nose', number: 3 },
    { name: 'Eyes', number: 3 },
];
  
const format = {
    width: 1000,
    height: 1000
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 20;

module.exports = { layersOrder, format, rarity, defaultEdition };