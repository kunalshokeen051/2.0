const { Configuration, OpenAIApi } = require("openai");
const express = require("express")
const configuration = new Configuration({
    organization: "org-5RwApKs0drM3cbnRFvafFDKH",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

// api to recieve data

const app = express()
const port = 3080


app.post('/', async (req, res) => {
    const response = await openai.createCompletion({
        "model": "text-davinci-003",
        "prompt": "Say this is a test",
        "max_tokens": 7,
        "temperature": 0,
    });
    console.log(response.data.choices[0].text);
    res.json({data})
})

app.listen(port, () => {
    console.log("Server running on port 3080");
})