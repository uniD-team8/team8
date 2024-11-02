import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Wrapper = styled.div`
    width: 100vw;
    height: 10vh; /* Full viewport height */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
`;

const Content = styled.div`
    flex: 1; /* Takes up remaining space */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-bottom: 60px; /* Space for BottomBar */
`;

const BottomBar = styled.div`
    margin-bottom: 0px;
    width: 100vw;
    background-color: #F5F5F5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 22px 0;
    box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
    border-top: 1px solid #E0E0E0;
    margin-top: 100px;

    .nav_button {
        background: none;
        color: #1D853F;
        font-size: 5vw;
        font-weight: 600;
        border: none;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
            color: #145a28;
        }
    }
`;

const Card1 = styled.div`
    margin-right:10px;
    background: #F5F5F5;
    width: 90vw; /* Make sure card is a reasonable width */
    margin-top: 10px;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    padding: 20px;
    position: relative;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    box-sizing: border-box; /* Ensure padding does not affect width calculation */

    .card_title {
        color: #000;
        font-weight: 700;
        font-size: 5vw;
        width: 100%;
        text-align: center; /* Center title text */
        margin: 10px 0; /* Centered margins */
    }
    
    .card_content {
        color: #1D853F;
        font-weight: 900;
        font-size: 7vw;
        margin: auto;
        text-align: center;
    }

    .bottom_section {
        font-size: 4vw;
        font-weight: 700;
        position: absolute;
        bottom: 20px;
        right: 20px;
        display: flex;
        align-items: center;
    }
`;

const Card2 = styled.div`
    margin-right:10px;
    background: #F5F5F5;
    width: 80vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    padding: 20px;
    position: relative;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

    .card_title {
        color: #1D853F;
        font-weight: 700;
        font-size: 5vw;
        text-align: center;
        width: 100%;
        margin-bottom: 20px;
    }

    .point {
        color: #1D853F;
        font-weight: 700;
        font-size: 20vw;
        margin: auto;
        text-align: center;
    }
    .bottom_section {
        font-size: 4vw;
        font-weight: 700;
        position: absolute;
        bottom: 20px;
        right: 20px;
        display: flex;
        align-items: center;
    }
}
`;

const Data = () => {
    const navigate = useNavigate();
    const [keywords, setKeywords] = useState([]); // State for storing keywords
    const [point, setPoint] = useState(0);

    const goToMain = () => {
        navigate('/');
    };

    const fetchKeywordData = () => {
        // Here you can replace this with a call to your backend
        const dummyKeywords = ["행복", "안도"]; // Dummy data array
        setKeywords(dummyKeywords);
    };

    // Call the fetch function when the component mounts
    React.useEffect(() => {
        fetchKeywordData();
        fetchPoint();
    }, []);

    const fetchPoint = () => {
        const dummypoint = 6;
        setPoint(dummypoint);
    }

    return (
        <Wrapper>
            <Content>
                <Title />
                <Card1>
                    <div className="card_title">최근 부모님 께서는</div>
                    <div className="card_content">
                        {keywords.join(", ")} {/* Joining keywords with a comma for display */}
                    </div>
                    <div className="bottom_section">
                        를 느끼고 있어요
                    </div>
                </Card1>
                <Card2>
                    <div className="card_title">포인트 확인하기</div>
                    <div className="point">{point}</div>
                    <div className="bottom_section">
                        포인트 보유중
                    </div>
                </Card2>
                <BottomBar>
                    <button className="nav_button" onClick={goToMain}>Home</button>
                    <button className="nav_button">Data</button>
                </BottomBar>

            </Content>
        </Wrapper>
    );
};

export default Data;
