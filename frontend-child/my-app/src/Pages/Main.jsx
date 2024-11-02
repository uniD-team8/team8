import React, { useState } from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width: 100vw;
    height: 97vh; /* Full viewport height */
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
    overflow-y: auto; /* Allows scrolling if content exceeds viewport height */
    padding-bottom: 60px; /* Space for BottomBar */
`;

const Card1 = styled.div`
    background: #F5F5F5;
    width: 80vw;
    height: 25vh;
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
        font-size: 4.5vw;
        text-align: center;
        width: 100%;
    }
    
    .card_content {
        color: #1D853F;
        font-weight: 500;
        font-size: 3.5vw;
        margin: auto;
        text-align: center;
    }

    .bottom_section {
        position: absolute;
        bottom: 20px;
        right: 20px;
        display: flex;
        align-items: center;
    }

    .call_button {
        background-color: #1D853F;
        color: white;
        font-weight: 600;
        font-size: 3vw;
        border: none;
        border-radius: 10px;
        padding: 10px 15px;
        margin-right: 10px;
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
            background-color: #145a28;
        }
    }

    img {
        width: 40px;
        height: 40px;
    }
`;

const Card2 = styled.div`
    background: #F5F5F5;
    width: 80vw;
    height: 35vh;
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
        font-size: 4.5vw;
        text-align: center;
        width: 100%;
        margin-bottom: 20px;
    }

    .photo_upload {
        background: #E0E0E0;
        width: 100%;
        height: 60%;
        margin-bottom: 40px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    .text_area_section {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 10px;
    }

    .text_area {
        width: 70%;
        height: 20px;
        border-radius: 5px;
        border: 1px solid #000000;
        padding: 5px;
        font-size: 3vw;
    }

    .submit_button {
        background-color: #1D853F;
        width: 23%;
        color: white;
        font-weight: 600;
        font-size: 3vw;
        border: none;
        border-radius: 5px;
        padding: 8px 15px;
        margin-left: 10px;
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
            background-color: #145a28;
        }
    }
`;

const HiddenInput = styled.input`
    display: none;
`;

const BottomBar = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 45px;
    width: 100vw;
    background-color: #F5F5F5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 22px 0;
    box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
    border-top: 1px solid #E0E0E0;

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

const ImageUpload = () => {
    const [uploadImgUrl, setUploadImgUrl] = useState("");

    const onchangeImageUpload = (e) => {
        const { files } = e.target;
        const uploadFile = files[0];
        if (uploadFile) {
            const reader = new FileReader();
            reader.readAsDataURL(uploadFile);
            reader.onloadend = () => {
                setUploadImgUrl(reader.result);
            };
        }
    };

    const handleUploadClick = () => {
        document.getElementById("fileInput").click();
    };

    return (
        <div 
            className="photo_upload" 
            style={{ 
                position: 'relative', 
                cursor: 'pointer', 
                backgroundColor: '#E2E2E2', 
                height: '60%', 
                borderRadius: '10px' 
            }} 
            onClick={handleUploadClick}
        >
            {uploadImgUrl ? (
                <img
                    src={uploadImgUrl}
                    alt="Uploaded"
                    style={{
                        width: '80%',
                        height: '80%',
                        objectFit: 'contain',
                        borderRadius: '10px',
                        justifyContent: 'flex-start',
                        alignContent: "center",
                        marginTop: '0px'
                    }}
                />
            ) : (
                <span style={{ fontSize: '3.5vw', color: '#1D853F', fontWeight: '600' }}>
                    사진 첨부하기
                </span>
            )}
            <HiddenInput
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={onchangeImageUpload}
            />
        </div>
    );
};

const Main = () => {
    const navigate = useNavigate();

    const goToData = () => {
        navigate('/data');
    };

    const addPoint = () => {
        // Your logic to add points
    };

    return (
        <Wrapper>
            <Content>
                <Title />
                <Card1>
                    <div className="card_title">효도 전화 챌린지</div>
                    <div className="card_content">부모님께 전화 해보세요!</div>
                    <div className="bottom_section">
                        <button className="call_button" onClick={addPoint}>전화걸기</button>
                        <img src={require("../Images/call.png")} alt="Call Icon" />
                    </div>
                </Card1>
                <Card2>
                    <div className="card_title">부모님과 일상 공유하기</div>
                    <ImageUpload />
                    <div className="text_area_section">
                        <input type="text" className="text_area" placeholder="한마디 남기기" />
                        <button className="submit_button">완료</button>
                    </div>
                </Card2>
            </Content>
            <BottomBar>
                <button className="nav_button">Home</button>
                <button className="nav_button" onClick={goToData}>Data</button>
            </BottomBar>
        </Wrapper>
    );
};

export default Main;