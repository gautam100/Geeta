let displayProd = () => {
  let prodList = [
    {
      title: "Running Shoes for Man Soft EVA Sole Sports Shoes",
      price: 1499,
      brand: "Boldfit",
      image:
        "https://m.media-amazon.com/images/I/6166QK7UKaL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      title: "Nike Mens Promina Running Shoes",
      price: 4994,
      brand: "Nike",
      image:
        "https://m.media-amazon.com/images/I/610aPX1IWYL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      title: "Mens Ironman Running Shoes",
      price: 1349,
      brand: "Bacca Bucci",
      image:
        "https://m.media-amazon.com/images/I/71biQP-kH1L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      title: "Men's Cosko Sports Running,Walking,Gym",
      price: 699,
      brand: "Asian",
      image:
        "https://m.media-amazon.com/images/I/61pYhDY8fxL._AC_UL480_FMwebp_QL65_.jpg",
    },
  ];

  let elem = document.getElementById("container")
  for(let prod of prodList){
    elem.innerHTML += `
        <div class="card" id="card">
            <div class="prod-img" id="prod-img">
                    <img src="${prod.image}" width="290" height="200" />
            </div>
            <div id="card-body">
                <h3>${prod.title}</h3>
                <strong>Price: &#8377; ${prod.price}</strong>
            </div>
        </div>   
    `
  }
};
