// script.js

// Stockage temporaire des données pour la simulation
const fakeData = {
    status: "En cours de livraison",
    currentLocation: "Centre de distribution - Paris",
    estimatedDelivery: "28 janvier 2025",
    checkpoints: [
      { location: "Entrepôt - Lyon", date: "25 janvier 2025" },
      { location: "Centre logistique - Paris", date: "26 janvier 2025" },
    ],
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const trackButton = document.getElementById("trackButton");
    const trackingNumberInput = document.getElementById("trackingNumber");
  
    if (trackButton) {
      trackButton.addEventListener("click", () => {
        const trackingNumber = trackingNumberInput.value.trim();
  
        if (!trackingNumber) {
          document.getElementById("errorMessage").textContent =
            "Veuillez entrer un numéro de suivi valide.";
          return;
        }
  
        // Sauvegarder les données dans le stockage local
        localStorage.setItem("trackingNumber", trackingNumber);
        localStorage.setItem("trackingData", JSON.stringify(fakeData));
  
        // Rediriger vers la page des détails
        window.location.href = "details.html";
      });
    }
  
    const trackingNumberDisplay = document.getElementById("trackingNumberDisplay");
  
    if (trackingNumberDisplay) {
      // Récupérer les données du stockage local
      const trackingNumber = localStorage.getItem("trackingNumber");
      const trackingData = JSON.parse(localStorage.getItem("trackingData"));
  
      // Remplir les informations de suivi
      document.getElementById("trackingNumberDisplay").textContent = trackingNumber;
      document.getElementById("status").textContent = trackingData.status;
      document.getElementById("currentLocation").textContent =
        trackingData.currentLocation;
      document.getElementById("estimatedDelivery").textContent =
        trackingData.estimatedDelivery;
  
      const checkpointsList = document.getElementById("checkpoints");
      checkpointsList.innerHTML = "";
      trackingData.checkpoints.forEach((checkpoint) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${checkpoint.date} - ${checkpoint.location}`;
        checkpointsList.appendChild(listItem);
      });
    }
  });
  