(function(){
    let date=new Date();
    let hour=date.getHours();
    if(hour<12){
        document.getElementById('mae').innerHTML="Morning";
    }

    else if(hour<12 && hour<16){
        document.getElementById('mae').innerHTML="Afternoon";
    }

    else{
        document.getElementById('mae').innerHTML="Evening";
    }
})();