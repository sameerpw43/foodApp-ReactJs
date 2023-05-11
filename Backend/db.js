const mongoose = require('mongoose');
const mongooseURI = 'mongodb+srv://sameer:Qwerty%401234@cluster0.9chcpsg.mongodb.net/YumHub?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongooseURI, { useNewUrlParser: true });
    console.log('Connected to MongoDB!');

    const fetched_data = await mongoose.connection.db.collection('food');
    const foodData = await fetched_data.find({}).toArray();

    const foodcat = await mongoose.connection.db.collection('foodcat');
    const catData = await foodcat.find({}).toArray();

    global.food = foodData;
    global.foodcat = catData;

    console.log('Data fetched successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = mongoDB;
