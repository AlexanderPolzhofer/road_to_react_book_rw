import React from "react";
import { Item, Story } from "./../Item/Item";

export type Stories = Story[];

interface ListProps {
  list: Stories;
  onRemoveItem: (item: Story) => void;
}

export const List: React.FC<ListProps> = ({ list, onRemoveItem }) => {
  return (
    <ul>
      {list.map((item) => {
        return <Item key={item.ID} item={item} onRemoveItem={onRemoveItem} />;
      })}
    </ul>
  );
};
