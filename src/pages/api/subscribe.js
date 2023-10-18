import createHandler from "next-connect";
import dbPromise from "@/lib/db"; // Import dbPromise and jsonify functions from your module

const handler = createHandler();
export default handler;

handler.post(async (req, res) => {
  const { email } = JSON.parse(req.body);
  console.dir({ email })
  try {
    const result = await (await dbPromise).db().collection("emails").insertOne({ email });
    console.dir({ result })
    if (result.insertedId) {
      res.status(200).json({ message: "Email added successfully!" });
    } else {
      res.status(500).json({ error: "Error adding email to the database." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding email to the database." });
  }
});
