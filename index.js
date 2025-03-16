const ramens = [
    {
      name: "Shoyu Ramen",
      restaurant: "Ichiran",
      image: "shoyu.jpg",
      rating: 5,
      comment: "Delicious!",
    },
    {
      name: "Gyukotsu Ramen",
      restaurant: "Gyu House",
      image: "gyukotsu.jpg",
      rating: 4,
      comment: "Savory and rich!",
    },
    {
      name: "Kojiro Ramen",
      restaurant: "Kojiro Noodles",
      image: "kojiro.jpg",
      rating: 4.5,
      comment: "Great balance of flavors!",
    },
    {
      name: "Naruto Ramen",
      restaurant: "Hidden Leaf Kitchen",
      image: "naruto.jpg",
      rating: 5,
      comment: "A true classic!",
    },
    {
      name: "Nirvana Ramen",
      restaurant: "Ramen Bliss",
      image: "nirvana.jpg",
      rating: 4.8,
      comment: "Absolutely amazing!",
    },
  ];
  
  function displayRamens() {
    const menu = document.getElementById("ramen-menu");
    menu.innerHTML = "";
  
    ramens.forEach((ramen, index) => {
      const img = document.createElement("img");
      img.src = ramen.image;
      img.alt = ramen.name;
      img.addEventListener("click", () => showDetails(ramen, index));
      menu.appendChild(img);
    });
  }
  
  function showDetails(ramen, index) {
    document.getElementById("detail-image").src = ramen.image;
    document.getElementById("detail-name").textContent = ramen.name;
    document.getElementById("detail-restaurant").textContent = ramen.restaurant;
    document.getElementById("detail-rating").textContent = ramen.rating;
    document.getElementById("detail-comment").textContent = ramen.comment;
  
    const deleteButton = document.getElementById("delete-ramen");
    deleteButton.onclick = () => deleteRamen(index);
  }
  
  function clearDetails() {
    document.getElementById("detail-image").src = "";
    document.getElementById("detail-name").textContent = "";
    document.getElementById("detail-restaurant").textContent = "";
    document.getElementById("detail-rating").textContent = "";
    document.getElementById("detail-comment").textContent = "";
    document.getElementById("delete-ramen").style.display = "none";
  }
  
  function deleteRamen(index) {
    const confirmed = confirm("Are you sure you want to delete this ramen?");
    if (confirmed) {
      ramens.splice(index, 1);
      displayRamens();
  
      if (ramens.length > 0) {
        showDetails(ramens[0], 0);
      } else {
        clearDetails();
      }
    }
  }
  
  function addSubmitListener() {
    const form = document.getElementById("new-ramen-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const newRamen = {
        name: form.name.value,
        restaurant: form.restaurant.value,
        image: form.image.value,
        rating: form.rating.value,
        comment: form.comment.value,
      };
  
      ramens.push(newRamen);
      displayRamens();
      form.reset();
    });
  }
  
  function main() {
    displayRamens();
    addSubmitListener();
  
    if (ramens.length > 0) {
      showDetails(ramens[0], 0);
    }
  
    const deleteBtn = document.getElementById("delete-ramen");
    deleteBtn.style.display = "none";
  
    const detailBox = document.getElementById("ramen-detail");
    detailBox.addEventListener("mouseenter", () => {
      deleteBtn.style.display = "block";
    });
    detailBox.addEventListener("mouseleave", () => {
      deleteBtn.style.display = "none";
    });
  
    // 🌙 Dark Mode Toggle
    const toggleBtn = document.getElementById("toggle-theme");
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
  
  document.addEventListener("DOMContentLoaded", main);
  