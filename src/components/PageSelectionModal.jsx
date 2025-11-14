import PageCheckbox from "./PageCheckbox";
import PageList from "./PageList";

const PageSelectionModal = ({ selectedPages, handleCheckboxChange, onDone }) => {
  return (
    <div className="page-selection-container">
      <div className="page-selection-modal">
        <div className="page-selection-content">
          <PageCheckbox
            label="All pages"
            status={selectedPages.all.status}
            onChange={() => handleCheckboxChange("all")}
          />

          <div className="page-divider"></div>

          <PageList
            selectedPages={selectedPages}
            handleCheckboxChange={handleCheckboxChange}
          />

          <div className="page-divider"></div>

          <button className="done-button" onClick={onDone}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageSelectionModal;
