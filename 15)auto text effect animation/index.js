const containerEl = document.querySelector(".container");

const career = ["YouTuber" , "Web Developer" , "FreeLancer" , "Instructor" , "Professor"];

let careerIndex = 0;

let characterIndex = 0;
updateCareer();

function updateCareer(){
    characterIndex++;
    containerEl.innerHTML = `I Am ${career[careerIndex].slice(0,1) === "I" ? "an":"a"} ${career[careerIndex].slice(0,characterIndex)}`;
    
    if(characterIndex === career[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }

    if (careerIndex === career.length) {
        careerIndex = 0;
    }
    setTimeout(updateCareer,400);
}
