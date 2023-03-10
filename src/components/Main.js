import React from "react";
import styled, {keyframes} from "styled-components";
import logo from "./img/npcLogo.png";
import line from "./img/Vector 1.png"
import "./css/useScrollFadeIn.css";
import logoAni from"./img/logo_ani.webp";

const ImageDiv = styled.img`
@media (max-width: 749px)
  {
    margin: auto;
    width: 100%;
    height: 200px; 
    margin-top: 282px;
  }
  @media (min-width: 750px) and (max-width: 1199px)
  {
    width: 100%;
    height: 300px;
    margin-top: 417px;
  }
  @media (min-width: 1200px) and (max-width: 1920px)
  {
    width: 100%;
    height: 450px;
    margin-top: 289px;
  }
`;
const TextDiv = styled.div`
  @media (max-width: 749px)
  { 
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 31px;
    margin-top: 824px;
  }
  @media (min-width: 750px) and (max-width: 1199px)
  {
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    margin-top: 1594px;
  }
  @media (min-width: 1200px) and (max-width: 1920px)
  {
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    margin-top: 858px;
  }
`;
const EngDiv = styled.div`
  @media (max-width: 749px)
  { 
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-size: 15px;
  }
  @media (min-width: 750px) and (max-width: 1199px)
  {
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-size: 25px;
  }
  @media (min-width: 1200px)and (max-width: 1920px)
  {
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-size: 20px;
  }
`;
const UniDiv = styled.div`
  @media (max-width: 749px)
  { 
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-size: 30px;
    font-weight: 600;
    margin-top: 389px;
    text-align:left;
    margin-left: 32px;
  }
  @media (min-width: 750px) and (max-width: 1199px)
  {
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-size: 50px;
    margin-top: 630px;
    margin-left: 35px;
    text-align:left;
    margin-left: 56px;
  }
  @media (min-width: 1200px) and (max-width: 1920px)
  {
    color: white;
    font-family: "Noto Sans";
    font-style: normal;
    font-size: 50px;
    margin-top: 391px;
    text-align:left;
    margin-left: 35px;
  }
`;
const Name = styled.div`
@media (max-width: 749px)
{ 
  color: white;
  font-family: "Noto Sans";
  font-style: normal;
  font-size: 25px;
  font-weight: 600;
  text-align:left;
  margin-left: 32px;
}
@media (min-width: 750px) and (max-width: 1199px)
{
  color: white;
  font-family: "Noto Sans";
  font-style: normal;
  font-size: 45px;
  margin-left: 35px;
  text-align:left;
  margin-left: 56px;
}
@media (min-width: 1200px) and (max-width: 1920px)
{
  color: white;
  font-family: "Noto Sans";
  font-style: normal;
  font-size: 45px;
  text-align:left;
  margin-left: 35px;
}
`;
const CircleDiv = styled.div`
@media (max-width: 749px){
  display: inline-block;
  width: 166.95px;
  height:  116.95px;
  background: #1E1E1E;
  border: 1px solid black;
  border-radius: 100px;
  text-align: center;
  line-height: 30px;
  margin-right: 10px;
  font-family: Noto Sans;
  font-size: 16px;
  color: #B4B4B4;
  text-align:center;
  padding-top: 40px;
  margin-top: 50px;
}
@media(min-width: 750px) and (max-width: 1199px){
  display: inline-block;
  width: 166.95px;
  height:  116.95px;
  background: #1E1E1E;
  border: 1px solid black;
  border-radius: 100px;
  text-align: center;
  line-height: 25px;
  margin-right: 10px;
  font-family: Noto Sans;
  font-size: 18px;
  color: #B4B4B4;
  text-align:center;
  padding-top: 50px;
  margin-top: 50px;
} 
@media(min-width: 1200px) and (max-width: 1920px){
  display: inline-block;
  width: 260px;
  height:  170px;
  background: #1E1E1E;
  border: 1px solid black;
  border-radius: 200px;
  text-align: center;
  line-height: 25px;
  margin-right: 16px;
  font-family: Noto Sans;
  font-size: 18px;
  color: #B4B4B4;
  text-align:center;
  padding-top: 90px;
  margin-top: 50px;
} 
`;
const TextDiv2 = styled.div`
@media (max-width: 749px){
  width: 350px;
  color: #E8E8E8;
  margin-top:35.58px;
  font-size: 16px;
  line-height: 21.79px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  font-family: Noto Sans;
}
@media (min-width: 750px) and (max-width: 1199px){
  width: 530px;
  color: #E8E8E8;
  margin-top:51.05px;
  font-size: 20px;
  line-height: 27.24px;
  margin-left: 5%;
  text-align: left;
  font-family: Noto Sans;
}
@media (min-width: 1200px){
  color: black;
}
`
const TextDiv3 = styled.div`
@media (max-width: 749px){
  width: 331px;
  color: white;
  margin-top: 150px;
  font-size: 26px;
  line-height: 35.79px;
  margin-left: 5%;
  font-weight: 600;
  text-align: left;
  font-family: Noto Sans;
}
@media (min-width: 750px) and (max-width: 1199px){
  color: white;
  margin-top:400px;
  font-size: 40px;
  line-height: 54px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-weight: 600;
  font-family: Noto Sans;
}
@media (min-width: 1200px){
  color: white;
  margin-top:250px;
  font-size: 40px;
  font-weight: 600;
  line-height: 54px;
  margin-left: 3%;
  text-align: left;
  font-family: Noto Sans;
}
`
const TextDiv4 = styled.div`
@media (max-width: 749px){
  width: 350px;
  color: #B4B4B4;
  font-size: 13px;
  line-height: 19.79px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  font-family: Noto Sans;
  font-weight: 500;
}
@media (min-width: 750px) and (max-width: 1199px){
  width: 80%;
  color: #B4B4B4;
  font-size: 20px;
  line-height: 27px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;
  font-family: Noto Sans;
}
@media (min-width: 1200px){
  color: #B4B4B4;
  font-size: 20px;
  font-weight: 500;
  line-height: 27px;
  margin-left: 3%;
  text-align: left;
  font-family: Noto Sans;
}
`
const RectDiv = styled.div`
@media (max-width: 749px){
  display: inline-block;
width: 350px;
height:81px;
background: #1E1E1E;
border: 1px solid black;
border-radius: 20px;
text-align: center;
line-height: 29px;
margin-right:auto;
margin-left: auto;
font-family: Noto Sans;
font-size: 22px;
color: white;
font-weight: 600;
margin-top: 16px;
padding-top: 24px;
}
@media(min-width: 750px) and (max-width: 1199px){
  display: inline-block;
width: 270px;
height:140px;
background: #1E1E1E;
border: 1px solid black;
border-radius: 20px;
text-align: center;
line-height: 38px;
margin-right:auto;
margin-left: auto;
font-family: Noto Sans;
font-size: 28px;
color: white;
font-weight: 600;
margin-top: 36px;
padding-top: 60px;
margin-right: 23px;
}
@media(min-width: 1200px){
  display: inline-block;
  width: 270px;
  height: 140px;
  padding-top: 60px;
  background: #1E1E1E;
border: 1px solid black;
border-radius: 20px;
text-align: center;
line-height: 38px;
margin-right:auto;
margin-left: auto;
font-family: Noto Sans;
font-size: 28px;
color: white;
font-weight: 600;
margin-top: 39px;
margin-right: 21px;
}
`

