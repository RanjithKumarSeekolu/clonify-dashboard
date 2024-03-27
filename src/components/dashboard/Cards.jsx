import React from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";

const data = [
  {
    title: "Revenue",
    amount: "56,945",
    rate: "+45",
    from: 4.6,
  },
  {
    title: "Users",
    amount: "76.8%",
    rate: "-1.7",
    from: 4.6,
  },
  {
    title: "Revenue",
    amount: "56,945",
    rate: "0.0",
  },
  {
    title: "Revenue",
    amount: "56,945",
    rate: "12.67",
    from: 4.6,
  },
];

const Cards = () => {
  const getColor = (val) => {
    if (val > 0) {
      return "success";
    } else if (val < 0) {
      return "error";
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {data.map((card, idx) => (
          <Card
            key={idx}
            sx={{ minWidth: 200, flex: "1 1 200px", marginBottom: "20px" }}
          >
            <CardContent>
              <Typography>{card.title}</Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "600", marginBottom: "20px" }}
              >
                ${card.amount}
              </Typography>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Chip
                  label={card.rate}
                  color={getColor(card.rate)}
                  sx={{ marginRight: "4px" }}
                />
                {card.from ? `From ${card.from}` : ""}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
