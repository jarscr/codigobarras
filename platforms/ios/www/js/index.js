
function scanear(){
    cordova.plugins.barcodeScanner.scan(
        function (result) {  
            alert(result.text);
        },
        function (error) {
            notificacion("Ha ocurrido un error al escanear.");
        }
    );
};
