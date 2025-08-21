import React from 'react';

// Types for real-time data
interface LiveTabData {
  live: number;
  today: number;
  early: number;
}

interface MainBetLiveProps {
  data?: LiveTabData;
  onTabClick?: (tabType: 'live' | 'today' | 'early') => void;
}

const MainBetLive: React.FC<MainBetLiveProps> = ({
  data,
  onTabClick
}) => {
  // Default data - will be replaced by real-time API data
  const defaultData: LiveTabData = {
    live: 16,
    today: 130,
    early: 734
  };

  const tabData = data || defaultData;

  const handleTabClick = (tabType: 'live' | 'today' | 'early') => {
    onTabClick?.(tabType);
  };

  return (
    <div>
      {/* Header Section */}
      <aside className="mt-8">
        <section>
          <header>
            <h2 className="text-xl font-bold text-gray-800">
              การถ่ายทอดสดการแข่งขันฟุตบอล UFABET
            </h2>
          </header>
        </section>
      </aside>

      {/* Live Tab */}
      <div className="flex gap-2 mt-4">
        {/* Live Button */}
        <div>
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            onClick={() => handleTabClick('live')}
          >
            <span>ถ่ายทอดสด</span>
            <span className="px-2 py-1 text-xs font-semibold bg-red-500 text-white rounded-full min-w-[20px] text-center animate-pulse">
              {tabData.live}
            </span>
          </button>
        </div>

        {/* Today Button */}
        <div>
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            onClick={() => handleTabClick('today')}
          >
            <span>วันนี้</span>
            <span className="px-2 py-1 text-xs font-semibold bg-gray-200 text-gray-700 rounded-full min-w-[20px] text-center">
              {tabData.today}
            </span>
          </button>
        </div>

        {/* Early Button */}
        <div>
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            onClick={() => handleTabClick('early')}
          >
            <span>แรก</span>
            <span className="px-2 py-1 text-xs font-semibold bg-gray-200 text-gray-700 rounded-full min-w-[20px] text-center">
              {tabData.early}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBetLive;