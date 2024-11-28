const mongoose = require("mongoose");

// MongoDB Atlas connection string (ensure it's correct)
const db ='mongodb+srv://geetika:geetika@cluster0.mmgah.mongodb.net/'
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log(`Connection successful`);
  })
  .catch((e) => {
    console.log(`No connection: ${e}`);
  });
