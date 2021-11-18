let images=querySelectorAll(".gallery");



var fullimgbox=document.getElementById("fullimgbox");
var fullimg=document.getElementById("fullimg");

function openfullimg(pic){

    fullimgbox.style.display="flex";
    fullimg.src=pic;
}

function closefullimg() {
    fullimgbox.style.display="none";
}


let fullimgbox = document.getElementById("fullimgbox");
 let fullimg = document.getElementById("fullimg");
 let gallery = document.querySelectorAll(".gallery");
 function openfullimg(pic) {
   fullimgbox.style.display = "flex";
   fullimg.src = pic;
   let picNum = pic.slice(-5);
   picNum = picNum.charAt(0); //br na slika
   document.getElementById("next").addEventListener("click", 
function () {
     fullimg.html = `<img src="${picNum +1}.jpg" id="fullimg" />`;
   });
 }
 function closefullimg() {
   fullimgbox.style.display = "none";
 }


 function incrementButton(){
   var element = document.getElementById('incrementText')
   var value = element.innerHTML;

   ++value;

   console.log(value)
   document.getElementById('incrementText').innerHTML = value;
 }
