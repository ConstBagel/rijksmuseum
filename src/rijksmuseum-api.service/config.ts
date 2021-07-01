export const config = {
    BASE_URL: `https://www.rijksmuseum.nl/api/en/collection`,
    KEY: 'Rz6h583k',
    LIMIT_ITEMS: 10000,
    STEPS: [ 10 , 50 , 100 ],
    SORT_OPTIONS: [
        { val: '', txt: 'Select sort option'},
        { val: 'relevance', txt: 'Relevance' },
        { val: 'objecttype', txt: 'Type' },
        { val: 'chronologic', txt: 'From oldest to newest' }, 
        { val: 'achronologic', txt: 'From newest to oldest' }, 
        { val:'artist', txt: 'Artist name [A-Z]'}, 
        { val: 'artistdesc', txt: 'Artist name [Z-A]'}
    ],
    COLLECTION_QUERIES: {}
};