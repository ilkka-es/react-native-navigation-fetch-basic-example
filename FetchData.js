const URI = 'https://randomuser.me/api/';

export default {
    async fetchUsers() {
        try {
                let response = await fetch(URI + '/?results=50');
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }
} 