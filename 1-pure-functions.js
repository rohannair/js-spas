// Pure functions
// Given an array, how could we double all the numbers?

let ourArray = [1, 2, 3, 4, 5];
const expected = [2, 4, 6, 8, 10];

// I got this.
for (let i = 0; i < ourArray.length; i++) {
  let val = ourArray[i];
  ourArray[i] = val * 2;
}

expect(ourArray).toEqual(expected); // true

// But wait, I don't want the old array to change
// I need it for something else!!
const whatOurArrayNeedsToBe = [1, 2, 3, 4, 5];
expect(ourArray).toEqual(whatOurArrayNeedsToBe); // false











// Let's use a pure function instead
const ourArray = [1, 2, 3, 4, 5];
const expected = [2, 4, 6, 8, 10];
const whatOurArrayNeedsToBe = [1, 2, 3, 4, 5];

const ourNewArray = ourArray.map(num => num * 2);
const ourNewArray = ourArray.map((num) => {
  return num * 2;
});


function ourMap(initialArr) {
  let newArr = [];

  for (let i = 0; i < initialArr.length; i++) {
    newArr.push(initialArr[i] * 2);
  }

  return newArr;
};

ourMap(ourArray);

expect(ourNewArray).toEqual(expected); // true
expect(ourNewArray).toEqual(whatOurArrayNeedsToBe); // true

// No side effects!!

[ ...arr ]
{ ...obj }

{ x:1 } + { y:2 }
Object.assign({ x:1 }, { y:2 }) // { x:1, y:2 }

let a = { x:1 }
let b = { x:2 }
let c = { ...a, ...b } // { x: 2 }
