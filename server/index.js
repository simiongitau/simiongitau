// instiallizing our express
const express = require("express");

const app = express();
const mysql = require('mysql');
const cors = require('cors');


app.use(cors());
app.use(express.json());





// setting connection with database
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'kenyaagro'
})








//get all the orders
app.get("/ordersPro", (req, res) => {

    db.query("SELECT * FROM orders", (err, result) => {

        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })


})


// testing from developer
app.get("/getTest", async (req, res) => {
    await db.query("SELECT users.fullname,orders.location,orders.phoneno,orders.totalprice,orders.id FROM orders left join users on users.email=orders.eml", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

// selecting admn
app.get("/employee", (req, res) => {
    db.query("SELECT * FROM employee", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})

// email verfication
app.get("/getVerified", (req, res) => {
    db.query("SELECT email from users", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})




// getting all the uses
app.get("/users", (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})




// creating user 
app.post("/create", (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;

    // change update
    const fullname = firstname + lastname;

    // inserting data in database
    db.query("INSERT INTO users(fullname,email)VALUES (?,?)", [fullname, email], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("values inserted")
        }
    })
})



// inserting an order
app.post("/createOrder", (req, res) => {
    const cartTotal = req.body.cartTotal;
    const email = req.body.email;
    const phoneno = req.body.phoneno;
    const location = req.body.location;
    const county = req.body.county;

    const loc = county + "" + "" + location;

    // inserting order to database
    db.query("INSERT INTO orders(totalprice,eml,location,phoneno) VALUES(?,?,?,?)", [cartTotal, email, loc, phoneno], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("order inserted");
        }
    })
})

// geting allproducts from the database
app.get('/getProduct', (req, res) => {


    db.query("SELECT * FROM products", (err, result) => {

        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })



})

// updataing a product



//deleting and order
app.delete("/deleteOrder/:id", async (req, res) => {

    try {
        const { id } = req.params;
        const Delete = await db.query(`DELETE FROM orders WHERE id=${id}`);
        res.status(200).json("Order deleted")
    } catch (error) {

    }


})




























//start our app
app.listen(3001, () => { console.log("your server is running on port 3001") });


