export const BASE_URL = `https://www.rijksmuseum.nl/api/en/collection`;
export const KEY = 'Rz6h583k';
export const LIMIT_ITEMS = 10000;
export const DEFAULT_PAGE = 1;
export const STEPS = [10, 50, 100];
export const SORT_OPTIONS = [
    { value: '', label: 'Select sort option' },
    { value: 'relevance', label: 'Relevance' },
    { value: 'objecttype', label: 'Type' },
    { value: 'chronologic', label: 'From oldest to newest' },
    { value: 'achronologic', label: 'From newest to oldest' },
    { value: 'artist', label: 'Artist name [A-Z]' },
    { value: 'artistdesc', label: 'Artist name [Z-A]' },
];
