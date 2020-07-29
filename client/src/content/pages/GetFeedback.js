import React, { useState } from 'react';
import FeedbackForm from '../components/FeedbackForm';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import QuestionSelector from '../components/QuestionSelector'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        fontSize: '10em',
        color: 'white',
        height: '5em',
        padding: theme.spacing(20, 10)
    },
    banner: {
        backgroundColor: "#90caf9",
        height: '100%',
        color: "#000",
        fontSize: "2rem",
        paddingLeft: "50px",
        paddingTop: "25px"
    },
    feedback: {
        textAlign: "right"
    }

}));

// state logic
// category:
// content:

// handle question click events to set state
// prevent default of click
// set selected question state


const GetFeedback = (props) => {
        // pass down as properties to QuestionSelector
    const [selectedQuestion, setSelectedQuestion] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")
 
    const handleQuestionClick = (event) => {
        setSelectedQuestion(event.target.value)
        setSelectedCategory(event.target.name)
        // console.log(selectedQuestion)
    };

    const classes = useStyles()
    return (
            <Grid container spacing={6}>
                <Grid item xs={10}></Grid>
                <Grid item xs={10}>
                    <Box className={classes.banner}>
                        <div className="feedback-instructions">
                        <h1>feedback</h1>
                        <Grid item xs={4}>
                                <p>Talk or type in the text box and submit to get instant feedback on your response!</p>
                            </Grid> 
                        </div>
                        <Grid container spacing={6}>
                            <Grid item xs={6}>
                            <FeedbackForm 
                            className={classes.feedback}
                            selectedQuestion={selectedQuestion}
                            selectedCategory={selectedCategory}
                            />
                            </Grid>
                            <Grid item xs={5}>
                            <QuestionSelector handleQuestionClick={handleQuestionClick}/>
                        </Grid>   
                        </Grid>   
                    </Box>
                </Grid>
            </Grid>
    );
};

export default GetFeedback;