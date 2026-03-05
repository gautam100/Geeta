let getProducts = () =>{
    let prodList = [
        {
            prod_img: "https://m.media-amazon.com/images/I/71TNWxBvjGL._AC_UL480_FMwebp_QL65_.jpg",
            prod_brand: "Nike",
            prod_title: "Nike Womens Run Defy Running Shoes",
            prod_price: 3995
        },
        {
            prod_img: "https://m.media-amazon.com/images/I/61Mm31zkm5L._AC_UL480_FMwebp_QL65_.jpg",
            prod_brand: "Nike",
            prod_title: "Nike Womens Court Vision Low Next Nature Sneaker",
            prod_price: 4995
        },
        {
            prod_img: "https://m.media-amazon.com/images/I/71Q4FpsCO3L._AC_UL480_FMwebp_QL65_.jpg",
            prod_brand: "Nike",
            prod_title: "Nike Womens Air Max Torch 4 Running Shoes",
            prod_price: 7495
        },
        {
            prod_img: "https://m.media-amazon.com/images/I/61rMfCOnImL._AC_UL480_FMwebp_QL65_.jpg",
            prod_brand: "Boldfit",
            prod_title: "Running Shoes for Woman Anti Slip Sports Soft Sole Walking",
            prod_price: 4995
        }
    ]

    let elem = document.getElementById("card-container")
    for(let prod of prodList){
        elem.innerHTML += `
        <div class="card">
        <div class="prod-img">
          <img
            src="${prod.prod_img}"
            width="290"
            height="240"
          />
        </div>
        <div class="prod-content">
        <h3>${prod.prod_brand}</h3>
        <div class="prod-title">${prod.prod_title}</div>
        <div class="prod-price">&#8377; ${prod.prod_price}</div>
        </div>
        </div>
        ` 
    }
}