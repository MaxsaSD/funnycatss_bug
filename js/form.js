$('#mySuperForm input[type="submit"]').click(sendForm);

function sendForm(e){
    const form = $('#mySuperForm')[0];
    if (!form.checkValidity()){
        return;
    }
    e.preventDefault();
    $.ajax({
    url: "https://formspree.io/bravo-soft@ukr.net", 
    method: "POST",
    data: {
        client_name:$('#name').val(),
        client_phone:$('#email').val(),
        client_email:$('#comment').val()
    },
    dataType: "json"
})
.done(function(){
    $('#mySuperForm')[0].reset();
    $('#msg').html('Дякуємо за реєстрацію!')
})
.fail(function(){
    $('#msg').html('Реєстрація пройшла з помилками!')
});

}