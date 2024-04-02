import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `eBookstore - ${title}`;
    }, [title])

    return null;
}
 