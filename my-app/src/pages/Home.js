import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Card, CardContent } from "@mui/material";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => setData(response.data));
  }, []);

  return (
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
  );
}

export default Home;