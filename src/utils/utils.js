const EMAIL_REGEX = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

export const validateEmail = async (email) => {
    if (!email) {
        return { valid: false, blank: true };
    }
    return { valid: EMAIL_REGEX.test(email), blank: false };
};

export const cortaTexto = (texto, tamanho) => {
    if (texto.length <= tamanho) {
        return texto;
    }

    let truncated = texto.substr(0, tamanho);

    // Encontre o último espaço em branco no texto truncado
    let lastSpace = truncated.lastIndexOf(' ');

    // Se houver um espaço em branco, corte o texto nele para não cortar no meio de uma palavra
    if (lastSpace > 0) {
        truncated = truncated.substr(0, lastSpace);
    }

    // Adicione os pontos de reticência no final
    return `${truncated}...`;
};

export const formatToMoney = (value) => {
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
        throw new Error(
            'O valor fornecido não é válido para conversão em moeda.',
        );
    }

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    return formatter.format(numericValue);
};

export const isValidDocument = (document) => {
    document = document.replace(/[^\d]+/g, ''); // remove caracteres não numéricos
    if (document.length === 11) {
        return isValidCPF(document);
    } else if (document.length === 14) {
        return isValidCNPJ(document);
    }
    return false;
};

export const isValidCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, ''); // remove caracteres não numéricos
    if (cpf.length !== 11) {
        // CPF deve ter 11 dígitos
        return false;
    }

    // verifica se todos os dígitos são iguais
    for (let i = 0; i < 10; i++) {
        if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
            break;
        }
        if (i === 9) {
            return false;
        }
    }

    // calcula o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let mod = sum % 11;
    let digit1 = mod < 2 ? 0 : 11 - mod;

    // calcula o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    mod = sum % 11;
    let digit2 = mod < 2 ? 0 : 11 - mod;

    // verifica se os dígitos verificadores são iguais aos do CPF
    return (
        digit1 === parseInt(cpf.charAt(9)) &&
        digit2 === parseInt(cpf.charAt(10))
    );
};

export const isValidCNPJ = (cnpj) => {
    cnpj = cnpj.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

    if (!cnpj || cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) {
        return false;
    }

    const validateDigits = (digits) => {
        let numbers = cnpj.substring(0, digits);
        let sum = 0;
        let pos = digits - 7;

        for (let i = digits; i >= 1; i--) {
            sum += numbers.charAt(digits - i) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }

        const result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        return cnpj.charAt(digits) === result.toString();
    };

    return validateDigits(12) && validateDigits(13);
};

export const formatPhoneNumber = (input) => {
    if (!input) return;

    // Remove qualquer caracter que não seja dígito
    let numeros = input.replace(/\D/g, '');

    // Se houver mais de 11 dígitos, corta para 11
    if (numeros.length > 11) {
        numeros = numeros.substring(0, 11);
    }

    // adiciona o "(" na frente dos dois primeiros dígitos
    if (numeros.length >= 2) {
        numeros = `(${numeros.substring(0, 2)}) ${numeros.substring(2)}`;
    }

    // adiciona o "-" após o sexto ou sétimo dígito, dependendo da quantidade total de dígitos
    if (numeros.length >= 8) {
        const posicaoHifen = numeros.length <= 10 ? 9 : 10;
        numeros = `${numeros.substring(0, posicaoHifen)}-${numeros.substring(
            posicaoHifen,
        )}`;
    }

    // Se o formato exceder 15 caracteres, corta para 15
    if (numeros.length > 15) {
        numeros = numeros.substring(0, 15);
    }

    return numeros;
};

export const extractPhoneNumberAndAreaCode = (celular) => {
    const regex = /\((\d{2})\)\s*(\d{4,5}-\d{4})/;
    const match = celular.match(regex);
    if (!match) throw new Error('Formato do número de celular inválido.');
    return {
        area_code: match[1],
        phone: match[2],
    };
};
