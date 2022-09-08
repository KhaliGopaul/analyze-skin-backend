import { connectDb } from "./connectDb.js"




export const createReviews = (req, res) => {
    const db = connectDb() 
    const newReview={review: req.body.review, name: req.body.name}
    db.collection("reviews").add(newReview)
    .then(res.send(newReview))
    .catch(console.error)


}

export const updateReviewsById = (req, res) => {
    db.collection("reviews")
    .get()
    .then(() => {})
    .catch(() => {})
}

export async function getReviews(req, res) {
    const db = dbConnect();
    const collection = await db.collection("reviews").get();
    const reviews = collection.docs.map((doc) => {
      let review = doc.data();
      review.id = doc.id;
      return review;
    });
    res.send(reviews);
  }