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
    FaCaretUp,
    FaCaretDown,
} from "react-icons/fa";

export default function Icon({ name, className }) {
    if (!name) return <FaExclamationTriangle className={className} />;
    if (name == "user-circle") return <FaUserCircle className={className} />;
    if (name == "clipboard-list") return <FaClipboard className={className} />;
    if (name == "chart-bar") return <FaChartBar className={className} />;
    if (name == "cog") return <FaCog className={className} />;
    if (name == "heart-beat") return <FaHeartbeat className={className} />;
    if (name == "bars") return <FaBars className={className} />;
    if (name == "loader") return <FaSpinner className={className} />;
    if (name == "caret-up") return <FaCaretUp className={className} />;
    if (name == "caret-down") return <FaCaretDown className={className} />;
}
