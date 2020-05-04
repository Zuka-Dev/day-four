var slideInterval = 30000;
const getSections=()=> {
    return document.getElementsByTagName('section');

}

const moveFoward=()=>{
    var pointer;
    var sections = getSections();
    for (var i = 0; i< sections.length; i++) {
        if (sections[i].className == 'visible') {
            sections[i].className = '';
            pointer = i;
        }
    }
    if (++pointer == sections.length) {
        pointer = 0;
        
    }
    sections[pointer].className = 'visible';
    setTimeout(moveFoward, slideInterval);
}
const startPlayback=()=> {
    setTimeout(moveFoward, slideInterval);
}
startPlayback();