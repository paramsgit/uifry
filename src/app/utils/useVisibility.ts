import { useState, useEffect, useRef } from "react";
import useOnScreen from "./useOnScreen";

function useVisibility() {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (isVisible && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [isVisible, hasBeenVisible]);

  return [ref, hasBeenVisible] as const;
}

export default useVisibility;
