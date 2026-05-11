const VillagerIcon = ({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) => {
  return (
    <svg
      className={className}
      style={{ imageRendering: "pixelated" }}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="0" width="8" height="8" fill="#C8A882" />
      <rect x="5" y="0" width="6" height="1" fill="#A07850" />
      <rect x="3" y="2" width="2" height="4" fill="#C8A882" />
      <rect x="11" y="2" width="2" height="4" fill="#C8A882" />
      <rect x="6" y="3" width="1" height="1" fill="#3A2A10" />
      <rect x="9" y="3" width="1" height="1" fill="#3A2A10" />
      <rect x="6" y="6" width="4" height="1" fill="#8B6340" />
      <rect x="5" y="1" width="6" height="2" fill="#8B5A2B" />
      <rect x="4" y="8" width="3" height="5" fill={color || "#4a7c59"} />
      <rect x="9" y="8" width="3" height="5" fill={color || "#4a7c59"} />
      <rect x="4" y="8" width="8" height="1" fill="#5A5A5A" />
      <rect x="5" y="13" width="2" height="3" fill="#A07850" />
      <rect x="9" y="13" width="2" height="3" fill="#A07850" />
      <rect x="6" y="8" width="4" height="6" fill={`${color || "#5a9e6f"}CC`} />
    </svg>
  );
};

export default VillagerIcon;
