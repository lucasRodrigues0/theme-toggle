export const ThemeButton = ({children, changeTheme}) => {
    return (
        <button onClick={changeTheme}>
            {children}
        </button>
    )
}