const btn_open = document.getElementById("Btn-Open");
const btn_clouse = document.getElementById("Btn-clouse");
const modal_window = document.getElementById("modal-window");
const Text_status = document.getElementById("status");


btn_open.onclick = (e)=>{
    modal_window.style.bottom = "auto";
    if(modal_window.classList.contains("ClouseModalWindow")){
        modal_window.classList.remove("ClouseModalWindow");
    }
    modal_window.classList.add("OpenModalWindow");
    modal_window.style.display = "flex";
    Text_status.innerText = "Open";
}
btn_clouse.onclick = (e)=>{
    modal_window.classList.remove("OpenModalWindow");
    modal_window.classList.add("ClouseModalWindow");
    setTimeout(function(){
        modal_window.style.display = "none";
    },1000);
    Text_status.innerText = "Clouse";
}