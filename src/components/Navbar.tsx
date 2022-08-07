import styled from "styled-components";

interface NavProps {

}

const Navbar = (props: NavProps) => {
    return (
        <StyledNavbar>
            <StyledNavTitle className="nav-title">Jay<span>.Blog</span></StyledNavTitle>
            <StyledNavLinks className="nav-links">
                <a href="#home" className="home">Home</a>
                <a href="#category" className="Category">Category</a>
                <a href="#about" className="about">About Me</a>
            </StyledNavLinks>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1rem 3rem;
    box-shadow: 1px 1px 10px 2px rgb(204, 204, 204, 0.4);
    font-weight: 500;
    align-items: center;
`

const StyledNavTitle = styled.div`
    font-size: 2rem;
    span {
        font-size: 1.3rem;
        color: var(--accent-color)
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
`

export default Navbar