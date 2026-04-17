export interface Product {
  id: number;
  slug: string;
  name: string;
  price: string;
  shortDescription: string;
  image: string;
  featured?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface DifferenceCard {
  icon: string;
  title: string;
  description: string;
}
