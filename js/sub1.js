const $tm = document.querySelector(".thankyou_message");

const $close = document.querySelector(".thankyou_message .close");


$close.addEventListener("click", function(e){
    e.preventDefault();
    $tm.style.display="none";
});