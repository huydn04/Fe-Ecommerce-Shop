// src/pages/Login.js
import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('http://localhost:3000/users', {
            params: {
                email: formData.email,
                password: formData.password
            }
        })
            .then(response => {
                if (response.data.length > 0) {
                    const user = response.data[0];
                    localStorage.setItem('user', JSON.stringify(user));
                    alert('Đăng nhập thành công!');
                    navigate('/shoptest');
                } else {
                    alert('Email hoặc mật khẩu không đúng!');
                }
            })
            .catch(error => {
                console.error('Có lỗi xảy ra:', error);
                alert('Đăng nhập thất bại!');
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Đăng Nhập</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-solid"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                            Mật khẩu
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-solid"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Đăng Nhập
                    </button>
                    <div>Không có tài khoản ? <a className='text-blue-600 hover:text-blue-800' href="/Register">Đăng kí</a></div>
                </form>
            </div>
        </div>
    );
};

export default Login;
