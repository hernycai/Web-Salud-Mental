export interface DocumentSection {
  id: string;
  number?: string;
  title: string;
  subtitle: string;
  category: 'Historia Global' | 'Historia Argentina' | 'Epidemiología' | 'Trastornos Clínicos';
  readTime: string;
  shortSummary: string;
  keyStats: { label: string; value: string; detail?: string }[];
  tags: string[];
  content: {
    executiveSummary: string;
    sections: {
      id: string;
      heading: string;
      subheading?: string;
      paragraphs: string[];
      listItems?: string[];
      table?: {
        headers: string[];
        rows: string[][];
        caption?: string;
      };
      callout?: {
        type: 'info' | 'warning' | 'quote' | 'highlight';
        title?: string;
        text: string;
        author?: string;
      };
    }[];
    conclusions?: string[];
    citations?: string[];
  };
}

export interface CommentStory {
  id: string;
  authorAlias: string;
  conditionCategory: string;
  title: string;
  story: string;
  timestamp: string;
  likes: number;
  tags: string[];
  isVerifiedSafe: boolean;
}

export interface EmergencyContact {
  id: string;
  country: string;
  name: string;
  number: string;
  description: string;
  available: string;
  type: 'suicide_prevention' | 'mental_health' | 'substances' | 'youth' | 'emergency';
}
