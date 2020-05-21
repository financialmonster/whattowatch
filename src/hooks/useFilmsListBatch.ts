import { useState } from 'react';

export const useFilmsListBatch = () => {
    const [batch, setBatch] = useState(20);

    const requestNextBatch = () => setBatch((batch) => batch + 20);

    return {
        batch,
        requestNextBatch
    };
};
