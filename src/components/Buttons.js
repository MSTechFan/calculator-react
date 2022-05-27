import Styled from "styled-components";

// 400 / 5 || 377 / 4  || 80px, 94.25px

// probably 76px 90px

const ButtonEje = Styled.div `
    height: 76px;
    width: 97px;
    background-color: #A91079;
    margin-bottom: 0px;
    border: 1px solid #480ca8;
    border-radius: 5px;
    cursor: pointer;
    :hover {
        box-shadow: 0 0.5em 0.5em -0.4em yellow;
        border-color: yellow;
        transform: translateY(-0.25em);
        background-color: #F806CC;
    }
`

const ButtonLarge = Styled.div`
    height: 76px;
    width: 196px;
    background-color: #A91079;
    border: 1px solid #480ca8;
    border-radius: 5px;
    cursor: pointer;
    :hover {
        box-shadow: 0 0.5em 0.5em -0.4em yellow;
        border-color: yellow;
        transform: translateY(-0.25em);
        background-color: #F806CC;
    }
    
`
const ButtonBig = Styled.div`
    height: 153px;
    width: 97px;
    position: relative;
    bottom: 77.5px;
    background-color: #A91079;
    margin-bottom: 0px;
    border: 1px solid #480ca8;
    border-radius: 5px;
    cursor: pointer;
    :hover {
        box-shadow: 0 0.5em 0.5em -0.4em yellow;
        border-color: yellow;
        transform: translateY(-0.25em);
        background-color: #F806CC;
    }
`

export {ButtonEje, ButtonLarge, ButtonBig}

