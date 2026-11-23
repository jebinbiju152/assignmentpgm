
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function message() {
    console.log("Welcome!");
}

greet("John", message);
async function getData() {
    let result = await Promise.resolve("Data received");
    console.log(result);
}

getData();