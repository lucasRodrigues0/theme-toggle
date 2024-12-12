export const ThemeButton = ({children, changeTheme}) => {
    return (
        <button onClick={changeTheme} className="border-2 rounded-full w-36 h-36 flex justify-center items-center">
            {children}
        </button>
    )
}