import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { getReviews, createReviews, updateReviewsById } from "./src/reviews.js";
import { getProducts } from "./src/products.js";
import { createUser, getUserById } from "./src/users.js";
import { getSkinTypes } from "./src/skinTypes.js";

const app = express();
app.use(cors());
app.use(express.json());
// initializeApp({
//     credential:_credential.cert(creds)
// })
app.get("/test", (req, res) => {
  res.send("we made it");
});

// app.post("/user", createUser);
// app.get("/user/:id", getUserById);

app.get("/products", getProducts);
// app.get("/products/:id", getProductsById)

// app.get("/reviews", getReviews);
// app.post("/review", createReviews);
// app.patch("/reviews/:id", updateReviewsById);

app.get("/skinTypes", getSkinTypes);
app.post("/reviews", createReviews)

app.get("/reviews", getReviews)

export const api = functions.https.onRequest(app);
