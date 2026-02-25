let getProdList = function () {
  let prodArray = [
    {
      id: 1,
      brand: "Bacca Bucci",
      title: "Mens Ironman Running Shoes",
      price: 1424,
      image:
        "https://m.media-amazon.com/images/I/71biQP-kH1L._AC_UL480_FMwebp_QL65_.jpg",
      description:
        "A shoe is a functional item of footwear designed to protect and comfort the human foot, generally featuring a sturdy sole and an upper portion that leaves the ankle exposed. Originally developed for protection against varied terrain and climates, shoes have evolved into essential fashion accessories and, in some cases, specialized equipment for sports or safety. ",
    },
    {
      id: 2,
      brand: "BoldFit",
      title: "Shoes for Man Stylish Sneakers for Man Comfortable Shoes",
      price: 1099,
      image:
        "https://m.media-amazon.com/images/I/51JceuUOhAL._AC_UL480_FMwebp_QL65_.jpg",
      description:
        "A shoe is a functional item of footwear designed to protect and comfort the human foot, generally featuring a sturdy sole and an upper portion that leaves the ankle exposed. Originally developed for protection against varied terrain and climates, shoes have evolved into essential fashion accessories and, in some cases, specialized equipment for sports or safety. ",
    },
    {
      id: 3,
      brand: "BoldFit",
      title: "Boldfit Running Shoes for Men Sports Shoes for Man Anti Sleep",
      price: 1230,
      image:
        "https://m.media-amazon.com/images/I/71FVTsVKbWL._AC_UL480_FMwebp_QL65_.jpg",
      description:
        "A shoe is a functional item of footwear designed to protect and comfort the human foot, generally featuring a sturdy sole and an upper portion that leaves the ankle exposed. Originally developed for protection against varied terrain and climates, shoes have evolved into essential fashion accessories and, in some cases, specialized equipment for sports or safety. ",
    },
  ];
  let card = document.getElementById("container");
  for (let prod of prodArray) {
    card.innerHTML += `
        <div class="card">
                <div class="img">
                    here image will display
                </div>
            </div>
        `;
  }
};
