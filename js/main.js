
$(document).on('mobileinit', function(){
    $.mobile.ajaxEnabled = false;
    $.mobile.defaultPageTransition = 'slide';
    $.mobile.loadingMessage = "Carregant app.";
    $.mobile.pageLoadErrorMessage = 'hi ha hagut un problema, per favor intenti-ho de nou';
    $.mobile.pageLoadErrorMessageTheme = 'c';
});