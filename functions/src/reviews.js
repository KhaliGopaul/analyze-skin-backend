import { connectDb } from "./connectDb.js"


export const getReviews = (req, res) => {
db.collection("reviews")
    .get()
    .then(() => {})
    .catch(() => {})}

export const createReviews = (req, res) => {}

export const updateReviewsById = (req, res) => {
    db.collection("reviews")
    .get()
    .then(() => {})
    .catch(() => {})
}