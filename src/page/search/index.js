import React from 'react';
// import { SearchBar } from 'antd-mobile';

import { Icon, Toast, SearchBar } from '@/components';

import store from '@/store';
// import { jumpBack } from '@/utils/jumpUtil';
import MovieList from '@/page/components/movieList/index';
import './style.less';
import { NavBar } from '@/components/MyAppBar';

const MovieSearch = () => {
  const { searchState, jumpUtil } = store.useContainer();
  const { jumpBack } = jumpUtil;
  const { searchText, searchRes, setSearchText, search } = searchState;
  const onSearch = e => {
    if (!searchText) {
      Toast.info('输入搜索关键字！');
      return;
    }
    search(searchText);
  };
  return (
    <div className="movie-search-page">
      <SearchBar
        onBack={jumpBack}
        onSearch={onSearch}
        placeholder="输入你要搜索的名字"
        value={searchText}
        onChange={setSearchText}
      />
      <div style={{ padding: '8px' }}>
        <MovieList movies={searchRes} />
      </div>
    </div>
  );
};
export default MovieSearch;
