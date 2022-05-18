// const person = {
//     firstName: "John",
//     surName: "Doe"
// }

// var ismlar = ["Alex", "Klara", "Max"]
// var items = ["Welcome", 21, true, false, { name: "Alex" }]

// console.log(ismlar)
// console.log(items[0])
// console.log(items[4].name);


// var arr2 = []  // new Array()


// arr2.push(12)
// arr2.push("Welcome")
// console.log(arr2)

// const users = [
//     {
//         id: 123,
//         firstname: "Ikromov",
//         surname: "Fozil",
//         age: 23
//     },
//     {
//         id: 124,
//         firstname: "Muhiddin",
//         surname: "Malikov",
//         age: 20
//     },
//     {
//         id: 123,
//         firstname: "Ikromov",
//         surname: "Fozil",
//         age: 23
//     },
//     {
//         id: 124,
//         firstname: "Muhiddin",
//         surname: "Malikov",
//         age: 20
//     }
// ]
// users.unshift({
//     id: 125,
//     firstname: "Shohruh",
//     surname: "Alimov",
//     age: 19
// })

// users = []
// users[0] = "Alisher"


// const numbers = [13, 12, 23, 14, 5, 7, 13, 25]

// var resultPop = numbers.pop()
// var result = numbers.shift()


// console.log("Oxiridan o'chirildi:", resultPop)
// console.log("Boshidan o'chirildi:", result);
// console.log(numbers)


// console.log(numbers[0])
// console.log(numbers[numbers.length - 1])
// const square = [[1, 2, 3], [2, 3, 4], 1]
// square[0] = 0

// var temp = square[0]
// temp[1] = 0

// console.log(square);


// console.log()

// const square = [
//     ["*", "*", "*"],
//     ["*", "*", "*"],
//     ["*", "*", "*"]
// ]

// const numbers = []
// const horse = {
//     name: "Ot",
//     color: "white",
//     position: "A4"
// }
// square[1][1] = horse

// // square[1][1] = 0

// square[2][0] = 0
// square[0][2] = 0
// square[2][2] = "x"
// console.log(square)

// const numbers = [13, 12, 23, 14, 5, 7, 13, 25, 12, 1, 0, 1]

// var sum = 0
// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 1) sum += numbers[i]
// }

// console.log("Sikl tugadi sum=", sum)

// var numbers = [3.02, -3.65, 5, -9]

// for (var i = 0; i < numbers.length; i++) {
//     numbers[i] = Math.round(numbers[i])
//     numbers[i] = numbers[i] < 0 ? numbers[i] * (-1) : numbers[i]
// }



// console.log(numbers)

// function abs(number) {
//     if (number < 0)
//         return (-1) * number
//     return number
// }

// function abs2(number) {
//     return number < 0 ? number * (-1) : number
// }

// console.log(abs(12))
// console.log(abs2(-13))
// var btnEl = document.createElement("button")
// btnEl.textContent = "show password"


// var inputEl = document.createElement("input")
// inputEl.type = "password"

// btnEl.addEventListener("click", function (e) {
//     if (inputEl.type === "password")
//         inputEl.setAttribute("type", "text")
//     else
//         inputEl.setAttribute("type", "password")
// })


// var linkEl = document.createElement("a")
// linkEl.href = "http://crm.najottalim.uz"
// linkEl.setAttribute("target", "_blank")
// linkEl.textContent = "Najot Ta'lim CRM ga o'tish"

// var div = document.createElement("div")
// div.textContent = "Hello Div"
// div.style.color = "red"
// div.classList.add("bg-dark", "text")
// console.log(div)


// div.appendChild(linkEl)
// div.appendChild(inputEl)
// div.appendChild(btnEl)
// document.body.appendChild(div)


// UserList
var users = [
    {
        name: "Ali",
        // age: 45
    },
    {
        name: "Vali",
        // age: 32
    },
    {
        name: "G'ani",
        // age: 12
    },
    {
        name: "G'ani",
        // age: 12
    }
]



var formEl = document.createElement("form")

var inputEl = document.createElement("input")
inputEl.type = "text"

var submitBtn = document.createElement("button")
submitBtn.type = "submit"
submitBtn.textContent = "Add"

formEl.addEventListener("submit", function (event) {
    event.preventDefault()
    users.push({ name: inputEl.value })
    renderUsers()
    inputEl.value = ""
})
formEl.appendChild(inputEl)
formEl.appendChild(submitBtn)
document.querySelector(".form").appendChild(formEl)

function renderUsers() {
    var userListContainerEl = document.querySelector(".user-list")
    userListContainerEl.textContent = null

    var userListEl = document.createElement("ul")
    for (var i = 0; i < users.length; i++) {
        var singleUser = document.createElement("li")
        singleUser.textContent = `${users[i].name}`

        userListEl.appendChild(singleUser)
    }
    userListContainerEl.appendChild(userListEl)
}

renderUsers()