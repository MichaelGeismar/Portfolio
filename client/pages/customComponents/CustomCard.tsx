import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";

interface CustomCardProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, content }) => {
  return (
    <Card className="">
      <CardHeader title={title} />
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default CustomCard;
