var login = 'login';
var pass = 'pass';
var href = {
    main: "https://secure.ideabank.pl/",
    login: "https://secure.ideabank.pl/main/index"
};
if(window.location.href !== href.main && window.location.href !== href.login) {
    window.location.href = href.main;
} else if(window.location.href === href.main) {
    document.querySelector('#log').value = login;
    document.querySelector('#form_login [type=submit]').click();
} else if(window.location.href === href.login) {
    var elems = document.querySelectorAll('.password_parts_inputs');
    var len = elems.length;
    for(var i = 0; i < len; i++) {
        var id = elems[i].getAttribute('id');
        var index = id.match(/^pass_(.+)/)[1];
        var symbol = pass.charAt(index);
        elems[i].value = symbol;
        if(i === len - 1) {
            document.querySelector('#login_page [type=submit]').click();
        }
    }
}