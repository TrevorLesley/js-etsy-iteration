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

let max = 18;
let least = 14;
newPriceRange = [];


function priceRange(fullArray) {

    for (let j = 0; j < fullArray.length; j++) {
        // console.log("console log before if", fullArray[j])
        // console.log("full array", fullArray)
        // console.log("max", max)
        // console.log(typeof max);
        // console.log(items.price, "price")
        if (fullArray[j].price <= max && fullArray[j].price >= least) {
            console.log("console log after if", fullArray.price);
            // take it out of the array
            newPriceRange.push(fullArray[j]);
        }
    } return newPriceRange;
};

var result = priceRange(items);

// priceRange(pricesArray);
console.log("Items that cost between $14.00USD and $18.00 USD: ", result);






// "Items that cost between $14.00 USD and $18.00 USD:"
//   [
//    {
//       title: "1970s Coors Banquet Glass Beer Pitcher",
//       ...
//    },
//    {
//       title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
//       ...
//    },
//    {
//       title: "Hand Painted Colorful Feather Glass",
//       ...
//    },
//    {
//       title: "Groomsman Gifts - Bottle Opener Credit Card Sized PERSONALIZED - FREE SHIPPING",
//       ...
//    }
//   ]
