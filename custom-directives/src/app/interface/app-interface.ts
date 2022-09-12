export interface ICarouselContext {
  $implicit: any;
  controller: {
    next: () => void;
    prev: () => void;
  };
}
