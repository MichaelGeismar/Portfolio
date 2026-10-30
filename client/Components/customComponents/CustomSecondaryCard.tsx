import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";

interface CustomCardProps {
  title: React.ReactNode;
  content: React.ReactNode;
  tailwindContentClasses?: string;
}

const CustomSecondaryCard: React.FC<CustomCardProps> = ({
  title,
  content,
  tailwindContentClasses,
}) => {
  return (
    <Card
      sx={{
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.12)",
        },
      }}
    >
      <CardHeader
        sx={{
          borderBottom: "1px solid #2d6a4f",
          borderTop: "4px solid #2d6a4f",
          paddingBottom: "6px",
          paddingTop: "12px",
          paddingInline: "2.5rem",
        }}
        className="text-[#2d6a4f] font-semibold"
        title={title}
      />
      <CardContent
        sx={{ paddingInline: "3rem" }}
        className={
          "text-[#666]" +
          (tailwindContentClasses ? ` ${tailwindContentClasses}` : "")
        }
      >
        {content}
      </CardContent>
    </Card>
  );
};

export default CustomSecondaryCard;
