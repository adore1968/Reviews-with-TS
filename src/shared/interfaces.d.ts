export interface Review {
  id: number;
  image: string;
  job: string;
  name: string;
  text: string;
}

export interface AppProviderValue {
  review: Review;
  handleLeft: () => void;
  handleRight: () => void;
  handleSurprise: () => void;
}
