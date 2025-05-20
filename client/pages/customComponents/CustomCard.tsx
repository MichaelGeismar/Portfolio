import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";

interface CustomCardProps {
  title: React.ReactNode;
  content: React.ReactNode;
  tailwindContentClasses?: string; // Optional prop for additional Tailwind classes
  hoverEffect?: boolean; // Optional prop to control hover effect
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  content,
  tailwindContentClasses,
  hoverEffect = true,
  // Optional prop to control hover effect
}) => {
  return (
    <Card
      sx={{
        transition: hoverEffect
          ? "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out" // MUI's way of defining the transition
          : undefined,
        "&:hover": {
          transform: hoverEffect ? "translateY(-10px)" : undefined,
          boxShadow: hoverEffect
            ? "0 12px 24px rgba(0, 0, 0, 0.12)"
            : undefined,
        },
      }}
    >
      <CardHeader
        // align="center"
        sx={{
          paddingBottom: "6px", // Remove bottom padding
          paddingTop: "12px",
        }}
        className="bg-[#2d6a4f] text-white font-semibold"
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

export default CustomCard;
