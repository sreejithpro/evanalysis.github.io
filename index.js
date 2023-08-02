document.getElementById("costBenefitForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission (page refresh)

  // Get form values
  const vehicle_price_ICE = parseFloat(document.getElementById("vehicle-price_ICE").value);
  const vehicle_price_EV = parseFloat(document.getElementById("vehicle-price_EV").value);
  const mileageYear = parseFloat(document.getElementById("mileage-year").value);
  const fuelCost_ICE = parseFloat(document.getElementById("fuel-cost_ICE").value);
  const electricityCost = parseFloat(document.getElementById("electricity-cost").value);
  const ICE_mileage = parseFloat(document.getElementById("ICE_mileage").value);
  const EV_range = parseFloat(document.getElementById("EV_range").value);
  const EV_capacity = parseFloat(document.getElementById("EV_capacity").value);

  // Perform cost-benefit analysis
	let fuel_ICE = (mileageYear/ICE_mileage)*fuelCost_ICE
  let fuel_EV = (mileageYear/EV_range)*EV_capacity*electricityCost
  let BEY = (vehicle_price_EV-vehicle_price_ICE)/(fuel_ICE-fuel_EV)
  

  // Display the results
  const resultContainer = document.getElementById("result");
  resultContainer.style.display = "block";

  const fuel_ICEr = document.getElementById("fuel_ICEd");
  fuel_ICEr.textContent = `Cost of Fuel for ICE: ${fuel_ICE.toFixed(2)}`;

  const fuel_EVr = document.getElementById("fuel_EVd");
  fuel_EVr.textContent = `Cost of Electricity: ${fuel_EV.toFixed(2)}`;
  
  const BEYr = document.getElementById("BEYd");
  BEYr.textContent = `Year to Break Even: ${BEY.toFixed(1)}`;
});
