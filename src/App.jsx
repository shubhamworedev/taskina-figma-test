import { useState } from "react";
import "./App.css";
import PageSelectionModal from "./components/PageSelectionModal";

const App = () => {
  const [selectedPages, setSelectedPages] = useState({
    all: { status: "default" },
    page1: { status: "default" },
    page2: { status: "default" },
    page3: { status: "default" },
    page4: { status: "default" },
  });

  const handleCheckboxChange = (page) => {
    setSelectedPages((prev) => {
      const s = prev[page].status;

      let next;
      if (s === "default") next = "hoverBlue";
      else if (s === "hoverBlue") next = "disabledHover";
      else if (s === "disabledHover") next = "checked";
      else if (s === "checked") next = "disabledHover";

      return {
        ...prev,
        [page]: { status: next },
      };
    });
  };

  const handleDone = () => {
    alert(
      `Selected pages: ${Object.keys(selectedPages)
        .filter((key) => key !== "all")
        .join(", ")}`
    );
  };

  return (
    <PageSelectionModal
      selectedPages={selectedPages}
      handleCheckboxChange={handleCheckboxChange}
      onDone={handleDone}
    />
  );
};

export default App;
