//functions to export

export function randomEncounter(someArray) {
    const index = Math.floor(Math.random() * someArray.length);
    return (someArray[index]);
}