import { useState } from "react";
import { createContext } from "react";

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [arrayComment, setArrayComment] = useState([]);

  return (
    <CommentContext.Provider value={{ arrayComment, setArrayComment }}>
      {children}
    </CommentContext.Provider>
  );
};
export default CommentContext;
