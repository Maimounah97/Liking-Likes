var likesNeil=0;
var likesNicholel=0;
var likesJim=0;


function addLikeNeil(element){
    console.log(element)
   likesNeil=likesNeil+1
   document.getElementById("likes-counter-Neil").innerHTML = likesNeil;

}
function addLikeNichole(element){
    console.log(element)
   likesNicholel=likesNicholel+1
   document.getElementById("likes-counter-Nichole").innerHTML = likesNicholel;

}
function addLikeJim(element){
    console.log(element)
   likesJim=likesJim+1
   document.getElementById("likes-counter-Jim").innerHTML = likesJim;

}