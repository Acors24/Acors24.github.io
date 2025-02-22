export default function SectionHeader({
  topLine,
  bottomLine,
  iconSrc,
}: {
  topLine: string;
  bottomLine?: string;
  iconSrc?: string;
}) {
  return (
    <div className="flex items-center space-x-4">
      {iconSrc && <img src={iconSrc} alt="" className="w-12 h-12 rounded" />}
      <div>
        <h3 className="text-2xl">{topLine}</h3>
        {bottomLine && <h4 className="text-xl text-slate-500">{bottomLine}</h4>}
      </div>
    </div>
  );
}
