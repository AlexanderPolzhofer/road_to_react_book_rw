import React from "react";

export const stories: {
  ID: number;
  title: string;
  url: string;
  author: string;
  num_comments: number;
  points: number;
}[] = [
  {
    ID: 1,
    title: "React",
    url: "https://beta.reactjs.org/",
    author: "Jordan Walke",
    num_comments: 12,
    points: 4.7,
  },
  {
    ID: 2,
    title: "Redux",
    url: "https://redux.js.org",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 8,
    points: 4.4,
  },
];
