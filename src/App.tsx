import React from "react";
import { InputWithLabel } from "./components/InputWithLabel/InputWithLabel";
import { List, Stories } from "./components/List/List";
import { Story } from "./components/Item/Item";
import { stories as initialStories } from "./utils/stories";
import "./App.css";

type StoriesState = {
  data: Stories;
  isLoading: boolean;
  isError: boolean;
};

type StoriesAction = {
  type: string;
  payload: any;
};

const initialState = {
  data: initialStories,
  isLoading: false,
  isError: false,
};

const storiesReducer = (state: StoriesState, action: StoriesAction) => {
  const { type, payload } = action;
  switch (type) {
    case "STORIES_FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "STORIES_FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    case "STORIES_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    case "REMOVE_STORY":
      return {
        ...state,
        data: state.data.filter((story) => payload.ID !== story.ID),
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem("search") || ""
  );

  const [stories, dispatchStories] = React.useReducer(
    storiesReducer,
    initialState
  );

  const searchedStories = stories.data.filter((story: Story) =>
    story.title.toLowerCase()
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleRemoveStory = (item: Story) => {
    dispatchStories({ type: "REMOVE_STORY", payload: item });
  };

  return (
    <div className="App">
      <InputWithLabel
        type="text"
        label="Search"
        onHandleChange={handleSearch}
        value={searchTerm}
        isFocused
      />
      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </div>
  );
};

export default App;
