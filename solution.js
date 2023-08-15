/*
  1. How to preserve the immutability on my heroes list? Solve below problems using the same
  a. Get heroes who are not evils
  b. Print Unique family names
  c. Print Hero Names from given objects, and append sir in each of them before printing
  d. Do we have any hero in Marvel Family who is not evil
*/

const heroes = [
  { name: "Wolverine", family: "Marvel", isEvil: false },
  { name: "Deadpool", family: "Marvel", isEvil: false },
  { name: "Magneto", family: "Marvel", isEvil: true },
  { name: "Charles Xavier", family: "Marvel", isEvil: false },
  { name: "Batman", family: "DC Comics", isEvil: false },
  { name: "Harley Quinn", family: "DC Comics", isEvil: true },
  { name: "Legolas", family: "Tolkien", isEvil: false },
  { name: "Gandalf", family: "Tolkien", isEvil: false },
  { name: "Saruman", family: "Tolkien", isEvil: true },
];

console.log(
  "1a. Get heroes who are not evil",
  heroes.filter((h) => !h.isEvil)
);

console.log("1b. Print Unique family names", [
  ...new Set(heroes.map((h) => h.name)),
]);

console.log(
  "1c. Print Hero Names from given objects, and append sir in each of them before printing"
);

heroes.forEach((h) => console.log(`${h.name} Sir`));

console.log(
  "1d. Do we have any hero in Marvel Family who is not evil",
  heroes.some((h) => !h.isEvil)
);

/*
2. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
*/

// Creating a Map
const employeeMap = new Map();

// Adding values using the set() method
employeeMap.set("John", { age: 30, department: "HR" });
employeeMap.set("Jane", { age: 25, department: "Marketing" });
employeeMap.set("Mike", { age: 40, department: "IT" });

// Getting values using the get() method
console.log(employeeMap.get("John")); // { age: 30, department: 'HR' }

// Checking if a key exists using the has() method
console.log(employeeMap.has("Jane")); // true

// Deleting a key-value pair using the delete() method
employeeMap.delete("Mike");

// Clearing the Map using the clear() method
employeeMap.clear();

console.log(employeeMap); // Map(0) {}

// Creating a Set
const favoriteFruits = new Set();

// Adding values using the add() method
favoriteFruits.add("Apple");
favoriteFruits.add("Banana");
favoriteFruits.add("Orange");

// Checking if a value exists using the has() method
console.log(favoriteFruits.has("Banana")); // true

// Deleting a value using the delete() method
favoriteFruits.delete("Apple");

// Checking the size using the size property
console.log(favoriteFruits.size); // 2

// Clearing the Set using the clear() method
favoriteFruits.clear();

console.log(favoriteFruits); // Set(0) {}

/*
3. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
*/

let examplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      status: 200,
      "es6-features":
        "Hoisting, Closures, Arrow Functions, SpreadRest Operator, Classes",
    });
  }, 2000);

  setTimeout(() => {
    reject({
      status: 400,
      "es6-features": "Failed",
    });
  }, 3000);
});

examplePromise
  .then((data) => {
    console.log("Example Promise: ", JSON.stringify(data));
  })
  .catch((err) => {
    console.error("Example Promise: ", err);
  });

/*
  4. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice) also need to print students of the session using same example.
*/

const mulOrPrint = (students, ...n) => {
  let prod = n.reduce((prevVal, curr) => prevVal * curr, 1);
  console.log("Product: ", prod);
  console.log("Students: ");
  students.forEach((s) => console.log(s));
};

const students = [
  "Arit",
  "Gustavo",
  "jason",
  "dillon",
  "Ryan",
  "Daniel",
  "Thanh Le",
  "Nhi Luong",
  "Van Duc Phan",
  "Jiahao Zhang",
];

const n = 5;
const numbers = Array.from({ length: n }, (_, index) => index + 1);
mulOrPrint(students, ...numbers);

/*
5. Print the last name through destructuring and add a contact number:9119119110 as well
*/

const person = {
  userDetails: {
    first: "FirstName",
    last: "LastName",
  },
};
const { last } = person.userDetails;
console.log("Last Name: ", last);

person.userDetails.contactNumber = "9119119110";
console.log(JSON.stringify(person));

/*
6. Give me an example of const data manipulation
*/

const example = {
  key1: "val1",
  key2: "val2",
};

//data manipulation
example["key1"] = "val3";
example.key2 = "val4";

console.log("Const Data Manipulation ", example);

/*
7. What is the difference between for-of and for-in show with examples
*/
let arr = [1, 2, 3, 4, 5];
arr["newVal"] = "Some String Value";

console.log("For in:");
for (let x in arr) {
  console.log(arr[x]);
}

console.log("For of:");
for (let x of arr) {
  console.log(x);
}

/*
8. There is a task where we need to make three server calls - named as signin, userregistration and nextpageToNavigate all of them should contain a status code and status success or failed. Create three promises for the same and we need to make sure that we move the user to next page only when all the calls are succeeded
*/

let signIn = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      statusCode: 200,
      status: "success",
    });
  }, 250);

  setTimeout(() => {
    reject({
      statusCode: 400,
      status: "failed",
    });
  }, 500);
});

let userRegistration = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      statusCode: 200,
      status: "success",
    });
  }, 250);

  setTimeout(() => {
    reject({
      statusCode: 400,
      status: "failed",
    });
  }, 500);
});

let nextPageToNavigate = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      statusCode: 200,
      status: "success",
    });
  }, 250);

  setTimeout(() => {
    reject({
      statusCode: 400,
      status: "failed",
    });
  }, 500);
});

let requests = [userRegistration, signIn, nextPageToNavigate];

Promise.all(requests)
  .then((res) => {
    console.log("Allow User to next Page Here");
  })
  .catch((err) => {
    console.error("Something went wrong", err);
  });

/*
  9. We need to check the status of each promise and we can move to the next page even if nextpageToNavigate call gets failed however nothing should be done if first two fails, give me an example of cocurrent promises with which we can achieve such scenarios
*/

Promise.allSettled(requests).then((res) => {
  if (res[0].status === "fulfilled" && res[1].status === "fulfilled") {
    console.log("Q9 Allow User to next Page Here");
  } else {
    console.log("Dont allow");
  }
});

/*
10. Using the promise object at #3 create an async and await feature
*/
const fetchExampleFeatures = async () => {
  try {
    const result = await examplePromise;
    console.log("Async Success:", result);
  } catch (error) {
    console.error("Async Error:", error);
  }
};
fetchExampleFeatures();
