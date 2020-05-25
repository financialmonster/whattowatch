import { useState, useCallback } from 'react';

export const useDetailedFilmTabs = () => {
    const [currentTab, setCurrentTab] = useState(`Overview`);

    const navLinkClickHandler = useCallback((tab: string): void => {
        setCurrentTab(tab);
    }, []);

    return {
        currentTab,
        navLinkClickHandler
    }
}
