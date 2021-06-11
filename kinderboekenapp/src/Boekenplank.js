import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import { BookItems } from './BookItems';
import './Boekenplank.css';

class Boekenplank extends Component {
    books = this.props.books; //Deze kan weg na het ingebruik nemen van de API

    state = {};

    getBookData = () => {
        const URL = "https://kinderboekenapp-laravel.herokuapp.com/api/users/1/books"
        axios.get(URL).then(res => {
            const fetchedBooks = res.data;
            this.setState({books: fetchedBooks});
        });
    }

    componentDidMount(){
        this.getBookData();
    }

    

    render() {
        const settings = {
            className: "center",
            infinite: false,
            centerPadding: "60px",
            slidesToShow: 3,
            slidesToScroll: 3,
            speed: 500,
            rows: 2,
            slidesPerRow: 1,
            dots: true,
            responsive: [
            {
            breakpoint: 1080,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            }
        ]
        };
        //Check if the array is empty if so setting a placeholder with
        //add book option (link to the booklist)
        if (!Array.isArray(this.state.books) || this.state.books <= 0){ //this.books moet worden veranderd naar this.state.books
            return (
                <Slider {...settings}>
                    <article className="book-placeholder">
                        <section className="book__content">
                            <div className="placeholder">
                                <a href="/boekenlijst"><i className="fas fa-plus-circle fa-3x"></i></a>
                            </div>
                        </section>
                    </article>
                </Slider>
            )
        }
        return (
            <Slider {...settings}>
                {this.books.map((book, index) => { //this.books moet worden veranderd naar this.state.books
                    return (
                        <article key={index} className="book">
                            <section className="book__content">
                                <a className='book__link' href='#'>
                                    <img src={book.src} alt='' />
                                </a>
                            </section>
                        </article>
                    )
                })}
            </Slider>
        );
    }
}


export default Boekenplank;