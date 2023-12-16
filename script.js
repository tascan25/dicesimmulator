let randomnumber1 = Math.floor(Math.random()*6)+1
let randomnumber2 = Math.floor(Math.random()*6)+1
// console.log(randomnumber1)
document.querySelector(".img1").setAttribute("src","./images/dice"+randomnumber1+".png")
document.querySelector(".img2").setAttribute("src","./images/dice"+randomnumber2+".png")
if (randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!"
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML = "🚩Player 2 wins!"
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}
function refresh_page(){
    location.reload()
}