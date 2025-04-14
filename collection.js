var productContainer = document.querySelector(".productBox");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll(".products"); 

search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();

    productList.forEach(function (product) {
        var productName = product.querySelector("p").textContent; 
        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            product.style.display = "none";
        } else {
            product.style.display = "block";
        }
    });
});


function Clicky() {
    alert("Form submitted!");
}
