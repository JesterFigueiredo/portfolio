document.querySelector('#toggle').addEventListener('click',()=>{
    let block_none=document.querySelector('nav');

    if(block_none.style.display==='flex'){
        block_none.style.display='none';
    }

    else{
        block_none.style.display='flex';
    }
})