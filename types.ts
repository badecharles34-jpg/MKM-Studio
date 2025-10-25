export interface Testimonial {
  name: string;
  channel: string;
  avatarUrl: string;
  quote: string;
}

export interface PortfolioItem {
  id: number;
  category: 'Gaming' | 'Éducation' | 'Finance' | 'Divertissement';
  imageUrl: string;
  title: string;
  videoUrl?: string;
}