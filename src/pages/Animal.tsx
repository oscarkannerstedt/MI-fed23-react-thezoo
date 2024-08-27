import { useParams } from "react-router-dom";

export const Animal = () => {
    const { id } = useParams();

    return <>
        <h1>Animal: {id}</h1>
    </>
};