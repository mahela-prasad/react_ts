import React, { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}

const ExpandebleText = ({ children, maxChar = 100 }: Props) => {
  if (children.length <= maxChar) return <p>{children}</p>;

  const [isExpanded, setExpanded] = useState(false);

  const txt = isExpanded ? children : children.substring(0, maxChar);

  return (
    <>
      <p>{txt}</p>
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </>
  );
};

export default ExpandebleText;
