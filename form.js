document.getElementById("costBenefitForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission (page refresh)

  // Get form values
  const vehicleType = document.querySelector('input[name="vehicle-type"]:checked').value;
  const vehiclePrice = parseFloat(document.getElementById("vehicle-price").value);
  const mileageYear = parseFloat(document.getElementById("mileage-year").value);
  const fuelCost = parseFloat(document.getElementById("fuel-cost").value);
  const electricityCost = parseFloat(document.getElementById("electricity-cost").value);
  const maintenanceCharges = parseFloat(document.getElementById("maintenance-charges").value);

  // Perform cost-benefit analysis
  let totalCost = vehiclePrice;
  let totalBenefit = 0;

  if (vehicleType === "two-wheeler") {
    totalCost += (mileageYear / fuelCost) * mileageYear * fuelCost;
  } else {
    totalCost += (mileageYear / fuelCost) * mileageYear * fuelCost;
  }

  totalCost += (mileageYear / fuelCost) * mileageYear * fuelCost;
  totalCost += (mileageYear / fuelCost) * mileageYear * fuelCost;
  totalCost += maintenanceCharges;

  // Display the results
  const resultContainer = document.getElementById("result");
  resultContainer.style.display = "block";

  const totalCostElement = document.getElementById("totalCost");
  totalCostElement.textContent = `Total Cost of Ownership: $${totalCost.toFixed(2)}`;

  const totalBenefitElement = document.getElementById("totalBenefit");
  totalBenefitElement.textContent = `Total Benefit: $${totalBenefit.toFixed(2)}`;
});
