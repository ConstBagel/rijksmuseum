export const config = {
  BASE_URL: `https://www.rijksmuseum.nl/api/en/collection`,
  KEY: 'Rz6h583k',
  LIMIT_ITEMS: 10000,
  DEFAULT_PAGE: 1,
  STEPS: [10, 50, 100],
  SORT_OPTIONS: [
    { value: '', label: 'Select sort option' },
    { value: 'relevance', label: 'Relevance' },
    { value: 'objecttype', label: 'Type' },
    { value: 'chronologic', label: 'From oldest to newest' },
    { value: 'achronologic', label: 'From newest to oldest' },
    { value: 'artist', label: 'Artist name [A-Z]' },
    { value: 'artistdesc', label: 'Artist name [Z-A]' },
  ],
};
