import {data} from '../data/data.js';
console.log(data)

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let like =[];

document.addEventListener('DOMContentLoaded',()=>{
    loadData(data)

})

const loadData = data =>{
    data.forEach(personajes =>{
        const {id,name,image}=personajes
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src',image);
        templateCard.querySelector('.btn-dark').dataset.id = id;
const clone = templateCard.cloneNode(true)
fragment.appendChild(clone)
        
    })
   
    items.addEventListener('click',e =>{

    })
}
const addLike = e => {
        if(e.target.classList.contains('btn-dark')){
            setLike(e.target.parentElement)
        }
}
const setLike = objeto =>{
    const  boton ={
        id: objeto.querySelector('.btn-dark').dataset.id,
        cantidad:0
    }
    console.log(like.hasOwnProperty(boton.id)) 
        boton.cantidad = like[boton.id].cantidad +1;
        objeto.querySelector('#Like').textContent = boton.cantidad;
    
}