import React from "react";
import { Button } from "./../Button/Button";

export type Story = {
  ID: number;
  url: string;
  title: string;
  author: string;
  num_comments: number;
  points: number;
};

interface ItemProps {
  item: Story;
  onRemoveItem: (item: Story) => void;
}

export const Item: React.FC<ItemProps> = ({ item, onRemoveItem }) => {
  const { ID, url, title, author, num_comments, points } = item;

  const handleRemoveItem = () => {
    onRemoveItem(item);
  };

  return (
    <li key={ID}>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
      <Button type="button" onClick={handleRemoveItem}>
        Dismiss X
      </Button>
    </li>
  );
};
