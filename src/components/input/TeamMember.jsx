const TeamMember = ({ name, role, imageSrc }) => (
  <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
      <img
        alt={`team-${name}`}
        className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
        src={imageSrc}
      />
      <div className="flex-grow">
        <h2 className="text-gray-900 title-font font-medium">{name}</h2>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);
