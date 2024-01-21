import { useContext, useState, createContext } from "react";

const LoadingContext = createContext();
const LoadingUpdateContext = createContext();

export const useLoading = () => useContext(LoadingContext);
export const useLoadingUpdate = () => useContext(LoadingUpdateContext);

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const toggleLoading = (boolean) => setIsLoading(boolean);

  return (
    <LoadingContext.Provider value={isLoading}>
      <LoadingUpdateContext.Provider value={toggleLoading}>
        {children}
      </LoadingUpdateContext.Provider>
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;