let count = 0;

const countText = document.querySelector("#count");
const increaseBtn = document.querySelector("#increaseBtn");
const decreaseBtn = document.querySelector("#decreaseBtn");
const resetBtn = document.querySelector("#resetBtn");
const themeBtn = document.querySelector("#themeBtn");
const itemInput = document.querySelector("#itemInput");
const addItemBtn = document.querySelector("#addItemBtn");
const itemList = document.querySelector("#itemList");

const updateCounter = () => {
  countText.textContent = count;
};

increaseBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

addItemBtn.addEventListener("click", () => {
  const value = itemInput.value.trim();

  if (value === "") {
    alert("Please enter an item.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = value;
  itemList.appendChild(li);
  itemInput.value = "";
});
