export interface ICarouselContext {
  $impilicit: string;
  controler: {
    next: () => void;
    prev: () => void;
  };
}
