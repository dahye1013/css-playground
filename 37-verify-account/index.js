const $codes = document.querySelectorAll('.code')

$codes[0].focus()

$codes.forEach(($code, index) => {
    $code.addEventListener('keydown', (event) => {
        if (event.key >= 0 && event.key <= 9) {
            console.log(index < $codes.length - 1);
            // claer for backspace feature
            $codes[index].value = ''
                // wait for the first one
            setTimeout(() => $codes[index + 1]?.focus(), 10)
        }

        if (event.key === 'Backspace') {
            setTimeout(() => $codes[index - 1]?.focus(), 10)
        }

    })
})
