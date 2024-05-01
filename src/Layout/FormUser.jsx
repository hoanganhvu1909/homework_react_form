import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputCustom from '../Components/InputCustom';
const FormUser = () => {
  const { handleChange, handleBlur, handleSubmit, errors, values, touched, setTouched, isValid, resetForm, setValues } =
    useFormik({
      initialValues: {
        // initialValues đóng vai trò quản lí dữ liệu mặc định cho các input
        mssv: '',
        email: '',
        // matKhau: '',
        soDt: '',
        hoTen: '',
      },
      // onSubmit là phương thức chạy khi form được submit
      onSubmit: (values, { resetForm }) => {
        // console.log(values);
        // ở đây là nơi xử lí các logic như đăng ký đăng nhập...
      },
      validationSchema: Yup.object({
        mssv: Yup.string().required('Vui lòng không bỏ trống').min(5, 'Vui lòng nhập tối thiêu 5 ký tự'),
        email: Yup.string().required('Vui lòng không bỏ trống').email('Vui lòng nhập đúng email'),
        hoTen: Yup.string()
          .required('Vui lòng không bỏ trống')
          .matches(
            /^[a-zA-Z\s'\-ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝàáâãèéêìíòóôõùúýĂăĐđĨĩŨũƠơƯưẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặẸẹẺẻẼẽẾếỀềỂểỄễỆệỈỉỊịỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợỤụỦủỨứỪừỬửỮữỰựỲỳỴỵỶỷỸỹ]+$/g,
            'Vui lòng nhập họ tên là chữ'
          ),
        soDt: Yup.string()
          .required('Vui lòng không bỏ trống')
          .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Đây không phải số điện thoại'),
        matKhau: Yup.string()
          .required('Vui lòng không bỏ trống')
          .matches(
            // tạo một mật khẩu có ít nhất 8 ký tự bao gồm 1 ký tự viết hoa 1 ký tự đặc biệt và số
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
            'Vui lòng nhập mật khẩu bao gồm ít nhất 1 ký tự viết hoa và số'
          ),
      }),
    });

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          {/* MSSV */}
          <InputCustom
            label="MSSV"
            name="mssv"
            handleChange={handleChange}
            handleBlur={handleBlur}
            placeholder="Vui lòng nhập mã số sinh viên"
            error={errors.mssv}
            touched={touched.mssv}
            value={values.mssv}
          />
          {/* Name */}
          <InputCustom
            label="Họ và tên"
            name="hoTen"
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Vui lòng nhập họ tên"
            error={errors.hoTen}
            touched={touched.hoTen}
            value={values.hoTen}
          />

          {/* Email */}
          <InputCustom
            label="Email"
            name="email"
            handleChange={handleChange}
            handleBlur={handleBlur}
            placeholder="Vui lòng nhập email"
            error={errors.email}
            touched={touched.email}
            value={values.email}
          />
          {/* Số điện thoại */}
          <InputCustom
            label="Số điện thoại"
            name="soDt"
            handleChange={handleChange}
            handleBlur={handleBlur}
            placeholder="Vui lòng nhập số điện thoại"
            error={errors.soDt}
            touched={touched.soDt}
            value={values.soDt}
          />
          {/* Mật khẩu */}
          {/* <InputCustom
            label="Mật khẩu"
            name="matKhau"
            handleChange={handleChange}
            handleBlur={handleBlur}
            placeholder="Vui lòng nhập mật khẩu"
            type="password"
            error={errors.matKhau}
            touched={touched.matKhau}
            className="col-span-2"
            value={values.matKhau}
          /> */}
          {/* Chức năng */}
          <div className="space-x-3">
            <button type="submit" className="bg-black text-white py-2 px-5 rounded">
              Đăng ký
            </button>
            <button
              onClick={() => {
                resetForm();
              }}
              type="submit"
              className="bg-purple-500 text-white py-2 px-5 rounded">
              Reset Form
            </button>
            <button type="submit" className="bg-yellow-500 text-white py-2 px-5 rounded">
              Cập nhật người dùng
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormUser;
