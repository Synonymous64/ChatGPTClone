import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';
import { Configuration, OpenAIApi } from 'openai'

dotenv.config()

// console.log(process.env.OPENAI_API_KEY)

const configuration = new Configuration({
    organization: "org-Q3q1SGMYkDCHIelV3Xe8BB2U",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(express.json())

app.get('/', async (req, res) => {
    res.send('Hello from Maria!');
})

app.post('/', async (req, res) => {
    try {
        const { message } = req.body;

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${message}`,
            temperature: .5,
            max_tokens: 3000,
        });

        res.json({message: response.data.choices[0].text});

    } catch (error) {
        console.error(error)
        res.status(500).send(error || 'Something went wrong');
    }
})

app.listen(5000, () => console.log('AI server started on http://localhost:5000/'))