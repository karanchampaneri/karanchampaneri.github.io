import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    // state logic to show the loading screen
    const [text, setText] = useState("");
    const fullText = "<Hello World!/>";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            //stop typing when the text is fully typed
            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 400);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            style={{
                backgroundColor: "#F0F0EB", // Ivory Medium
                color: "#191919", // Slate Dark
            }}
        >
            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink ml-1">|</span>
            </div>

            <div
                className="w-[200px] h-[2px] rounded relative overflow-hidden"
                style={{
                    backgroundColor: "#CC785C", // Book Cloth
                }}
            >
                <div
                    className="w-[40%] h-full animate-loading-bar"
                    style={{
                        backgroundColor: "#F0F0EB", // Ivory Medium
                        boxShadow: "0 0 15px #CC785C", // Book Cloth
                    }}
                ></div>
            </div>
        </div>
    );
};