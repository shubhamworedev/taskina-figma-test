const PageCheckbox = ({ label, status, onChange }) => {
  return (
    <div className="page-item">
      <label className="page-label">
        <span className="page-text">{label}</span>
        <input
          type="checkbox"
          className="page-checkbox"
          data-status={status}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default PageCheckbox;
