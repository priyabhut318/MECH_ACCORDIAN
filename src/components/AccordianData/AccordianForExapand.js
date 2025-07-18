import React, { useState } from "react";
import "./Accordion.css";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onClick}>
        <h3>{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default function AccordianForExapand(items) {
  console.log(items, "items");
  const [openIndex, setOpenIndex] = useState(null); // State to track the currently open item

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle or set the open item
  };

  return (
    <div className="accordion-container">
      <h1>Expandeble and Collase Concept</h1>
      {items?.profiles.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.faq1id}
          content={item.faq1content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
