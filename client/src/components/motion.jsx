import { motion } from "framer-motion";

export const MotionLeft = ({ index = 1, children }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};
