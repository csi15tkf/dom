// const paragrafos = document.querySelectorAll('.menu a');

// console.log(paragrafos);

// paragrafos.forEach ((item) => {
//   item.classList.add('Ativo');
// })
// console.log(paragrafos);

// paragrafos.forEach ((item) =>{
// item.classList.remove ('Ativo');
// }
// )
// console.log(paragrafos);

// const imgs = document.querySelectorAll('img');
// imgs.forEach ((img) =>{
//   const atributoimg = img.hasAttribute ('alt');
//   console.log (img , atributoimg)
// })


const itensMenu = document.querySelectorAll ('.menu a');
itensMenu.forEach ((item)=>{
  item.classList.add('ativo')
})
console.log (itensMenu);
itensMenu.forEach ((item)=>{
  item.classList.remove('ativo');
})
console.log (itensMenu);