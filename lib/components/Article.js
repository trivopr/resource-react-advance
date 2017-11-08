import React from 'react';
import PropTypes from 'prop-types';

const dateToString = (data) => new Date(data).toDateString();

const Article = (props) => {
    const {article, store} = props;
    const author = store.lookupAuthor(article.authorId);

    return (
        <div>
            <div>{article.title}</div>
            <div>{dateToString(article.date)}</div>
            <div>
                <a href={author.website}>
                    {author.firstName} {author.lastName}
                </a>
            </div>

            <div>{article.body}</div>
            <hr />

        </div>
    )
}

Article.propTypes = {
    article: PropTypes.shape({
        date: PropTypes.string.isRequired
    }),
}

export default Article;