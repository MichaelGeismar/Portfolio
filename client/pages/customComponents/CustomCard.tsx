import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";

interface CustomCardProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, content }) => {
  return (
    <Card className="">
      <CardHeader
        align="center"
        sx={{
          paddingBottom: 0, // Remove bottom padding
          paddingTop: "12px",
        }}
        title={title}
      />
      <CardContent sx={{ padding: "1rem" }}>{content}</CardContent>
    </Card>
  );
};

export default CustomCard;
