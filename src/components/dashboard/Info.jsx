import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import BoltIcon from "@mui/icons-material/Bolt";

const Info = () => {
  return (
    <Card
      sx={{
        background: "#282828",
        color: "white",
        border: "1px solid white",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Typography variant="h5" sx={{ paddingBottom: "2px" }}>
            Unlock premium stats
          </Typography>
          <Typography variant="caption" gutterBottom>
            Unlock premium stats
          </Typography>
        </div>
        <Button
          variant="contained"
          sx={{ background: "white", color: "black", borderRadius: "20px" }}
          startIcon={<BoltIcon />}
        >
          Upgrade
        </Button>
      </CardContent>
    </Card>
  );
};

export default Info;
