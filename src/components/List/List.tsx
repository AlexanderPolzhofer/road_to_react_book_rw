import React from "react";
import { Item } from "./../Item/Item";

interface ListProps {
  list: {
    ID: number;
    title: string;
    url: string;
    author: string;
    num_comments: number;
    points: number;
  }[];
  onRemoveStory: (item: {
    ID: number;
    url: string;
    title: string;
    author: string;
    num_comments: number;
    points: number;
  }) => void;
}

export const List: React.FC<ListProps> = ({ list, onRemoveStory }) => {
  return (
    <ul>
      {list.map((item) => {
        return <Item key={item.ID} item={item} onRemoveItem={onRemoveStory} />;
      })}
    </ul>
  );
};
