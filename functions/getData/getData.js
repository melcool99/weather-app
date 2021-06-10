require('dotenv').config()
const fetch = require('node-fetch')
const handler = async function (event) {
  const apiKey =process.env.apiKey
  const {city} = event.queryStringParameters;
  // const URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
  const URL2 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  try {
    const response = await fetch(URL, {
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
