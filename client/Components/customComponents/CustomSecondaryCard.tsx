import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";

interface CustomCardProps {
  title: React.ReactNode;
  content: React.ReactNode;
  tailwindContentClasses?: string; // Optional prop for additional Tailwind classes
}

const CustomSecondaryCard: React.FC<CustomCardProps> = ({
  title,
  content,
  tailwindContentClasses,
}) => {
  return (
    <Card
      sx={{
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // MUI's way of defining the transition
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.12)",
        },
      }}
    >
      <CardHeader
        // align="center"
        sx={{
          borderTop: "4px solid #2d6a4f", // Add top border
          paddingBottom: "6px", // Remove bottom padding
          paddingTop: "12px",
        }}
        className="text-[#2d6a4f] font-semibold"
        title={title}
      />
      <CardContent
        sx={{ padding: "1rem" }}
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