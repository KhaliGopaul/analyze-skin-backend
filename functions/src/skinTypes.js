import { connectDb } from "./connectDb.js";

export const getSkinTypes = (req, res) => {
const db = connectDb()
db.collection("skin-types").get()
.then(snapshot =>{
    const skinTypes = snapshot.docs.map(doc=>{
        let skinType = doc.data()
        skinType.id = doc.id
        return skinType
    })
    res.status(200).send(skinTypes)
})
}