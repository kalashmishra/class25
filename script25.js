






















function imgSlider(val){
    document.querySelector("#pepsi").src= val;
}

document.querySelector("#one").addEventListener("click",function(){
  
    imgSlider(`/img/pepsi001.png`);
    document.querySelector("#main").style.backgroundColor="#0062be";
   

})
document.querySelector("#two").addEventListener("click",function(){
  imgSlider(`/img/pepsi002.png`);
  document.querySelector("#main").style.backgroundColor="#e60c2c";
      
})
document.querySelector("#three").addEventListener("click",function(){
      imgSlider(`/img/pepsi003.png`);
      document.querySelector("#main").style.backgroundColor="#1e1e1e";
 
    
})