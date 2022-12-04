import React from 'react';

interface ListProps {
    list: {
        ID: string;
        title: string;
        url: string;
        author: string;
        num_comments: number;
        points: number;
    }[]
}

export const List: React.FC<ListProps> = ({ list }) => {
    return (
        <ul>
            {list.map(item => {
                return (
                    <li key={item.ID}>
                        <span>
                            <a href={item.url}>{item.title}</a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                    </li>
                )
            })}
        </ul>
    )
}