import { useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./microphone.css";
import microphone from '../../../../assets/microphone.png'
import React from 'react';


function Speech({ currentStep, setCurrentStepNum})  {
    console.log(currentStep)
    const commands = [
    // {
    //     command: "recipe complete",
    //     callback: (website) => {
    //     window.open("http://" + website.split(" ").join(""));
    //     },
    // },
    {
        command: "next step",
        callback: () => {
            changeStep(currentStep + 1);
        },
    },
    {
        command: "previous step",
        callback: () => {
            changeStep(currentStep - 1)
        },
    },
// Trigger pop up with notes and rating
    // {
    //     command: "I'm done",
    //     callback: () => {
    //         handleReset();
    //     },
    // },
    {
        command: "recipe complete",
        callback: () => {
            stopHandle();
        },
    },
    {
        command: "stop listening",
        callback: () => {
            stopHandle();
        },
    },
    ];
    const { transcript, resetTranscript } = useSpeechRecognition({ commands });
    const [isListening, setIsListening] = useState(false);
    const microphoneRef = useRef(null);
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
        <div className="mircophone-container">
        Browser is not Support Speech Recognition.
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
    const handleReset = () => {
    stopHandle();
    resetTranscript();
    };

    const changeStep = (nextNum) => {
        console.log(nextNum)
        // window.scroll(`./steps#${nextNum}`)
        document.getElementById(`${nextNum}`).scrollIntoView({behavior: 'smooth'});
        setCurrentStepNum(nextNum)
    }
    return (
    <div className="microphone-wrapper">
        <div className="mircophone-container">
        <div
            className="microphone-icon-container"
            ref={microphoneRef}
            onClick={handleListening}
        >
            <img src={microphone} className="microphone-icon" alt="microphone"/>
        </div>
        <div className="microphone-status">
            {isListening ? "Listening........." : "Click to start Listening"}
        </div>
        {isListening && (
            <button className="microphone-stop btn" onClick={stopHandle}>
            Stop
            </button>
        )}
        </div>
        {/* {transcript && (
        <div className="microphone-result-container">
            <div className="microphone-result-text">{transcript}</div>
            <button className="microphone-reset btn" onClick={handleReset}>
            Reset
            </button>
        </div>
        )} */}
    </div>
    );
}
export default Speech;