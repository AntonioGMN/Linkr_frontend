import ReactHashtag from "@mdnm/react-hashtag";
import styled from "styled-components";

export default function HashtagsComponent({children}) {
  return (
    <ReactHashtag 
      renderHashtag={(hashtagValue) => (
        <Hashtag
          onClick={(e) => console.log(e.target.innerText)}
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