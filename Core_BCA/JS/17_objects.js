let showProducts = function()  {
  let prodList = [
    {
      id: 101,
      category: "Cloth",
      title: "Mens Indus-251 Running Shoe",
      description: "This is fake description, for demo page",
      price: 500,
      image:
        "https://m.media-amazon.com/images/I/71biQP-kH1L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 102,
      category: "Cloth",
      title: "Dynamight (58360ID-CCBK_6)",
      description: "This is fake description, for demo page",
      price: 1400,
      image:
        "https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 103,
      category: "Shoe",
      title: "Nike Sport Shoe",
      description: "This is fake description, for demo page",
      price: 2500,
      image:
        "https://m.media-amazon.com/images/I/716kSfEScGS._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 104,
      category: "EVA Lite Sport Shoes Running Shoes for Men- White",
      title: "Titan Premium",
      description: "This is fake description, for demo page",
      price: 9500,
      image:
        "https://m.media-amazon.com/images/I/71cdueK5ecL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 105,
      category: "Cloth",
      title: "Men Lace Up Running Shoes",
      description: "This is fake description, for demo page",
      price: 500,
      image:
        "https://m.media-amazon.com/images/I/71Ef6vTHZRL._AC_UL480_FMwebp_QL65_.jpg",
    },
  ];
  let card = document.getElementById("container");

  for (let prod of prodList) {
    card.innerHTML += `
        <div class="card">
            <div class="img-placeholder">
            <img src="${prod.image}" width="300" height="225">
            </div>
            <div class="card-body">
                <h3 class="center">${prod.title}</h3>
                <p class="center">
                    ${prod.description}
                </p>
                <div class='price'>&#8377; ${prod.price}</div>
            </div>
        </div>
    `;
  }
};
