import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Card, CardContent } from "@mui/material";

function Home() {
  const [data, setData] = useState(null);
  const [seconds, setSeconds ] = useState(0);
  const [isRunning, setIsRunning ] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => setData(response.data));
  }, []);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
  clearInterval(intervalId);
}
  }, [isRunning])

  return (
    <>
    <Card>
      <CardContent>
        <Typography variant="h4">Home Page</Typography>
        {data ? (
          <Typography variant="body1" sx={{ mt: 2 }}>
            API Title: {data.title}
          </Typography>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </CardContent>
    </Card>
    {/* Timer Section */}
<div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px'  }}>
<h2>Timer </h2>
<h3>Seconds: {seconds}</h3>
<button onClick={() => setIsRunning(true)}>Start</button>
<button onClick={() => setIsRunning(false)} style={{ marginLeft: "10px" }}>Stop</button>
<button onClick={()=> setSeconds(0)} style={{marginLeft: '10px'}}>Reset</button>
</div>

  </>
  );
}

export default Home;