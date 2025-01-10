import { createContext, useContext, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "./ui/dialog";

const DialogContext = createContext();

export function DialogProvider({ children }) {
  const [dialogState, setDialogState] = useState({
    isOpen: false,
    title: "",
    description: "",
    content: null,
  });

  const openDialog = ({ title, content, description }) => {
    setDialogState({
      isOpen: true,
      title,
      description,
      content,
    });
  };

  const closeDialog = () => {
    setDialogState({
      isOpen: false,
      title: "",
      description: "",
      content: null,
    });
  };

  return (
    <DialogContext.Provider value={{ dialogState, openDialog, closeDialog }}>
      {children}
      <Dialog open={dialogState.isOpen} onOpenChange={closeDialog}>
        <DialogContent className="p-3 sm:p-4 lg:p-5 gap-2">
          {dialogState.title && (
            <DialogHeader>
              <DialogTitle className="text-slate-600 font-bold text-base md:text-lg">
                {" "}
                {dialogState.title}
              </DialogTitle>
              {dialogState.description && (
                <DialogDescription className="text-slate-500 font-medium text-xs sm:text-sm md:text-base ">
                  {dialogState.description}
                </DialogDescription>
              )}
            </DialogHeader>
          )}

          {dialogState.content}
        </DialogContent>
      </Dialog>
    </DialogContext.Provider>
  );
}

export function useDialog() {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error("Use dialog hook must be used within a DialogProvider");
  }
  return context;
}
