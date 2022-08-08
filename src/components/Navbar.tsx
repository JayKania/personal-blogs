import styled from "styled-components";

interface NavProps {

}

const Navbar = (props: NavProps) => {
    return (
        <StyledNavbar>
            <StyledNavTitle className="nav-title">Jay<span>.Blog</span></StyledNavTitle>
            <StyledNavLinks className="nav-links">
                <a href="#home" className="home">Home</a>
                <a href="#categories" className="categories">Catogories</a>
                <a href="#about" className="about">About Me</a>
            </StyledNavLinks>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1rem 3rem;
    font-weight: 500;
    align-items: center;

    @media only screen and (max-width: 540px) {
        padding: 1rem;
        width: 100%;
    }
`

const StyledNavTitle = styled.div`
    font-size: 2rem;
    span {
        font-size: 1.3rem;
        color: var(--accent-color)
    }
    @media only screen and (max-width: 540px) {
        font-size: 1rem;
        span {
            font-size: 0.7rem;
        }
    }
`;

const StyledNavLinks = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 1.2rem;
    a {
        text-decoration: none;
        color: black;
    }
    @media only screen and (max-width: 540px) {
        font-size: 0.7rem;
    }
`


export default Navbar