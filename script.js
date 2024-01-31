function refactorElements() {
    const disableElements = document.querySelectorAll('.disable');

    for (const element of disableElements) {
        element.classList.add('disabled');
        element.classList.remove('enable');
    }
}

function encrypt() {
    const value = document.querySelector('#input').value.trim();
    const separatedChar = value.split('');

    const encryptedText = separatedChar.map(char => {
        switch (char) {
            case 'a':
                return 'ai';
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
                return char;
        }
    });

    refactorElements();

    const resultTextElement = document.querySelector('.result-text');
    resultTextElement.innerHTML = encryptedText.join('');

    if (!value) {
        resultTextElement.innerHTML = 'Nenhuma mensagem';
    }

    document.querySelector('#input').value = '';
}

function decrypt() {
    const value = document.querySelector('#input').value.trim();
    const decryptedText = value
        .replaceAll('ai', 'a')
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');

    refactorElements();

    const resultTextElement = document.querySelector('.result-text');
    resultTextElement.innerHTML = decryptedText;

    if (!value) {
        resultTextElement.innerHTML = 'Nenhuma mensagem';
    }

    document.querySelector('#input').value = '';
}

function copy() {
    const value = document.querySelector('.result-text').innerHTML;
    navigator.clipboard.writeText(value);
    const copyButton = document.querySelector('.btn-copy');
    copyButton.innerHTML = 'Copiado!';
    setTimeout(() => {
        copyButton.innerHTML = 'Copiar';
    }, 1000);
}
