import React from "react";

interface Props {
  color: string;
  code?: string;
  children?: React.ReactNode;
  onClick: () => void;
  width: string;
  height: string;
  marginLeft: number;
  marginRight: number;
  marginBottom: number;
  fontWeight: number;
  fontSize: number;
  display: string;
}

function sayChicken() {
    alert('Chicken!');
}

const Button: React.FC<Props> = ({ 
    color,
    children,
    code,
    marginLeft,
    marginRight,
    marginBottom,
    onClick, 
    width,
    height,
    fontWeight,
    fontSize,
    display
  }) => { 

  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border: "none",
         borderRadius: "30%",
         marginLeft: marginLeft,
         marginRight: marginRight,
         marginTop: 15,
         marginBottom: marginBottom,
         width,
         height,
         fontWeight,
         fontSize
      }}
    >
    <div style = {{verticalAlign: "text-top", textAlign: "center", width:"90%", marginLeft:"5%", marginTop: "5%", marginBottom: "10%"}}>
    {children}
    <div style={{display: display, fontWeight: 18, textAlign:"center", color: "blue"}}>
        <p>
        <a href={code} rel="noreferrer">
          Link
          </a>
        </p>
    </div>
    </div>
    </button>
  );
}

export default Button;