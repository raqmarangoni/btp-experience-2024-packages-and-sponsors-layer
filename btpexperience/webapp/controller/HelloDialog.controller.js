sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.lab2dev.btpexperience.controller.HelloDialog", {
            onInit: function () {
                const grupoMajoritarioModel = {
                    grupoMajoritario: [
                        {
                            grupo: "A",
                            id: "a"
                        },
                        {
                            grupo: "B",
                            id: "b"
                        },
                        {
                            grupo: "C",
                            id: "c"
                        }]
                };
                const oModel = new JSONModel(grupoMajoritarioModel);            
                this.getView().setModel(oModel);
            },
        });
    });