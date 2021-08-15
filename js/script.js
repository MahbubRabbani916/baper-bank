document.getElementById('login-form').addEventListener('click', function () {
    const emailFilled = document.getElementById('user-email');
    const userEmail = emailFilled.value;
    // console.log(userEmail)

    const passwordFilled = document.getElementById('user-password');
    const userPassword = passwordFilled.value;
    // console.log(userPassword)
    if (userEmail == 'rabbani@gmail.com' && userPassword == 'janinaami')
        window.location.href = 'bankingsite.html'
})