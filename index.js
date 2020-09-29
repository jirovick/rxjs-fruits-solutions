const { EMPTY, from } = require('rxjs');
const { distinct, take, filter, map } = require('rxjs/operators');

/**
 * Helper function to display the data in console
 * @param {any} data 
 */
const toConveyorBelt = data => console.log(data);

// LEVEL: 1: subscribe

// Welcome to RxJS-fruits, where you write JavaScript / TypeScript code to mix your fruit juice!

// The basis of Reactive Extensions is the Observable. It is a counterpart of an array. Instead of that Retaining data it streams the data to interested subscribers. (

// An Observable is therefore only active if it is subscribed to with the subscribe-function. 

// Recipe - 
// In the source code we have an empty Observable with no data to expect.
// Move the conveyor belt, by subscribing to the empty observable with the subscribe function and click on the start button.

const conveyorBelt = EMPTY;

conveyorBelt.subscribe();

// LEVEL: 2: subscribe-next

// Now it's time to put some fruits on the conveyor belt!

// The from function creates an observable from an array. This delivers the data one after the other, like a foreach loop.

// The subscribe function expects a callback function as a parameter. This receives the data from the observable via the parameters.

// Recipe
// Subscribe to the Observable and put each fruit on the conveyor belt with the toConveyorBelt function.
// Add only the fruits that are specified on the recipe. (Note: use subscribe with next)


// Apple
// Banana
// Cherry


// const fruits = from(["apple", "banana", "cherry"]);
// fruits.subscribe(fruit => toConveyorBelt(fruit));

// LEVEL: 3 - distinct

// Exercise: distinct
// Oh no! We get more fruit than the recipe says.

// The pipe operator enables us to execute different RxJS operators one after the other in order to get our fruits as we need them.

// In our case, the distinct operator helps us. It prevents duplicate fruits from being delivered in our data stream. 

// Recipe

// Each fruit should only be mixed once. (Note: use distinct)

// Apple
// Banana

// const fruits = from(["apple", "apple", "banana", "apple"]);

// fruits.pipe(
//     distinct()
// ).subscribe(fruit => toConveyorBelt(fruit));

// LEVEL 4: take

// Exercise: take
// That is too much of a good thing!

// Use the take operator to put only as much bananas on the conveyor belt as is specified in the recipe. 

// Recipe
// Only two bananas should be mixed. (Note: use take)

// Banana
// Banana

// const fruits = from(['banana', 'banana', 'banana', 'banana']);
// fruits.pipe(
//     take(2)
// ).subscribe(fruit => toConveyorBelt(fruit));

// LEVEL 5: filter

// Exercise: filter
// Yuck! Old fruit has been delivered here.

// Use the filter operator to put only fresh fruit on the conveyor belt.

// All fresh apples and bananas should be mixed. (Note: use filter)

// Apple
// Apple
// Apple
// Banana
// Banana
// Banana

// const fruits = from(['apple', 'apple', 'old-apple', 'apple', 'old-apple', 'banana', 'old-banana', 'old-banana', 'banana', 'banana']);

// fruits.pipe(
//     filter(fruit => !fruit.includes('old'))
// ).subscribe(fruit => toConveyorBelt(fruit));

// LEVEL 6 - map

// Exercise: map
// Some fruits are dirty in this delivery.

// The map operator enables data to be changed here. Wash the fruits by removing the dirt from dirty fruits

// Recipe
// All apples and bananas should be cleared of dirt. (Note: use map)

// Apple
// Apple
// Banana
// Banana

const fruits = from(['dirty-apple', 'apple', 'dirty-banana', 'banana']);

fruits.pipe(
    map(fruit => {
        if (fruit.includes('dirty')) return fruit.split('-')[1];
        return fruit;
    })
).subscribe(fruit => toConveyorBelt(fruit));

