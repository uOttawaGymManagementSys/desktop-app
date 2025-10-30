const Header = ({ title, subtitle }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-amber-900 mb-1">
        {title}
      </h2>

      <h5 className="text-lg text-gray-500">
        {subtitle}
      </h5>
    </div>
  );
};

export default Header;
