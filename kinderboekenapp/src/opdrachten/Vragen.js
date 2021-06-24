import React, {setState} from "react";
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios';
import authHeader from '../services/service_auth-header';
let x = 0;



// API post met isbn & chapters
// const inputAnswer = (props) =>{
//     const requestBody = {answer_1: props.answer_1, isbn: props.isbn, chapters: props.chapters};
//     axios.patch("http://localhost:8000/api/assignments/1", requestBody)
// }

const inputAnswer = (props) =>{
    const requestBody = {answer_1: props.answer_1};
    axios.patch("http://localhost:8000/api/assignments/1", requestBody)
}
const inputAnswer2 = (props) =>{
    const requestBody = {answer_2: props.answer_2};
    axios.patch("http://localhost:8000/api/assignments/1", requestBody)
}
const inputAnswer3 = (props) =>{
    const requestBody = {answer_3: props.answer_3};
    axios.patch("http://localhost:8000/api/assignments/1", requestBody)
}
const inputAnswer4 = (props) =>{
    const requestBody = {answer_4: props.answer_4};
    axios.patch("http://localhost:8000/api/assignments/1", requestBody)
}

const inputImage = (props) =>{
    console.log(this.props);
}


function scrollY(event){
    event.preventDefault();
    let top  = window.pageYOffset || document.documentElement.scrollTop;
    top = top + 950;
    setTimeout(() => {
        window.scroll({top: top, behavior: 'smooth'});
    }, 500);
  }

function ButtonActive(){
    let arr = document.getElementsByClassName('assignment__button');
    let arr2 = document.getElementsByTagName('section');
    let arr3 = document.getElementsByClassName('Nav__item');
    arr[x].style.backgroundColor = '#0e8034';
    arr2[x].style.borderWidth = 'thick';
    arr2[x].style.borderColor = "#0e8034";
    arr3[x].classList.add('nav__active')
    x++;
}
// function  updateAssignData(){
//     const isbn = JSON.parse(localStorage.getItem('bookISBN'));
//     const requestData = { status: 'active' };
//     console.log(requestData);
//     axios.update(this.props.BASE_URL + '/api/assignments', requestData, {headers: authHeader()}).then(res => {
//         this.props.changeUserAssignments(res.data);
//         });
//     localStorage.removeItem("bookISBN");
// }

export const VraagUnavailable = (props) =>{
    return(
        <article className="wrapper">
            <section className="assignment-container">
            <h2 className="assignments_header">{props.chapters} </h2>
                <button className="assignment__button" onClick={(event)=> {
                    scrollY(event);
                    ButtonActive();
               //     updateAssignData();
                }}> Ik heb het gelezen!</button>
            </section>
        </article>)
}

export const ImageVraag = (props) => {

const fileSelectedHandler = (event, props)=> {
    console.log(event.target.files[0]);
    props = { file: event.target.files[0]};
}
    return(
        <article className="wrapper">
            <section className="assignment-container">
                <p className="assignments__text">{props.assignment}</p>
                <form className="form fileUpload" action="">
                    <label className="label form__label" htmlFor="answer_2">Foto van jouw muts:</label>
                    <input type="file" if="answer_2" name="answer_2" onChange={(event, props)=> {
                        fileSelectedHandler(event, props);
                    }} />
                    <div className="img__wrapper" styling="">
                    <img className="img__input" src={props.file} alt="Jou foto hier"/>
                    </div>
                    <button className="button assignment__button image" onClick={(event)=> {
                        scrollY(event);
                        ButtonActive();
                    }}  type="submit"> Verzenden </button>
                </form>
            </section>
        </article>
    )
}



export const AudioVraag = (props) => {
    return(
        <article className="wrapper" >
            <section className="assignment-container"><p>{props.assignment}</p>
                <ReactAudioPlayer
                src="my_audio_file.ogg"
                autoPlay
                controls
                />
                <button className="button assignment__button" onClick={(event)=> {
                                scrollY(event);
                                ButtonActive();
                            }}>Ik heb het geluisterd!</button>
            </section>
        </article>
    )
}





