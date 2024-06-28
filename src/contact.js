const contactBuild = () => {
    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'contact-section');

    const contactPhoto = document.createElement('div');
    contactPhoto.setAttribute('id', 'contact-photo');
    contactContainer.appendChild(contactPhoto);

    const contactInfo = document.createElement('div');
    contactInfo.setAttribute('id', 'contact-info');

    contactInfo.appendChild(buildContacts('ADDRESS:', '5TH WHO KNOWS WHERE AVE EAST', 1));
    contactInfo.appendChild(buildContacts('CONTACT:', '111-111-1111', 1));
    contactInfo.appendChild(buildContacts('HOURS:', 'MON-SUN', 2, '9AM - 9PM'));

    contactContainer.appendChild(contactInfo);
    return contactContainer;
}

const buildContacts = (heading, description, numDescriptions, other='') => {
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info-holder');

    const header = document.createElement('h2');
    header.textContent = heading;

    const information = document.createElement('div');
    information.textContent = description;


    contactInfo.appendChild(header);
    contactInfo.appendChild(information);
    if (numDescriptions > 1) {
        const moreInfo = document.createElement('div');
        moreInfo.textContent = other;
        contactInfo.appendChild(moreInfo);
    }
    
    return contactInfo;
}

const loadContactBuild = () => {
    const mainContent = document.querySelector('#content');
    mainContent.textContent = '';
    mainContent.appendChild(contactBuild());
}

export default loadContactBuild;