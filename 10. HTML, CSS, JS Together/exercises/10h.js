function calculateTotal() {
  const inputElement = document.querySelector(".js-cost-input");
  let cost = Number(inputElement.value);
  
  if (0 < cost && cost < 40) {
    cost += 10;
    document.querySelector(".js-total-cost")
    .innerHTML = `$${cost}`;
  } else {
    document.querySelector(".js-error-message")
        .innerHTML = `Error: cost cannot be less than $0`
    
    return;
  }
}

function handleCostKeydown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}
