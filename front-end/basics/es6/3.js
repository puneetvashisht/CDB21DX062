var customer = { name: "Foo" };
var cart = { amount: 7, product: "Bar", unitprice: 42 };

var message = "Customer " + customer.name + " is buying " + cart.product + " for \n"
 + (cart.unitprice * cart.amount);
console.log(message);

// template literals
var messageEs6 = `Customer ${customer.name} is buying ${cart.product}
 for ${cart.unitprice * cart.amount}`
console.log(messageEs6);
