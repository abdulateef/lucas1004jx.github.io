(function(){
    
   var  title = document.querySelector("header  h1");
   var header = document.querySelector("header");
    
    title.style.top=(header.offsetHeight-title.offsetHeight)/2  + "px";
    title.style.left=(header.offsetWidth-title.offsetWidth)/2 + "px";
       
    
    
    function rePosition(){
    title.style.top=(header.offsetHeight-title.offsetHeight)/2 + "px";
    title.style.left=(header.offsetWidth-title.offsetWidth)/2 + "px";
       
    }
    
    
    window.addEventListener("resize",rePosition,false);
    
})();