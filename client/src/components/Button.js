const Button = ({ onClick, text, color }) => {
    const baseClass = "px-5 py-2 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105";
    const colorClass = `bg-${color}-200 text-${color}-700`;
    return (
        <button onClick={onClick} className={`${baseClass} ${colorClass}`}>
            {text}
        </button>
    );
};

export default Button;