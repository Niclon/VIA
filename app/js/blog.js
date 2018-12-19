var minus = "fas fa-minus-circle";
var plus = "fas fa-plus-circle";

$( document ).ready(function() {
    preventAhref();



});



function changeItemInList(item){
    removeActiveFromList();
    item.parentElement.classList.add("active");
    item.children[0].classList.remove("fa-plus-circle");
    item.children[0].classList.add("fa-minus-circle");
    item.parentElement.parentNode.children[1].classList.remove("no-display");
}
function removeActiveFromList() {
    $('#last-widget-list div').each(function(item,val) {
        if(val.children[0].classList.contains("active")){
            let value = val.children[0];
            value.classList.remove("active");
            value.children[0].children[0].classList.remove("fa-minus-circle");
            value.children[0].children[0].classList.add("fa-plus-circle");
            val.children[1].classList.add("no-display");
        }
    })
}
function preventAhref() {
    $('#last-widget-list li a').on(
        'click', function(e) { e.preventDefault(); }, false
    );
}