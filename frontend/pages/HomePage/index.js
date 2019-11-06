import React from 'react';
import styled, { keyframes } from 'styled-components';
import Koji from '@withkoji/vcc';

const Container = styled.div`
    background-color: ${() => Koji.config.colors.backgroundColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${() => Koji.config.colors.textColor};
    text-align: center;
`;

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Content = styled.div`
  padding-bottom: 8px;
`;

const Link = styled.a`
  color: ${() => Koji.config.colors.linkColor};
`;

const Icon = styled.div`
    animation: ${AppLogoSpin} infinite 20s linear;
    height: 50vmin;
    width: 50vmin;
    pointer-events: none;
    background-image: url(${() => Koji.config.images.icon});
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 16px;
`;

class HomePage extends React.Component {
    render() {
        return (
            <Container>
                <Icon />
                <Content>{Koji.config.strings.content}</Content>
                <Link
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                    {Koji.config.strings.linkText}
                </Link>
            </Container>
        );
    }
}

export default HomePage;
