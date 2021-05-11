import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID 7j_EbHey-OpeNU4GwYgoq3sbgk5Rb57ALSASm0lPyA8' },
}
);