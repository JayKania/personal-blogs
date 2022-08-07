import styled from 'styled-components'
import coding_img from "../assets/illustration.jpg"
interface HomeProps {

}

const Home = (props: HomeProps) => {
    return (
        <StyledHome>
            <div className="title-container">
                <h2>Hi, I'm Jay Kania</h2>
                <h2>Front End Dev</h2>
                <p>On this blog I share tips and tricks, frameworks, projects, tutorials, etc <br /> Make sure you subscribe to get the latest details.</p>
                <div className="input-container">
                    <input type="email" placeholder='Enter your email here ...' />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="image-container">
                <img src={coding_img} alt="" />
            </div>
        </StyledHome>
    )
}

const StyledHome = styled.div`
    display: flex;
    background-color: rgb(250, 251, 253);
    .title-container {
        flex-basis: 50%;
        padding: 0rem 3rem;
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

        .input-container {
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
`

export default Home