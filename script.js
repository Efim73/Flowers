let bigImage = document.getElementsByClassName('bigImage')[0]
let pictures = document.getElementsByClassName('pictures')
let flower1 = document.getElementsByClassName('flower1')[0];
let flower2 = document.getElementsByClassName('flower2')[0];
let flower3 = document.getElementsByClassName('flower3')[0];
let flower4 = document.getElementsByClassName('flower4')[0];
let flower5 = document.getElementsByClassName('flower5')[0];





// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

for(let i = 0; i < pictures.length; i++){
    console.log(pictures[3].children[0])
    pictures[i].children[0].onclick=function(){
        bigImage.src=i+'.jpeg'
    }
}

// flower1.onclick = function(){

//     bigImage.src='0.jpeg'
// }
// flower2.onclick = function(){

//     bigImage.src='1.jpeg' 
// }
// flower3.onclick = function(){

//     bigImage.src='2.jpeg'
// }
// flower4.onclick = function(){

//     bigImage.src='3.jpeg'
// }
// flower5.onclick = function(){

//     bigImage.src='4.jpeg'
// }
