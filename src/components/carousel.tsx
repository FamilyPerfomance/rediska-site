import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, type ComponentProps } from "react";
import { cn } from "tailwind-variants";

const Carousel = ({ children, ...props }: ComponentProps<"div">) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const checkOverflow = useCallback(() => {
    if (!emblaApi) return;

    const fitsPerfectlyY = !emblaApi.canScrollNext() && !emblaApi.canScrollPrev();

    emblaApi.reInit({ active: !fitsPerfectlyY });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("init", checkOverflow);
    emblaApi.on("resize", checkOverflow);
    checkOverflow();

    return () => {
      emblaApi.off("init", checkOverflow);
      emblaApi.off("resize", checkOverflow);
    };
  }, [emblaApi, checkOverflow]);

  return (
    <div {...props}>
      <div ref={emblaRef}>{children}</div>
    </div>
  );
};
const CarouselContainer = ({ className, children, ...props }: ComponentProps<"div">) => (
  <div className={cn("flex gap-2.5 md:gap-5 lg:gap-7.5", className)} {...props}>
    {children}
  </div>
);

export { Carousel, CarouselContainer };
