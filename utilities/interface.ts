export interface Story {
  id: number;
  title: string;
  url: string;
  date: number;
  poster: string;
};

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export interface StoryCardProps {
  id: number;
  setError: (errorMessage: string) => void;
};

export interface ErrorComponentProps {
  message: string;
};
