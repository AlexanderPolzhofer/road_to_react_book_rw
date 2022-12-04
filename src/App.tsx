import React from 'react'
import './App.css'
import { Search } from './components/Search/Search'
import { List } from './components/List/List'
import { stories } from './utils/stories'

const App = () => {

  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  const searchedStories = stories.filter(story => story.title.includes(searchTerm))

  return (
    <div className="App">
      <Search label='Search' onHandleSearch={handleSearch} />
      <List list={searchedStories} />
    </div>
  )
}

export default App
