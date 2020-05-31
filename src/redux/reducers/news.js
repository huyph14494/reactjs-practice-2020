import News from 'src/data_example/news.js';

const initialState = News;

export default (state = initialState, { type }) => {
    switch (type) {
    default:
        return state
    }
}