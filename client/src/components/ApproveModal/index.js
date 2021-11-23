import React from 'react';
import { useSelector } from 'react-redux';
import { Body, Button, Container, Content, Footer, Title } from './styled';

const ApproveModal = () => {
  const { isShown, title, description, actions } = useSelector(
    (state) => state.ui
  );
  if (isShown)
    return (
      <Container>
        <Content>
          <Title>{title}</Title>
          <Body>{description}</Body>
          <Footer>
            {actions.map((action) => (
              <Button color={action.color} onClick={action.onClick}>
                {action.text}
              </Button>
            ))}
          </Footer>
        </Content>
      </Container>
    );
  return null;
};

export default ApproveModal;
