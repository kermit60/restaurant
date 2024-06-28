const homeBuild = () => {
    const homeSection = document.createElement('div');
    homeSection.setAttribute('id', 'home-section');

    const containerDiv = document.createElement('div');
    const englishSlogan = createSlogan('Grill, Savor, Repeat - Experience the Ultimate Yakiniku Feast', 'eng-slogan');
    const japaneseSlogan = createSlogan('焼いて、味わって、繰り返す - 極上の焼肉を体験しよう', 'jap-slogan');

    const button = document.createElement('button');
    button.textContent = 'BOOK A TABLE';
    button.setAttribute('id', 'booking');

    containerDiv.appendChild(englishSlogan);
    containerDiv.appendChild(japaneseSlogan);
    
    homeSection.appendChild(containerDiv);
    homeSection.appendChild(button);

    return homeSection;

}

function createSlogan (slogan, id) {
    const sloganDiv = document.createElement('div');
    sloganDiv.setAttribute('id', id);
    sloganDiv.classList.add('slogan');
    sloganDiv.textContent = slogan;
    return sloganDiv;
}

const loadHomeBuild = () => {
    const mainContent = document.querySelector('#content'); 
    mainContent.textContent = '';
    mainContent.appendChild(homeBuild());

}


export default loadHomeBuild;