import type { OddsData, TableData } from "../../type/table";

interface MatchBettingTableProps {
    tableData: TableData;
    onOddsClick?: (betType: string, team: string, odds: OddsData) => void;
    onStatisticClick?: () => void;
    onMoreOptionsClick?: () => void;
}

const MatchBettingTable: React.FC<MatchBettingTableProps> = ({
    tableData,
    onOddsClick,
    onStatisticClick,
    onMoreOptionsClick
}) => {
    const handleOddsClick = (betType: string, team: string, odds: OddsData) => {
        onOddsClick?.(betType, team, odds);
    };

    const OddsButton: React.FC<{
        odds: OddsData;
        betType: string;
        team: string;
    }> = ({ odds, betType, team }) => (
        <button
            onClick={() => handleOddsClick(betType, team, odds)}
            className="w-full hover:bg-blue-50 transition-colors duration-200"
        >
            <div className="bg-white border border-gray-200 rounded p-2 text-center hover:border-blue-300">
                <div className="text-sm font-medium text-gray-800">
                    {odds.value1}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                    {odds.value2}
                </div>
            </div>
        </button>
    );

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                {/* Table Header */}
                <thead>
                    <tr className="bg-gray-100">
                        <th colSpan={2} className="px-4 py-3 text-left">
                            <div className="flex items-center gap-3">
                                <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-semibold">
                                    {tableData.score}
                                </span>
                                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm font-medium">
                                    {tableData.time}
                                </span>
                            </div>
                        </th>
                        <th className="px-4 py-3 text-center border-l border-gray-200">
                            <span className="text-sm font-medium text-gray-700">FT. HDP</span>
                        </th>
                        <th className="px-4 py-3 text-center border-l border-gray-200">
                            <span className="text-sm font-medium text-gray-700">FT. O/U</span>
                        </th>
                        <th className="px-4 py-3 text-center border-l border-gray-200">
                            <span className="text-sm font-medium text-gray-700">FT. 1X2</span>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {/* Home Team Row */}
                    <tr className="border-t border-gray-200 hover:bg-gray-50">
                        <td colSpan={2} className="px-4 py-3">
                            <span className="font-medium text-gray-800">
                                {tableData.homeTeam.name}
                            </span>
                        </td>
                        <td className="px-4 py-3 border-l border-gray-200">
                            <OddsButton
                                odds={tableData.homeTeam.hdp}
                                betType="HDP"
                                team="home"
                            />
                        </td>
                        <td className="px-4 py-3 border-l border-gray-200">
                            <OddsButton
                                odds={tableData.homeTeam.ou}
                                betType="O/U"
                                team="home"
                            />
                        </td>
                        <td className="px-4 py-3 border-l border-gray-200">
                            <OddsButton
                                odds={tableData.homeTeam.ftx}
                                betType="1X2"
                                team="home"
                            />
                        </td>
                    </tr>

                    {/* Away Team Row */}
                    <tr className="border-t border-gray-200 hover:bg-gray-50">
                        <td colSpan={2} className="px-4 py-3">
                            <span className="font-medium text-gray-800">
                                {tableData.awayTeam.name}
                            </span>
                        </td>
                        <td className="px-4 py-3 border-l border-gray-200">
                            <OddsButton
                                odds={tableData.awayTeam.hdp}
                                betType="HDP"
                                team="away"
                            />
                        </td>
                        <td className="px-4 py-3 border-l border-gray-200">
                            <OddsButton
                                odds={tableData.awayTeam.ou}
                                betType="O/U"
                                team="away"
                            />
                        </td>
                        <td className="px-4 py-3 border-l border-gray-200">
                            <OddsButton
                                odds={tableData.awayTeam.ftx}
                                betType="1X2"
                                team="away"
                            />
                        </td>
                    </tr>

                    {/* Options Row */}
                    <tr className="border-t border-gray-200 hover:bg-gray-50">
                        <td colSpan={2} className="px-4 py-3">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={onStatisticClick}
                                    className="p-2 hover:bg-gray-100 rounded transition-colors"
                                    title="Statistics"
                                >
                                    <div className="w-5 h-5 bg-gray-400 rounded flex items-center justify-center">
                                        <span className="text-xs text-white">📊</span>
                                    </div>
                                </button>
                                <button
                                    onClick={onMoreOptionsClick}
                                    className="p-2 hover:bg-gray-100 rounded transition-colors"
                                    title="More Options"
                                >
                                    <div className="w-5 h-5 bg-gray-400 rounded flex items-center justify-center">
                                        <span className="text-xs text-white">⋯</span>
                                    </div>
                                </button>
                            </div>
                        </td>
                        <td className="px-4 py-3 border-l border-gray-200"></td>
                        <td className="px-4 py-3 border-l border-gray-200"></td>
                        <td className="px-4 py-3 border-l border-gray-200">
                            <OddsButton
                                odds={tableData.drawOdds}
                                betType="1X2"
                                team="draw"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MatchBettingTable