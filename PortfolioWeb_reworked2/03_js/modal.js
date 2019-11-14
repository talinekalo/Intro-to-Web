// create a function for closing button


/*
function closeModal(){
  document.getElementById('close').style.display="none";

}

function openModal(imagePth){
  document.getElementById('close').style.display="block";


  var img = document.createElement("img");
  document.getElementById('close').appendChild(img);
  img.src=imagePth;
  img.style.position="relative";
  img.style.left="50%";
  img.style.top="50%";
  img.style.transform="translate(-50%,-50%)";
  img.style.maxHeight="90vh";



}
*/

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// create a function for loading the image with a parameter that sets file path

// createElement var img =

// apprendChild(img) to modal

// style the image (style.src, style.position with left/right/transform, style.width, style.maxHeight)
