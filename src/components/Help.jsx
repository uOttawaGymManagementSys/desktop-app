import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Header from "./Header";

const faqs = [
  {
    question: "When do you close on weekends?",
    answer: "We are open from 8:00 AM and close at 8:00 PM on weekends.",
  },
  {
    question: "When do you open on weekdays (Mon–Fri)?",
    answer: "We open at 6:30 AM from Monday to Friday.",
  },
  {
    question: "Where can I update my student ID?",
    answer: "You can update your student ID at the Card Services Desk in UCU.",
  },
];

const Help = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Help & FAQ" subtitle="   " />

      {faqs.map((item, index) => {
        const isOpen = !!openItems[index];
        return (
          <Box key={index} mb="0.75rem">
            {/* Question row */}
            <Box
              onClick={() => toggleItem(index)}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                userSelect: "none",
                py: "0.4rem",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                {item.question}
              </Typography>
              <Typography variant="subtitle1">{isOpen ? "▲" : "▼"}</Typography>
            </Box>

            {/* Answer */}
            {isOpen && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ pl: "0.5rem", mt: "0.1rem" }}
              >
                {item.answer}
              </Typography>
            )}

            {/* Divider line between questions */}
            <Box
              sx={{
                borderBottom: "1px solid",
                borderColor: "divider",
                mt: "0.4rem",
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Help;
