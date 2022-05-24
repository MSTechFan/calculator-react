import Styled from "styled-components";

// 400 / 5 || 377 / 4  || 80px, 94.25px

// probably 76px 90px

const ButtonEje = Styled.div `
    height: 76px;
    width: 97px;
    background-color: gray;
    margin-bottom: 0px;
    border: 1px solid black;
    border-radius: 5px;
`

const ButtonLarge = Styled.div`
    height: 76px;
    width: 195px;
    background-color: gray;
    border: 1px solid black;
    border-radius: 5px;
`
const ButtonBig = Styled.div`
    height: 153px;
    width: 97px;
    background-color: gray;
    margin-bottom: 0px;
    border: 1px solid black;
    border-radius: 5px;
`

export {ButtonEje, ButtonLarge, ButtonBig}

