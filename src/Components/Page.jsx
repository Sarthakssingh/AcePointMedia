import React, { useEffect, useState } from 'react';
import "./Page.css";
import Pop from './Pop';

function Page() {

    const questions = [
        {
            questintext:"Did you or a loved one serve, live, or work at Camp Lejeune for at least 30 days between 1953 and 1987 ?*",
            answerOp:[{answer:"Yes"},{answer:"No"}]
        },
        {
            questintext:"Did you or a family member who lived with you experience any serious health illness or injuries like cancer, organ failure reproductive issue, death or others ?*",
            answerOp:[{answer:"Yes"},{answer:"No"}]
        },
        {
            questintext:"Is the affected party represented by any attorny for this matter ?*",
            answerOp:[{answer:"Yes"},{answer:"No"}]
        }
    ];
    const [currentquestion,setCurrentquestion] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    

    const handleclick = () =>{
        const nextquestion = currentquestion + 1;
        if(nextquestion<questions.length){
        setCurrentquestion(nextquestion);
        }else{
            setShowAnswer(true);
        }
    };

  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-12 col-md-10 col-lg-8 m-auto text-center">
                

                {showAnswer ?  
                    <Pop/>
                :  
                <>
                <h4 className="subheading">Take this short quick if you qualify</h4>
                <div className="question">
                    {questions[currentquestion].questintext}
                </div>
                <div className="answer-sec">
                    {questions[currentquestion].answerOp.map((answerOp)=> <button className='button' onClick={handleclick}>{answerOp.answer}</button>)}
                </div>
                </>
                
                }
                <br />
                
                <hr className='rule'/>
                
            </div>
        </div>
        
    </div>
  )
}

export default Page