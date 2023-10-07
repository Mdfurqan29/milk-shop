var allProducts = document.getElementById("allProducts")
var allMilks = document.getElementById("allMilk")
var allyogurt = document.getElementById("allyogurt")
var allBreads = document.getElementById("allBreads")
var alleggs = document.getElementById("alleggs")
var main = document.getElementById("main")
var inputs = document.getElementById("inputs")
var names = document.getElementById("name")
var number = document.getElementById("number")
var address = document.getElementById("address")
var orderitem = document.getElementById("orderitem")
var my = document.getElementById("my")

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, set, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBFjP6tYa2qsjDyO6Ob3FpJQUTTkTUGcCs",
    authDomain: "milky-shop.firebaseapp.com",
    projectId: "milky-shop",
    storageBucket: "milky-shop.appspot.com",
    messagingSenderId: "126174129360",
    appId: "1:126174129360:web:0ee9d1724e182b0f1a82d5",
    measurementId: "G-JT5YDLVYLW"
};

const app = initializeApp(firebaseConfig);
var DATABASE = getDatabase(app)

var eggsData = []
var allProductsData = []
var yogurtData = []
var breadsData = []
var milkData = []
function getDataFromDatabase() {
    var reference = ref(DATABASE, 'egg')
    onChildAdded(reference, function (data) {
        render(data.val())
    })
}
function render(data) {
    if (data) {
        eggsData.push(data)
        alleggs.innerHTML = ""
        for (var m = 0; m < eggsData.length; m++) {
            alleggs.innerHTML += `<div class="cards">
                        <img class="cards-img"
                        src="${eggsData[m].src}"
                         alt="">
                      <h5 class="h5Name">${eggsData[m].name}</h5> <h5>${eggsData[m].price}<del>${eggsData[m].Lprice}</del></h5>
                        <button onclick="buyeggs(${m})" class="btn-cards">${eggsData[m].buy}</button>
                        </div> `
        }

    }
}
window.onload = getDataFromDatabase()



function getDataFromDatabase4() {
    var reference = ref(DATABASE, 'bread')
    onChildAdded(reference, function (data) {
        render2(data.val())

    })
}
function render2(data) {
    if (data) {
        breadsData.push(data) 
        allBreads.innerHTML = ""
        console.log(breadsData)

        for (var l = 0; l < breadsData.length; l++) {
            allBreads.innerHTML += `<div class="cards">
                        <img class="cards-img"
                            src="${breadsData[l].src}"
                            alt="">
                        <h5 class="h5Name">${breadsData[l].name}</h5>
                        <h5>${breadsData[l].price}<del>${breadsData[l].Lprice}</del></h5>
                        <button onclick="buyBread(${l})"  class="btn-cards">${breadsData[l].buy}</button>
                        </div> `
        }
    }
}
window.onload = getDataFromDatabase4()

function getDataFromDatabase2() {
    var reference = ref(DATABASE, 'milk')
    onChildAdded(reference, function (data) {
        render3(data.val())
    })
}
function render3(data) {
    if (data) {
        milkData.push(data)
        allMilks.innerHTML = ""
        for (var j = 0; j < milkData.length; j++) {
        allMilks.innerHTML += `<div class="cards">
                <img class="cards-img"
                    src="${milkData[j].src}"
                    alt="">
                <h5 class="h5Name">${milkData[j].name}</h5>
                <h5>${milkData[j].price}<del>${milkData[j].Lprice}</del></h5>
                <button onclick="buyMilk(${j})"  class="btn-cards">${milkData[j].buy}</button>
                </div> `
    }
    }
}
window.onload = getDataFromDatabase2()
  

function getDataFromDatabase3() {
    var reference = ref(DATABASE, 'yogurt')
    onChildAdded(reference, function (data) {
        render4(data.val())
    })
}
function render4(data) {
    if (data) {
        yogurtData.push(data)
            allyogurt.innerHTML = ""
    for (var k = 0; k < yogurtData.length; k++) {
        allyogurt.innerHTML += `<div class="cards">
                    <img class="cards-img"
                        src="${yogurtData[k].src}"
                        alt="">
                    <h5 class="">${yogurtData[k].name}</h5>
                    <h5>${yogurtData[k].price}<del>${yogurtData[k].Lprice}</del></h5>
                    <button onclick="buyYogurt(${k})"  class="btn-cards">${yogurtData[k].buy}</button>
                    </div> `
    }

    }
}
window.onload = getDataFromDatabase3()


function getDataFromDatabase5() {
    var reference = ref(DATABASE, 'Allproducts')
    onChildAdded(reference, function (data) {
        render5(data.val())
    })
}

