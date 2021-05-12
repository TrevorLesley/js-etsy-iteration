const pricesArray = items.map(function (item) {
    return item.price;
});

// #1
const totalPrice = pricesArray.reduce(function (total, i) {
    return total + i;
    // let average =
    // console.log(average);
    totalPrice / items.length;

});

console.log(totalPrice / items.length);

/* Up above, I defined a variable expression to map the price object out of
each array. Then, using the variable associated with the first function, 
I defined another variable expression to reduce the array of the prices to the 
total sum, and then divided that sum by the length of the original array.*/

// let max = 18;
// let least = 14;
// newPriceRange = [];


// function priceRange(fullArray) {

//     for (let j = 0; j < fullArray.length; j++) {
//         // console.log("fullArray", fullArray[j])
//         // console.log("max", max)
//         // console.log(typeof max);
//         // console.log("items.price" items.price)

//         //Use if statement to look at price of every item in list and compare 
//         // the price to see if it needs to be added into new array
//         if (fullArray[j].price <= max && fullArray[j].price >= least) {
//             // console.log("console log after if", fullArray.price);
//             newPriceRange.push(fullArray[j]);
//         }
//     } return newPriceRange;
// };

// var result = priceRange(items);

// // priceRange(pricesArray);
// console.log("Items that cost between $14.00USD and $18.00 USD: ", result);

const priceRange = items.filter(function (item) {
    if (item.price >= 14 && item.price <= 18) {
        return item.price;
    }
});
console.log('Items that cost between $14.00 USD and $18.00 USD:')
priceRange.forEach(function (item) {
    console.log(item);
});


// let britishPound = "";

// title = items[j].title
// price = items[j].price


// function findGBP(fullArray) {
//     // for (let j = 0; j < fullArray.length; j++) {
//     //     title = items[j].title
//     //     price = items[j].price
//     //     if (fullArray[j].currency_code == 'GBP') {
//     //         britishPound = title.concat(price);
//     //     }

//     // }
//     // console.log(britishPound, "British Pound")
//     // return britishPound;
//     items.forEach(function (fullArray) {
//         if (fullArray[j].currency_code == 'GBP') {
//         console.log(fullArray.title + " costs " + fullArray.price);
//     })
//     console.log(britishPound, "British Pound")
//     return britishPound;
// }

// var result1 = findGBP(items);
// findGBP(items);
// console.log(result1);

// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18



const findGBP = items.filter(function (item) {

    return item.currency_code === "GBP";
});

findGBP.forEach(function (item) {
    console.log(item.title + " costs £" + item.price + '.');
});

/* Forgot I'm supposed to be using the four methods to write these functions,
fixed it.*/


// const materialWood = items.filter(function (item) {
//     // console.log((item.materials === 'wood'), "material")
//     return item.materials === 'wood';
// });

// materialWood.forEach(function (item) {
//     console.log(item, "item");
// }); 

const woodMats = items.filter(function (item) {
    return item.materials == 'wood';
});

woodMats.forEach(function (item) {
    console.log(item);
});

