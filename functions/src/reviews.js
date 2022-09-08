import { connectDb } from "./connectDb.js";

export const createReviews = (req, res) => {
  const db = connectDb();
  const newReview = { review: req.body.review, name: req.body.name };
  db.collection("userReviews")
    .add(newReview)
    .then(res.send(newReview))
    .catch(console.error);
};

export const updateReviewsById = (req, res) => {
  db.collection("reviews")
    .get()
    .then(() => {})
    .catch(() => {});
};

export function getReviews(req, res) {
  const db = connectDb();
  db.collection("userReviews")
    .get()
    .then((snapshot) => {
      const reviews = snapshot.docs.map((doc) => {
        let review = doc.data();
        review.id = doc.id;
        return review;
      });
      res.status(200).send(reviews);
    });
}
