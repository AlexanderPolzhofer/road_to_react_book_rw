import React from "react";
import "./App.css";
import { InputWithLabel } from "./components/InputWithLabel/InputWithLabel";
import { List } from "./components/List/List";
import { stories as initialStories } from "./utils/stories";

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>(
    localStorage.getItem("search") || ""
  );
  const [stories, setStories] = React.useState<
    {
      ID: number;
      title: string;
      url: string;
      author: string;
      num_comments: number;
      points: number;
    }[]
  >(initialStories);

  React.useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleRemoveStory = (item: {
    ID: number;
    url: string;
    title: string;
    author: string;
    num_comments: number;
    points: number;
  }) => {
    const newStories = stories.filter((story) => item.ID !== story.ID);
    setStories(newStories);
  };

  const searchedStories = stories.filter((story) =>
    story.title.includes(searchTerm)
  );

  return (
    <div className="App">
      <InputWithLabel
        type="text"
        label="Search"
        onHandleChange={handleSearch}
        value={searchTerm}
        isFocused
      />
      <List list={searchedStories} onRemoveStory={handleRemoveStory} />
    </div>
  );
};

export default App;
