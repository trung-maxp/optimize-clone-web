import { useState, useEffect } from 'react';

interface Team {
  id: string;
  name: string;
  logo: string;
  score: number;
}

interface BettingOdds {
  home: number;
  draw: number;
  away: number;
  trend: 'up' | 'down' | 'stable';
}

interface MatchData {
  id: string;
  league: string;
  teams: {
    home: Team;
    away: Team;
  };
  gameTime: {
    phase: '1H' | '2H' | 'HT' | 'FT';
    minute: number;
  };
  status: 'live' | 'upcoming' | 'finished';
  odds: BettingOdds;
  lastUpdate: number;
}

const MainHotMatch = () => {
  // Mock real-time data
  const [matchData, setMatchData] = useState<MatchData>({
    id: '1',
    league: 'ลีก คัพ (ใน สหรัฐอเมริกา และ แคนาดา)',
    teams: {
      home: {
        id: 'la-galaxy',
        name: 'แอลเอ กาแลกซี่',
        logo: '/image/soccer/icn-flag-placeholder.jpg',
        score: 2
      },
      away: {
        id: 'pachuca',
        name: 'ปาชูก้า',
        logo: '/image/soccer/icn-flag-placeholder.jpg',
        score: 0
      }
    },
    gameTime: {
      phase: '2H',
      minute: 47
    },
    status: 'live',
    odds: {
      home: 1.85,
      draw: 3.40,
      away: 4.20,
      trend: 'stable'
    },
    lastUpdate: Date.now()
  });

  const [scoreAnimation, setScoreAnimation] = useState('');
  const [oddsAnimation, setOddsAnimation] = useState('');
  const [isConnected, setIsConnected] = useState(true);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMatchData(prev => {
        const newData = { ...prev };

        // Update game time
        if (prev.status === 'live' && prev.gameTime.minute < 90) {
          newData.gameTime.minute += Math.random() > 0.7 ? 1 : 0;

          // Change phase at halftime
          if (prev.gameTime.minute === 45 && prev.gameTime.phase === '1H') {
            newData.gameTime.phase = 'HT';
          } else if (prev.gameTime.minute === 46 && prev.gameTime.phase === 'HT') {
            newData.gameTime.phase = '2H';
          }
        }

        // Randomly update score (low probability)
        if (Math.random() > 0.98 && prev.status === 'live') {
          if (Math.random() > 0.5) {
            newData.teams.home.score += 1;
          } else {
            newData.teams.away.score += 1;
          }
          setScoreAnimation('animate-pulse bg-green-200');
          setTimeout(() => setScoreAnimation(''), 2000);
        }

        // Update odds with realistic fluctuations
        const oddsChange = (Math.random() - 0.5) * 0.2;
        newData.odds = {
          home: Math.max(1.01, +(prev.odds.home + oddsChange).toFixed(2)),
          draw: Math.max(1.01, +(prev.odds.draw + oddsChange * 0.5).toFixed(2)),
          away: Math.max(1.01, +(prev.odds.away - oddsChange).toFixed(2)),
          trend: oddsChange > 0.05 ? 'up' : oddsChange < -0.05 ? 'down' : 'stable'
        };

        // Animate odds changes
        if (Math.abs(oddsChange) > 0.05) {
          setOddsAnimation('animate-bounce');
          setTimeout(() => setOddsAnimation(''), 1000);
        }

        newData.lastUpdate = Date.now();
        return newData;
      });
    }, 3000);

    // Simulate connection status
    const connectionInterval = setInterval(() => {
      setIsConnected(Math.random() > 0.1); // 90% uptime
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(connectionInterval);
    };
  }, []);

  const getOddsTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <span className="text-green-500 text-xs">↗</span>;
      case 'down':
        return <span className="text-red-500 text-xs">↘</span>;
      default:
        return <span className="text-gray-400 text-xs">→</span>;
    }
  };

  const formatGameTime = () => {
    if (matchData.gameTime.phase === 'HT') return 'HT';
    if (matchData.gameTime.phase === 'FT') return 'FT';
    return `${matchData.gameTime.phase} ${matchData.gameTime.minute}'`;
  };

  const getStatusBadge = () => {
    if (!isConnected) {
      return (
        <div className="bg-gray-500 rounded px-2 py-1 flex items-center animate-pulse">
          <div className="w-2 h-2 bg-gray-300 rounded-full mr-1"></div>
          <span className="text-white text-xs">ขาดการเชื่อมต่อ</span>
        </div>
      );
    }

    switch (matchData.status) {
      case 'live':
        return
      case 'upcoming':
        return (
          <div className="bg-blue-500 rounded px-2 py-1">
            <span className="text-white text-xs">เร็วๆ นี้</span>
          </div>
        );
      default:
        return (
          <div className="bg-gray-500 rounded px-2 py-1">
            <span className="text-white text-xs">จบแล้ว</span>
          </div>
        );
    }
  };

  return (
    <div className="bg-gradient-to-r from-yellow-200 to-red-500 rounded-lg shadow-lg relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-orange-400 relative z-10">
        <div className="flex items-center">
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg">แมตช์ร้อนแรง</span>
            <span className="text-orange-200 text-xs">
              อัปเดตล่าสุด: {new Date(matchData.lastUpdate).toLocaleTimeString('th-TH')}
            </span>
          </div>
        </div>

        {/* Connection status indicator */}
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
          <span className="text-white text-xs">
            {isConnected ? 'เชื่อมต่อแล้ว' : 'ขาดการเชื่อมต่อ'}
          </span>
        </div>
      </div>

      {/* Match Container */}
      <div className="p-4 relative z-10">
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="p-4">
            {/* League Info */}
            <div className="flex items-center justify-between mb-4">
              <p className="flex items-center text-gray-700 font-medium">
                <span className="text-sm">{matchData.league}</span>
              </p>
              {getStatusBadge()}
            </div>

            {/* Match Info */}
            <div className="flex items-center justify-between mb-4">
              {/* Home Team */}
              <div className="flex flex-col items-center flex-1 transform hover:scale-105 transition-transform duration-200">
                <div className="mb-2 relative">
                  <img
                    src={matchData.teams.home.logo}
                    alt={matchData.teams.home.name}
                    className="w-12 h-12 rounded-full shadow-md"
                    loading='lazy'
                  />
                  {matchData.teams.home.score > matchData.teams.away.score && matchData.status === 'live' && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">🔥</span>
                    </div>
                  )}
                </div>
                <p className="text-sm font-medium text-gray-800 text-center leading-tight">
                  {matchData.teams.home.name}
                </p>
              </div>

              {/* Score & Time */}
              <div className="flex flex-col items-center mx-6">
                <div className={`flex items-center text-3xl font-bold text-gray-900 mb-2 rounded-lg px-3 py-1 ${scoreAnimation}`}>
                  <span className={matchData.teams.home.score > matchData.teams.away.score ? 'text-green-600' : ''}>
                    {matchData.teams.home.score}
                  </span>
                  <span className="mx-3 text-gray-500">:</span>
                  <span className={matchData.teams.away.score > matchData.teams.home.score ? 'text-green-600' : ''}>
                    {matchData.teams.away.score}
                  </span>
                </div>

                <div className={`text-sm font-medium px-3 py-1 rounded-full ${matchData.status === 'live'
                  ? 'text-green-600 bg-green-100 animate-pulse'
                  : matchData.status === 'upcoming'
                    ? 'text-blue-600 bg-blue-100'
                    : 'text-gray-600 bg-gray-100'
                  }`}>
                  {formatGameTime()}
                </div>

                {matchData.status === 'live' && (
                  <div className="text-xs text-gray-500 mt-1 animate-pulse">
                    ● สด
                  </div>
                )}
              </div>

              {/* Away Team */}
              <div className="flex flex-col items-center flex-1 transform hover:scale-105 transition-transform duration-200">
                <div className="mb-2 relative">
                  <img
                    src={matchData.teams.away.logo}
                    alt={matchData.teams.away.name}
                    className="w-12 h-12 rounded-full shadow-md"
                    loading='lazy'
                  />
                  {matchData.teams.away.score > matchData.teams.home.score && matchData.status === 'live' && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">🔥</span>
                    </div>
                  )}
                </div>
                <p className="text-sm font-medium text-gray-800 text-center leading-tight">
                  {matchData.teams.away.name}
                </p>
              </div>
            </div>

            {/* Real-time Betting Odds */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-gray-600">อัตราต่อรองแบบเรียลไทม์</span>
                <span className="text-xs text-gray-500">
                  {getOddsTrendIcon(matchData.odds.trend)} อัปเดตทุก 3 วินาที
                </span>
              </div>
              <div className={`flex justify-center space-x-2 ${oddsAnimation}`}>
                <div className="flex-1">
                  <button className="w-full bg-white hover:bg-blue-50 border border-gray-300 hover:border-blue-400 rounded px-3 py-3 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-bold text-gray-900 mb-1">1</span>
                      <span className="text-lg font-bold text-blue-600">{matchData.odds.home}</span>
                      <span className="text-xs text-gray-500">{matchData.teams.home.name.slice(0, 8)}...</span>
                    </div>
                  </button>
                </div>

                <div className="flex-1">
                  <button className="w-full bg-white hover:bg-yellow-50 border border-gray-300 hover:border-yellow-400 rounded px-3 py-3 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-bold text-gray-900 mb-1">X</span>
                      <span className="text-lg font-bold text-yellow-600">{matchData.odds.draw}</span>
                      <span className="text-xs text-gray-500">เสมอ</span>
                    </div>
                  </button>
                </div>

                <div className="flex-1">
                  <button className="w-full bg-white hover:bg-red-50 border border-gray-300 hover:border-red-400 rounded px-3 py-3 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-bold text-gray-900 mb-1">2</span>
                      <span className="text-lg font-bold text-red-600">{matchData.odds.away}</span>
                      <span className="text-xs text-gray-500">{matchData.teams.away.name.slice(0, 8)}...</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
              <span>🔥 แมตช์ยอดนิยม</span>
              <span>👥 {(Math.random() * 1000 + 500).toFixed(0)} คนดู</span>
              <span>📊 มีสถิติครบ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHotMatch;