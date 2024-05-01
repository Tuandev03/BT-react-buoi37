import { useFormik } from "formik";
import * as Yup from "yup";
import InputCustom from "../inputCustom/inputCustom";

const FormInput = ({ addData }) => {
  const { handleChange, handleBlur, errors, values, handleSubmit, touched } =
    useFormik({
      initialValues: {
        maSinhVien: "",
        tenSinhVien: "",
        email: "",
        soDt: "",
      },
      onSubmit: (values, { resetForm }) => {
        addData(values);
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
              handleChange={handleChange}
              handleBlur={handleBlur}
              type="text"
              placeholder="Vui lòng nhập mã sinh viên"
              error={errors.maSinhVien}
              touched={touched.maSinhVien}
              value={values.maSinhVien}
            />
            <InputCustom
              label="Số điện thoại"
              name="soDt"
              handleChange={handleChange}
              handleBlur={handleBlur}
              type="text"
              placeholder="Vui lòng nhập số điện thoại"
              error={errors.soDt}
              touched={touched.soDt}
              value={values.soDt}
            />
          </div>
          <div className="flex flex-col w-full space-y-3">
            <InputCustom
              label="Tên sinh viên"
              name="tenSinhVien"
              handleChange={handleChange}
              handleBlur={handleBlur}
              type="text"
              placeholder="Vui lòng nhập tên sinh viên"
              error={errors.tenSinhVien}
              touched={touched.tenSinhVien}
              value={values.tenSinhVien}
            />
            <InputCustom
              label="Email"
              name="email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              type="text"
              placeholder="Vui lòng nhập email"
              error={errors.email}
              touched={touched.email}
              value={values.email}
            />
          </div>
        </div>
        <button
          type="submit"
          className="py-2 px-8 bg-blue-500 rounded text-white font-semibold"
        >
          Thêm
        </button>
      </form>
    </div>
  );
};

export default FormInput;
