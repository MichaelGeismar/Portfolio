import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";

interface CustomCardProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, content }) => {
  return (
    <Card className="hover:translate-y-1 hover:shadow-lg">
      <CardHeader
        // align="center"
        sx={{
          paddingBottom: "6px", // Remove bottom padding
          paddingTop: "12px",
        }}
        className="bg-[#2d6a4f] text-white font-semibold"
        title={title}
      />
      <CardContent sx={{ padding: "1rem" }} className="text-[#666]">
        {content}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