const ImageLine = styled.img`
@media (max-width: 749px){
  display:inline-block;
    width:20px;
    height:315.5px;
    margin-left:51px;
}
@media (min-width: 750px) and (max-width: 1199px){
  display:inline-block;
    width:50px;
    height:412.5px;
    margin-left:85px;
    margin-top:99px;
}
@media (min-width: 1200px) and (max-width: 1920px){
  display:inline-block;
    width:50px;
    height:355px;
    margin-left:100%;
    margin-top:76px;
}
`;
const LineDetail = styled.div`
  position:relative;
  float: left;
  display:inline;
  z-index: 1;
`;
const CircleDiv2_1 = styled.div`
@media (max-width: 749px){
  display:flex;
  position: relative;
  width: 38px;
  height: 38px;
  background: #E8E8E8;
  border-radius: 100px;
  text-align: center;
  line-height: 27px;
  font-family: Noto Sans;
  font-size: 20px;
  font-weight: 600;
  color: #121212;
  text-align:center;
  margin-top:49px;
  margin-left: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content : center;
  align-items : center;
  z-index: 2;
} 
@media (min-width: 750px) and (max-width: 1199px){
  display:flex;
  position: absolute;
  width: 59px;
  height: 59px;
  background: #E8E8E8;
  border-radius: 100px;
  text-align: center;
  line-height: 27px;
  font-family: Noto Sans;
  font-size: 25px;
  font-weight: 600;
  color: #121212;
  text-align:center;
  margin-top: 67.75px;
  margin-left: 64px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content : center;
  align-items : center;
  z-index: 2;
} 
@media (min-width: 1200px) and (max-width: 1920px){
  display:flex;
  position: absolute;
  width: 59px;
  height: 59px;
  background: #E8E8E8;
  border-radius: 100px;
  text-align: center;
  line-height: 34px;
  font-family: Noto Sans;
  font-size: 25px;
  font-weight: 600;
  color: #121212;
  text-align:center;
  margin-top: 44px;
  margin-left: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content : center;
  align-items : center;
  z-index: 2;
} 
`;
const CircleDiv2_2 = styled.div`
@media (max-width: 749px){
  display:flex;
  position: absolute;
  width: 38px;
  height: 38px;
  background: #E8E8E8;
  border-radius: 100px;
  text-align: center;
  line-height: 27px;
  font-family: Noto Sans;
  font-size: 20px;
  font-weight: 600;
  color: #121212;
  text-align:center;
  margin-top:70px;
  margin-left: 51px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content : center;
  align-items : center;
  z-index: 2;
} 
@media (min-width: 750px) and (max-width: 1199px){
  display:flex;
  z-index: 2;
  position: absolute;
  width: 59px;
  height: 59px;
  background: #E8E8E8;
  border-radius: 100px;
  text-align: center;
  line-height: 27px;
  font-family: Noto Sans;
  font-size: 25px;
  font-weight: 600;
  color: #121212;
  text-align:center;
  margin-top: 209.4px;
  margin-left: 94px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content : center;
  align-items : center;
} 
@media (min-width: 1200px) and (max-width: 1920px){
  display:flex;
  z-index: 2;
  position: absolute;
  width: 59px;
  height: 59px;
  background: #E8E8E8;
  border-radius: 100px;
  text-align: center;
  line-height: 34px;
  font-family: Noto Sans;
  font-size: 25px;
  font-weight: 600;
  color: #121212;
  text-align:center;
  margin-top: 167px;
  margin-left: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content : center;
  align-items : center;
} 
`;
const CircleDiv2_3 = styled.div`
@media (max-width: 749px){
  display:flex;
  z-index: 2;
  position: absolute;
  width: 38px;
  height: 38px;
  background: #E8E8E8;
  border-radius: 100px;
  text-align: center;
  line-height: 27px;
  font-family: Noto Sans;
  font-size: 20px;
  font-weight: 600;
  color: #121212;
  text-align:center;
  margin-top:178px;
  margin-left: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content : center;
  align-items : center;
} 
@media (min-width: 750px){
  display:flex;
  z-index: 2;
  position: absolute;
  width: 59px;
  height: 59px;
  background: #E8E8E8;
  border-radius: 100px;
  text-align: center;
  line-height: 27px;
  font-family: Noto Sans;
  font-size: 25px;
  font-weight: 600;
  color: #121212;
  text-align:center;
  margin-top:348px;
  margin-left: 64px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content : center;
  align-items : center;
} 
@media (min-width: 1200px) and (max-width: 1920px){
  display:flex;
  z-index: 2;
  position: absolute;
  width: 59px;
  height: 59px;
  background: #E8E8E8;
  border-radius: 100px;
  text-align: center;
  line-height: 34px;
  font-family: Noto Sans;
  font-size: 25px;
  font-weight: 600;
  color: #121212;
  text-align:center;
  margin-top: 285px;
  margin-left: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content : center;
  align-items : center;
} 
`;

