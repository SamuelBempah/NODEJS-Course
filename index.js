// const math = require('./math');
// console.log(math.add(1, 2));
// console.log(math.subtract(1, 2));

// const data = require('./data.json');

// console.log(data.name)

// console.log('Hello Sam');

// const superHero = require('./quiz');

// const batman = new superHero('batman');
// console.log(batman.getName());
// batman.setName('Superman');
// console.log(batman.getName());


// const superman = new superHero('superman');
// console.log(superman.getName());

// const path = require("node:path")

// console.log(__filename)
// console.log(__dirname)



// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))


// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))


// console.log(path.parse(__filename))
// console.log(path.format(path.parse(__filename)))

// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute("./data.json"))

// console.log(path.join("folder1", "folder2", "index.html"))
// console.log(path.join("/folder1", "//folder2", "index.html"))
// console.log(path.join("/folder1", "//folder2", "../index.html"))
// console.log(path.join(__dirname, "data.json"))




// console.log(path.resolve("folder1", "folder2", "index.html"))
// console.log(path.resolve("/folder1", "//folder2", "index.html"))
// console.log(path.resolve("/folder1", "//folder2", "../index.html"))
// console.log(path.resolve(__dirname, "data.json"))



// function greet(name) {
//     console.log(`Hello ${name}`)
// }

// function higherOrderFunction(callback) {
//     const name = "Sam"
//     callback(name);
// }

// higherOrderFunction(greet);


// const EventEmitter = require ("node:events")

// const emitter = new EventEmitter()

// emitter.on("order-pizza", (size, topping) => {
//     console.log(`Order received! Baking a ${size} Pizza with ${topping}`)
// })



// emitter.on("order-pizza", (size) => {
//     if (size === "Large") {
//         console.log("Serving complimentary drinks")
//     }
// })


// emitter.emit("order-pizza", "Large", "Mushrooms")





// const PizzaShop = require("./pizza-shop")
// const DrinkMachine = require("./drink-machine")

// const pizzaShop = new PizzaShop()
// const drinkMachone = new DrinkMachine()

// pizzaShop.on("order", (size, topping) => {
//     console.log(`Order received! Baking a ${size} pizza with ${topping}`)
//     drinkMachone.serveDrink(size)
// })


// pizzaShop.order("Large", "mushrooms")
// pizzaShop.displayOrderNumber() 




// const buffer = new Buffer.from("Samuel")

// buffer.write("Codevolution");
// console.log(buffer.toJSON())
// console.log(buffer)
// console.log(buffer.toString())


// const fs = require("node:fs");


// console.log("First")


// const fileContents = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContents);

// console.log("Second")

// fs.readFile("./file.txt", "utf-8", (error, data) => {
//     if(error) {
//         console.log(error)
//     } else {
//         console.log(data)
//     }
// })


// console.log("Third")




// fs.writeFileSync("./greet.txt", "Hello World,")


// fs.writeFile("./greet.txt", " Hello Samuel!", { flag: "a" }, (err) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log("File written successfully")
//     }
// })




// const fs = require("node:fs/promises");

// console.log("First")

// fs.readFile("./file.txt", "utf-8")
// .then(data => console.log(data))
// .catch(error => console.log(error))

// console.log("Second")


// async function readFile() {
//     try {
//         const data = await fs.readFile("./file.txt", "utf-8")
//         console.log(data)
//     }catch(err) {
//         console.log(err)
//     }
// }

// readFile()


// const fs = require("node:fs")
// const zlib = require("node:zlib")

// const gzip = zlib.createGzip();


// const readableStream = fs.createReadStream("./file.txt", { 
//     encoding: "utf-8",
//     highWaterMark: 2,
//  })

//  readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))

//  const writableStream = fs.createWriteStream("./file2.txt")

//  readableStream.pipe(writableStream);

//  readableStream.on("data", (chunk) => {
//     console.log(chunk)
//     writableStream.write(chunk)
//  })



// const http = require("node:http")
// const fs = require("node:fs")

// const server = http.createServer((req, res) => {



//     if(req.url ==="/") {
//         res.writeHead(200, {"Content-Type": "text/plain"})
//        res.end("Home Page")
//     } else if(req.url === "/ABOUT") {
//         res.writeHead(200, {"Content-Type": "text/plain"})
//        res.end("About Page")
//     } else if(req.url === "/API") {
//         res.writeHead(200, {"Content-Type": "application/json"})
//         res.end(
//             JSON.stringify({
//             firstName: "Sam",
//             lastName: "Bempah"
//         })
//     )

