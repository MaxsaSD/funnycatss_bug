$('#mySuperForm input[type="submit"]').click(sendForm);

function sendForm(e){
    const form = $('#mySuperForm')[0];
    if (!form.checkValidity()){
        return;
    }
    e.preventDefault();
    $.ajax({
    url: "https://formspree.io/134oriflame@gmail.com", 
    method: "POST",
    data: {
        name:$('#name').val(),
        email:$('#email').val(),
        comments:$('#comments').val()
    },
    dataType: "json"
})
.done(function(){
    $('#mySuperForm')[0].reset();
    $('#msg').html('Дякуємо!')
})
.fail(function(){
    $('#msg').html('Реєстрація пройшла з помилками!')
});

}