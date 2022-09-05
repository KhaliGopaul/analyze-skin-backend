import { connectDb } from "./connectDb.js"

export const createUser = (req, res) => {
    if (
        !req.body.email ||
        !req.body.first_name ||
        !req.body.last_name
    ) {
        res.status(401).send({message: "Missing Fields"})
        return
    }
    const db = connectDb()
    db.collection("users")
    .add(req.body)
    .then((docRef) => res.status(201).send({uid: docRef.id}))
    .catch((error) => res.status(500).send(error))
}

export const getUserById = (req, res) => {
    const { userId } = req.params;
    const db = connectDb()

    db.collection("users")
        .doc(userId)
        .get()
        .then((doc) => {
            let user = doc.data()
            user.id = doc.id
            res.send(user)
        })
        .catch((error) => {
            res.status(500).send(error)
        })
}