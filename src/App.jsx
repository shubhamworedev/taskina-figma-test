import { useState } from "react";
import "./App.css";

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

      if (s === "default") next = "hoverBlue"; // Click 1
      else if (s === "hoverBlue") next = "disabledHover"; // Click 2
      else if (s === "disabledHover") next = "checked"; // Click 3
      else if (s === "checked") next = "disabledHover"; // Click 4+

      return {
        ...prev,
        [page]: { status: next },
      };
    });
  };

  const handleDone = () => {
    alert(
      `Selected pages: ${Object.keys(selectedPages)
        .filter((key) => selectedPages[key] && key !== "all")
        .join(", ")}`
    );
  };

  return (
    <div className="page-selection-container">
      <div className="page-selection-modal">
        <div className="page-selection-content">
          <div className="page-item">
            <label className="page-label">
              <span className=" ">All pages</span>
              <input
                type="checkbox"
                className="page-checkbox"
                data-status={selectedPages.all.status}
                onChange={() => handleCheckboxChange("all")}
              />
            </label>
          </div>

          <div className="page-divider"></div>

          {[1, 2, 3, 4].map((page) => {
            return (
              <div className="page-item">
                <label className="page-label">
                  <span className="page-text">Page {page}</span>

                  <input
                    type="checkbox"
                    className="page-checkbox"
                    data-status={selectedPages[`page${page}`].status}
                    onChange={() => handleCheckboxChange(`page${page}`)}
                  />
                </label>
              </div>
            );
          })}
          <div className="page-divider"></div>

          <button className="done-button" onClick={handleDone}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
