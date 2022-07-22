import { Grid,Card, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const api = () => {
    axios.get(`https://api.tvmaze.com/shows`).then((r) => {
      setData(r?.data);
      console.log(r, "kkk");
    });
  };

  useEffect(() => api(), []);

  return (
    <Grid container xs={12} item spacing={2} style={{padding : 20}}>
      {data.map((i) => {
        return (
          <Grid xs={12} sm={6} md={3} item onClick={()=>window.open(i?.url)} style={{cursor:'pointer'}}>
            <Card variant="outlined">
              {" "}
              <img src={i?.image?.medium} width="100%" height='100%'/>
              <Typography style={{
                // position: 'absolute',
                // top: 420,
                color: 'white',
                marginTop: -40,
                marginLeft : 10,
                fontSize: 22,
                fontWeight: 700,
              }}>{i?.name}</Typography>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default App;
