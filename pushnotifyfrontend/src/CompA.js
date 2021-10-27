import React, { useEffect, useState } from "react";
import { onMessageListener } from "./helper/firebase";

const CompA = () => {
  const [changed, setChanged] = useState(false);

  //when notification is recieved on forground , we wont get push notification else it will be managed here as below (just priniting the notification here)
  useEffect(() => {
    onMessageListener()
      .then((data) => {
        console.log("Message Recieved", data.notification.body);
        setChanged(!changed);
      })
      .catch((err) => console.log("Errrr", err));
  }, [changed]);

  return <div>hello</div>;
};

export default CompA;
