import { TopicDiv, ContainerFooter, Content } from "./styled";

export default function Footer() {
  return (
    <ContainerFooter>
      <Content>
        <TopicDiv>About</TopicDiv>
        <TopicDiv>Help</TopicDiv>
        <TopicDiv>Contact</TopicDiv>
      </Content>
    </ContainerFooter>
  );
}
