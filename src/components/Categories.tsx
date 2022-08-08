import styled from "styled-components"
import Category from "./Category"

interface CategoriesProps {

}

const Categories = (props: CategoriesProps) => {
    return (
        <StyledCategories id="categories">
            <h2>Browse Categories</h2>
            <div className="categories">
                <div className="category">CSS</div>
                <div className="category">Javascript</div>
                <div className="category">Typescript</div>
                <div className="category">React JS</div>
            </div>
            <Category />
            <Category />
            <Category />
            <Category />
        </StyledCategories>
    )
}

const StyledCategories = styled.div`
    background-color: var(--background-color);
    padding: 3rem 3rem;
    h2 {
        font-weight: 500;
        text-align: center;
    }
    .categories {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        margin: 2rem 0;
        width: 100%;
        justify-content: center;
        .category {
            width: 200px;
            height: 200px;
            display: flex;
            align-items: center;
            background-color: var(--primary-color);
            justify-content: center;
            border-radius: 5px;
            box-shadow: 0px 0px 10px 2px #dfdfdf;
            font-size: 1.2rem;
            transition: background-color 300ms ease;
            :hover {
                background-color: var(--accent-color);
                color: white;
                cursor: pointer;
            }
        }
    }
    @media only screen and (max-width: 540px) {
        padding: 3rem 1rem;
        .categories {
            gap: 1rem;
            .category {
                flex-basis: 40%;
                height: 100px;
                white-space: nowrap;
                font-size: 1rem;
            }
        }
    }
    @media only screen and (min-width: 542px) and (max-width: 1114px) {
        .categories {
            flex-wrap: nowrap;
        }
    }
`

export default Categories