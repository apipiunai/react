import { useTheme } from "../providers/ThemeProvider";


export default function Button({ text, style, onClick }) {
    
    const { theme } = useTheme();
    
    return (
        <div onClick={onClick} style={{ color: theme.textContrast2, cursor: "pointer", textAlign: "center", padding: "10px", borderRadius: "5px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", backgroundColor: theme.main, ...style }}>
            {text}
        </div>
    )
}