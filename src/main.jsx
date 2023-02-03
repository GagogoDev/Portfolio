// Import Local
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Portfolio } from './Portfolio';
import './styles.css';

// Import I18n
import { i18n } from './translations/i18next_config.js';
export default i18n;

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Portfolio />
    </React.StrictMode>
);
