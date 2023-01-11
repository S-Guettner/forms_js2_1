let headline = document.getElementById("headline");

let changeHeadline = () =>{
    headline.classList.add("newHeadlineStyle")
};
let resetHeadline = () =>{
    headline.classList.remove("newHeadlineStyle")
};






/* toggle */
let change = document.getElementById("toggle");

change.addEventListener('click', function (){
    headline.classList.toggle("newHeadlineStyle")
});