import First from "./First";
import Man from "./Man";
import Tableware from "./Tableware";
import Women from "./Women";

const Main = ({ t }) => {
  return (
    <>
      <First />
      <Man t={t} />
      <Women t={t} />
      <Tableware t={t} />
    </>
  );
};

export default Main;
