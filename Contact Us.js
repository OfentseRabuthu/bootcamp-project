function handleFormSubmit(event) {
    event.preventDefault()

    const nameInput = document.getElementById("fullname")
    const emailInput = document.getElementById("email")
    const messageInput = document.getElementById("message")

    const isNameValid = nameInput.value.trim() !== '' && nameInput.validity.valid
    
    if(isNameValid) {

        const nameSpan = document.getElementById('name-span');
        nameSpan.innerText = '';
        console.log(isNameValid)
    }

    const isMessageValid = messageInput.value.trim() !== '' && messageInput.validity.valid
    
    if(isMessageValid) {

        const messageSpan = document.getElementById('message-span');
        messageSpan.innerText = '';
        console.log(isMessageValid)
    }
    
    const isEmailValid = emailInput.value !== '' && emailInput.validity.valid;
    
    if(isEmailValid) { 
        const emailSpan = document.getElementById('email-span');
        emailSpan.innerText = '';
        console.log(isEmailValid);
    }
    
    const isFormValid = isNameValid && isEmailValid && isMessageValid
    console.log(isFormValid)

    if (isFormValid) {
        const formData = new FormData(event.target)
        console.log(formData)
        fetch('https://formspree.io/f/xgegrzza',
            {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }
        )
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.ok) {
                    alert('Email successfully sent')
                    location.reload();
                }

            })
    } else {
        console.log('form invalid')

        if (isNameValid !== true) {

            const nameLabel = document.getElementById('name-label');
            console.log(nameLabel);
            const nameSpan = document.getElementById('name-span');
            nameSpan.innerText = 'Name is not valid!';
           
        }
        if (isEmailValid !== true) {

            const emailLabel = document.getElementById('email-label');
            console.log(emailLabel);
            const emailSpan = document.getElementById('email-span');
            emailSpan.innerText = 'Email is not valid!';
        

        }
        if (isMessageValid !== true) {

            const messageLabel = document.getElementById('message-label');
            console.log(messageLabel);
            const messageSpan = document.getElementById('message-span');
            messageSpan.innerText = 'Message is not valid!';
         
        }
    }
}
