// FormInput.jsx
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputCustom from "../inputCustom/inputCustom";

const FormInput = ({ addData, selectedItem, updateData, data }) => {
  const [readOnlyMode, setReadOnlyMode] = useState(false);

  const { handleChange, handleBlur, errors, values, handleSubmit, touched } =
    useFormik({
      initialValues: {
        maSinhVien: selectedItem ? selectedItem.maSinhVien : "",
        tenSinhVien: selectedItem ? selectedItem.tenSinhVien : "",
        email: selectedItem ? selectedItem.email : "",
        soDt: selectedItem ? selectedItem.soDt : "",
      },
      onSubmit: (values, { resetForm }) => {
        if (selectedItem) {
          updateData(
            values,
            data.findIndex(
              (item) => item.maSinhVien === selectedItem.maSinhVien
            )
          );
        } else {
          addData(values);
        }
        resetForm();
      },
      validationSchema: Yup.object({
        maSinhVien: Yup.string()
          .required("Vui lòng không bỏ trống")
          .min(5, "Vui lòng nhập tối thiểu 4 ký tự có số và chữ"),
        email: Yup.string()
          .required("Vui lòng không bỏ trống")
          .email("Vui lòng nhập đúng email"),
        tenSinhVien: Yup.string()
          .required("Vui lòng không bỏ trống")
          .matches(
            /^[a-zA-Z\s'\-ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝàáâãèéêìíòóôõùúýĂăĐđĨĩŨũƠơƯưẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặẸẹẺẻẼẽẾếỀềỂểỄễỆệỈỉỊịỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợỤụỦủỨứỪừỬửỮữỰựỲỳỴỵỶỷỸỹ]+$/g,
            "Vui lòng nhập họ tên là chữ"
          ),
        soDt: Yup.string()
          .required("Vui lòng không bỏ trống")
          .matches(
            /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
            "Đây không phải số điện thoại"
          ),
      }),
    });

  useEffect(() => {
    if (selectedItem) {
      handleChange({
        target: {
          name: "tenSinhVien",
          value: selectedItem.tenSinhVien,
        },
      });
      handleChange({
        target: {
          name: "email",
          value: selectedItem.email,
        },
      });
      handleChange({
        target: {
          name: "soDt",
          value: selectedItem.soDt,
        },
      });
    } else {
      setReadOnlyMode(false);
    }
  }, [selectedItem]);

  const handleEditClick = (item) => {
    handleChange({
      target: {
        name: "tenSinhVien",
        value: item.tenSinhVien,
      },
    });
    handleChange({
      target: {
        name: "email",
        value: item.email,
      },
    });
    handleChange({
      target: {
        name: "soDt",
        value: item.soDt,
      },
    });
    setReadOnlyMode(true);
  };

  const handleInputChange = (e) => {
    if (readOnlyMode && e.target.name === "maSinhVien") {
      return; // Không làm gì nếu đang ở chế độ chỉ đọc
    } else {
      handleChange(e);
    }
  };

  return (
    <div className="container space-y-2">
      <h1 className="bg-black p-4 text-white text-center font-semibold text-2xl">
        THÔNG TIN SINH VIÊN
      </h1>
      <form className="space-y-4" action="" onSubmit={handleSubmit}>
        <div className="flex space-x-3 ">
          <div className="flex flex-col w-full space-y-3 ">
            <InputCustom
              label="Mã sinh viên"
              name="maSinhVien"
              handleChange={handleInputChange}
              handleBlur={handleBlur}
              type="text"
              placeholder="Vui lòng nhập mã sinh viên"
              error={errors.maSinhVien}
              touched={touched.maSinhVien}
              value={values.maSinhVien}
              readOnly={readOnlyMode}
            />
            <InputCustom
              label="Số điện thoại"
              name="soDt"
              handleChange={handleInputChange}
              handleBlur={handleBlur}
              type="text"
              placeholder="Vui lòng nhập số điện thoại"
              error={errors.soDt}
              touched={touched.soDt}
              value={values.soDt}
              readOnly={readOnlyMode}
            />
          </div>
          <div className="flex flex-col w-full space-y-3">
            <InputCustom
              label="Tên sinh viên"
              name="tenSinhVien"
              handleChange={handleInputChange}
              handleBlur={handleBlur}
              type="text"
              placeholder="Vui lòng nhập tên sinh viên"
              error={errors.tenSinhVien}
              touched={touched.tenSinhVien}
              value={values.tenSinhVien}
              readOnly={readOnlyMode}
            />
            <InputCustom
              label="Email"
              name="email"
              handleChange={handleInputChange}
              handleBlur={handleBlur}
              type="text"
              placeholder="Vui lòng nhập email"
              error={errors.email}
              touched={touched.email}
              value={values.email}
              readOnly={readOnlyMode}
            />
          </div>
        </div>
        <div className=" space-x-3">
          <button
            type="submit"
            className="py-2 px-8 bg-blue-500 rounded text-white font-semibold"
          >
            {selectedItem ? "Cập nhật" : "Thêm"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormInput;
