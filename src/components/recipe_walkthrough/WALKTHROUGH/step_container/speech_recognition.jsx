import { useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./microphone.css";
import microphone from '/Users/cecily/Ada/capstone/recipeasy-frontend/src/assets/microphone.png'

function Speech({ currentStep, setCurrentStep, setIsListening, isListening})  {
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
    console.log(isListening)
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
        setCurrentStep(nextNum)
    }
    return (
    <div className="microphone-wrapper">
        <div className="mircophone-container text-center">
        <div
            className="text-center"
            ref={microphoneRef}
            onClick={handleListening}
        >
            <span class="text-4xl material-icons">
            voice_over_off
            </span>         
            <br/>
            <span className="microphone-status text-center text-sm">
                {isListening ? "Listening..." : "voice command"}
            </span>
        </div>
        {isListening && (
            <button className=" text-red-700 text-sm font-bold border p-1 rounded-sm" onClick={stopHandle}>
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