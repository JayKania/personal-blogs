import React from 'react'
import styled from 'styled-components'

type Props = {}

const Footer = (props: Props) => {
    return (
        <Styledfooter>
            <div className="footer-content">
                <div className="section-name">
                    <div className="name">Jay<span>.Blog</span></div>
                    <div className="social-media-links">
                        <div className="instagram"><a href="https://www.instagram.com/jay.kania/" target="_blank"><i className="fa fa-2x fa-brands fa-instagram"></i></a></div>
                        <div className="linkdein"><a href="https://www.linkedin.com/in/jay-kania/" target="_blank"><i className="fa fa-2x fa-brands fa-linkedin"></i></a></div>
                        <div className="linkdein"><a href="https://www.github.com/JayKania" target="_blank"><i className="fa fa-2x fa-brands fa-github"></i></a></div>
                    </div>
                </div>
                <div className="section-category">
                    <h4>CATEGORY</h4>
                    <div className="categories">
                        <div className="category"><a href="#">React JS</a></div>
                        <div className="category"><a href="#">Javascript</a></div>
                        <div className="category"><a href="#">Typescript</a></div>
                        <div className="category"><a href="#">CSS</a></div>
                    </div>
                </div>
                <div className="section-contact">
                    <h4>GET IN TOUCH</h4>
                    <div className="contacts">
                        <a href="tel:911234567890"><i className="fa fa-2x fa-solid fa-phone"></i><span>+91 9XXX-XXXX-XXX</span></a>
                        <a href="mailto:jaykania123@gmail.com"><i className="fa fa-2x fa-solid fa-envelope"></i><span>jaykania123@gmail.com</span></a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">&#169; 2022, Jay Kania</div>
        </Styledfooter>
    )
}

const Styledfooter = styled.footer`
   
    background-color: var(--footer-color);
    .footer-content {
        display: flex;
        align-items: flex-start;
        padding: 3rem 1rem;
        justify-content: space-around;
        border-bottom: 1px solid rgb(204, 204, 204, 0.7);
        flex-wrap: wrap;
        [class*="section-"] {
            
        }
        .section-name {
            .name {
                font-size: 2.5rem;
                font-weight: 400;
                span {
                    font-size: 1.5rem;
                    font-weight: 400;
                    color: var(--accent-color);
                }
            }
            .social-media-links {
                display: flex;
                margin-top: 1rem;
                gap: 15px;
                font-size: 0.7rem;
                a {
                    text-decoration: none;
                    color: black
                }
            }
        }
        .section-category {
            h4 {
                font-size: 1.5rem;
                font-weight: 500;
            }
            .categories {
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                .category {
                    font-size: 1.2rem;
                    a {
                        text-decoration: none;
                        color: black;
                    }
                }
            }
        }
        
        .section-contact {
            h4 {
                font-size: 1.5rem;
                font-weight: 500;
            }
            .contacts {
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                a {
                    text-decoration: none;
                    color: black;
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    i {
                        font-size: 1rem;
                    }
                }
            }
        }
    }

    .footer-copyright {
        text-align: center;
        padding:10px;
        font-weight: 300;
    }
    @media only screen and (max-width: 540px) {
        .footer-content {
            gap: 20px;
            justify-content: space-around;
            .section-name {
                flex-basis: 100%;
                width: fit-content;
                align-content: center;
                .name {
                    margin: 0 auto;
                    width: fit-content;
                    font-size: 1.5rem;
                    span {
                        font-size: 1rem;
                    }
                }
                .social-media-links  {
                    margin: 1rem auto;
                    width: fit-content;
                    font-size: 0.7rem;
                }
            }
            .section-category {
                margin-left:0;
                h4 {
                    font-size: 0.8rem;
                }
                .categories {
                    .category {
                        font-size: 0.8rem;
                    }
                }
            }
            .section-contact {
                text-align: right;
                h4 {
                    font-size: 0.8rem;
                }
                .contacts {
                    gap: 5px;
                    a {
                        font-size: 0.8rem;
                        justify-content: flex-end;
                        i {
                            font-size: 0.7rem;
                        }
                    }
                }
            }
        }
    }

`

export default Footer