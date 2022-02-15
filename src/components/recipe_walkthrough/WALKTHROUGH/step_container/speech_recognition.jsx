import { useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./microphone.css";
import microphone from '../../../../assets/microphone.png'
import React from 'react';


function Speech({ currentStep, setCurrentStepNum, setSideBar, sideBar, setConversionPopup})  {
    console.log(currentStep)
    const commands = [
        {
            command: "next step",
            callback: () => {
                changeStep(currentStep + 1)
            }
        },
        {
            command: "previous step",
            callback: () => {
                changeStep(currentStep - 1)
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
    return sideBar ? (
    <div className="microphone-wrapper">
        <div className="mircophone-container">
        <div
            ref={microphoneRef}
            onClick={handleListening}
        >
        {isListening ? (<span class="text-4xl material-icons">
        record_voice_over
        </span>)  : (<span class="text-4xl material-icons">
        voice_over_off
        </span> )}
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
    ) : (
        <div className="microphone-wrapper">
        <div className="mircophone-container">
        <div
            ref={microphoneRef}
            onClick={handleListening}
        >
        {isListening ? <span class="text-4xl material-icons">
        record_voice_over
        </span>  : <span class="text-4xl material-icons">
        voice_over_off
        </span> }
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
    )
}
export default Speech;