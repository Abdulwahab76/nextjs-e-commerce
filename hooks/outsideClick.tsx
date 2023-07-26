import React, { useEffect } from "react";

// Custom hook for handling outside clicks
export default function useOutsideClick(ref: React.RefObject<HTMLElement>, callback: () => void) {
    function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            callback();
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref, callback]);
}