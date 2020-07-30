import React, { useState } from 'react';
import FeedbackForm from '../components/FeedbackForm';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container } from '@material-ui/core';
import QuestionSelector from '../components/QuestionSelector';
import { set } from 'd3';
import FeedbackLogo from '../components/FeedbackLogo';
import Paper from '@material-ui/core/Paper';


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
        fontSize: "1rem",
        paddingLeft: "50px",
        paddingTop: "25px"
    },
    feedbackLogo: {
        textAlign: "center",
        border: "1px solid black"
    }

}));

const GetFeedback = (props) => {
      // pass down as properties to QuestionSelector
    const [selectedQuestion, setSelectedQuestion] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    // const [analysis, setAnalysis] = useState(false);
    // question object with analysis in it sent from server
    const [question, setQuestion] = useState({
      category: '',
      content: '',
      answer: '',
      analysis: {
        negativeMentions: [],
        overallScore: '',
        overallMagnitude: '',
        overallFeedback: ''
      }
    });
 
    const handleQuestionClick = (event) => {
        setSelectedQuestion(event.target.value)
        setSelectedCategory(event.target.name)
        // console.log(selectedQuestion)
    };

    const classes = useStyles()

    const gettingFeedback = (
          <Grid container spacing={6}>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
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
                      setAnalysis={props.setAnalysis}
                      setQuestion={setQuestion}
                      />
                  </Grid>
                  <Grid item xs={5}>
                  <QuestionSelector handleQuestionClick={handleQuestionClick}/>
              </Grid>  
              </Grid>
              </Box>
          </Grid>
      </Grid>
    )
    console.log('question:', question);

    // map the negative mentions into something pretty -- this array can be empty sometimes (nothing was mentioned negetively)
    const negativity = ( question.analysis.negativeMentions.map( negativeMention => {
        return (
            <div>
            <strong>{negativeMention}</strong> was mentioned negatively. Consider reframing your experience with <strong>{negativeMention}</strong> . 
            </div>
            )
        })
    )

    const gettingAnalysis = (
        <div>
            <Grid container spacing={6}>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}>
                    <Box>
                        <Box className={classes.banner}>
                            <h1>analysis</h1>
                        <Grid item xs={6}>
                            <Paper ><p><strong>Question category:</strong> {question.category}</p>
                            <p><strong>The question you selected:</strong> {question.content}</p>
                            <p><strong>Your response:</strong> {question.answer}</p>
                            <p><strong>Your overall sentiment score:</strong> {question.analysis.overallMagnitude} {question.analysis.overallScore} </p>
                            <p><strong>Our feedback:</strong> {question.analysis.overallFeedback}</p>
                            <p>{negativity}</p>
                            </Paper>
                        </Grid>
                            <FeedbackLogo className={classes.feedbackLogo}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )

        

    return (
            <div>
                {props.analysis ? gettingAnalysis : gettingFeedback}
            </div>
    );
};

export default GetFeedback;