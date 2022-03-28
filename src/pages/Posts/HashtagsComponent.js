import ReactHashtag from "@mdnm/react-hashtag";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HashtagsComponent({children}) {
  const navigate = useNavigate();

  function navigateToHashtagPage(e) {
    const hashtagName = e.target.innerText.split("#")[1];
    navigate(`/hashtags/${hashtagName}`)
  }

  return (
    <ReactHashtag 
      renderHashtag={(hashtagValue) => (
        <Hashtag
          onClick={navigateToHashtagPage}
        >
          {hashtagValue}
        </Hashtag>
      )}
    >
      {children}
    </ReactHashtag>
)
}

const Hashtag = styled.strong`
  font-size: 19px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
`;