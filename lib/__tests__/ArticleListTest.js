import React from 'react';
import ArticleList from '../components/ArticleList';

import renderer from 'react-test-renderer';

describe('Article List', () => {
    it('check abc', () => {
        expect('abc').toBe('abc');
    });

    const testProps = {
        articles: {
            a: {id: 'a', title: 'hello world 1'},
            b: {id: 'b', title: 'hello world 2'},
            c: {id: 'c', title: 'hello world 3'}
        },
        store: {
            lookupAuthor: jest.fn(() => ({}))
        }
    }

    it('Test Props', () => {
        const tree = renderer.create(
            <ArticleList {...testProps} />
        ).toJSON();
        console.log('TREE:', tree);
        expect(tree.children.length).toBe(3);
        expect(tree).toMatchSnapshot();
    })
})