//     } else {
//         res.writeHead(404)
//         res.end("Page not found")
//     }
//     })
        

    // const superHero = {
    //     firstName: "Sam",
    //     lastName: "Bempah",
    // }
// res.writeHead(200, { "Content-Type": "application/json" });
// res.end(JSON.stringify(superHero));
// })
// const name = "Samuel"
// res.writeHead(200, {"Content-Type": "text/html"})
// fs.createReadStream("./index.html").pipe(res)
// let html = fs.readFileSync("./index.html", "utf-8")
// html = html.replace("{{name}}", name)
// res.end(html)


// server.listen(3000, () => {
//     console.log("Server is running on port 3000")
// })



// const fs = require("node:fs")
// console.log("First")

// fs.readFile("./file.txt", "utf-8", (err, data) => {
//     console.log("File Contents")
// })

// console.log("Last")

// const https = require("node:https")

// const crypto = require("node:crypto");

// process.env.UV_THREADPOOL_SIZE = 16
// const MAX_CALLS = 1000


// const start = Date.now();
// for (let i = 0; i < MAX_CALLS; i++) {
//     https
//     .request("https://www.google.com", (res) => {
//         res.on("data", () => {})
//         res.on("end", () => {
//             console.log(`Request: ${i + 1}`, Date.now() - start)
//         })
//     })
//     .end()
//     crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
//         console.log(`Hash: ${i + 1}`, Date.now() - start)
//     });
// }


// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512");
// console.log("Hash: ", Date.now() - start);

// console.log("console.log 1")
// process.nextTick(() => console.log("This is a process.next 1"))
// console.log("console.log 2")

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"))
// process.nextTick(() => console.log("This is process.nextTick 1"))

// setTimeout(() => console.log("this is setTimeout 1"), 0)
// setTimeout(() => {

// process.nextTick(() =>
// console.log("this is the inner tick inside setTimeout")
// )
// })
// setTimeout(() => console.log("this is setTimeout 3"), 0)


// process.nextTick(() => console.log("this is process.nextTick 1"))
// process.nextTick(() => {
//     console.log("this is the process.nextTick 2")
//     process.nextTick(() => 
//     console.log("this is the inner tick inside next tick")
// )
// })
// process.nextTick(() => console.log("this is process.nextTick 3"))

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"))
// Promise.resolve().then(() => {
//     console.log("this is Promise.resolve 2")
//     process.nextTick(() =>
//     console.log("this is the inner next tick inside Promise then block")
// )
// })
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"))


// setTimeout(() => console.log("this is setTimeout 1"), 1000);
// setTimeout(() => console.log("this is setTimeout 2"), 500);
// setTimeout(() => console.log("this is setTimeout 3"), 0);


// const fs = require("fs")

// fs.readFile(__filename, () => {
//     console.log("this is readFile 1")
// })

// process.nextTick(() => console.log("this is process.nextTick 1"))
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"))



// const fs = require("fs")

// setTimeout(() => console.log("this is setTimeout 1"), 0)

// fs.readFile(__filename, () => {
//     console.log("this is readFile 1")
// })

// const fs = require("fs")

// fs.readFile(__filename, () => {
//     console.log("this is readFile 1")
//     setImmediate(() => console.log("this is inner setImmediate inside readFile"));
//     process.nextTick(() =>
//     console.log("this is inner process.nextTick inside readFile")
// )
// Promise.resolve().then(() => 
//     console.log("this is inner Promise.resolve inside readFile")
// )
// })

// process.nextTick(() => console.log ("this is process.nextTick 1"))
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"))
// setTimeout(() => console.log("this is setTimeout 1"), 0)



// for (let i = 0; i < 2000000000; i++) {}



// setImmediate(() => console.log("this is setImmediate 1"))
// setImmediate(() => {
//     console.log("this is setImmediate 2")
//     process.nextTick(() => console.log("this is process.nextTick 1"))
//     Promise.resolve().then(() => console.log("this is Promiss.resolve 1"))
// })
// setImmediate(() => console.log("this is setImmediate 3"))

// setTimeout(() => console.log("this is setTimeout 1"), 0)
// setImmediate(() => console.log("this is setImmediate 1"))
// for (let i = 0; i < 2000000000; i++) {}


const fs = require("fs")

const readableStream = fs.createReadStream(__filename)
readableStream.close()

readableStream.on("close", () => {
    console.log("this is from readableStream close event callback")
})
setImmediate(() => console.log("this is setImmediate 1"))
setTimeout(() => console.log("this is setTimeout 1"), 0)
Promise.resolve().then(() => console.log("this is Promise.resolve 1"))
process.nextTick(() => console.log("this is process.nextTick 1"))
