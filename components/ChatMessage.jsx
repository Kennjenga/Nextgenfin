import React from "react";
import { cn } from "@/lib/utils";

const ChatMessage = ({ message, isUser }) => {
  return (
    <div
      className={cn(
        "flex w-full mb-4",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3 text-sm",
          isUser
            ? "bg-primary text-primary-foreground rounded-tr-none"
            : "bg-muted rounded-tl-none"
        )}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
