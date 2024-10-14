document.getElementById("currentDate").value = new Date().toLocaleDateString(
  "en-US"
);

function getParameterByName(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

document.getElementById("total").value = getParameterByName("total");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Your browser does not support Geolocation.");
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Once coordinates are retrieved, call function to get address from coordinates
  getAddressFromCoordinates(latitude, longitude);
}

function getAddressFromCoordinates(latitude, longitude) {
  const apiKey = "AlzaSyLYv7XEKBbFQVTiORIDw5WreD6jtC2AO8e"; // Replace YOUR_GOOGLE_MAPS_API_KEY with your API key
  const url = `https://maps.gomaps.pro/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "OK") {
        const address = data.results[0].formatted_address;
        document.getElementById("address").value = address; // Fill address input field
      } else {
        alert("Address not found.");
      }
    })
    .catch((error) => console.error("Error fetching address:", error));
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}

function submitForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const total = document.getElementById("total").value;

  if (name === "" || phone === "" || address === "" || total === "") {
    alert("Please fill in all fields.");
  } else {
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `<br><strong>Customer Name:</strong> ${name}<br><br>
                                   <strong>Phone Number:</strong> ${phone}<br><br>
                                   <strong>Address:</strong> ${address}<br><br>
                                   <strong>Total Amount:</strong> ${total} VP<br><br>
                                   <strong>Date:</strong> ${new Date().toLocaleDateString(
                                     "en-US"
                                   )}<br><br>`;

    alert("Payment successful!");
    let cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
