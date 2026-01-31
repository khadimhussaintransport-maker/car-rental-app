let selectedCar = "";

function bookCar(carName) {
  selectedCar = carName;
  alert(carName + " selected");
}

function sendBooking() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;

  if (!name || !phone || !selectedCar) {
    alert("Please fill all details and select a car");
    return;
  }

  let message = `Booking Request:%0AName: ${name}%0APhone: ${phone}%0ACar: ${selectedCar}`;
  let whatsappNumber = "971XXXXXXXXX"; // your WhatsApp number

  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
}

// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
