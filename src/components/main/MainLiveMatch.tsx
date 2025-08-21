import { useState } from "react";

import LeagueSection from "./LeaugeSection";

import allMatchData from "../../data/data";

import type { OddsData } from "../../type/table";

interface MainLiveMatchProps {
    onOddsClick?: (betType: string, team: string, odds: OddsData) => void;
    onStatisticClick?: () => void;
    onMoreOptionsClick?: () => void;
}

const MainLiveMatch: React.FC<MainLiveMatchProps> = ({
    onOddsClick,
    onStatisticClick,
    onMoreOptionsClick
}) => {
    const [showAllLeagues, setShowAllLeagues] = useState(false);

    const toggleShowAll = () => {
        setShowAllLeagues(prev => !prev);
    };

    const leaguesToShow = showAllLeagues ? allMatchData : [allMatchData[0]];
    const hasMoreLeagues = allMatchData.length > 1;

    return (
        <div className="w-full">
            <div className="space-y-8">
                {leaguesToShow.map(league => (
                    <LeagueSection
                        key={league.league}
                        league={league}
                        onOddsClick={onOddsClick}
                        onStatisticClick={onStatisticClick}
                        onMoreOptionsClick={onMoreOptionsClick}
                    />
                ))}
            </div>

            {hasMoreLeagues && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={toggleShowAll}
                        className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                        style={{ minWidth: '250px' }}
                    >
                        <span>
                            {showAllLeagues
                                ? `ซ่อนลีกอื่นๆ (${allMatchData.length - 1} ลีก)`
                                : `ดูลีกเพิ่มเติม (${allMatchData.length - 1} ลีก)`
                            }
                        </span>
                        <span className={`transform transition-transform duration-200 ${showAllLeagues ? 'rotate-180' : ''}`}>
                            ▼
                        </span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default MainLiveMatch;