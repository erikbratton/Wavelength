// wwwroot/js/homePage.js
window.homePage = {
    home: async function () {
        try {
            const response = await fetch('https://b095221229a4.ngrok-free.app/HomePage', {
                method: 'GET',
                credentials: 'include',
                mode: 'cors'
            });
            return response.json();
        } catch (error) {
            console.log('Get home data error:', error);
            throw error;
        }
    },

    getSongRec: async function (track, artists) {
        try {
            const response = await fetch(`https://b095221229a4.ngrok-free.app/getSongRecs?trackName=${track}&artists=${artists}`, {
                method: 'GET',
                credentials: 'include',
                mode: 'cors'
            });
            return response.json();
        } catch (error) {
            console.log('Get track rec error:', error);
            throw error;
        }
    }
};