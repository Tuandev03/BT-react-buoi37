// App.jsx
import { useState } from "react";
import FormInput from "./components/formInput/FormInput";
import TableFormInput from "./components/tableFormInput/TableFormInput";

const App = () => {
  const [data, setData] = useState([]);

  const addData = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  return (
    <div className="container mx-auto space-y-4">
      <FormInput addData={addData} />
      <TableFormInput data={data} />
    </div>
  );
};

export default App;
