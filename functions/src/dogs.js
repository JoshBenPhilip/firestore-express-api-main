export const getDogs = async (req, res) => {
    const db = dbConnect();
    const cars = await db.collection("dogs").get();
    const carsArray = cars.docs.map(doc => doc.data());
    res.status(200).send(dogsArray);
  }