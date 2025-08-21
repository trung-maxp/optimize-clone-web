import React, { useState } from 'react';
import type { MatchesData, OddsData } from "../../type/table";
import MatchBettingTable from "../table/Table";

interface LeagueSectionProps {
    league: MatchesData;
    onOddsClick?: (betType: string, team: string, odds: OddsData) => void;
    onStatisticClick?: () => void;
    onMoreOptionsClick?: () => void;
}

const LeagueSection: React.FC<LeagueSectionProps> = ({
    league,
    onOddsClick,
    onStatisticClick,
    onMoreOptionsClick
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(prev => !prev);
    };

    // Show only first match initially, or all matches when expanded
    const matchesToShow = isExpanded ? league.matches : [league.matches[0]];
    const hasMoreMatches = league.matches.length > 1;

    return (
        <div className="bg-gray-50 rounded-lg p-6">
            {/* League Header */}
            <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {league.league}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                    {league.liveContent}
                </p>
            </div>

            {/* Matches */}
            <div className="space-y-4">
                {matchesToShow.map((match, index) => (
                    <MatchBettingTable
                        key={`${league.league}-${index}`}
                        tableData={match}
                        onOddsClick={onOddsClick}
                        onStatisticClick={onStatisticClick}
                        onMoreOptionsClick={onMoreOptionsClick}
                    />
                ))}
            </div>

            {/* Expand/Collapse Button */}
            {hasMoreMatches && (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={toggleExpanded}
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                    >
                        <span>
                            {isExpanded
                                ? `ซ่อน (${league.matches.length - 1} แมตช์)`
                                : `ดูเพิ่มเติม (${league.matches.length - 1} แมตช์)`
                            }
                        </span>
                        <span className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                            ▼
                        </span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default LeagueSection;