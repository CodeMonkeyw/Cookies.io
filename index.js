let cookie = 0 
function cookies(){
    cookie++
    document.getElementById('zero').innerHTML = cookie;
    document.querySelector(".cookie").style.cookie.scale = "-1.2";
    
}
function cursorButton(){
    
        if(cookie === 5){
            document.querySelector('#zero').innerHTML = cookie - 5;
            for( i = 0; i > 3232222; i++){
                document.querySelector('#zero').innerHTML = cookie * 2
                }
        }
        if(cookie > 5){
            document.querySelector('#zero').innerHTML = cookie - 5;
            for( i = 0; i > 3232222; i++){
            document.querySelector('#zero').innerHTML = cookie * 2
            }
        }
      
        if(cookie < 5){
        alert('insufficent purchase')
        }
    

}



