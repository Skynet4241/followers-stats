import ErrorImage from "../../../images/error-page.png";
import sprite from "../../../images/sprite.svg";
import {
  ErrorPageButton,
  ErrorPageImage,
  ErrorPageText,
  ErrorPageTitle,
  ErrorPageWrap,
} from "./Error.styled";

export const Error = () => {
  return (
    <>
      <ErrorPageWrap>
        <ErrorPageButton to="/">
          <svg className="icon-arrow-left" width="24px" height="24px">
            <use href={`${sprite}#icon-arrow-left`}></use>
          </svg>
          Back to home
        </ErrorPageButton>
        <ErrorPageTitle>Ooops...</ErrorPageTitle>
        <ErrorPageText>this page does not exist</ErrorPageText>
        <ErrorPageImage src={ErrorImage} alt="Error-image" />
      </ErrorPageWrap>
    </>
  );
};
