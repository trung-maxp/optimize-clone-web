export interface OddsData {
    value1: string;
    value2: string;
}

export interface TeamData {
    name: string;
    hdp: OddsData;
    ou: OddsData;
    ftx: OddsData;
}

export interface TableData {
    score: string;
    time: string;
    homeTeam: TeamData;
    awayTeam: TeamData;
    drawOdds: OddsData;
}

export interface MatchesData {
    league: string;
    liveContent: string;
    matches: TableData[];
}
