//  Immediately invoked function expression (IIFE) - when you call the function right after defining it by applying the parrends + semi colon like so.
(function () {
    'use strict';




    const priceOfAllItems = items
        .map(function (item) {
            return item.price;
        })
        .reduce(function (acc, i) {
            return acc + i;
        });

    // The above is the same code I used, but instead of having two variables, we used one variable and chained the methods together. *THIS MAKES ALL THE SENSE*

    const priceOfAllItems2 = items
        .reduce(function (acc, item) {
            return acc + item.price;
        }, 0);

    /* This is compacting both map and reduce, using only reduce. without the zero at
    the end that establishes acc = 0 the first time, this would be a faulty return. */

    const averagePrice = (priceOfAllItems2 / items.length).toFixed(2);
    console.log(`The average price is $${Math.floor(averagePrice * 100) / 100}.`)

    console.log(`Items that cost between $14.00 and $18.00 USD:`);
    items
        .filter(function (item) {
            return item.currency_code === 'USD' && item.price >= 14 && item.price <= 18;
        })
        .map(function (item) {
            return item.title;
        })
        .forEach(function (item) {
            console.log(item);
        });

    /* I could get used to this chaining thing. */


    items
        .filter(function (item) {
            return item.currency_code === "GBP";
        })
        .forEach(function (item) {
            console.log(`${item.title} costs \u00a3${item.price}.`);
        });


    /* Be careful with chaining, make sure you're only using the semi colon to 
    end the statement at the END of the chain. */

    items
        .filter(function (item) {
            return item.materials.includes('wood');
        })
        .forEach(function (item) {
            console.log(`${item.title} is made of wood.`)
        });

    /* Do not use these methods aside from /forEach/ to console.log things. We use forEach for 'side effects', we don't wanna use specific methods to print things. */

    items
        .filter(function (item) {
            return item.materials.length >= 8;
        })
        .forEach(function (item) {
            console.log(`${item.title} has ${item.materials.length} materials.`);
            item.materials.forEach(function (material) {
                console.log(material);
            })
        });




    const itemsMadeBySeller = items
        .filter(function (item) {
            return item.who_made === 'i_did';
        });

    console.log(`${itemsMadeBySeller.length} items were made by their sellers.`);






})();