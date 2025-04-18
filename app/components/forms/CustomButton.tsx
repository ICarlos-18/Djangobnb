interface CustomButton {
    label: string;
    className?: string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButton> = ({
    label,
    className,
    onClick
}) => {
    return (
        <div 
            onClick={onClick}
            className={`w-full py-4 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition text-center cursor-pointer ${className}`}
        >
            {label}
        </div>
    )
}

export default CustomButton;