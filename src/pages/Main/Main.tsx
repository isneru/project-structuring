import React from "react";

import { MainHelper } from "./Main.helper";
import { Button, Card } from "../../components";

export const Main: React.FC = () => {
  const {} = MainHelper();

  return (
    <div className="h-screen bg-gray-600">
      <h1 className="text-white">Main Page</h1>
      <Button />
      <Card />
    </div>
  );
};
