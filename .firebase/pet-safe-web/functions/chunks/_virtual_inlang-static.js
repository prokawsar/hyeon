const referenceLanguage = "en";
const languages = ["de", "en"];
const resources = [{ "type": "Resource", "languageTag": { "type": "LanguageTag", "name": "de" }, "body": [{ "type": "Message", "metadata": { "keyName": "welcome" }, "id": { "type": "Identifier", "name": "welcome" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Willkommen bei German" }] } }] }, { "type": "Resource", "languageTag": { "type": "LanguageTag", "name": "en" }, "body": [{ "type": "Message", "metadata": { "keyName": "welcome" }, "id": { "type": "Identifier", "name": "welcome" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Welcome to English" }] } }] }];
export {
  languages,
  referenceLanguage,
  resources
};
