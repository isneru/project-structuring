import React from "react";
import { OtherHelper } from "./Other.helper";

export const Other: React.FC = () => {
  const {} = OtherHelper();

  return (
    <div className="h-screen bg-gray-300">
      <h1>Other Page</h1>
    </div>
  );
};
