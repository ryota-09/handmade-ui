import { useAccordion } from "./Accordion.hooks";

const MultiAccordionPresenter = () => {
  const { setActive, toggleAccordion, isCollapse } = useAccordion();
  const dummy = "aaaaaaaaaaaaaaaaaaaaaaa";
  return (
    <>
      {dummy.length > 10 ? (
        <span className="accordion__section">
          <span className={`next ${setActive}`}>
            タイトル
          </span>
          <span className={`accordion__content ${setActive}`}>{dummy}</span>
          <span
            className={`accordion ${setActive}`}
            onClick={() => toggleAccordion(true)}
          >
            {isCollapse || "続きを読む"}
          </span>
          {isCollapse && (
            <span className="block" onClick={() => toggleAccordion(false)}>
              折りたたむ
            </span>
          )}
        </span>
      ) : (
        <span>{dummy}</span>
      )}
    </>
  );
};
export default MultiAccordionPresenter;
