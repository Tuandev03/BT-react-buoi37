// TableFormInput.jsx
const TableFormInput = ({ data }) => {
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-white ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Mã sinh viên
              </th>
              <th scope="col" className="px-6 py-3">
                Họ tên
              </th>
              <th scope="col" className="px-6 py-3">
                Số điện thoại
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-200"}
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.maSinhVien}
                </td>
                <td className="px-6 py-4 text-gray-600 text-sm font-medium">
                  {item.tenSinhVien}
                </td>
                <td className="px-6 py-4 text-gray-600 text-sm font-medium">
                  {item.soDt}
                </td>
                <td className="px-6 py-4 text-gray-600 text-sm font-medium">
                  {item.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableFormInput;
