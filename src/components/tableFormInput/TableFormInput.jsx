// TableFormInput.jsx
import React from "react";

const TableFormInput = ({ data, deleteData, editData, handleEditClick }) => {
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-white ">
            <tr className="text-center">
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
              <th scope="col" className="px-6 py-3">
                Chức năng
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((item, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? "bg-white" : "bg-gray-200 text-center"
                }
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
                <td className=" space-x-2">
                  <button
                    onClick={() => deleteData(index)}
                    className="rounded px-6 py-2 bg-red-500 text-white"
                  >
                    Xóa
                  </button>
                  <button
                    onClick={() => handleEditClick(item)} // Sửa đoạn này
                    className="rounded px-6 py-2 bg-orange-500 text-white"
                  >
                    Sửa
                  </button>
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
