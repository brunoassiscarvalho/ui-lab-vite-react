import { useState, useRef, useEffect } from "react";
import { ChevronDown, LogOut, User, Moon, Sun } from "lucide-react";
import { useTheme } from "../../../contexts/ThemeContext";

import "./user-menu.css";

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    alert("Logged out");
    setIsOpen(false);
  };

  return (
    <div className="user-menu" ref={menuRef}>
      <button
        className="user-menu__trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="User menu"
      >
        <div className="user-menu__avatar">
          <User size={16} />
        </div>
        <ChevronDown
          size={14}
          className={`user-menu__chevron ${isOpen ? "user-menu__chevron--rotated" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="user-menu__dropdown">
          <div className="user-menu__header">
            <div className="user-menu__user-info">
              <div className="user-menu__avatar user-menu__avatar--small">
                <User size={14} />
              </div>
              <div className="user-menu__user-details">
                <div className="user-menu__name">John Doe</div>
                <div className="user-menu__email">john@example.com</div>
              </div>
            </div>
          </div>

          <div className="user-menu__divider" />

          <button className="user-menu__item" onClick={toggleTheme}>
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            <span>{theme === "light" ? "Dark mode" : "Light mode"}</span>
          </button>

          <div className="user-menu__divider" />

          <button
            className="user-menu__item user-menu__item--danger"
            onClick={handleLogout}
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
}
