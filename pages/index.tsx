import React, { useRef, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { PageContainer, PageTitle } from '../styles/globalStyledComponents';
import StoryCard from '../components/StoryCard';
import Pagination from '../components/Pagination';
import ErrorComponent from '../components/ErrorComponent';
import { TOP_STORIES_API_URL, PAGE_SIZE } from '../utilities/constants';

const TopStories = () => {
  const [storyIds, setStoryIds] = useState<number[]>([]);
  const [viewedWindow, setViewedWindow] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [errorEvent, setError] = useState<string|undefined>(undefined);
  const firstUpdate = useRef<boolean>(true);

  useEffect(() => {
    const fetchData = async (page: number, pageSize: number) => {
      try {
        const res = await fetch(TOP_STORIES_API_URL);
        const storyIdRes = await res.json();
        setStoryIds(storyIdRes);

        const slicedWindow = storyIdRes.slice((page - 1) * pageSize, page * pageSize);
        setViewedWindow(slicedWindow);
      } catch (e) {
        setError(e.message);
      }
    };

    fetchData(currentPage, PAGE_SIZE);
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    window.scrollTo(0, 0);
    const slicedWindow = storyIds.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
    setViewedWindow(slicedWindow);
  }, [currentPage]);

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        { errorEvent
           ? <ErrorComponent message={errorEvent} />
           : (<>
              <PageTitle data-testid="page-title">
                HackerNews Top 500 Stories
              </PageTitle>
              {/* Story List Component */}
              {viewedWindow.map(story => (<StoryCard id={story} key={story} setError={setError}/>))}
              {/* Pagination Component */}
              { storyIds.length > PAGE_SIZE && (
              <Pagination currentPage={currentPage} totalPages={(storyIds?.length)/PAGE_SIZE} onPageChange={setCurrentPage}/>)}
           </>)
        }
      </PageContainer>
    </ThemeProvider>
  );
};

export default TopStories;