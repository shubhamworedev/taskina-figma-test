import PageCheckbox from "./PageCheckbox";

const PageList = ({ selectedPages, handleCheckboxChange }) => {
  return (
    <>
      {[1, 2, 3, 4].map((page) => (
        <PageCheckbox
          key={page}
          label={`Page ${page}`}
          status={selectedPages[`page${page}`].status}
          onChange={() => handleCheckboxChange(`page${page}`)}
        />
      ))}
    </>
  );
};

export default PageList;
