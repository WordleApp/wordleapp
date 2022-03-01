const axios = require('axios').default;
require('dotenv').config();


exports.handler = async (event) => {

  try {

    var subscriptionKey = process.env.REACT_APP_TRANSLATOR_KEY;
    var endpoint = 'https://api.cognitive.microsofttranslator.com';

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
    var location = 'global';

    axios({
      baseURL: endpoint,
      url: '/translate',
      method: 'post',
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
        'X-ClientTraceId': '9af1714b-cd72-4018-a129-fef6566bb5ae'
        ,
      },
      params: {
        'api-version': '3.0',
        'from': 'en',
        'to': ['de', 'it'],
      },
      data: [{
        'text': 'Hello World!',
      }],
      responseType: 'json'
    }).then(function(response){
      console.log(JSON.stringify(response.data, null, 4));
    });
    return { 
      statusCode: 200, 
    //   body: json
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};