// App.jsx
import { useState } from "react";
import FormInput from "./components/formInput/FormInput";
import TableFormInput from "./components/tableFormInput/TableFormInput";

const App = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const addData = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  const deleteData = (index) => {
    setData((prevData) => prevData.filter((item, i) => i !== index));
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
  };

  const updateData = (updatedData, index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[index] = updatedData;
      return newData;
    });
    setSelectedItem(null);
  };

  return (
    <div className="container mx-auto space-y-4">
      <FormInput
        addData={addData}
        data={data}
        selectedItem={selectedItem}
        updateData={updateData}
      />
      <TableFormInput
        data={data}
        deleteData={deleteData}
        handleEditClick={handleEditClick} // Chuyển hàm handleEditClick xuống
      />
    </div>
  );
};

export default App;
