function orderChai(){

document.getElementById("orderMessage").innerText =
"☕ Thank You For Your Order! Your Chai Is Being Prepared.";

}


/* Scroll Animation */

const sections = document.querySelectorAll(".fade-section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const position = section.getBoundingClientRect().top;

const screenPosition = window.innerHeight / 1.3;

if(position < screenPosition){
section.classList.add("show");
}

});

});

function showTea(type){

const modal = document.getElementById("teaModal");
const title = document.getElementById("teaTitle");
const desc = document.getElementById("teaDescription");
const price = document.getElementById("teaPrice");

modal.style.display = "grid";

if(type === "adrak"){

title.innerText = "Adrak Chai";
desc.innerText = "Tez adrak ka swad aur kadak chai ka perfect combination...";
price.innerText = "Price: ₹20";

}

else if(type === "ilayachi"){

title.innerText = "Ilayachi Chai";
desc.innerText = "Elaichi ki khushboo wali meethi aur soothing chai...";
price.innerText = "Price: ₹25";

}

else if(type === "kulhad"){

title.innerText = "Kulhad Chai";
desc.innerText = "Mitti ke kulhad mein serve hone wali asli desi chai...";
price.innerText = "Price: ₹30";

}

else if(type === "gud"){

title.innerText = "Gud Ki Chai";
desc.innerText = "Cheeni ki jagah gud se bani healthy aur desi chai...";
price.innerText = "Price: ₹25";

}

else if(type === "masala"){

title.innerText = "Masala Chai";
desc.innerText = "Adrak, elaichi, dalchini aur laung ke masalon se bani kadak chai...";
price.innerText = "Price: ₹30";

}

}

function closeTea(){
document.getElementById("teaModal").style.display="none";
}



