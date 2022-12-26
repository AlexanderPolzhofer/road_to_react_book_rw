import React from "react";
import { Button } from "./../Button/Button";
import "./Item.css";

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
    <li key={ID} className="item">
      <span style={{ width: "30%" }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: "30%" }}>{author}</span>
      <span style={{ width: "10%" }}>{num_comments}</span>
      <span style={{ width: "10%" }}>{points}</span>
      <Button type="button" onClick={handleRemoveItem}>
        X
      </Button>
    </li>
  );
};
