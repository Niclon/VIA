$( document ).ready(function() {
   createOnClickThumbnailModals();





});

function createOnClickThumbnailModals(){
    $("#thumb-0").on('click', function() {
        updateModalPicture($("#thumb-0").children()[0].src);
        showModal();
    });
    $("#thumb-1").on('click', function() {
        updateModalPicture($("#thumb-1").children()[0].src);
        showModal();
    });
    $("#thumb-2").on('click', function() {
        updateModalPicture($("#thumb-2").children()[0].src);
        showModal();
    });
    $("#thumb-3").on('click', function() {
        updateModalPicture($("#thumb-3").children()[0].src);
        showModal();
    });
}

function updateModalPicture(pathToPic) {
    var picDiv = $('#pictureDiv');
    picDiv.children()[0].remove();
    picDiv.append(createImageNode(pathToPic));
}
function showModal() {
    $('#myModal').modal('show')
}
function createImageNode(pic) {
    var picture = document.createElement("IMG");
    picture.setAttribute("src",pic);
    return picture;
}