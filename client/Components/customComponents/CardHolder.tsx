import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";

interface CustomCardProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

const CustomSecondaryCard: React.FC<CustomCardProps> = ({ title, content }) => {
  return (
    <Card
      sx={{
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.12)",
        },
      }}
    >
      <CardHeader
        sx={{
          borderTop: "4px solid #2d6a4f",
          borderLeft: "4px solid #2d6a4f",
          borderRight: "4px solid #2d6a4f",
          paddingBottom: "6px",
          paddingTop: "12px",
          paddingInline: "24px",
        }}
        className="text-[#2d6a4f] font-semibold"
        title={title}
      />
      <CardContent
        className="text-[#666] flex flex-col gap-8 px-8!"
        sx={{
          borderLeft: "4px solid #2d6a4f",
          borderRight: "4px solid #2d6a4f",
          borderBottom: "4px solid #2d6a4f",
        }}
      >
        {content}
      </CardContent>
    </Card>
  );
};

export default CustomSecondaryCard;
