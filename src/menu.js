const menuBuild = () => {
    const menuSection = document.createElement('div')
    menuSection.setAttribute('id', 'menu-section');

    menuSection.appendChild(createMenuItem('PREMIUM MEAT', 'Indulge in the ultimate yakiniku experience with our carefully curated premium meat selection. Sourced from the finest farms and meticulously prepared, each cut is a testament to quality and flavor. Our premium meats are handpicked for their marbling, tenderness, and rich taste, ensuring every bite is a delight for your senses.'))
    menuSection.appendChild(createMenuItem('SEAFOOD', `Dive into the exquisite flavors of the ocean with our premium seafood selection. Carefully sourced from the world's finest waters, each offering is chosen for its freshness, quality, and taste. Our premium seafood provides a gourmet experience that pairs perfectly with the traditional yakiniku style.`, 'seafood', true))
    menuSection.appendChild(createMenuItem('VARIETY OF VEGETABLES', `Experience the vibrant and fresh flavors of our premium vegetable selection. Handpicked for their quality and taste, our vegetables are perfect for grilling and complementing our meats and seafood. Each vegetable is chosen for its exceptional flavor, texture, and nutritional value, ensuring a wholesome and delicious addition to your yakiniku meal.`, 'vegetables'))

    return menuSection;
}

const createMenuItem = (heading, description, imageId='premium-beef', invert=false) => {
    const menuItem  = document.createElement('div');
    menuItem.classList.add('menu-item');

    const image = document.createElement('div');
    image.classList.add('menu-image');
    image.setAttribute('id', imageId);

    const caption = document.createElement('div');
    caption.classList.add('menu-caption');

    const header = document.createElement('h1');
    header.classList.add('menu-header');
    header.textContent = heading;

    const info = document.createElement('div');
    info.classList.add('menu-description');
    info.textContent = description;

    caption.appendChild(header);
    caption.appendChild(info);

    if (invert) {
        menuItem.appendChild(caption);
        menuItem.appendChild(image);
    } else {
        menuItem.appendChild(image);
        menuItem.appendChild(caption);
    }
    return menuItem;

}

const loadMenuBuild = () => {
    const mainContent = document.querySelector('#content');
    mainContent.textContent = '';
    mainContent.appendChild(menuBuild());

}

export default loadMenuBuild;