import React from "react";
import { useSubscription } from "mqtt-react-hooks";

function mqtt() {
  const { message } = useSubscription([
    "lamtuong2012392/feeds/temperature",
  ]);
  console.log(message)
  return (
    
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>{`topic:${message?.topic} - message: ${message?.message}`}</span>
      </div>
    </>
  );
}

export default mqtt;
