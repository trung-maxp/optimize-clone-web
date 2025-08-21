import React, { useState } from 'react';

interface TabItem {
    id: string;
    title: string;
    content?: string;
}

interface ScrollableTabMenuProps {
    tabs?: TabItem[];
    onTabChange?: (tabId: string) => void;
    activeTabId?: string;
}

const MenuTab: React.FC<ScrollableTabMenuProps> = ({
    tabs,
    onTabChange,
    activeTabId
}) => {
    // Default tabs data
    const defaultTabs: TabItem[] = [
        { id: 'account', title: 'UFABET บัญชี' },
        { id: 'deposit', title: 'UFABET ฝากเงิน' },
        { id: 'sport', title: 'UFABET กีฬา' }
    ];

    const tabItems = tabs || defaultTabs;
    const [activeTab, setActiveTab] = useState<string>(
        activeTabId || tabItems[0]?.id || ''
    );

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
        onTabChange?.(tabId);
    };

    const getTabStyles = (tabId: string) => {
        const isActive = activeTab === tabId;
        const baseStyles = "px-6 py-4 cursor-pointer transition-all duration-200 min-w-fit";

        if (isActive) {
            return `${baseStyles} bg-blue-600 text-white border-b-2 border-blue-600 shadow-md`;
        }

        return `${baseStyles} bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900`;
    };

    return (
        <div
            className="overflow-x-auto scrollbar-hide"
            tabIndex={0}
            role="tablist"
            aria-label="Scrollable Tab Menu"
        >
            <div className="flex gap-2 min-w-max">
                {tabItems.map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                        <div key={tab.id}>
                            <div
                                id={tab.id}
                                role="tab"
                                aria-selected={isActive}
                                className={getTabStyles(tab.id)}
                                onClick={() => handleTabClick(tab.id)}
                            >
                                <h2 className="text-sm font-medium whitespace-nowrap">
                                    {tab.title}
                                </h2>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MenuTab