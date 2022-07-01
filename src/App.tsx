import React from "react";

import { Main, Other } from "./pages";

export const App: React.FC = () => {
  return (
    <>
      <div className="h-screen bg-gray-800">
        <h1 className="text-white">Hello, World!</h1>
      </div>
      <Main />
      <Other />
    </>
  );
};
