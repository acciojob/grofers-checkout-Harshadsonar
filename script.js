const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceElements = document.querySelectorAll("#groceryTable .prices");

	let totalPrice = 0;
	priceElements.forEach((priceElement) => {
		const price = parseFloat(priceElement.textContent.replace('$',''));
		totalPrice += price;
	});

	const totalRow = document.createElement("tr");
	totalRow.innerHTML = `<td>Total</td><td class="prices">${totalPrice.toFixed(2)}</td>`;

	const table = document.getElementById("groceryTable");
	table.appendChild(totalRow);

};

getSumBtn.addEventListener("click", getSum);

