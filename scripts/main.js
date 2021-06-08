const pricesArray = items.map(function (item) {
    return item.price;
});

// #1
const totalPrice = pricesArray.reduce(function (total, i) {
    return total + i;
});

console.log(totalPrice / items.length);

/* Up above, I defined a variable expression to map the price object out of
each array. Then, using the variable associated with the first function, 
I defined another variable expression to reduce the array of the prices to the 
total sum, and then divided that sum by the length of the original array.*/


const priceOfAllItems2 = items
    .reduce(function (acc, item) {
        return acc + item.price;
    }, 0);

//==============Items bought with £==================

items
    .filter(function (item) {
        return item.currency_code === "GBP";
    })
    .forEach(function (item) {
        console.log(`${item.title} costs \u00a3${item.price}.`);
    });

/* Forgot I'm supposed to be using the four methods to write these functions,
fixed it.*/

//=================Failed Attempt====================

// const materialWood = items.filter(function (item) {
//     // console.log((item.materials === 'wood'), "material")
//     return item.materials === 'wood';
// });

// materialWood.forEach(function (item) {
//     console.log(item, "item");
// }); 

//===========Items made of wood===================

items
    .filter(function (item) {
        return item.materials.includes('wood');
    })
    .forEach(function (item) {
        console.log(`${item.title} is made of wood.`)
    });

//=============Items with 8+ materials=============

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

//==========Items made by seller==============

const itemsMadeBySeller = items
    .filter(function (item) {
        return item.who_made === 'i_did';
    });

console.log(`${itemsMadeBySeller.length} items were made by their sellers.`);


//============Average Price=================

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

        