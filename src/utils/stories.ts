import React from "react";

export const stories: {
    ID: string;
    title: string;
    url: string;
    author: string;
    num_comments: number;
    points: number;
}[] = [
        {
            ID: '1',
            title: 'React',
            url: 'https://beta.reactjs.org/',
            author: 'Jordan Walke',
            num_comments: 123456,
            points: 4.7,
        },
        {
            ID: '2',
            title: 'Redux',
            url: 'https://redux.js.org',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 12345,
            points: 4.4,
        }
    ];