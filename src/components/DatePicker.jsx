import { useTheme } from "../providers/ThemeProvider";
import { useEffect } from "react";

export default function DatePicker({ value, setValue, style, placeholder }) {
  const { theme } = useTheme();

  const handleChange = (e) => {
    setValue(e.target.value);
  };


  return (
    <>
      <style>{`
        .date-picker-wrapper {
          position: relative;
          width: fit-content; /* Se ajusta al contenido */
        }

        .date-picker-input {
          padding: 7.5px 10px;
          border-radius: 5px;
          border: 1px solid ${theme.border};
          background-color: ${theme.card};
          font-size: 16px;
          color: ${theme.text1};
          outline: none;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .date-picker-input:hover {
          background-color: ${theme.background};
        }

        /* Estilos del Placeholder Falso */
        .fake-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          padding: 7.5px 10px; /* Mismo padding que el input */
          display: flex;
          align-items: center;
          color: ${theme.text1};
          opacity: 0.5; /* Un poco transparente */
          pointer-events: none; /* IMPORTANTE: Permite hacer clic a través del texto */
          font-family: inherit;
          font-size: 16px;
        }
      `}</style>

      <>
        <input
          type="date"
          className="date-picker-input"
          value={value}
          onChange={handleChange}
          style={{ background: theme.card, ...style }}
        />
        
        {!value && <span className="fake-placeholder">{placeholder}</span>}
      </>
    </>
  );
}