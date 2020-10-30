// var proprieties = [{
//         image: "",
//         title: "ceva",
//         price: "1918",
//         currency: "$"
//     },
//     {
//         image: "",
//         title: "ceva",
//         price: "1918",
//         currency: "$"
//     },
//     {
//         image: "",
//         title: "ceva",
//         price: "1918",
//         currency: "$"
//     }
// ];
// for (var i = 0; i < proprieties.length; i++) {
//     showCard(proprieties[i], i);
// };

// function showCard(card, position) {
//     var div = document.createElement('div');
//     div.className = "card";
//     var img = document.createElement('img');
//     img.src = card.image;
//     var h2 = document.createElement('h2');
//     h2.innerText = card.title;
//     var price = document.createElement('span');
//     price.innerText = card.price;
//     div.appendChild(img);
//     div.appendChild(h2);
//     div.appendChild(price);
//     document.getElementById('cards').appendChild(div);
//     var button = document.createElement('button');
//     button.id = position;
//     button.innerText = "Buy";
//     div.appendChild(button);
//     button.onclick = function() {
//         alert("Congratulations! You're broke now - " + card.price);
//         alert("Just kidding. It's yours for free!");
//     }
// }
// showCard()
// var container = document.getElementById("container");
// container.addEventListener("click", function(event) {
//     // console.log(event.target.id);
//     if (event.target.nodeName === "BUTTON") {
//         console.log("bun");
//         var card = proprierties[event.target.id];
//         // console.log(card);
//         alert(
//             "Am adaugat masina smechera " + card.title + "care costa " + card.price
//         );
//     }
// });