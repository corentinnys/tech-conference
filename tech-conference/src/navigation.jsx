import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./Home";
import Schedule from "./Schedule";
import Speaker from "./Speaker";
import "./navigation.css";

function Navigation() {
    return (
        <BrowserRouter>

            <nav className="navbar navbar-expand-lg bg-dark p-3">
                <div className="container">
                    <logo className="text-yellow">DEVHORIZON_26</logo>


                    <div className="navbar-nav d-flex flex-row gap-3">

                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `nav-link px-4 py-2 text-white fw-semibold custom-link border border-white ${
                                    isActive ? "active-link" : ""
                                }`
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/schedule"
                            className={({ isActive }) =>
                                `nav-link px-4 py-2 text-white fw-semibold custom-link border border-white ${
                                    isActive ? "active-link" : ""
                                }`
                            }
                        >
                            Schedule
                        </NavLink>

                        <NavLink
                            to="/speaker"
                            className={({ isActive }) =>
                                `nav-link px-4 py-2 text-white fw-semibold custom-link border border-white ${
                                    isActive ? "active-link" : ""
                                }`
                            }
                        >
                            Speaker
                        </NavLink>

                    </div>

                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/speaker" element={<Speaker />} />
            </Routes>

        </BrowserRouter>
    );
}

export default Navigation;