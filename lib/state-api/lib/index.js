class StateApi {
    constructor(rawData) {
        this.data = {
            articles: this.mapDataToObject(rawData.articles),
            authors: this.mapDataToObject(rawData.authors),
        }
    }

    mapDataToObject(arr) {
        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {})
    }

    getState = () => this.data;

    lookupAuthor = (authorId) => this.data.authors[authorId];
}

export default StateApi;