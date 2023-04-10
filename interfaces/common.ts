export interface LinkProps {
  text: string;
  url: string;
  target?: string;
}
  
export interface ImageProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  className?: string;
}
  