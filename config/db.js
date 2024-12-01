import mongoose from 'mongoose';

const URI = `mongodb+srv://vladmil:12301230Vv@cluster0.puexx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('connected to BD'))
  .catch((error) => console.log(error));
