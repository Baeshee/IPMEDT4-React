import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { changeUserAssignments, changeActiveBook } from "./actions";

import "./BookAssignments.css";

import { DummyData } from './DummyData';

import { ImageVraag, ImageAntwoord, AudioVraag, ColorVraag, ColorAntwoord, MultipleChoiceVraag, Podcast,ImageUnavailable, MultipleChoiceVraag2} from "./Vragen/ImageVraag"

class BookAssignments extends Component {

 state = {
     assignment: []
 }

    
    getAssignData = (props) => {
        const URL = "http://localhost:8000/api/assignments"
        axios.get(URL).then(res => {
            this.props.changeUserAssignments(res.data);
            this.setState = {
                assignment: res.data
            }
            console.log(res.data);
        });
    }

    componentDidMount(){
        this.getAssignData();
    }
    


    createAssignments = (assignment, index) =>{       
        switch(assignment.kind_of_assignment){
            case "color":
                switch(assignment.status){
                    case "active":
                        return <ColorVraag assignment={assignment.ColorVraag}/>;
                    case "completed":
                        return <ColorAntwoord assignment={assignment.ColorAntwoord} />;
                    default:
                        return <ColorVraag assignment={assignment.ColorAntwoord} />;
                }
            case "image":
                switch(assignment.status){
                    case "active":
                        return <ImageVraag key={index} />;
                    case "completed":
                        return <ImageAntwoord key={index} />;
                    default:
                        return <ImageUnavailable key={index} />;
                }
            case "text":
                switch(assignment.status){
                    case "active":
                        return <ImageVraag key={index} />;
                    case "completed":
                        return <ImageAntwoord key={index} />;
                    default:
                        return <ImageUnavailable key={index} />;
                }  
                case "audio":
                    switch(assignment.status){
                        case "active":
                            return <AudioVraag key={index} />;
                        case "completed":
                            return <AudioVraag key={index} />;
                        default:
                            return <AudioVraag key={index} />;
                    }  
                case "MultipleChoice":
                        switch(assignment.status){
                            case "active":
                                return <MultipleChoiceVraag key={index} />;
                            case "completed":
                                return <MultipleChoiceVraag key={index} />;
                            default:
                                return <MultipleChoiceVraag key={index} />;
                        }  
                        case "Podcast":
                            switch(assignment.status){
                                case "active":
                                    return <Podcast key={index} />;
                                case "completed":
                                    return <Podcast key={index} />;
                                default:
                                    return <Podcast key={index} />;
                            }  
                            case "MultipleChoice2":
                                switch(assignment.status){
                                    case "active":
                                        return <MultipleChoiceVraag2 key={index} />;
                                    case "completed":
                                        return <MultipleChoiceVraag2 key={index} />;
                                    default:
                                        return <MultipleChoiceVraag2 key={index} />;
                                }         
            default:
                return <ImageUnavailable key={index} />;
        }
}
    

    render() {
    
            return (

                <article className="assignments"> 
                    {this.state.assignment.map((assignment, index) => this.createAssignments(assignment, index))}
                    
                    
                </article>
          
            );
        }
    }



const mapStateToProps = state => {
    return { activeBook: state.activeBook, userAssignments: state.userAssignments};
}

export default connect(
    mapStateToProps, { changeUserAssignments: changeUserAssignments, changeActiveBook: changeActiveBook }
)(BookAssignments);