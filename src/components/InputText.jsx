import { useTheme } from "../providers/ThemeProvider";


export default function InputText({value, setValue, placeholder, style}) {
    const { theme } = useTheme();
    return (
        <>
        <input style={{...style, backgroundColor: theme.card, border: `1px solid ${theme.border}`, padding: 10, borderRadius: 5, color: theme.text1, '::placeholder': {color: theme.text1}}} value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder}  />
        <style>{`
            input::placeholder {
                color: ${theme.text2};
            }
        `}</style>
        </>
    );
}