function render5(data) {
    if (data) {
        allProductsData.push(data)
        allProducts.innerHTML = ""
        for (var i = 0; i < allProductsData.length; i++) {
        allProducts.innerHTML += `<div class="cards">
        <img class="cards-img"
            src="${allProductsData[i].src}"
            alt="">
        <h5>${allProductsData[i].name}</h5>
        <h5>${allProductsData[i].price}<del>${allProductsData[i].Lprice}</del></h5>
        <button onclick="buyAll(${i})" class="btn-cards">${allProductsData[i].buy}</button>
        </div> `
    }
}
}
window.onload = getDataFromDatabase5()

var arr = []
window.buyAll = function (index) {
    var data = allProductsData[index]
    orderitem.innerHTML = `<div class="cards">
<img class="cards-img"
    src="${allProductsData[index].src}"
    alt="">
    <h5 class="h5Name">${allProductsData[index].name}</h5>
<h5>${allProductsData[index].price}<del>${allProductsData[index].Lprice}</del></h5>
</div> `
    main.style.display = "none"
    inputs.style.display = "block"
    arr.unshift(data)

}
window.buyMilk = function (index) {
    var data = milkData[index]
    orderitem.innerHTML = `<div class="cards">
    <img class="cards-img"
        src="${milkData[index].src}"
        alt="">
    <h5 class="h5Name">${milkData[index].name}</h5>
    <h5>${milkData[index].price}<del>${milkData[index].Lprice}</del></h5>
    </div> `
    main.style.display = "none"
    inputs.style.display = "block"
    arr.unshift(data)

}
window.buyYogurt = function (k) {
    orderitem.innerHTML = `<div class="cards">
    <img class="cards-img"
        src="${yogurtData[k].src}"
        alt="">
    <h5 class="">${yogurtData[k].name}</h5>
    <h5>${yogurtData[k].price}<del>${yogurtData[k].Lprice}</del></h5>
    </div> `
    var data = yogurtData[k]
    main.style.display = "none"

    inputs.style.display = "block"
    arr.unshift(data)

}
window.buyBread = function (l) {
    var data = breadsData[l]
    orderitem.innerHTML = `<div class="cards">
    <img class="cards-img"
        src="${breadsData[l].src}"
        alt="">
    <h5>${breadsData[l].name}</h5>
    <h5>${breadsData[l].price}<del>${breadsData[l].Lprice}</del></h5>
    </div> `
    main.style.display = "none"
    inputs.style.display = "block"
    arr.unshift(data)

}
window.buyeggs = function (m) {
    main.style.display = "none"
    inputs.style.display = "block"
    var data = eggsData[m]
    orderitem.innerHTML = `<div class="cards">
    <img class="cards-img"
        src="${eggsData[m].src}"
        alt="">
    <h5 class="h5Name">${eggsData[m].name}</h5>
    <h5>${eggsData[m].price}<del>${eggsData[m].Lprice}</del></h5>
    </div> `
    arr.unshift(data)

}
window.back = function () {
    main.style.display = "block"
    inputs.style.display = "none"
}
window.backs = function () {
    my.style.display = "none"
    main.style.display = "block"
}
window.MyOrder = function () {
    main.style.display = "none"
    my.style.display = "block"
    myorders.innerHTML = ""
    var data = JSON.parse(localStorage.getItem('classData'))
    for (var n = 0; n < data.length; n++) {
        myorders.innerHTML += `<div class="cards">
        <img class="cards-img"
            src="${data[n].src}"
            alt="">
        <h5 class="h5Name">${data[n].name}</h5>
        <h5>${data[n].price}<del>${data[n].Lprice}</del></h5>
        </div> `
    }

}
window.OrderNow = function () {

    var ConfirmOrder = {
        UserName: names.value,
        number: number.value,
        address: address.value,
        name: arr[0].name,
        price:arr[0].price
    }

    if (names.value === "") {
        Swal.fire('enter your name')
    } else if (number.value === "") {
        Swal.fire('enter phone number')
    } else if (address.value === "") {
        Swal.fire('enter your address')

    } else {
        localStorage.setItem('classData', JSON.stringify(arr))
        Swal.fire(
            'Ordered',
            'Success',
            'success'
        )
        var referId = ref(DATABASE)
        var ID = push(referId).key
        ConfirmOrder.id = ID
        var reference = ref(DATABASE, `orders/${ConfirmOrder.id}`)
        set(reference, ConfirmOrder)

        names.value = ""
        number.value = ""
        address.value = ""
        main.style.display = "block"
        inputs.style.display = "none"
    }
}
