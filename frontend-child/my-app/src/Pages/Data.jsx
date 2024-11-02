import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Wrapper = styled.div`
    overflow: hidden;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding-bottom: 60px; /* Space for BottomBar */
`;

const BottomBar = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 45px;
    margin-bottom: 0px;
    width: 100vw;
    background-color: #F5F5F5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 22px 0;
    box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
    border-top: 1px solid #E0E0E0;
    margin-top: 120px;

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
    #nav_data {
        color: #145a28;
    }
`;

const Card1 = styled.div`
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
        font-weight: 800;
        font-size: 8vw;
        margin: auto;
        margin-top: 50px;
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
        color: #000;
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
        margin-top: 20px;
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
    const [keywords, setKeywords] = useState([]);
    const [point, setPoint] = useState(0);

    const goToMain = () => {
        navigate('/');
    };

    const fetchKeywordData = async () => {
        // Here you can replace this with a call to your backend
        try {
            const response = await fetch("ENDPOINT");
            const data = await response.json();
    
            const keywordsEntries = Object.keys(data.keywords).slice(0, 2);
            setKeywords(keywordsEntries);
    
        }
        catch (error) {
            console.log("Failed to fetch keywords: ", error);
            const dummyKeywords = ["행복", "안도"]; // Dummy data array
            setKeywords(dummyKeywords);    
        }

    };

    React.useEffect(() => {
        fetchKeywordData();
        fetchPoint();
    }, []);

    const fetchPoint = async () => {
        try {
            const response = await fetch("ENDPOINT")
            const data = await response.json();

            const PointEntries = data.points
            setKeywords(PointEntries);
        }
        catch(error) {
            console.log("Error: ", error);
            const dummypoint = 100;
            setPoint(dummypoint);    
        }
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
                    <button className="nav_button" id="nav_home" onClick={goToMain}>Home</button>
                    <button className="nav_button" id="nav_data">Data</button>
                </BottomBar>

            </Content>
        </Wrapper>
    );
};

export default Data;