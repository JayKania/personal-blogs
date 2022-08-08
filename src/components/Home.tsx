import styled from 'styled-components'
import coding_img from "../assets/illustration.jpg"
interface HomeProps {

}

const Home = (props: HomeProps) => {
    return (
        <StyledHome id="home">
            <div className="title-container">
                <h2>Hi, I'm Jay Kania</h2>
                <h2>Front End Dev</h2>
                <p>On this blog I share tips and tricks, frameworks, projects, tutorials, etc <br /> Make sure you subscribe to get the latest details.</p>
                <form className="subscription-from" onSubmit={(event: any) => { event.preventDefault() }}>
                    <input type="email" placeholder='Enter your email here ...' />
                    <button>Subscribe</button>
                </form>
            </div>
            {window.innerWidth >= 1000 ? <div className="image-container">
                <img src={coding_img} alt="" />
            </div> : null}
        </StyledHome>
    )
}

const StyledHome = styled.div`
    display: flex;
    background-color: var(--background-color);
    .title-container {
        flex-basis: 50%;
        padding: 2rem 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
            font-size: 3rem;
        }
        p{
            border-left: 2px solid black;
            white-space: nowrap;
            padding-left: 1rem;
            margin-top: 1rem;
            font-size: 1.2rem;
            font-weight: 100;
            color: rgb(0,0,0,0.5)
        }

        form {
            margin-top: 2rem;
            display: flex;
            width: 100%;
            gap: 1rem;
            input {
                outline: none;
                border: 1px solid rgb(204, 204, 204, 0.5);
                padding: 1rem 2rem;
                font-size: 1rem;
                background-color: white;
                border-radius: 5px;
                width: 80%;
                ::placeholder {
                    font-weight: 100;
                }
            }
            button {
                background-color: var(--accent-color);
                outline: none;
                border: none;
                border-radius: 5px;
                padding: 1rem;
                color: white;
                font-weight: 300;
                font-size: 1.2rem;
                :hover {
                    cursor: pointer;
                }
            }
        }
    }
    .image-container {
        flex-basis: 50%;
        height: max-content;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    @media only screen and (max-width: 540px) {
        .title-container {
            padding: 1rem 0rem 1rem 1rem;
            h2 {
                font-size: 2rem;
                width: fit-content
            }
            p {
                font-size: 0.6rem;
                padding: 0.5rem;
            }
            form {
                input {
                    padding: 0.5rem 1rem;
                    font-size: 0.7rem;
                    width: 50%;
                }
                button {
                    padding: 0.5rem 1rem;
                    font-size: 0.7rem;
                }
            }
        }
    }
`

export default Home