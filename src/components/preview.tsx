import { useState, type ComponentProps } from "react";
import { cn } from "tailwind-variants";

const Preview = ({
  src,
  alt,
  className,
  ...props
}: ComponentProps<"div"> & { src: string; alt?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("relative", className)} {...props}>
      <img
        className="w-72.5 cursor-zoom-in sm:w-77.5 md:w-155 lg:w-212.5"
        src={src}
        alt={alt}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <img className="max-h-full max-w-full object-contain" src={src} alt={alt} />
        </div>
      )}
    </div>
  );
};

export { Preview };
