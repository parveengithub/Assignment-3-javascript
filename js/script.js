document.addEventListener('DOMContentLoaded', function() {
    // Add student ID and name dynamically
    var studentInfo = document.createElement('p');
    studentInfo.textContent = "Name: Parveen Kaur, Student ID: 200555897";
    document.body.appendChild(studentInfo);
})
// Capturing form values on button click
document.getElementById('orderButton').addEventListener('click', function() {
    const size = document.getElementById('size').value;
    const crust = document.getElementById('crust').value;
    const toppings = document.getElementById('toppings').value;

    // Creating Pizza object
    const pizza = new Pizza(size, crust, toppings);

    // Displaying pizza description
    const pizzaDescription = document.createElement('p');
    pizzaDescription.innerText = `You ordered a ${pizza.size} pizza with ${pizza.crust} crust and toppings: ${pizza.toppings}.`;
    document.body.appendChild(pizzaDescription);
});

// Pizza class
class Pizza {
    constructor(size, crust, toppings) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }
}
