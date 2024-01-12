function checkAge() {
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    try {
        const age = parseInt(ageText);
        if (isNaN(age)) {
            throw 'please enter a valid age'
        } else if(age < 18) {
            throw 'baby not allowed'
        }
    } catch(err) {
        console.log('Error: ' + err);
        errorTag.innerHTML = 'something wrong'
    } finally {
        console.log('all done');
    }
    console.log(11111);
}