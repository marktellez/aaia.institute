import createHandler from "next-connect";
import dbPromise from "@/lib/db"; // Import dbPromise from your module

const handler = createHandler();
export default handler;

handler.delete(async (req, res) => {
  const { email } = req.query;

  try {

    // Find and delete the email subscription based on the provided email address
    const result = await (await dbPromise).db().collection("emails").deleteOne({ email });
    console.dir({ result })
    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Email unsubscribed successfully!" });
    } else {
      res.status(404).json({ error: "Email not found in subscriptions." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error unsubscribing email." });
  }
});
