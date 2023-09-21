import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import { filterData } from './view.js';

// import data from './data/lol/lol.js';
import data from '/data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, renderItems, data);

const root = document.getElementById("root");
root.appendChild(renderItems(data.films));

const datafilm = data
const selectFilter = document.getElementsByName("Filter")[0]

selectFilter.addEventListener('change', ()=> {
    const resulFilter = filterData(datafilm, 'director', selectFilter.value)
    console.log(resulFilter)
})