export const ColorVraag = (props) => {
    return(
        <article className="wrapper">
            <section className="assignment-container"><p>{props.assignment}</p>
        
                <form className="form">
                    <label className="label" htmlFor="color"></label>
                    <input className="input color__input" id="color" name="color"  type="color"></input>
                </form>
                <label htmlFor="userColor">Schrijf hier je kleur op:</label>
                <input id="userColor" className="input userColor" type="text" ></input>
                <button className="button assignment__button" id="submitButton" type="submit" onClick={(event)=> {
                    scrollY(event);
                    ButtonActive();
                    inputAnswer(props);
                }}>Bevestig je kleur!</button>
            </section>
        </article>
    )
}


export const Podcast = (props) =>{
    return(
        <article className="wrapper">
            <section className="assignment-container"> 
             <p className="assignments__text">{props.assignment}</p>
                <ReactAudioPlayer
                    src="my_audio_file.ogg"
                    autoPlay
                    controls
                    />
                <button className="button assignment__button" onClick={(event)=> {
                        scrollY(event);
                        ButtonActive();
                    }} >Ik heb het geluisterd!</button>
            </section>
        </article>
    )
    }

export const MultipleChoice = (props) =>{
return(
    <article className="wrapper">
        <section className="assignment-container">
            <p className="assignments__text">1. Botje zegt in plaats van ‘Bibi’ ‘Bibibi’, en in plaats van ‘papa’, ‘papapa’. Zie jij wat Botje doet? Hoe denk je dat botje mama zou noemen?</p>
            <input className="input mc__input" type="text" onClick={inputAnswer}></input>
            <p className="assignments__text">2. Stel dat botje de woorden ‘dodo’, ‘jojo’ en ‘lolly’ zou uitspreken, hoe zou ze dat dan doen?</p>
            <input className="input mc__input" type="text" onClick={inputAnswer2}></input>
            <p className="assignments__text">3. Stel dat er twee andere botjes zijn, ze heten BOTJEBOTJE, EJTOB, BOT en BOET</p>
            <ul className="assignment-list">
                <p><li className="assignment-list__item">BOTJEBOTJE zegt: Bibibibi en papapapa</li></p>
                <p><li className="assignment-list__item">EJTOB zegt: Ibib en apap.</li></p>
                <p><li className="assignment-list__item">BO zegt: bi en pa</li></p>
                <p><li className="assignment-list__item">BOET zegt: Biib en paap</li></p>
            </ul>
            <article className="mc__grid">
                <p className="grid__text">BOTJEBOTJE:</p>
                <input className="input mc__input" type="text"></input>
                <p className="grid__text">EJTOB:</p>
                <input className="input mc__input" type="text"></input>
                <p className="grid__text">BO:</p>
                <input className="input mc__input" type="text"></input>
                <p className="grid__text">BOET:</p>
                <input className="input mc__input" type="text"></input>
            </article>
            <button className="button assignment__button" onClick={(event)=> {
                            scrollY(event);
                            ButtonActive();
                            inputAnswer3(props);
                        }}>Verzend</button>

        </section>
    </article>
)
}

export const MultipleChoice2 = (props) => {
    return(
        <article className="wrapper">
            <section className="assignment-container">
                <p className="assignments__text">{props.assignment}</p>
                <p className="assignments__text"> Denk eens na:</p>
                <p className="assignments__text">Waarom denk je dat Bibi Botje niet wil verkopen, zelfs niet voor héél veel geld? </p>
                <input className="input mc__input" value="" type="text"></input>
                <p className="assignments__text">Wat zou jij hebben gedaan als je in dezelfde situatie zat als Bibi?</p>
                <input className="input mc__input" value="" type="text"></input>
                <p className="assignments__text">Zijn er dingen die voor jou onbetaalbaar zijn? Waarom zijn die onbetaalbaar voor je?</p>
                <input className="input mc__input" value="" type="text"></input>
                <button className="button assignment__button" onClick={(event)=> {
                                scrollY(event);
                                ButtonActive();
                                inputAnswer(props);
                            }}>Verzend</button>
            </section>
        </article>
    )
}
