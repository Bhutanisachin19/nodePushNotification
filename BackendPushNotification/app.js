const express = require("express");
const app = express();
const cron = require("node-cron");

var FCM = require("fcm-node");
var serverKey =
  "AAAAfSTTMkI:APA91bHF7YXMwuISB7FTMvJYBeQJfTRTO9a3KQCYDjVRDz0OIIwzuVZKit6zM_Asdb0bG6PWbM5JjFw88mGfnKhOt8De5toNgxJBvZcaqiWLpaH3cIIYXIdAquPHk4QE33c4SPj8oXQq"; //put your server key here

var fcm = new FCM(serverKey);

var message = {
  to: "eeX0mAhraH2FUw2bMV5-5J:APA91bGDz3pv9C_JPlQlaLXAx-Yqc8R8oLbxeZUcOyT6XtRNmarSHz_oP4s3MRlH2lgYxIzGG69JI8jXuTUdoEWja5jJ9_S4CB7nIc6WK5Z6dm59ThILB09cAb3QuEovfa3VnrdVGih8",
  //   collapse_key: "your_collapse_key",

  notification: {
    title: "Helloooooooooo",
    body: "Testing Push Notifications",
  },

  data: {
    //you can send only notification or only data(or include both)
    my_key: "testing keyy",
    my_another_key: "testing my another value",
  },
};

// sec  , min ,  hours ,  day of month,  month ,  day of week
cron.schedule("*/5 * * * * *", () => {
  console.log("Cron job running......", Date.now());

  fcm.send(message, function (err, response) {
    if (err) {
      console.log("Something has gone wrong!");
    } else {
      console.log("Successfully sent with response: ", response);
    }
  });
});

app.listen(8080, () => console.log("Listening at 8080...."));
