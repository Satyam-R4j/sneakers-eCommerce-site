const wrapper = document.querySelector(".sliderWrapper")
const menuItem = document.querySelectorAll('.menuItem')

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black"
                , img: "./img/air.png"

            },
            {
                code: "darkblue"
                , img: "./img/air2.png"
            },

        ],

    },
    {
        id: 2,
        title: "Air Jordan"
        , price: 149,
        colors: [
            {
                code: "lightgray"
                , img: "./img/jordan.png"
            },
            {
                code: "green"
                , img: "./img/jordan2.png"
            }
        ]
    }, {

        id: 3,
        title: "Blazer"
        , price: 109,
        colors: [
            {
                code: "lightgray"
                , img: "./img/blazer.png"
            },
            {
                code: "green"
                , img: "./img/blazer2.png"
            }
        ]
    },
    {
        id: 4,
        title: "creater"
        , price: 129,
        colors: [
            {
                code: "black"
                , img: "./img/crater.png"
            },
            {
                code: "lightgray"
                , img: "./img/crater2.png"
            }
        ]
    },
    {
        id: 5,
        title: "Hippie"
        , price: 99,
        colors: [
            {
                code: "gray"
                , img: "./img/hippie.png"
            }
            ,
            {
                code: "black"
                , img: "./img/hippie2.png"
            }
        ]
    }
]


let chosenProduct = products[0]
const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")



menuItem.forEach((item, index) =>
{
    item.addEventListener('click', () =>
    {
        //Change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        //Change the choose product
        chosenProduct = products[index]

        //Change text of current product
        currentProductTitle.textContent = chosenProduct.title
        currentProductPrice.textContent = "$" + chosenProduct.price
        currentProductImg.src = chosenProduct.colors[0].img

        //Assign new colors
        currentProductColors.forEach((color, index) =>
        {
            color.style.backgroundColor = chosenProduct.colors[index].code
        })
    })
})



currentProductColors.forEach((color, index) =>
{
    color.addEventListener('click', () =>
    {
        currentProductImg.src = chosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size, index) =>
{
    size.addEventListener("click", () =>
    {
        currentProductSizes.forEach((size) =>
        {
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})


const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")
payment.style.display = "none"

productButton.addEventListener("click", () =>
{
    payment.style.display = "flex"
})


close.addEventListener("click", () =>
{
    payment.style.display = "none"
})