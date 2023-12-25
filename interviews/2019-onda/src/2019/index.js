const express = require('express');
const mongodb = require('mongodb');
const bookingOptimizer = require('../booking-optimizer');

const app = express();
const MongoClient = mongodb.MongoClient;

app.use(express.json());
const maxBed = 3;

MongoClient.connect(
  'mongodb://127.0.0.1:27017',
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }
    console.log('Connected to database');
    const booking = client.db('booking-manager').collection('booking');
    //get bookings
    app.get('/booking', async (req, res) => {
      try {
        const bookings = await booking.find({}).toArray();
        res.send(bookings);
      } catch (e) {
        res.status(500).send(e);
      }
    });
    //get booking
    app.get('/booking/:id', async (req, res) => {
      try {
        const booking = await booking.findOne({ id: req.params.id });
        if (!booking) {
          return res.status(404).send();
        }
        res.send(booking);
      } catch (e) {
        res.status(500).send();
      }
    });
    //create booking
    app.post('/booking', async (req, res) => {
      try {
        const bookings = await booking.find({}).toArray();
        bookings.push(req.body);
        const optimized = bookingOptimizer(maxBed, bookings);
        if (optimized.find((booking) => booking.bed === 0)) {
          return res.status(404).send({ error: 'Unable to book' });
        }
        const inserted = await booking.insertOne(req.body);
        if (!inserted) {
          return res.status(404).send({ error: 'Insert Failed' });
        }
        for (var i = 0; i < optimized.length; i++) {
          const updated = await booking.updateOne(
            { id: optimized[i].id },
            { $set: { bed: optimized[i].bed } }
          );
          if (!updated) {
            return res.status(404).send({ error: 'Update Failed' });
          }
        }
        res.send(optimized);
      } catch (e) {
        res.status(500).send(e);
      }
    });
    //delete booking
    app.delete('/booking/:id', async (req, res) => {
      try {
        const deleted = await booking.deleteMany({
          id: parseInt(req.params.id),
        });
        if (!deleted) {
          return res.status(404).send({ error: 'booking not found' });
        }
        res.send(deleted);
      } catch (e) {
        res.status(500).send();
      }
    });
  }
);

// bookingOptimizer(3, [
//     { id: 1, date: 1, nights: 2 },
//     { id: 2, date: 1, nights: 1 },
//     { id: 3, date: 1, nights: 2 },
//     { id: 4, date: 3, nights: 1 },
//     { id: 5, date: 3, nights: 1 },
//     { id: 6, date: 2, nights: 2 }
// ]);

// bookingOptimizer(4, [
//     { id: 1, date: 1, nights: 2 },
//     { id: 2, date: 1, nights: 1 },
//     { id: 3, date: 3, nights: 2 },
//     { id: 4, date: 1, nights: 2 },
//     { id: 5, date: 4, nights: 1 },
//     { id: 6, date: 3, nights: 1 },
//     { id: 7, date: 2, nights: 3 },
//     { id: 8, date: 1, nights: 2 },
//     { id: 9, date: 4, nights: 1 }
// ]);

app.listen(3000, () => {
  console.log('server is up on port 3000');
});
