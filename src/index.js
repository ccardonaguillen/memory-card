import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

function importAll(r) {
    let images = {};
    r.keys().forEach((img) => {
        images[img.replace('./', '').replace(/\.(png|jpe?g|svg|webp)$/, '')] = r(img);
    });
    return images;
}

const images = importAll(
    require.context('./assets/media/photos', false, /\.(png|jpe?g|svg|webp)$/)
);

const pirates = [
    {
        name: 'Monkey D. Luffy',
        photo: images.luffy,
        bounty: 3000000000,
        crew: 'Straw Hat',
        flag: '#',
    },
    { name: 'Roronoa Zoro', photo: images.zoro, bounty: 1111000000, crew: 'Straw Hat', flag: '#' },
    {
        name: 'Marshall D. Teach',
        photo: images.teach,
        bounty: 3996000000,
        crew: 'Blackbeard',
        flag: '#',
    },
    { name: 'Capone Bege', photo: images.bege, bounty: 350000000, crew: 'Fire Tank', flag: '#' },
    { name: 'Jewelry Bonney', photo: images.bonney, bounty: 320000000, crew: 'Bonney', flag: '#' },
    { name: 'Basil Hawkins', photo: images.hawkins, bounty: 320000000, crew: 'Hawkins', flag: '#' },
    { name: 'Scratchmen Apoo', photo: images.apoo, bounty: 350000000, crew: 'On Air', flag: '#' },
    { name: 'Eustass Kid', photo: images.kid, bounty: 3000000000, crew: 'Kid', flag: '#' },
    { name: 'Killer', photo: images.killer, bounty: 200000000, crew: 'Kid', flag: '#' },
    { name: 'Urouge', photo: images.urouge, bounty: 108000000, crew: 'Fallen Monk', flag: '#' },
    { name: 'X Drake', photo: images.xdrake, bounty: 220000000, crew: 'Drake', flag: '#' },
    {
        name: 'Trafalgar Law',
        photo: images.trafalgar,
        bounty: 3000000000,
        crew: 'Heart',
        flag: '#',
    },
];

export { pirates };
