// // adicionar elemento ativo onde clicar nos links internos
// const linkInternos =document.querySelectorAll('a[href^="#"]');

// function qualquerlink(item) {
//   item.preventDefault();
//   linkInternos.forEach ((item)=>{
//     item.classList.remove('ativo');
//   });
//   item.currentTarget.classList.add('ativo');
// }

// linkInternos.forEach ((link)=>{
//   link.addEventListener('click', qualquerlink);
// })
// // aumentar textto apertando a letra t 
// function clicarT (item) {
//   if (item.key === 't') {
//     document.documentElement.classList.toggle('fontemaior')
//   }
// }
// window.addEventListener('keydown',clicarT );

const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabconteudo section');
if(tabMenu.length && tabContent.length){
tabContent[0].classList.add('ativo');

function activeTab (index){
  tabContent.forEach ((section)=>{
 section.classList.remove('ativo');
  });
 tabContent[index].classList.add('ativo');
}
tabMenu.forEach((itemMenu, index)=> {
  itemMenu.addEventListener('click',() =>{
    activeTab(index);
  })
}); }
