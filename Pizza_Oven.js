function PizzaOven(crustType,sauceType,cheeses,toppings){
    var pizza= {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var Piz1 = PizzaOven("deep dish","traditional","mozzarella",["pepperoni","sausage"]);
console.log(Piz1)

var Piz2 = PizzaOven("deep dish","traditional",["mozzarella","swish cheese"],["Bacon","Meatballs","chicken"]);
console.log(Piz2)

var Piz3 = PizzaOven("deep dish","traditional",["mozzarella","swish cheese","american cheese"],["Bacon","Meatballs","chicken"]);
console.log(Piz3)

var Piz4 = PizzaOven("deep dish","traditional",["no cheese"],["Boneless Ribs","Bacon","Meatballs","chicken"]);
console.log(Piz4)