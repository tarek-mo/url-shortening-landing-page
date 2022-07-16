const Icon = ({ icon }) => {
  return (
    <div className="w-24 h-24 flex justify-center items-center bg-darkviolet rounded-full -translate-y-1/2">
      <img src={icon} alt="Brand Recognition Icon" />
    </div>
  );
};

export default Icon;
