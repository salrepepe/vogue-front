import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

const LanguageSwitcher = ({ setTransition }) => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const next =
      i18n.language === "ru" ? "en" : i18n.language === "en" ? "kg" : "ru";

    setTransition(true);

    setTimeout(async () => {
      await i18n.changeLanguage(next);
    }, 500);

    setTimeout(() => {
      setTransition(false);
    }, 1100);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.span
        style={{ cursor: "pointer" }}
        key={i18n.language}
        onClick={changeLanguage}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.2 }}
      >
        {i18n.language.toUpperCase()}
      </motion.span>
    </AnimatePresence>
  );
};

export default LanguageSwitcher;
