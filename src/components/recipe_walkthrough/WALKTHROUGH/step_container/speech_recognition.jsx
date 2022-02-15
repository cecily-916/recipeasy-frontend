import { useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./microphone.css";
import microphone from '../../../../assets/microphone.png'
import React from 'react';


function Speech({ currentStep, setCurrentStepNum, isListening,setIsListening, setSideBar, sideBar, setConversionPopup})  {
    console.log(currentStep)
    const [nextStep, setNextStep] =useState(currentStep + 1)
    const [previousStep, setPreviousStep]=useState(currentStep)
    const commands = [
        {
            command: "next step",
            callback: () => {
                setNextStep(nextStep+1)
                changeStep(nextStep)
            }
        },
        {
            command: "previous step",
            callback: () => {
                setPreviousStep(currentStep-1)
                changeStep(previousStep)
            }
        },
    // Trigger pop up with notes and rating
        // {
        //     command: "I'm done",
        //     callback: () => {
        //         handleReset();
        //     },
        // },
        {
            command: "stop listening",
            callback: () => {
                stopHandle(false);
            },
        },
        {
            command: "show conversions",
            callback: () => {
                setConversionPopup(true);
            },
        },
        {
            command: "hide conversions",
            callback: () => {
                setConversionPopup(false);
            },
        },
        {
            command: "show sidebar",
            callback: () => {
                setSideBar(true);
            },
        },
        {
            command: "hide sidebar",
            callback: () => {
                setSideBar(false);
            },
        },
    ];
    const { transcript, resetTranscript } = useSpeechRecognition({ commands });
    // const [isListening, setIsListening] = useState(false);
    const microphoneRef = useRef(null);
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
        <div className="mircophone-container">
        Browser does not Support Speech Recognition.
        </div>
    );
    }
    const handleListening = () => {
        setIsListening(true);
        microphoneRef.current.classList.add("listening");
        SpeechRecognition.startListening({
            continuous: true,
        });
        };

    const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
    };
    // const handleReset = () => {
    // stopHandle();
    // resetTranscript();
    // };

    const changeStep = (stepChange) => {
        // console.log(nextStep)
        // window.scroll(`./steps#${nextNum}`)
        document.getElementById(`${stepChange}`).scrollIntoView({behavior: 'smooth'});
        setCurrentStepNum(stepChange)
    }

    const listeningButton =() =>{
        return (
            <div className="microphone-wrapper">
                    <div
                        ref={microphoneRef}
                        onClick={stopHandle}
                    >
                    <span class="text-4xl material-icons">
                    record_voice_over
                    </span>
                    </div>
                    <div className="microphone-status text-center">
                        "Listening....."
                    </div>
        </div>)
    }

    const notListeningButton = () =>{
        return (
            <div className="microphone-wrapper">
                {/* <div className="mircophone-container"> */}
                <div
                    ref={microphoneRef}
                    onClick={handleListening}
                    
                >
                    <span class="text-4xl material-icons">
                    voice_over_off
                    </span> 
                    </div>
                    <div className="microphone-status text-sm" >
                    start listening
                    </div>
                </div>
        // </div>
        )
    }
    return (
        <div>
            {isListening ? listeningButton() :
            notListeningButton()
            }
        </div>
    )
}
export default Speech;