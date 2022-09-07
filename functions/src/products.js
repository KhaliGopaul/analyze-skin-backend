import { connectDb } from "./connectDb.js";

export const getProducts = (req, res) => {
  const db = connectDb();
  db.collection("Products")
    .get()
    .then((snapshot) => {
      const products = snapshot.docs.map((doc) => {
        let product = doc.data();
        product.id = doc.id;
        return product;
      });
      res.status(200).send(products);
    });
};
