import React from "react";
import {
    FaUserCircle,
    FaExclamationTriangle,
    FaClipboard,
    FaChartBar,
    FaCog,
    FaHeartbeat,
    FaBars,
    FaSpinner,
} from "react-icons/fa";

export default function Icon({ name }) {
    if (!name) return <FaExclamationTriangle />;
    if (name == "user-circle") return <FaUserCircle />;
    if (name == "clipboard-list") return <FaClipboard />;
    if (name == "chart-bar") return <FaChartBar />;
    if (name == "cog") return <FaCog />;
    if (name == "heart-beat") return <FaHeartbeat />;
    if (name == "bars") return <FaBars />;
    if (name == "loader") return <FaSpinner />;
}
