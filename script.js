const url = 'https://text-to-speech27.p.rapidapi.com/speech?text=hello%20world&lang=en-us';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '109f0d85bcmsh95ba744601b25c7p10f5f0jsne994381b2349',
    'X-RapidAPI-Host': 'text-to-speech27.p.rapidapi.com',
  },
};

try {
  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text(); // Parse the JSON response
    })
    .then((data) => {
      console.log('record', data);
    })
    .catch((error) => {
      console.error(error);
    });
} catch (error) {
  console.error(error);
}
