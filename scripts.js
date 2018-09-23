const cart = document.querySelector("#cart");
const chat = document.querySelector("#chat");
const cart_content = cart.querySelector("ul");
const chat_content = chat.querySelector("ul");
// const container = document.querySelector(".container-fluid");
// const row = container.querySelector(".menu");

// console.log(container.offsetHeight);
// console.log(row.offsetHeight);
//
// const height = 400;
//
// let height_chat = chat.offsetHeight;
// console.log(height_chat);



function overlap(){
    let rect_chat = chat.getBoundingClientRect();
    let rect_cart = cart.getBoundingClientRect();

    if(rect_cart.bottom >= rect_chat.top){
        cart_content.style.overflow ="scroll";
        cart_content.style.overflowX ="hidden";
        cart_content.style.height ="50px";
    }


}

setInterval(overlap, 1000);


function show_cart() {
    cart.style.width = '100%';
    cart_content.style.display ='block';
}

function show_chat(){
    chat.style.width = '100%';
    chat_content.style.display ='block';
}

function add_item(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("new"));
    cart_content.appendChild(li);
}

function add_message(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("new"));
    chat_content.appendChild(li);
}


cart.addEventListener("click", show_cart);
chat.addEventListener("click", show_chat);

