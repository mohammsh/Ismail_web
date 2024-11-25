'use client';
import CountUp from 'react-countup';

const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <div
      className={`badge ${containerStyles} w-[120px] h-[40px] flex flex-col items-center justify-center bg-white dark:bg-background shadow-md rounded-md`}
    >
      <div className="text-lg text-primary">{icon}</div>
      <div className="flex flex-col items-center gap-y-1">
        <div className="text-sm font-bold text-primary leading-none">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="text-xs font-medium text-black text-center leading-tight">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
