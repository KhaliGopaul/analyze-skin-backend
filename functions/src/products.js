import { connectDb } from "./connectDb.js"

export const getProducts = (req, res) => {
    const db = connectDb()
    db.collection("products")
        .get()
        .then(() => {})
        .then(() => {})
        .catch(() => {})
}


export const getProductsById = (req, res) => {
    const db = connectDb()
    db.collection("products")
        .get("id")
        .then(() => {})
        .then(() => {})
        .catch(() => {})
}