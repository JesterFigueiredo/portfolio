document.querySelector('body').addEventListener('mousemove',eyesmove);

function eyesmove(e){
    let x=e.clientX*100/window.innerWidth+"%";
    let y=e.clientY*100/window.innerHeight+"%";
    let ele=document.querySelectorAll('.dot');

    for(let i=0;i<ele.length;i++){
        ele[i].style.left=x;
        ele[i].style.top=y;
        ele[i].style.transform="translate(-"+x+",-"+y+")";
    }
}