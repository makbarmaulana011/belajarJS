// console.log("Hello World")
// alert("Notifikasi")
// prompt("David Da Silva Gacor")

// var Promnet = "Coding Is Easy"
// console.log(Promnet)
// var Promnet = "Coding Not Easy"
// console.log(Promnet)

// let Promnet = "Coding Is Easy"
// console.log(Promnet)
// Promnet = "Coding Is Easy"
// console.log(Promnet)

// const Promnet = "Coding Is Easy"
// console.log(Promnet)
// Promnet = "Coding Not Easy"
// console.log(Promnet)

// let totalPoin = prompt("Masukan Poin Anda")
//    if(totalPoin > 100){
//    document.write("<h1>Congratulation</h1>")
//    }
//    else{
//     document.write("<h1>Thank You</h1>")
//    }

//    let x = 6;
//    let y = 3;

//    console.log((x<10 && y > 1))
//    console.log((x<10 && y < 1))
//    console.log((x==5||y==5)) 
//    console.log((x==6||y==5)) 
//    console.log(!(x==y))

  // let p = document.querySelector("p")
  // let button = document.querySelector("button")
  // let input = document.querySelector("input")

  // button.addEventListener('click', function(){
  //     let isi = input.value
  //     console.log(isi)
  //     p.innerText = isi
  // })

  const inputBox = document.getElementById("inbox-box");
  const listContainer = document.getElementById("list-container");

    function addTask() {
        if (inputBox.value === '') {
            alert("Tuliskan Daftar List Dahulu");
        } else {
            let li = document.createElement("li");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "checkbox";
            li.appendChild(checkbox);
            let taskText = document.createTextNode(inputBox.value);
            li.appendChild(taskText);
        
            let removeButton = document.createElement("button");
            removeButton.textContent = "X";
            removeButton.className = "remove-button";
            removeButton.style.marginLeft = "10px"
            li.appendChild(removeButton);
            listContainer.appendChild(li);
        
            inputBox.value = "";
            li.style.listStyleType = "none";
        
            removeButton.addEventListener("click", function () {
                li.remove();
            });
        }
    }

        listContainer.addEventListener("change", function (e) {
            if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
                if (e.target.checked) {
                    e.target.parentElement.style.textDecoration = "line-through";
                } else {
                    e.target.parentElement.style.textDecoration = "none";
                }
            }
        }); 
