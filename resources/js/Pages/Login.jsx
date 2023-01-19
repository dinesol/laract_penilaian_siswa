import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import "../../../resources/css/style.css";


export default function Login() {
    const { error } = usePage().props.errors;
    const [idAdmin, setIdAdmin] = useState ();
    const [nis, setNis] = useState();
    const [nip, setNip] = useState();
    const [password, setPassword] = useState();

    const [formAdminVisible, setFormAdminVisible] = useState(false);
    const [formSiswaVisible, setFormSiswaVisible] = useState(false);
    const [formGuruVisible, setFormGuruVisible] = useState(false);

    const handleLoginAdmin = () => {
        Inertia.post("/login/admin", {
            idAdmin,
            password,
        });
    };
    const handleLoginSiswa = () => {
        Inertia.post("/login/siswa", {
            nis,
            password,
        });
    };
    const handleLoginGuru = () => {
        Inertia.post("/login/guru", {
            nip,
            password,
        });
    };

return 
    <>
        <Head title="Login" />

        <div className="header">
            <img src="/gambar/deader.jpg" height="40%" width="100%" />
        </div>
        <div className="menu">
            <b><a href="#" className="active">Home</a></b>
        </div>
        <div className="kiri">
            <fieldset>
                <legend></legend>
                <center>
                    <button
                         className="button"
                         onClick={() => {
                            setFormAdminVisible(!formAdminVisible);
                            setFormSiswaVisible(false);
                            setFormGuruVisible (false);
                         }}
                >
                    Admin
                </button>
                </center>
                    className="button"
                    onClick={() => {
                        setFormSiswaVisible(!formSiswaVisible);
                        setFormGuruVisible(false);
                        setFormAdminVisible(false);
                    }}
                >
                    Siswa
                </button>
                <button>
                    className="button"
                    onClick={( => {
                        setFormGuruVisible(!formGuruVisible);
                        setFormSiswaVisible(false);
                        setFormAdminVisible(false);
                    }}
                >
                     Guru
                </button>
                <hr />
                <b>Login sesuai dengan anda</b>
                <ht />
                </center>
                {/* ----------FORM LOGIN ADMIN----------*/}
                <div 
                  style={{  display: formAdminVidible ? "block" : "none" }}
                >
                    <center>
                        <b>Login Admin</b>
                        <p>{error}</p>
                    </center>
                    <table>
                        <tr>
                            <td width="25%">Kode Admin</td>
                            <td width="25%">
                                <input
                                type="text"
                                onChange={(e)} =>
                                   setIdAdmin(e.target.value)
                               }
                               />
                            </td>
                        </tr>
                        <tr>
                            <td width="25%">Password</td>
                            <td width="25%">
                                <input
                                    type="password"
                                    onChange={(e) =>
                                     setPassword(e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        <tr>
                           <td colSpan="2">
                               <center>
                                <button
                                   className="button"
                                   type="button"
                                   onClick={() => handleLoginAdmin()}
                                >
                                    Login
                                </button>
                               </center>
                           </td>
                        </tr>
                    </table>
                </div>
                {/*}
            </fieldset>
        </div>
    
}