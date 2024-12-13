import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useState } from "react";
import { ThemeButton } from "./ThemeButton";

export const MainContent = () => {

    const [isDark, setIsDark] = useState(true);

    return (
        <div className={`${isDark ? 'bg-slate-800' : 'bg-slate-100'} text-white flex flex-col justify-center items-center min-h-screen transition-all ease-out duration-150`}>
            <div className="w-30 h-30">
                <ThemeButton changeTheme={() => setIsDark(!isDark)} bgc={isDark ? '' : 'border-orange-300'}>
                    {
                        isDark ? <FaMoon className="text-8xl fa-4x text-white" /> : <FaSun className="text-8xl fa-4x text-orange-300" />
                    }
                </ThemeButton>
            </div>
        </div>
    )
}