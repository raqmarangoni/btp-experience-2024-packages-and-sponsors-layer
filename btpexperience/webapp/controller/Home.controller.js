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
                const sponsorsModel = {
                    sponsors: [
                        {
                            Empresa: "Lab2Dev",
                            Estado: "São Paulo",
                            Logo: "../img/lab2dev.png"
                        },
                        {
                            Empresa: "Empresa A",
                            Estado: "São Paulo",
                            Logo: "../img/empresa.png"
                        },
                        {
                            Empresa: "Empresa B",
                            Estado: "São Paulo",
                            Logo: "../img/empresa.png"
                        },
                        {
                            Empresa: "Empresa C",
                            Estado: "São Paulo",
                            Logo: "../img/empresa.png"
                        },
                        {
                            Empresa: "Empresa D",
                            Estado: "São Paulo",
                            Logo: "../img/empresa.png"
                        },
                        {
                            Empresa: "Empresa E",
                            Estado: "São Paulo",
                            Logo: "../img/empresa.png"
                        },
                        {
                            Empresa: "Empresa F",
                            Estado: "São Paulo",
                            Logo: "../img/empresa.png"
                        },
                        {
                            Empresa: "Empresa G",
                            Estado: "São Paulo",
                            Logo: "../img/empresa.png"
                        },
                        {
                            Empresa: "Empresa H",
                            Estado: "São Paulo",
                            Logo: "../img/empresa.png"
                        },
                    ]
                };
                const oModel = new JSONModel(sponsorsModel);
                this.getView().setModel(oModel);

                const oPackageModel = new JSONModel({ Nome: "Diamante", Preco: "10000,00", Convite: "15", GrupoMajoritario: "Grupo A", Stand: "Grande" });
                this.getView().setModel(oPackageModel, "packageFeatures");
            },

            onOpenDialog() {
                this.pDialog ??= this.loadFragment({
                    name: "com.lab2dev.btpexperience.view.AdministrationPackageFormDialog",
                    controller: this
                });

                const oPlaceholderDefaultModel = new JSONModel({ Nome: "", Preco: "", Convite: "", GrupoMajoritario: "", Stand: "" });

                this.pDialog.then(oDialog => {
                    this.getView().insertDependent(oDialog);
                    this.getView().setModel(oPlaceholderDefaultModel, "packageForm");
                    oDialog.open();
                });
            },
            
            onSendPackage: function () {
                const oData = this.getView().getModel("packageForm").getData();
                const oModel = this.getView().getModel("packageFeatures");
                const { Nome, Preco, Convite, GrupoMajoritario, Stand } = oData


                if (!Nome || !Convite || !Preco || !GrupoMajoritario || !Stand) {
                    return MessageToast.show("Preencha todos os campos obrigatórios!")
                };
                if (isNaN(Preco)) {
                    return MessageToast.show(`O valor informado: ${Preco} precisa ser um número!`)
                };
                if (isNaN(Convite)) {
                    return MessageToast.show(`O valor informado: ${Convite} precisa ser um número!`)
                };

                oData.Preco = Number(oData.Preco).toFixed(2).replace(".", ",");

                oModel.setData(oData);

                this.byId("packageFormDialog").close();
            },

            onCancelChanges: function () {
                const oModel = this.getView().getModel("packageForm");
                const oData = oModel.getData();

                oModel.setData(oData);

                if (this.byId("packageFormDialog").isOpen()) {
                    this.byId("packageFormDialog").close();
                };
            },
        });
    });