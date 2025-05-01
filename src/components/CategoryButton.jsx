const CategoryButton = ({ label, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-gray-400 text-gray-700 hover:bg-gray-100 transition duration-200 rounded-full px-5 py-2 m-2 ${
        isActive
          ? "bg-gray-500 text-white border-gray-500"
          : "text-gray-600 border-gray-300 hover:bg-gray-100"
      }` }
    >
      {label}
    </button>
  );
};

export default CategoryButton;
