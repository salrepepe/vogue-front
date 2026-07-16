import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ScreenTransition = ({ transition }) => {
  return (
    <AnimatePresence>
      {transition && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1],
          }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#111",
            zIndex: 99999,
          }}
        />
      )}
    </AnimatePresence>
  );
};

export default ScreenTransition;
