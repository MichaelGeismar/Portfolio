import { Card, CardContent, CardHeader } from "@mui/material";
import React, { useMemo, useState } from "react";

interface CustomCardProps {
  title: React.ReactNode;
  content: React.ReactNode;
  tailwindContentClasses?: string;
  hoverEffect?: boolean;
  collapsible?: boolean;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  content,
  tailwindContentClasses,
  hoverEffect = true,
  collapsible = false,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsible);

  const isOpen = useMemo(() => {
    return !collapsible || !isCollapsed;
  }, [collapsible, isCollapsed]);

  return (
    <Card
      sx={{
        transition: hoverEffect
          ? "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
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
        sx={{
          paddingBottom: "6px",
          paddingTop: "12px",
          paddingInline: "2.5rem",
        }}
        className="bg-[#2d6a4f] text-white font-semibold"
        title={title}
        subheader={
          collapsible
            ? isCollapsed
              ? "Click to expand"
              : "Click to collapse"
            : undefined
        }
        slotProps={{
          subheader: {
            style: { color: "white" },
          },
        }}
        onClick={collapsible ? () => setIsCollapsed(!isCollapsed) : undefined}
      />
      <CardContent
        sx={{
          paddingInline: "3rem !important",
          padding: isOpen ? "1rem" : 0,
          paddingBottom: isOpen ? "24px" : "0px !important",
        }}
        className={
          "text-[#666]" +
          (tailwindContentClasses ? ` ${tailwindContentClasses}` : "")
        }
      >
        {isOpen && content}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
