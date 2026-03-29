const SectionCard = ({ title, body, bullets }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{body}</p>
      {bullets?.length ? (
        <ul className="mt-6 space-y-3 text-gray-700">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-lionex-primary"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default SectionCard;
