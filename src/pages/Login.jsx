import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
    const [inputvalue, setInputvalue] = useState("");
    const navigate = useNavigate();

    const handlesubmit = () => {
        if (inputvalue === "รักเด็ก") {
            Swal.fire({
                icon: "success",
                title: "เด็กก็รักพี่นะค๊าบบบ",
                text: "❤️ยินดีต้อนรับค๊าบหวานใจ❤️",
                timer: 1500, // แสดง alert 1 วิ
                showConfirmButton: false,
            }).then(() => {
                navigate("/Home"); // ✅ ไปหน้า Home หลัง login สำเร็จ
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "ผิดค๊าบบบ ที่จริงให้พิมพ์ว่า",
                text: "พิมพ์ว่า รักเด็ก นะค๊าบ",
            });
        }
    };

    return (
        <div className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 h-screen flex items-center justify-center">
            <div className="bg-pink-800/50 h-auto w-auto rounded-md shadow-2xl p-4 text-white">
                <form
                    onSubmit={(e) => {
                        e.preventDefault(); // ป้องกัน refresh หน้า
                        handlesubmit();
                    }}
                >
                    <div className="flex flex-col items-center ">
                        <h2 className="text-center mb-2">❤️ ยินดีต้อนรับค๊าบหวานใจ ❤️</h2>
                        <input
                            type="text"
                            value={inputvalue}
                            onChange={(e) => setInputvalue(e.target.value)}
                            placeholder="พิมพ์ ชื่อเล่น ..."
                            className="bg-slate-200 text-black p-2 rounded-md mt-4"
                        />
                    </div>
                    <div className="flex justify-center mt-4">
                        <button
                            type="submit" // ✅ ไม่ต้องใส่ onClick แล้ว
                            className="bg-purple-800 rounded-md p-2 m-2 hover:bg-purple-700"
                        >
                            จิ้มตรงนี้ค๊าบ
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
