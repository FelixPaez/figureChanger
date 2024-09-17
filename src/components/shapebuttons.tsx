type ButtonProps = {
    buttonText: {
        Button1?: string;
        Button2?: string;
        Button3?: string;
    };
    onClick: (elem: string) => void;
};

const ShapeButtons: React.FC<ButtonProps> = ({ buttonText, onClick }) => {
    return (
        <div className="button-container">
            <button onClick={() => onClick(buttonText.Button1 ?? '')}>{buttonText.Button1}</button>
            <button onClick={() => onClick(buttonText.Button2 ?? '')}>{buttonText.Button2}</button>
            <button onClick={() => onClick(buttonText.Button3 ?? '')}>{buttonText.Button3}</button>
        </div>
    );
};

export default ShapeButtons;
