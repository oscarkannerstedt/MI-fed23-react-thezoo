import { isTimeToFeed } from "./dateUtils";

export const getBackgroundColor = (lastFed: string): string => {
    const needsImmediateFeeding = isTimeToFeed(lastFed, 4);
    const canBeFed = !needsImmediateFeeding && isTimeToFeed(lastFed, 3);

    if(needsImmediateFeeding) {
        return "red";
    } else if(canBeFed) {
        return "yellow";
    } else {
        return "lightgreen";
    }
};