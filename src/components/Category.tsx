import styled from 'styled-components';
import profile_photo from "../assets/profile.jpeg";
interface CategoryProps {

}

const Category = (props: CategoryProps) => {

    let articleMarkup: any[] = [];

    for (let i = 0; i < 4; i++) {
        articleMarkup.push(<StyledArticle className="article">
            <div className="article-img"></div>
            <h4 className="article-title">Javascript intro - Learn JS #1</h4>
            <div className="article-footer">
                <div className="author-img">
                    <img src={profile_photo} alt="profile" />
                </div>
                <div className="author-name-date-time-wrapper">
                    <div className="author-name">Jay Kania </div>
                    <div className="article-date-duration-wrapper">
                        <div className="date">Jan 10, 2022</div><div className="duration">3 Min Read</div>
                    </div>
                </div>
            </div>
        </StyledArticle>)
    }

    return (
        <StyledCategory>
            <div className="category-articles-link-wrapper">
                <h2 className='category-title'>Category ---</h2>
                <div className='all-articles'>See All Articles {">"}</div>
            </div>
            <StyledArticlesContainer className="articles-container">
                {articleMarkup}
            </StyledArticlesContainer>
        </StyledCategory>
    )
}

const StyledCategory = styled.div`
    padding: 5rem 0;
    background-color: var(--primary-color);
    box-shadow: 0 0 0 100vmax var(--primary-color);
    clip-path: inset(0 -100vmax);
    .category-articles-link-wrapper {
        display: flex;
        align-items:center;
        justify-content: space-between;
        .all-articles {
            font-size: 1.2rem;
            font-weight: 500;
            :hover {
                cursor: pointer;
            }
        }
    }
`

const StyledArticlesContainer = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 4rem;
`;

const StyledArticle = styled.div`
    height: 400px;
    /* width: 250px; */
    padding: 15px;
    display: flex;
    flex-direction: column;
    transition: box-shadow 250ms ease;
    .article-img {
        height: 50%;
        background-color: #eaeaea;
    }

    .article-title {
        margin-top: 30px;
        font-size: 1.2rem;
        font-weight: 500;
    }

    .article-footer {
        margin-top: auto;
        display: flex;
        gap: 10px;
        .author-img {
            height: 50px;
            width: 50px;
            border-radius: 50%;
            background-color: #eaeaea;
            overflow: hidden;
            img {
                width: 100%;
            }
        }
        .author-name-date-time-wrapper {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            .author-name {
                font-weight: 500;
            }
            .article-date-duration-wrapper {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: auto;
                span {
                    font-weight: 500;
                }
            }
        }
    }

    :hover {
        cursor: pointer;
        box-shadow: 0px 0px 10px 2px #dfdfdf;
    }
`


export default Category