
import tableData from "./Data"; // Import data

const Table = () => {
  return (
    <div>
      <Data id={tableData.id} name={tableData.name} age={tableData.age} />
    </div>
  );
};

export default Table;
