import { useState, useCallback } from "react";

const useToolTip = () => {
   const [visible, setVisible] = useState(false);

   const handleVisible = useCallback(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 3000);
   }, []);

   return [visible, handleVisible];
};

export default useToolTip;
