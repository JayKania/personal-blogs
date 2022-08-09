import styled from 'styled-components';
import mailbox from "../assets/mailbox.png";

type Props = {}

const Subscribe = (props: Props) => {
    return (
        <StyledSubscribeSection className='subscribe-section'>
            <div className="mailbox">
                <img src={mailbox} alt="mailbox" />
            </div>
            <h4>Subscribe For The Latest Updates</h4>
            <p>Subscribe to the newsletter and never miss an update.</p>
            <form className="subscription-from" onSubmit={(event: any) => { event.preventDefault() }}>
                <input type="email" placeholder='Enter your email here ...' />
                <button>Subscribe</button>
            </form>
        </StyledSubscribeSection>
    )
}

const StyledSubscribeSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
    border-radius: 10px;
    background-color: var(--background-color);
    width: 70%;
    margin: 2rem auto 5rem auto;
    .mailbox {
        width:90px;
        height: 90px;
        background-color: white;
        border-radius: 50%;
        padding: 20px 10px 10px 10px;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    h4 {
        margin-top: 2rem;
        font-size: 2rem;
    }

    p {
        margin-top: 0.7rem;
        font-weight: 100;
        font-size: 1.2rem;
    }
    form {
        margin-top: 2rem;
        display: flex;
        width: 70%;
        gap: 1rem;
        input {
            outline: none;
            border: none;
            padding: 1rem 2rem;
            font-size: 1rem;
            background-color: var(--primary-color);
            border-radius: 5px;
            width: 100%;
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
    @media only screen and (max-width: 540px) {
        padding: 1rem;
        padding-bottom: 2rem;
        width: 100%;
        h4 {
            font-size: 1.3rem;
            width: fit-content
        }
        p {
            font-size: 0.875rem;
        }
        form {
            width: 100%;
            input {
                padding: 0.5rem 1rem;
                font-size: 1rem;
                width: 100%;
            }
            button {
                padding: 0.5rem 1rem;
                font-size: 1rem;
            }
        }
    }
`

export default Subscribe