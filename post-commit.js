const fs = require('fs');
fs.writeFileSync(process.env.GIT_PARAMS, 'some message edited');

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

const messageFile = process.env.GIT_PARAMS;
const message = fs.readFileSync(messageFile, { encoding: 'utf-8' });
const messageTitle = message.split('\n')[0];

if (issueTag && isInvalidMessage(messageTitle)) {
  // Apply the issue tag to message title
  const messageLines = message.split('\n');
  messageLines[0] = `[hello] ${messageTitle}`;
  fs.writeFileSync(messageFile, messageLines.join('\n'), { encoding: 'utf-8' });
  console.log(`New message title: ${messageLines[0]}`);
}