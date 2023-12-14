const mobilebtn= document.querySelector("#mobile-btn");
const mobilemenu= document.querySelector("#mobile-menu");
const close = document.querySelector("#close");

mobilebtn.addEventListener('click', ()=>{

mobilemenu.classList.toggle('hidden');





});


close.addEventListener('click', ()=>{

    mobilemenu.classList.toggle('hidden');
    
});








function search() {
    let filter = document.getElementById("find").value.toUpperCase();
    let item = document.querySelectorAll('#img');

    let l = document.getElementsByTagName('h5');

    for(var i = 0; i<=l.length;i++){
        let a=item[i].getElementsByTagName('h5')[0];

        let value =a.innerHTML || a.innerText || a.textContent;

        if(value.toUpperCase().indexOf(filter) > -1){
            item[i].style.display="";
        }else{
            item[i].style.display="none";
        }
    }
}