const CircleDiv2_4 = styled.div`
@media (max-width: 749px){
  display:flex;
  z-index: 2;
  position: absolute;
  width: 38px;
  height: 38px;
  background: #E8E8E8;
  border-radius: 100px;
  text-align: center;
  line-height: 27px;
  font-family: Noto Sans;
  font-size: 20px;
  font-weight: 600;
  color: #121212;
  text-align:center;
  margin-top: 278px;
  margin-left: 51px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content : center;
  align-items : center;
} 
@media (min-width: 750px){
  display:flex;
  z-index: 2;
  position: absolute;
  width: 59px;
  height: 59px;
  background: #E8E8E8;
  border-radius: 100px;
  text-align: center;
  line-height: 27px;
  font-family: Noto Sans;
  font-size: 25px;
  font-weight: 600;
  color: #121212;
  text-align:center;
  margin-top: 486px;
  margin-left: 94px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content : center;
  align-items : center;
} 
@media (min-width: 1200px) and (max-width: 1920px){
  display:flex;
  z-index: 2;
  position: absolute;
  width: 59px;
  height: 59px;
  background: #E8E8E8;
  border-radius: 100px;
  text-align: center;
  line-height: 34px;
  font-family: Noto Sans;
  font-size: 25px;
  font-weight: 600;
  color: #121212;
  text-align:center;
  margin-top: 404px;
  margin-left: 100%;RecT
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content : center;
  align-items : center;
} 
`;
const CircleText1 = styled.div`
@media (max-width: 749px){
  font-size: 30px;
  font-weight: 700;
  color: white;
}
@media (min-width: 750px) and (max-width: 1199px){
  font-size: 30px;
  font-weight: 700;
  line-height: 41px;
  color: white;
}
@media (min-width: 1200px) and (max-width: 1920px){
  font-size: 40px;
  font-weight: 700;
  line-height: 54px;
  color: white;
}
`
const RectText = styled.div`
@media (max-width: 749px){
  font-size: 12px;
  font-weight: 500;
  color: white;
  line-height: 17px;
  text-align: center;
}
@media (min-width: 750px) and (max-width: 1199px){
  font-size: 14px;
  font-weight: 500;
  color: white;
  line-height: 19px;
  text-align: center;
}
@media (min-width: 1200px) and (max-width: 1920px){
  font-size: 14px;
  font-weight: 500;
  color: white;
  line-height: 19px;
  text-align: center;
}
`
const Text1 = styled.div`
@media (max-width: 749px){
  display:flex;
  position: absolute;
  font-size: 22px;
  font-weight: 600;
  color: #F3F3F3;
  margin-left: 90px;
  margin-top: 37px;
}
@media (min-width: 750px){
  display:flex;
  position: absolute;
  font-size: 30px;
  font-weight: 600;
  color: #F3F3F3;
  margin-left: 143px;
  margin-top: 61px;
}
@media (min-width: 1200px) and (max-width: 1920px){
  display:flex;
  position: absolute;
  font-size: 30px;
  font-weight: 600;
  color: #F3F3F3;
  margin-left: 12.5%;
  margin-top: 40px;
}
`
const Text1_1 = styled.div`
@media (max-width: 749px){
  display:flex;
  width: 63%;
  position: absolute;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #B4B4B4;
  margin-left: 90px;
  margin-top: 70px;
  text-align: left;
}
@media (min-width: 750px) and @media(max-width: 1199px){
    display:flex;
  position: absolute;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #B4B4B4;
  margin-left: 143.36px;
  margin-top: 107px;
  text-align: left;
}
@media (min-width: 1200px) and (max-width: 1920px){
  display:flex;
position: absolute;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;
color: #B4B4B4;
margin-left: 143.36px;
margin-top: 86px;
text-align: left;
}
`
const Text2 = styled.div`
@media (max-width: 749px){
  display:flex;
  position: absolute;
  font-size: 22px;
  font-weight: 600;
  color: #F3F3F3;
  margin-left: 109px;
  margin-top: 136px;
}
@media (min-width: 750px){
  display:flex;
  position: absolute;
  font-size: 30px;
  font-weight: 600;
  color: #F3F3F3;
  margin-left: 173px;
  margin-top: 193px;
}
@media (min-width: 1200px) and (max-width: 1920px){
  display:flex;
  position: absolute;
  font-size: 30px;
  font-weight: 600;
  color: #F3F3F3;
  margin-left: 180px;
  margin-top: 163px;
}
`
const Text2_1 = styled.div`
@media (max-width: 749px){
  display:flex;
  position: absolute;
  font-family: 'Noto Sans';
  width: 70%;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
color: #B4B4B4;
margin-top: 169px;
  margin-left: 109px;
  text-align: left;
}
@media (min-width: 750px){
  display:flex;
  position: absolute;
  font-family: 'Noto Sans';
  width: 43%;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;
color: #B4B4B4;
margin-top: 240px;
  margin-left: 173px;
  text-align: left;
}
@media (min-width: 1200px) and (max-width: 1920px){
  display:flex;
  position: absolute;
  font-size: 16px;
  font-weight: 500;
  color: #B4B4B4;
  margin-left: 180px;
  margin-top: 210px;
}
`
const Text3 = styled.div`
@media (max-width: 749px){
  display:flex;
  position: absolute;
  font-size: 22px;
  font-weight: 600;
  color: #F3F3F3;
  margin-left: 90px;
  margin-top: 252px;
}
@media (min-width: 750px){
  display:flex;
  position: absolute;
  font-size: 30px;
  font-weight: 600;
  color: #F3F3F3;
  margin-left: 143px;
  margin-top: 343px;
}
@media (min-width: 1200px) and (max-width: 1920px){
  display:flex;
  position: absolute;
  font-size: 30px;
  font-weight: 600;
  color: #F3F3F3;
  margin-left: 150px;
  margin-top: 281px;
}
`
const Text3_1 = styled.div`
@media (max-width: 749px){
  display:flex;
  position: absolute;
  font-family: 'Noto Sans';
  width: 70%;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
color: #B4B4B4;
margin-top: 285px;
  margin-left: 90px;
  text-align: left;
}
@media (min-width: 750px){
  display:flex;
  position: absolute;
  font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;
color: #B4B4B4;
margin-top: 390px;
  margin-left: 143px;
  text-align: left;
}
@media (min-width: 1200px) and (max-width: 1920px){
  display:flex;
  position: absolute;
  font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;
color: #B4B4B4;
margin-top: 328px;
  margin-left: 150px;
  text-align: left;
}
`
const Text4 = styled.div`
@media (max-width: 749px){
  display:flex;
  position: absolute;
  font-size: 22px;
  font-weight: 600;
  color: #F3F3F3;
  margin-left: 109px;
  margin-top: 352px;
}
@media (min-width: 750px){
  display:flex;
  position: absolute;
  font-size: 30px;
  font-weight: 600;
  color: #F3F3F3;
  margin-left: 173px;
  margin-top: 471px;
}
@media (min-width: 1200px) and (max-width: 1920px){
  display:flex;
  position: absolute;
  font-size: 30px;
  font-weight: 600;
  color: #F3F3F3;
  margin-left: 180px;
  margin-top: 399px;
}
`
const Text4_1 = styled.div`
@media (max-width: 749px){
  display:flex;
  position: absolute;
  font-family: 'Noto Sans';
  width: 73%;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
color: #B4B4B4;
margin-top: 385px;
  margin-left: 109px;
  text-align: left;
}
@media (min-width: 750px){
  display:flex;
  position: absolute;
  font-family: 'Noto Sans';
  width: 65%;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;
color: #B4B4B4;
margin-top: 518px;
  margin-left: 173px;
  text-align: left;
}
@media (min-width: 1200px) and (max-width: 1920px){
  display:flex;
  position: absolute;
  font-family: 'Noto Sans';
  width: 65%;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
color: #B4B4B4;
margin-top: 446px;
  margin-left: 180px;
  text-align: left;
}
`
const TextMent = styled.div`
@media (min-width: 1200px) and (max-width: 1920px){
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  margin-left: 56px;
  margin-top: 3px;
  color: #E8E8E8;
  text-align: left;

}
`
class Main extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="MainDiv" style={{background:'black', overflow:'hidden'}}>
      <picture>
      <source srcset="img.webp" type="imag/webp"/>
      <ImageDiv src={logoAni} />
      </picture>
      {/* <ImageDiv src={logo}/> */}
      <TextDiv className="page">????????? ??? ????????? ????????????</TextDiv>
      <EngDiv className="page"><b>N</b>onesuchable <b>P</b>eople who <b>C</b>reates games</EngDiv>
      <UniDiv className="page"><b>?????????????????????</b></UniDiv>
      <Name className="page">?????? ?????? ????????? NPC</Name>
      <TextMent className="page">????????? ????????? ???????????? ??????, ?????? ????????? ??????, ????????? ??? ????????? ????????? ?????? ??? ????????????.</TextMent>
      <CircleDiv className="page" style={{animationDelay:"1s"}}>????????????<CircleText1>2019</CircleText1></CircleDiv>
      <CircleDiv className="page" style={{animationDelay:"1.3s"}}>?????? ??????<CircleText1>7???</CircleText1></CircleDiv>
      <CircleDiv className="page" style={{animationDelay:"1.6s"}}>?????? ????????????<CircleText1>N???</CircleText1></CircleDiv>
      <CircleDiv className="page" style={{animationDelay:"1.9s"}}>?????? ??????<CircleText1>N???</CircleText1></CircleDiv>
      <TextDiv2 className="page">????????? ????????? ???????????? ??????, ?????? ????????? ??????, ????????? ??? ????????? ????????? ?????? ??? ????????????.</TextDiv2>
      <TextDiv3 className="page">??? 1?????? ?????? ????????? ?????? ??????????</TextDiv3>
      <TextDiv4 className="page">???????????? ?????? MT, ?????????, ????????? ???????????? ??? ????????? ???????????? ????????? ??? ????????????.</TextDiv4>
      <RectDiv className="page" style={{animationDelay:"1s"}} >???????????? ????????????<RectText>??? ???????????? ?????? ????????? ???????????? ??????????????? ??????</RectText></RectDiv>
      <RectDiv className="page" style={{animationDelay:"1.3s"}}>NPC ?????????<RectText>?????? ???????????? ?????? ???????????? ?????? ??????, ?????? ??? ?????? ??????</RectText></RectDiv>
      <RectDiv className="page" style={{animationDelay:"1.6s"}}>7??? ?????? ????????????<RectText>7??? ???????????? ?????? ????????? ?????? (7??? ???????????? ???????????? ?????? ??? ??????)</RectText></RectDiv>
      <RectDiv className="page" style={{animationDelay:"1.9s"}}>NPC ??????<RectText>?????? ???????????? ???????????? ????????? ???????????? ????????? ????????? ??????</RectText></RectDiv>
      <TextDiv3 className="page">???????????? ??????????????? ????????? ????????????????</TextDiv3>
      <LineDetail>
      <CircleDiv2_1 className="page" style={{animationDelay:"1s"}}>01</CircleDiv2_1>
      <CircleDiv2_2 className="page" style={{animationDelay:"1s"}}>02</CircleDiv2_2>
      <CircleDiv2_3 className="page" style={{animationDelay:"1s"}}>03</CircleDiv2_3>
      <CircleDiv2_4 className="page" style={{animationDelay:"1s"}}>04</CircleDiv2_4>
      <ImageLine src={line} className="page" style={{animationDelay:"3s"}}/>
      </LineDetail>
      <Text1 className="page" style={{animationDelay:"2s"}}>??? ??????</Text1>
      <Text1_1 className="page" style={{animationDelay:"2s"}}>?????? ???????????? ????????? ?????? ????????? ???????????? ?????? ??????????????? ??????</Text1_1>
      <Text2 className="page" style={{animationDelay:"2s"}}>???????????? ??????</Text2>
      <Text2_1 className="page" style={{animationDelay:"2s"}}>??? ????????? ???????????? ????????? ????????? ??????, ??????????????? ?????? ??????????????? ???????????? ??????????????? ????????? ????????????.</Text2_1>
      <Text3 className="page" style={{animationDelay:"2s"}}>?????? ?????? / ??????</Text3>
      <Text3_1 className="page" style={{animationDelay:"2s"}}>???????????? ????????? ????????? ????????? ?????? ?????? ???????????? ???????????????.</Text3_1>
      <Text4 className="page" style={{animationDelay:"2s"}}>????????? ????????? ??????</Text4>
      <Text4_1 className="page" style={{animationDelay:"2s"}}>???????????? ?????? ?????? + apk ?????? ???????????? ????????????????????? ?????? (????????? ?????? ??????)</Text4_1>
      </div>
  );
  }
  componentDidMount(){
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.25, // 50%??? viewport??? ????????? ????????? callback ??????
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    }, options);
  
    const pageList = document.querySelectorAll(".page");
    pageList.forEach((element) => observer.observe(element));
  }
}

export default Main;