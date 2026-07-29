import { createContext, useContext, useState, type ReactNode } from "react";

type PopoverView = "closed" | "contact" | "thank-you";

type PopoverContextValue = {
  view: PopoverView;
  openContact: () => void;
  showThankYou: () => void;
  close: () => void;
};

const PopoverContext = createContext<PopoverContextValue | null>(null);

const PopoverProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<PopoverView>("closed");

  return (
    <PopoverContext.Provider
      value={{
        view,
        openContact: () => setView("contact"),
        showThankYou: () => setView("thank-you"),
        close: () => setView("closed"),
      }}
    >
      {children}
    </PopoverContext.Provider>
  );
};

const usePopover = () => {
  const context = useContext(PopoverContext);
  if (!context) throw new Error("usePopover must be used within a PopoverProvider");
  return context;
};

export { PopoverProvider, usePopover };
