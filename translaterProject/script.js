





document.addEventListener('DOMContentLoaded', function () {
    const translateButton = document.getElementById('translate-button');
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const selectLanguage = document.getElementById('select-language');

    translateButton.addEventListener('click', async function () {
        const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key
        const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect';
        const sourceLang = 'en'; // Assuming the input text is in English

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            body: new URLSearchParams({
                q: inputText.value
            })
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            const detectedLang = data.data.detections[0][0].language;

            // Now that you have detected the language, you can use it to translate
            // You need to replace 'sourceLang' with 'detectedLang' in the translation API call
            // Also, you need to specify the target language using 'selectLanguage.value'
            // Update the 'url' and 'options.body' accordingly for translation

            // Example:
            // const translationUrl = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
            // options.body = new URLSearchParams({
            //     q: inputText.value,
            //     source: detectedLang,
            //     target: selectLanguage.value
            // });
            // const translationResponse = await fetch(translationUrl, options);
            // const translationData = await translationResponse.json();
            // outputText.value = translationData.data.translations[0].translatedText;
        } catch (error) {
            console.error(error);
        }
    });
});
