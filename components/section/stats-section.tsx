export default function StatsSection() {
  return (
    <div className="bg-zinc-800 py-16 px-4 rounded-md">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-bold text-robinsEggBlue">
              94%
            </div>
            <div className="text-white  text-lg">Client retention rate</div>
          </div>

          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-bold text-robinsEggBlue">
              15+
            </div>
            <div className="text-white  text-lg">Hours saved weekly</div>
          </div>

          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-bold text-robinsEggBlue">
              30%
            </div>
            <div className="text-white  text-lg">Average revenue increase</div>
          </div>
        </div>
      </div>
    </div>
  );
}
