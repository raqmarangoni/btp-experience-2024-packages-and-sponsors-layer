sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageToast) {
        "use strict";

        return Controller.extend("com.lab2dev.btpexperience.controller.Home", {
            onInit: function () {
                const patrocinadoresModel = {
                    patrocinadores: [
                        {
                            Empresa: "Lab2Dev",
                            Estado: "São Paulo",
                            Logo: "../img/lab2dev.png"
                        },
                        {
                            Empresa: "Empresa A",
                            Estado: "São Paulo",
                            Logo: "../img/empresaA.png"
                        },
                        {
                            Empresa: "Empresa B",
                            Estado: "São Paulo",
                            Logo: "../img/empresaA.png"
                        },
                        {
                            Empresa: "Empresa C",
                            Estado: "São Paulo",
                            Logo: "../img/empresaA.png"
                        },
                        {
                            Empresa: "Empresa D",
                            Estado: "São Paulo",
                            Logo: "../img/empresaA.png"
                        },
                        {
                            Empresa: "Empresa E",
                            Estado: "São Paulo",
                            Logo: "../img/empresaA.png"
                        },
                        {
                            Empresa: "Empresa F",
                            Estado: "São Paulo",
                            Logo: "../img/empresaA.png"
                        },
                        {
                            Empresa: "Empresa G",
                            Estado: "São Paulo",
                            Logo: "../img/empresaA.png"
                        },
                    ]
                };
                const oModel = new JSONModel(patrocinadoresModel);
                this.getView().setModel(oModel);
            },
            onPress: function () {
                const message = 'pressed';
                MessageToast.show(message);
            },
            onOpenDialog() {
                
                this.pDialog ??= this.loadFragment({
                    name: "com.lab2dev.btpexperience.view.HelloDialog"
                });
            
                this.pDialog.then((oDialog) => oDialog.open());
            }
        });
    });
