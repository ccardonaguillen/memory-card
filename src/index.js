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
        images[img.replace('./', '').replace(/(\.png|jpe?g|svg)$/, '')] = r(img);
    });
    return images;
}

const images = importAll(require.context('./assets/media/photos', false, /\.(png|jpe?g|svg)$/));

const pirates = [
    { name: 'Monkey D. Luffy', photo: '#', bounty: 3000000000, crew: 'Straw Hat', flag: '#' },
    { name: 'Roronoa Zoro', photo: '#', bounty: 1111000000, crew: 'Straw Hat', flag: '#' },
    { name: 'Marshall D. Teach', photo: '#', bounty: 3996000000, crew: 'Blackbeard', flag: '#' },
    { name: 'Capone Bege', photo: '#', bounty: 350000000, crew: 'Fire Tank', flag: '#' },
    { name: 'Jewelry Bonney', photo: '#', bounty: 320000000, crew: 'Bonney', flag: '#' },
    { name: 'Basil Hawkins', photo: '#', bounty: 320000000, crew: 'Hawkins', flag: '#' },
    { name: 'Scratchmen Apoo', photo: '#', bounty: 350000000, crew: 'On Air', flag: '#' },
    { name: 'Eustass Kid', photo: '#', bounty: 3000000000, crew: 'Kid', flag: '#' },
    { name: 'Killer', photo: '#', bounty: 200000000, crew: 'Kid', flag: '#' },
    { name: 'Urouge', photo: '#', bounty: 108000000, crew: 'Fallen Monk', flag: '#' },
    { name: 'X Drake', photo: '#', bounty: 220000000, crew: 'Drake', flag: '#' },
    { name: 'Trafalgar D. Water Law', photo: '#', bounty: 3000000000, crew: 'Heart', flag: '#' },
];

export { pirates };
