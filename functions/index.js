import { https } from "firebase-functions";
import express, { json } from "express";
import cors from "cors";
// import { initializeApp, credential as _credential } from "firebase-admin";
// import creds from "./credentials.js";

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


import { getReviews, createReviews, updateReviewsById } from "./src/reviews.js";
import { getProducts, getProductsById } from "./src/products.js";
import { createUser, getUserById } from "./src/users.js";
import { getSkinTypes } from "./src/skinTypes.js";


const app = express()
app.use(cors())
app.use(json())
// initializeApp({
//     credential:_credential.cert(creds)
// })
app.get('/test', (req, res) => {
    res.send("we made it")
})
app.post("/user", createUser)
app.get("/user/:id", getUserById)

app.get("/products", getProducts)
app.get("/products/:id", getProductsById)

app.get("/reviews", getReviews)
app.post("/review", createReviews)
app.patch("/reviews/:id", updateReviewsById)

app.get("/skinTypes", getSkinTypes)
export const api = https.onRequest(app);

// app.listen(9000, console.log("listening on port 3001"))