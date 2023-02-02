import React, { useState, useEffect } from 'react';
import { ITEM_API_URL, BASE_URL } from '../../utilities/constants';
import {
  StoryCardContainer,
  StoryCardLink,
  StoryCardTitle,
  StoryCardSubtitle,
  SkeletonLine,
} from './styles';
import {
  Story,
  StoryCardProps,
} from '../../utilities/interface';

const StoryCard = ({
  id,
  setError,
}: StoryCardProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [cardData, setCardData] = useState<Story|undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${ITEM_API_URL}${id}.json?print=pretty`);
        const storyItem = await res.json();

        setCardData({
          id: storyItem.id,
          title: storyItem.title,
          date: storyItem.time,
          url: storyItem.url,
          poster: storyItem.by,
        });

        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(e.message);
      }
    };
  
    fetchData();
  }, [id]);

  const constructDate = (inputDate: number) => {
    const unixTimestampMilliseconds = inputDate * 1000;
    const dateObject = new Date(unixTimestampMilliseconds);
    const constructedDate = `${dateObject.getFullYear()} - ${dateObject.getMonth()} - ${dateObject.getDate()}`;
    return constructedDate;
  }

  return (
    <>
      { loading
        ? (<StoryCardContainer data-testid="story-card">
            <SkeletonLine/>
            <SkeletonLine/>
          </StoryCardContainer>)
        : (<StoryCardLink data-testid="story-link" href={cardData?.url ?? `${BASE_URL}${id}`} target="_blank">
            <StoryCardContainer key={cardData?.id} data-testid="story-card">
              <StoryCardTitle data-testid="story-title">{cardData?.title}</StoryCardTitle>
              <StoryCardSubtitle data-testid="story-subtitle">By: {cardData?.poster}, {constructDate(cardData?.date)}</StoryCardSubtitle>
            </StoryCardContainer>
          </StoryCardLink>)
      }
    </>
  );
};

export default StoryCard;