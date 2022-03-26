import ReactHashtag from "@mdnm/react-hashtag";
import styled from "styled-components";

export default function AppTest() {
  return (
    <ComponentToTest>
      Trying to use a #react #hashtag
    </ComponentToTest>
  )
}

function ComponentToTest({children}) {
  return (
    <span>
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
    </span>
  )
}

const Hashtag = styled.span`
  font-size: 19px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
`;