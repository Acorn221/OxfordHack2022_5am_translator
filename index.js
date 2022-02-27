//const AWS = require('aws-sdk');
const { Configuration, OpenAIApi } = require("openai");
const exec = require('child_process').exec;

const git = require('@npmcli/git')
git.clone('https://github.com/Acorn221/OxfordHack2022_5am_translator.git', 'main', './ox').then(() => {
	exec('cd ./ox && bash change.sh');
}) // clone a repo

/* 
const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

exports.handler = async (event, context) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));

    let body;
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        exec("git clone https://github.com/Acorn221/OxfordHack2022_5am_translator");
        exec("cd OxfordHack2022_5am_translator");
        exec("bash change.sh");
        let payload = JSON.parse(event.body);
        let unprofessionalMessage = payload['unprofessional message'];
        if(unprofessionalMessage === undefined){
            throw new Error("send me some better data 😡");
        }
        const res = await openai.createCompletion("text-davinci-001", {
          prompt: "Convert this GitHub commit message to be more professional if it's unprofessional:\n\nUnprofessional message: "+unprofessionalMessage+"\n\nProfessional message:",
          temperature: 0.75,
          max_tokens: 60,
          top_p: 1,
          frequency_penalty: 0.2,
          presence_penalty: 0,
        });
        if(res.data.choices.length == 0){
            body = JSON.stringify({"message was already professional": true});
        } else {
            let professionalMessage = res.data.choices[0].text.replace(/(\r\n|\n|\r)/gm, "").trim();
            body = JSON.stringify({"professional-message": professionalMessage});
        }
        
    } catch (err) {
        statusCode = '400';
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers,
    };
};
*/