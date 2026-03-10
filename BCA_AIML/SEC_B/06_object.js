let getProducts = () =>{
    let prodList = [
        {
            image: "https://m.media-amazon.com/images/I/71mMpbVKuCL._AC_UL480_FMwebp_QL65_.jpg",
            brand:"Bacca Bucci",
            title:"Men Lace Up Running Shoes",
            price:"1424"
        },
        {
            image: "https://m.media-amazon.com/images/I/61DinZX7gqL._AC_UL480_FMwebp_QL65_.jpg",
            brand:"Campus",
            title:"Men's Running Shoes",
            price:"999"
        },
        {
            image: "https://m.media-amazon.com/images/I/6166QK7UKaL._AC_UL480_FMwebp_QL65_.jpg",
            brand:"Boldfit",
            title:"Running Shoes for Man Soft EVA Sole Sports Shoes for ",
            price:"1499"
        },
        {
            image: "https://m.media-amazon.com/images/I/61dKCBfKtSL._AC_UL480_FMwebp_QL65_.jpg",
            brand:"Bacca Bucci",
            title:"Men Lace Up Running Shoes",
            price:"1348"
        }
    ]

    let container = document.getElementById("container") 

    for(let prod of prodList){
        container.innerHTML += `
        <div class="card">
            <div class="prod-img">
            <img src="${prod.image}" width="290" height="240" />
            </div>
            <div class="prod-data">
                <div class="brand">${prod.brand}</div>
                <div>${prod.title}</div>
                <div class="price">&#8377; ${prod.price}</div>
                <div>
                    <button class="add-to-cart-button">
                    Add to Cart 
                    </button>
                </div>
            </div>
        </div>
        `
    }
}