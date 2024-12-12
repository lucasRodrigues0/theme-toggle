import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useState } from "react";
import { ThemeButton } from "./ThemeButton";

export const MainContent = () => {

    const [isDark, setIsDark] = useState(true);

    return (
        <div className="bg-slate-800 text-white flex flex-col justify-center items-center min-h-screen">
            <div className="w-30 h-30">
                <ThemeButton changeTheme={() => setIsDark(!isDark)}>
                    {
                        isDark ? <FaMoon className="text-8xl fa-4x" /> : <FaSun className="text-8xl fa-4x" />
                    }
                </ThemeButton>
            </div>
        </div>
    )
}