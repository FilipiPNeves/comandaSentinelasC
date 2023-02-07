function abrirWhatsapp() {

    var prato1 = document.getElementById("prato1").value;
    var prato2 = document.getElementById("prato2").value;
    var prato3 = document.getElementById("prato3").value;
    var prato4 = document.getElementById("prato4").value;
    var prato5 = document.getElementById("prato5").value;
    var prato6 = document.getElementById("prato6").value;
    var prato7 = document.getElementById("prato7").value;
    var prato8 = document.getElementById("prato8").value;

    var alcool1 = document.getElementById("alcool1").value;
    var alcool2 = document.getElementById("alcool2").value;
    var alcool3 = document.getElementById("alcool3").value;
    var alcool4 = document.getElementById("alcool4").value;
    var alcool5 = document.getElementById("alcool5").value;
    var alcool6 = document.getElementById("alcool6").value;
    var alcool7 = document.getElementById("alcool7").value;
    var alcool8 = document.getElementById("alcool8").value;

    var semalcool1 = document.getElementById("semalcool1").value;
    var semalcool2 = document.getElementById("semalcool2").value;
    var semalcool3 = document.getElementById("semalcool3").value;
    var semalcool4 = document.getElementById("semalcool4").value;
    var semalcool5 = document.getElementById("semalcool5").value;
    var semalcool6 = document.getElementById("semalcool6").value;
    var semalcool7 = document.getElementById("semalcool7").value;
    var semalcool8 = document.getElementById("semalcool8").value;

    var sobremesa1 = document.getElementById("sobremesa1").value;
    var sobremesa2 = document.getElementById("sobremesa2").value;
    var sobremesa3 = document.getElementById("sobremesa3").value;
    var sobremesa4 = document.getElementById("sobremesa4").value;
    var sobremesa5 = document.getElementById("sobremesa5").value;
    var sobremesa6 = document.getElementById("sobremesa6").value;
    var sobremesa7 = document.getElementById("sobremesa7").value;
    var sobremesa8 = document.getElementById("sobremesa8").value;

    var nomeDoQuarto = document.getElementById("nomeDoQuarto").value;
    var nome = document.getElementById("nome").value;
    var msg = document.getElementById("msg").value;


    var q1 = document.getElementById("q1");
    var o1 = document.getElementById("o1");

    var q2 = document.getElementById("q2");
    var o2 = document.getElementById("o2");

    var q3 = document.getElementById("q3");
    var o3 = document.getElementById("o3");
    
    var q4 = document.getElementById("q4");
    var o4 = document.getElementById("o4");
    
    var q5 = document.getElementById("q5");
    var o5 = document.getElementById("o5");

    var q6 = document.getElementById("q6");
    var o6 = document.getElementById("o6");

    var q7 = document.getElementById("q7");
    var o7 = document.getElementById("o7");

    var q8 = document.getElementById("q8");
    var o8 = document.getElementById("o8");

    let div1 = document.getElementById("div1").checked;
    
    let div2 = document.getElementById("div2").checked;

    
    


    var url = "https://wa.me/5522999939162?text=" // 
        + "*---------------------Comanda Sentinelas--------------------*" + "%0a" 
        + "%0a" 



        //Hospede ou Passante

        if(nomeDoQuarto != 0 && div1 == 1 ) {
            url += "*Nome do quarto*: " + nomeDoQuarto + "%0a" + "%0a"
        }else if (nome != 0 && div2 == 1 ) {
            url += "*Nome do Passante*: " + nome + "%0a" + "%0a"
        }

        


        //PRATOS IF ELSE


    if(prato8 != 0) {
        url +=
                "---------------------------*Pratos*---------------------------" + "%0a"
                + "*Prato 01*: " + prato1 + "%0a" 
                + "Quantidade: " + q1.value + "%0a"
                if(o1.value != 0) {
                    url +=  "Obs: " + o1.value +"%0a" +"%0a"
                }else url+= "%0a"
                
                url += "*Prato 02*: " + prato2 + "%0a"
                + "Quantidade: " + q2.value + "%0a"

                if(o2.value != 0) {
                    url +=  "Obs: " + o2.value +"%0a" + "%0a"
                }else url+= "%0a"
                
                url+= "*Prato 03*: " + prato3 + "%0a"
                + "Quantidade: " + q3.value + "%0a"

                if(o3.value != 0) {
                    url += "Obs: " + o3.value +"%0a" + "%0a"
                }else url+= "%0a"
                
                url += "*Prato 04*: " + prato4 + "%0a" 
                + "Quantidade: " + q4.value + "%0a"

                if(o4.value != 0) {
                    url += "Obs: " + o4.value +"%0a" + "%0a"
                }else url+= "%0a"
                
                url += "*Prato 05*: " + prato5 + "%0a"
                + "Quantidade: " + q5.value + "%0a"

                if(o5.value != 0) {
                    url += "Obs: " + o5.value +"%0a" + "%0a"
                }else url+= "%0a"
                
                url += "*Prato 06*: " + prato6 + "%0a"
                + "Quantidade: " + q6.value + "%0a"

                if(o6.value != 0) {
                    url += "Obs: " + o6.value + "%0a"  + "%0a"
                }else url+= "%0a"
                
                url+= "*Prato 07*: " + prato7 + "%0a" 
                + "Quantidade: " + q7.value + "%0a"

                if(o7.value != 0) {
                    url += "Obs: " + o7.value + "%0a" + "%0a"
                }else url+= "%0a"
                
                url+= "*Prato 08*: " + prato8 + "%0a" 
                + "Quantidade: " + q8.value + "%0a"

                if(o8.value != 0) {
                    url += "Obs: " + o8.value + "%0a" + "%0a"
                }else url+= "%0a"
                
    }else if(prato7 != 0) {
        url +=
                "---------------------------*Pratos*---------------------------" + "%0a"
                + "*Prato 01*: " + prato1 + "%0a" 
                + "Quantidade: " + q1.value + "%0a"
                if(o1.value != 0) {
                    url +=  "Obs: " + o1.value +"%0a" +"%0a"
                }else url+= "%0a"
                
                url += "*Prato 02*: " + prato2 + "%0a"
                + "Quantidade: " + q2.value + "%0a"

                if(o2.value != 0) {
                    url +=  "Obs: " + o2.value +"%0a" + "%0a"
                }else url+= "%0a"
                
                url+= "*Prato 03*: " + prato3 + "%0a"
                + "Quantidade: " + q3.value + "%0a"

                if(o3.value != 0) {
                    url += "Obs: " + o3.value +"%0a" + "%0a"
                }else url+= "%0a"
                
                url += "*Prato 04*: " + prato4 + "%0a" 
                + "Quantidade: " + q4.value + "%0a"

                if(o4.value != 0) {
                    url += "Obs: " + o4.value +"%0a" + "%0a"
                }else url+= "%0a"
                
                url += "*Prato 05*: " + prato5 + "%0a"
                + "Quantidade: " + q5.value + "%0a"

                if(o5.value != 0) {
                    url += "Obs: " + o5.value +"%0a" + "%0a"
                }else url+= "%0a"
                
                url += "*Prato 06*: " + prato6 + "%0a"
                + "Quantidade: " + q6.value + "%0a"

                if(o6.value != 0) {
                    url += "Obs: " + o6.value + "%0a"  + "%0a"
                }else url+= "%0a"
                
                url+= "*Prato 07*: " + prato7 + "%0a" 
                + "Quantidade: " + q7.value + "%0a"

                if(o7.value != 0) {
                    url += "Obs: " + o7.value + "%0a" + "%0a"
                }else url+= "%0a"

    }else if(prato6 != 0) {
        url +=
                "---------------------------*Pratos*---------------------------" + "%0a"
                + "*Prato 01*: " + prato1 + "%0a" 
                + "Quantidade: " + q1.value + "%0a"
                if(o1.value != 0) {
                    url +=  "Obs: " + o1.value +"%0a" +"%0a"
                }else url+= "%0a"
                
                url += "*Prato 02*: " + prato2 + "%0a"
                + "Quantidade: " + q2.value + "%0a"

                if(o2.value != 0) {
                    url +=  "Obs: " + o2.value +"%0a" + "%0a"
                }else url+= "%0a"
                
                url+= "*Prato 03*: " + prato3 + "%0a"
                + "Quantidade: " + q3.value + "%0a"

                if(o3.value != 0) {
                    url += "Obs: " + o3.value +"%0a" + "%0a"
                }else url+= "%0a"
                
                url += "*Prato 04*: " + prato4 + "%0a" 
                + "Quantidade: " + q4.value + "%0a"

                if(o4.value != 0) {
                    url += "Obs: " + o4.value +"%0a" + "%0a"
                }else url+= "%0a"
                
                url += "*Prato 05*: " + prato5 + "%0a"
                + "Quantidade: " + q5.value + "%0a"

                if(o5.value != 0) {
                    url += "Obs: " + o5.value +"%0a" + "%0a"
                }else url+= "%0a"
                
                url += "*Prato 06*: " + prato6 + "%0a"
                + "Quantidade: " + q6.value + "%0a"

                if(o6.value != 0) {
                    url += "Obs: " + o6.value + "%0a"  + "%0a"
                }else url+= "%0a"

    }else if(prato5 != 0) {
        url +=
                "---------------------------*Pratos*---------------------------" + "%0a"
                + "*Prato 01*: " + prato1 + "%0a" 
                + "Quantidade: " + q1.value + "%0a"
                if(o1.value != 0) {
                    url +=  "Obs: " + o1.value +"%0a" +"%0a"
                }else url+= "%0a"
                
                url += "*Prato 02*: " + prato2 + "%0a"
                + "Quantidade: " + q2.value + "%0a"

                if(o2.value != 0) {
                    url +=  "Obs: " + o2.value +"%0a" + "%0a"
                }else url+= "%0a"
                
                url+= "*Prato 03*: " + prato3 + "%0a"
                + "Quantidade: " + q3.value + "%0a"

                if(o3.value != 0) {
                    url += "Obs: " + o3.value +"%0a" + "%0a"
                }else url+= "%0a"
                
                url += "*Prato 04*: " + prato4 + "%0a" 
                + "Quantidade: " + q4.value + "%0a"

                if(o4.value != 0) {
                    url += "Obs: " + o4.value +"%0a" + "%0a"
                }else url+= "%0a"
                
                url += "*Prato 05*: " + prato5 + "%0a"
                + "Quantidade: " + q5.value + "%0a"

                if(o5.value != 0) {
                    url += "Obs: " + o5.value +"%0a" + "%0a"
                }else url+= "%0a"

    }else if(prato4 != 0 ) {
        url +=
                "---------------------------*Pratos*---------------------------" + "%0a"
                + "*Prato 01*: " + prato1 + "%0a" 
                + "Quantidade: " + q1.value + "%0a"
                if(o1.value != 0) {
                    url +=  "Obs: " + o1.value +"%0a" +"%0a"
                }else url+= "%0a"
                
                url += "*Prato 02*: " + prato2 + "%0a"
                + "Quantidade: " + q2.value + "%0a"

                if(o2.value != 0) {
                    url +=  "Obs: " + o2.value +"%0a" + "%0a"
                }else url+= "%0a"
                
                url+= "*Prato 03*: " + prato3 + "%0a"
                + "Quantidade: " + q3.value + "%0a"

                if(o3.value != 0) {
                    url += "Obs: " + o3.value +"%0a" + "%0a"
                }else url+= "%0a"
                
                url += "*Prato 04*: " + prato4 + "%0a" 
                + "Quantidade: " + q4.value + "%0a"

                if(o4.value != 0) {
                    url += "Obs: " + o4.value +"%0a" + "%0a"
                }else url+= "%0a"

    }else if(prato3 != 0) {
        url +=
                "---------------------------*Pratos*---------------------------" + "%0a"
                + "*Prato 01*: " + prato1 + "%0a" 
                + "Quantidade: " + q1.value + "%0a"
                
                if(o1.value != 0) {
                    url +=  "Obs: " + o1.value +"%0a" +"%0a"
                }else url+= "%0a"
                
                url += "*Prato 02*: " + prato2 + "%0a"
                + "Quantidade: " + q2.value + "%0a"

                if(o2.value != 0) {
                    url +=  "Obs: " + o2.value +"%0a" + "%0a"
                }else url+= "%0a"
                
                url += "*Prato 03*: " + prato3 + "%0a"
                + "Quantidade: " + q3.value + "%0a"

                if(o3.value != 0) {
                    url += "Obs: " + o3.value +"%0a" + "%0a"
                }else url+= "%0a"

    }else if(prato2 != 0) {
        url +=
                "---------------------------*Pratos*---------------------------" + "%0a"
                + "*Prato 01*: " + prato1 + "%0a" 
                + "Quantidade: " + q1.value + "%0a"

                if(o1.value != 0) {
                    url +=  "Obs: " + o1.value +"%0a" +"%0a"
                }else url+= "%0a"
                
                url += "*Prato 02*: " + prato2 + "%0a"
                + "Quantidade: " + q2.value + "%0a"

                if(o2.value != 0) {
                    url +=  "Obs: " + o2.value +"%0a" + "%0a"
                }else url+= "%0a"

                

    }else if(prato1 != 0) {
        url +=
                "----------------------------*Pratos*----------------------------" + "%0a"
                + "*Prato 01*: " + prato1 + "%0a" 
                + "Quantidade: " + q1.value + "%0a"

                if(o1.value != 0) {
                    url +=  "Obs: " + o1.value +"%0a" +"%0a"
                }else url+= "%0a"

    }

    // Bebidas ALcoolicas IF ELSE

    if(alcool8 != 0) {
        url +=
                "-----------------------*Bebidas Alcolicas*---------------------" + "%0a"
                + "*Bebida 01*: " + alcool1 + "%0a"
                + "Quantidade: " + a1q.value + "%0a"
                if(a1o.value != 0) {
                    url +=  "Obs: " + a1o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 02*: " + alcool2 + "%0a"  
                    + "Quantidade: " + a1q.value + "%0a"

                if(a2o.value != 0) {
                    url +=  "Obs: " + a2o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 03*: " + alcool3 + "%0a"  
                    + "Quantidade: " + a3q.value + "%0a"

                if(a3o.value != 0) {
                    url +=  "Obs: " + a3o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 04*: " + alcool4 + "%0a"  
                    + "Quantidade: " + a4q.value + "%0a"

                if(a4o.value != 0) {
                    url +=  "Obs: " + a4o.value +"%0a" +"%0a"
                }else url += '%0a'
                
                url+= "*Bebida 05*: " + alcool5 + "%0a"  
                    + "Quantidade: " + a5q.value + "%0a"

                if(a5o.value != 0) {
                    url +=  "Obs: " + a5o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 06*: " + alcool6 + "%0a"  
                + "Quantidade: " + a6q.value + "%0a"

                if(a6o.value != 0) {
                    url +=  "Obs: " + a6o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 07*: " + alcool7 + "%0a"  
                + "Quantidade: " + a7q.value + "%0a"

                if(a7o.value != 0) {
                    url +=  "Obs: " + a7o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 08*: " + alcool8 + "%0a"  
                + "Quantidade: " + a8q.value + "%0a"

                if(a8o.value != 0) {
                    url +=  "Obs: " + a8o.value +"%0a" +"%0a"
                }else url += '%0a'

    }else if(alcool7 != 0) {
        url +=
                "-----------------------*Bebidas Alcolicas*---------------------" + "%0a"
                + "*Bebida 01*: " + alcool1 + "%0a"
                + "Quantidade: " + a1q.value + "%0a"
                if(a1o.value != 0) {
                    url +=  "Obs: " + a1o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 02*: " + alcool2 + "%0a"  
                    + "Quantidade: " + a1q.value + "%0a"

                if(a2o.value != 0) {
                    url +=  "Obs: " + a2o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 03*: " + alcool3 + "%0a"  
                    + "Quantidade: " + a3q.value + "%0a"

                if(a3o.value != 0) {
                    url +=  "Obs: " + a3o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 04*: " + alcool4 + "%0a"  
                    + "Quantidade: " + a4q.value + "%0a"

                if(a4o.value != 0) {
                    url +=  "Obs: " + a4o.value +"%0a" +"%0a"
                }else url += '%0a'
                
                url+= "*Bebida 05*: " + alcool5 + "%0a"  
                    + "Quantidade: " + a5q.value + "%0a"

                if(a5o.value != 0) {
                    url +=  "Obs: " + a5o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 06*: " + alcool6 + "%0a"  
                + "Quantidade: " + a6q.value + "%0a"

                if(a6o.value != 0) {
                    url +=  "Obs: " + a6o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 07*: " + alcool7 + "%0a"  
                + "Quantidade: " + a7q.value + "%0a"

                if(a7o.value != 0) {
                    url +=  "Obs: " + a7o.value +"%0a" +"%0a"
                }else url += '%0a'

    }else if(alcool6 != 0) {
        url +=
                 "-----------------------*Bebidas Alcolicas*---------------------" + "%0a"
                + "*Bebida 01*: " + alcool1 + "%0a"
                + "Quantidade: " + a1q.value + "%0a"
                if(a1o.value != 0) {
                    url +=  "Obs: " + a1o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 02*: " + alcool2 + "%0a"  
                    + "Quantidade: " + a1q.value + "%0a"

                if(a2o.value != 0) {
                    url +=  "Obs: " + a2o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 03*: " + alcool3 + "%0a"  
                    + "Quantidade: " + a3q.value + "%0a"

                if(a3o.value != 0) {
                    url +=  "Obs: " + a3o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 04*: " + alcool4 + "%0a"  
                    + "Quantidade: " + a4q.value + "%0a"

                if(a4o.value != 0) {
                    url +=  "Obs: " + a4o.value +"%0a" +"%0a"
                }else url += '%0a'
                
                url+= "*Bebida 05*: " + alcool5 + "%0a"  
                    + "Quantidade: " + a5q.value + "%0a"

                if(a5o.value != 0) {
                    url +=  "Obs: " + a5o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 06*: " + alcool6 + "%0a"  
                + "Quantidade: " + a6q.value + "%0a"

                if(a6o.value != 0) {
                    url +=  "Obs: " + a6o.value +"%0a" +"%0a"
                }else url += '%0a'

    }else if(alcool5 != 0) {
        url +=
                "-----------------------*Bebidas Alcolicas*---------------------" + "%0a"
                + "*Bebida 01*: " + alcool1 + "%0a"
                + "Quantidade: " + a1q.value + "%0a"
                if(a1o.value != 0) {
                    url +=  "Obs: " + a1o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 02*: " + alcool2 + "%0a"  
                    + "Quantidade: " + a1q.value + "%0a"

                if(a2o.value != 0) {
                    url +=  "Obs: " + a2o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 03*: " + alcool3 + "%0a"  
                    + "Quantidade: " + a3q.value + "%0a"

                if(a3o.value != 0) {
                    url +=  "Obs: " + a3o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 04*: " + alcool4 + "%0a"  
                    + "Quantidade: " + a4q.value + "%0a"

                if(a4o.value != 0) {
                    url +=  "Obs: " + a4o.value +"%0a" +"%0a"
                }else url += '%0a'
                
                url+= "*Bebida 05*: " + alcool5 + "%0a"  
                    + "Quantidade: " + a5q.value + "%0a"

                if(a5o.value != 0) {
                    url +=  "Obs: " + a5o.value +"%0a" +"%0a"
                }else url += '%0a'

    }else if(alcool4 != 0 ) {
        url +=
                "-----------------------*Bebidas Alcolicas*---------------------" + "%0a"
                + "*Bebida 01*: " + alcool1 + "%0a"
                + "Quantidade: " + a1q.value + "%0a"
                if(a1o.value != 0) {
                    url +=  "Obs: " + a1o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 02*: " + alcool2 + "%0a"  
                    + "Quantidade: " + a1q.value + "%0a"

                if(a2o.value != 0) {
                    url +=  "Obs: " + a2o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 03*: " + alcool3 + "%0a"  
                    + "Quantidade: " + a3q.value + "%0a"

                if(a3o.value != 0) {
                    url +=  "Obs: " + a3o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 04*: " + alcool4 + "%0a"  
                    + "Quantidade: " + a4q.value + "%0a"

                if(a4o.value != 0) {
                    url +=  "Obs: " + a4o.value +"%0a" +"%0a"
                }else url += '%0a'
    }else if(alcool3 != 0) {
        url +=
                "-----------------------*Bebidas Alcolicas*---------------------" + "%0a"
                + "*Bebida 01*: " + alcool1 + "%0a"
                + "Quantidade: " + a1q.value + "%0a"
                if(a1o.value != 0) {
                    url +=  "Obs: " + a1o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 02*: " + alcool2 + "%0a"  
                    + "Quantidade: " + a1q.value + "%0a"

                if(a2o.value != 0) {
                    url +=  "Obs: " + a2o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 03*: " + alcool3 + "%0a"  
                    + "Quantidade: " + a3q.value + "%0a"

                if(a3o.value != 0) {
                    url +=  "Obs: " + a3o.value +"%0a" +"%0a"
                }else url += '%0a'


    }else if(alcool2 != 0) {
        url +=
                  "-----------------------*Bebidas Alcolicas*---------------------" + "%0a"
                + "*Bebida 01*: " + alcool1 + "%0a"
                + "Quantidade: " + a1q.value + "%0a"
                if(a1o.value != 0) {
                    url +=  "Obs: " + a1o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 02*: " + alcool2 + "%0a"  
                    + "Quantidade: " + a1q.value + "%0a"

                if(a2o.value != 0) {
                    url +=  "Obs: " + a2o.value +"%0a" +"%0a"
                }else url += '%0a'

    }else if(alcool1 != 0) {
        url +=
                 "-----------------------*Bebidas Alcolicas*---------------------" + "%0a"
                + "*Bebida 01*: " + alcool1 + "%0a" 
                + "Quantidade: " + a1q.value + "%0a"
                if(a1o.value != 0) {
                    url +=  "Obs: " + a1o.value +"%0a" +"%0a"
                }else url += '%0a'
    }

    //Bebidas Não Alcoolicas

    if(semalcool8 != 0) {
        url +=
                "-------------------*Bebidas NÃO Alcolicas*-------------------" + "%0a"
                + "*Bebida 01*: " + semalcool1 + "%0a" 
                + "Quantidade: " + sa1q.value + "%0a"
                if(sa1o.value != 0) {
                    url +=  "Obs: " + sa1o.value +"%0a" +"%0a"
                }else url += '%0a'
                
                url+= "*Bebida 02*: " + semalcool2 + "%0a"
                + "Quantidade: " + sa2q.value + "%0a"
                if(sa2o.value != 0) {
                    url +=  "Obs: " + sa2o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 03*: " + semalcool3 + "%0a"
                + "Quantidade: " + sa3q.value + "%0a"
                if(sa3o.value != 0) {
                    url +=  "Obs: " + sa3o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 04*: " + semalcool4 + "%0a"
                + "Quantidade: " + sa4q.value + "%0a"
                if(sa4o.value != 0) {
                    url +=  "Obs: " + sa4o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 05*: " + semalcool5 + "%0a"
                + "Quantidade: " + sa5q.value + "%0a"
                if(sa5o.value != 0) {
                    url +=  "Obs: " + sa5o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 06*: " + semalcool6 + "%0a"
                + "Quantidade: " + sa6q.value + "%0a"
                if(sa6o.value != 0) {
                    url +=  "Obs: " + sa6o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 07*: " + semalcool7 + "%0a"
                + "Quantidade: " + sa7q.value + "%0a"
                if(sa7o.value != 0) {
                    url +=  "Obs: " + sa7o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 08*: " + semalcool8 + "%0a"
                + "Quantidade: " + sa8q.value + "%0a"
                if(sa8o.value != 0) {
                    url +=  "Obs: " + sa8o.value +"%0a" +"%0a"
                }else url += '%0a'

    }else if(semalcool7 != 0) {
        url +=
                "-------------------*Bebidas NÃO Alcolicas*-------------------" + "%0a"
                + "*Bebida 01*: " + semalcool1 + "%0a" 
                + "Quantidade: " + sa1q.value + "%0a"
                if(sa1o.value != 0) {
                    url +=  "Obs: " + sa1o.value +"%0a" +"%0a"
                }else url += '%0a'
                
                url+= "*Bebida 02*: " + semalcool2 + "%0a"
                + "Quantidade: " + sa2q.value + "%0a"
                if(sa2o.value != 0) {
                    url +=  "Obs: " + sa2o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 03*: " + semalcool3 + "%0a"
                + "Quantidade: " + sa3q.value + "%0a"
                if(sa3o.value != 0) {
                    url +=  "Obs: " + sa3o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 04*: " + semalcool4 + "%0a"
                + "Quantidade: " + sa4q.value + "%0a"
                if(sa4o.value != 0) {
                    url +=  "Obs: " + sa4o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 05*: " + semalcool5 + "%0a"
                + "Quantidade: " + sa5q.value + "%0a"
                if(sa5o.value != 0) {
                    url +=  "Obs: " + sa5o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 06*: " + semalcool6 + "%0a"
                + "Quantidade: " + sa6q.value + "%0a"
                if(sa6o.value != 0) {
                    url +=  "Obs: " + sa6o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 07*: " + semalcool7 + "%0a"
                + "Quantidade: " + sa7q.value + "%0a"
                if(sa7o.value != 0) {
                    url +=  "Obs: " + sa7o.value +"%0a" +"%0a"
                }else url += '%0a'

    }else if(semalcool6 != 0) {
        url +=
                "-------------------*Bebidas NÃO Alcolicas*-------------------" + "%0a"
                + "*Bebida 01*: " + semalcool1 + "%0a" 
                + "Quantidade: " + sa1q.value + "%0a"
                if(sa1o.value != 0) {
                    url +=  "Obs: " + sa1o.value +"%0a" +"%0a"
                }else url += '%0a'
                
                url+= "*Bebida 02*: " + semalcool2 + "%0a"
                + "Quantidade: " + sa2q.value + "%0a"
                if(sa2o.value != 0) {
                    url +=  "Obs: " + sa2o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 03*: " + semalcool3 + "%0a"
                + "Quantidade: " + sa3q.value + "%0a"
                if(sa3o.value != 0) {
                    url +=  "Obs: " + sa3o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 04*: " + semalcool4 + "%0a"
                + "Quantidade: " + sa4q.value + "%0a"
                if(sa4o.value != 0) {
                    url +=  "Obs: " + sa4o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 05*: " + semalcool5 + "%0a"
                + "Quantidade: " + sa5q.value + "%0a"
                if(sa5o.value != 0) {
                    url +=  "Obs: " + sa5o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 06*: " + semalcool6 + "%0a"
                + "Quantidade: " + sa6q.value + "%0a"
                if(sa6o.value != 0) {
                    url +=  "Obs: " + sa6o.value +"%0a" +"%0a"
                }else url += '%0a'
    }else if(semalcool5 != 0) {
        url +=
                "-------------------*Bebidas NÃO Alcolicas*-------------------" + "%0a"
                + "*Bebida 01*: " + semalcool1 + "%0a" 
                + "Quantidade: " + sa1q.value + "%0a"
                if(sa1o.value != 0) {
                    url +=  "Obs: " + sa1o.value +"%0a" +"%0a"
                }else url += '%0a'
                
                url+= "*Bebida 02*: " + semalcool2 + "%0a"
                + "Quantidade: " + sa2q.value + "%0a"
                if(sa2o.value != 0) {
                    url +=  "Obs: " + sa2o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 03*: " + semalcool3 + "%0a"
                + "Quantidade: " + sa3q.value + "%0a"
                if(sa3o.value != 0) {
                    url +=  "Obs: " + sa3o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 04*: " + semalcool4 + "%0a"
                + "Quantidade: " + sa4q.value + "%0a"
                if(sa4o.value != 0) {
                    url +=  "Obs: " + sa4o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 05*: " + semalcool5 + "%0a"
                + "Quantidade: " + sa5q.value + "%0a"
                if(sa5o.value != 0) {
                    url +=  "Obs: " + sa5o.value +"%0a" +"%0a"
                }else url += '%0a'

    }else if(semalcool4 != 0 ) {
        url +=
                "-------------------*Bebidas NÃO Alcolicas*-------------------" + "%0a"
                + "*Bebida 01*: " + semalcool1 + "%0a" 
                + "Quantidade: " + sa1q.value + "%0a"
                if(sa1o.value != 0) {
                    url +=  "Obs: " + sa1o.value +"%0a" +"%0a"
                }else url += '%0a'
                
                url+= "*Bebida 02*: " + semalcool2 + "%0a"
                + "Quantidade: " + sa2q.value + "%0a"
                if(sa2o.value != 0) {
                    url +=  "Obs: " + sa2o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 03*: " + semalcool3 + "%0a"
                + "Quantidade: " + sa3q.value + "%0a"
                if(sa3o.value != 0) {
                    url +=  "Obs: " + sa3o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 04*: " + semalcool4 + "%0a"
                + "Quantidade: " + sa4q.value + "%0a"
                if(sa4o.value != 0) {
                    url +=  "Obs: " + sa4o.value +"%0a" +"%0a"
                }else url += '%0a'
    }else if(semalcool3 != 0) {
        url +=
                "-------------------*Bebidas NÃO Alcolicas*-------------------" + "%0a"
                + "*Bebida 01*: " + semalcool1 + "%0a" 
                + "Quantidade: " + sa1q.value + "%0a"
                if(sa1o.value != 0) {
                    url +=  "Obs: " + sa1o.value +"%0a" +"%0a"
                }else url += '%0a'
                
                url+= "*Bebida 02*: " + semalcool2 + "%0a"
                + "Quantidade: " + sa2q.value + "%0a"
                if(sa2o.value != 0) {
                    url +=  "Obs: " + sa2o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Bebida 03*: " + semalcool3 + "%0a"
                + "Quantidade: " + sa3q.value + "%0a"
                if(sa3o.value != 0) {
                    url +=  "Obs: " + sa3o.value +"%0a" +"%0a"
                }else url += '%0a'
    }else if(semalcool2 != 0) {
        url +=
                "-------------------*Bebidas NÃO Alcolicas*-------------------" + "%0a"
                + "*Bebida 01*: " + semalcool1 + "%0a" 
                + "Quantidade: " + sa1q.value + "%0a"
                if(sa1o.value != 0) {
                    url +=  "Obs: " + sa1o.value +"%0a" +"%0a"
                }else url += '%0a'
                
                url+= "*Bebida 02*: " + semalcool2 + "%0a"
                + "Quantidade: " + sa2q.value + "%0a"
                if(sa2o.value != 0) {
                    url +=  "Obs: " + sa2o.value +"%0a" +"%0a"
                }else url += '%0a'

    }else if(semalcool1 != 0) {
        url +=
                "-------------------*Bebidas NÃO Alcolicas*-------------------" + "%0a"
                + "*Bebida 01*: " + semalcool1 + "%0a" 
                + "Quantidade: " + sa1q.value + "%0a"
                if(sa1o.value != 0) {
                    url +=  "Obs: " + sa1o.value +"%0a" +"%0a"
                }else url += '%0a'
    }


    //Sobremesas

    if(sobremesa8 != 0) {
        url +=
                "-------------------------*Sobremesas*-------------------------" + "%0a"
                + "*Sobremesa 01*: " + sobremesa1 + "%0a"
                + "Quantidade: " + s1q.value + "%0a"
                if(s1o.value != 0) {
                    url +=  "Obs: " + s1o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 02*: " + sobremesa2 + "%0a"
                + "Quantidade: " + s2q.value + "%0a"
                if(s2o.value != 0) {
                    url +=  "Obs: " + s2o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 03*: " + sobremesa3 + "%0a"
                + "Quantidade: " + s3q.value + "%0a"
                if(s3o.value != 0) {
                    url +=  "Obs: " + s3o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 04*: " + sobremesa4 + "%0a"
                + "Quantidade: " + s4q.value + "%0a"
                if(s4o.value != 0) {
                    url +=  "Obs: " + s4o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 05*: " + sobremesa5 + "%0a"
                + "Quantidade: " + s5q.value + "%0a"
                if(s5o.value != 0) {
                    url +=  "Obs: " + s5o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 06*: " + sobremesa6 + "%0a"
                + "Quantidade: " + s6q.value + "%0a"
                if(s6o.value != 0) {
                    url +=  "Obs: " + s6o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 07*: " + sobremesa7 + "%0a"
                + "Quantidade: " + s7q.value + "%0a"
                if(s7o.value != 0) {
                    url +=  "Obs: " + s7o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 08*: " + sobremesa8 + "%0a"
                + "Quantidade: " + s8q.value + "%0a"
                if(s8o.value != 0) {
                    url +=  "Obs: " + s8o.value +"%0a" +"%0a"
                }else url += '%0a'

    }else if(sobremesa7 != 0) {
        url +=
                "-------------------------*Sobremesas*-------------------------" + "%0a"
                + "*Sobremesa 01*: " + sobremesa1 + "%0a"
                + "Quantidade: " + s1q.value + "%0a"
                if(s1o.value != 0) {
                    url +=  "Obs: " + s1o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 02*: " + sobremesa2 + "%0a"
                + "Quantidade: " + s2q.value + "%0a"
                if(s2o.value != 0) {
                    url +=  "Obs: " + s2o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 03*: " + sobremesa3 + "%0a"
                + "Quantidade: " + s3q.value + "%0a"
                if(s3o.value != 0) {
                    url +=  "Obs: " + s3o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 04*: " + sobremesa4 + "%0a"
                + "Quantidade: " + s4q.value + "%0a"
                if(s4o.value != 0) {
                    url +=  "Obs: " + s4o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 05*: " + sobremesa5 + "%0a"
                + "Quantidade: " + s5q.value + "%0a"
                if(s5o.value != 0) {
                    url +=  "Obs: " + s5o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 06*: " + sobremesa6 + "%0a"
                + "Quantidade: " + s6q.value + "%0a"
                if(s6o.value != 0) {
                    url +=  "Obs: " + s6o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 07*: " + sobremesa7 + "%0a"
                + "Quantidade: " + s7q.value + "%0a"
                if(s7o.value != 0) {
                    url +=  "Obs: " + s7o.value +"%0a" +"%0a"
                }else url += '%0a'

    }else if(sobremesa6 != 0) {
        url +=
               "-------------------------*Sobremesas*-------------------------" + "%0a"
                + "*Sobremesa 01*: " + sobremesa1 + "%0a"
                + "Quantidade: " + s1q.value + "%0a"
                if(s1o.value != 0) {
                    url +=  "Obs: " + s1o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 02*: " + sobremesa2 + "%0a"
                + "Quantidade: " + s2q.value + "%0a"
                if(s2o.value != 0) {
                    url +=  "Obs: " + s2o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 03*: " + sobremesa3 + "%0a"
                + "Quantidade: " + s3q.value + "%0a"
                if(s3o.value != 0) {
                    url +=  "Obs: " + s3o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 04*: " + sobremesa4 + "%0a"
                + "Quantidade: " + s4q.value + "%0a"
                if(s4o.value != 0) {
                    url +=  "Obs: " + s4o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 05*: " + sobremesa5 + "%0a"
                + "Quantidade: " + s5q.value + "%0a"
                if(s5o.value != 0) {
                    url +=  "Obs: " + s5o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 06*: " + sobremesa6 + "%0a"
                + "Quantidade: " + s6q.value + "%0a"
                if(s6o.value != 0) {
                    url +=  "Obs: " + s6o.value +"%0a" +"%0a"
                }else url += '%0a'

    }else if(sobremesa5 != 0) {
        url +=
                "-------------------------*Sobremesas*-------------------------" + "%0a"
                + "*Sobremesa 01*: " + sobremesa1 + "%0a"
                + "Quantidade: " + s1q.value + "%0a"
                if(s1o.value != 0) {
                    url +=  "Obs: " + s1o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 02*: " + sobremesa2 + "%0a"
                + "Quantidade: " + s2q.value + "%0a"
                if(s2o.value != 0) {
                    url +=  "Obs: " + s2o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 03*: " + sobremesa3 + "%0a"
                + "Quantidade: " + s3q.value + "%0a"
                if(s3o.value != 0) {
                    url +=  "Obs: " + s3o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 04*: " + sobremesa4 + "%0a"
                + "Quantidade: " + s4q.value + "%0a"
                if(s4o.value != 0) {
                    url +=  "Obs: " + s4o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 05*: " + sobremesa5 + "%0a"
                + "Quantidade: " + s5q.value + "%0a"
                if(s5o.value != 0) {
                    url +=  "Obs: " + s5o.value +"%0a" +"%0a"
                }else url += '%0a'

    }else if(sobremesa4 != 0 ) {
        url +=
                "-------------------------*Sobremesas*-------------------------" + "%0a"
                + "*Sobremesa 01*: " + sobremesa1 + "%0a"
                + "Quantidade: " + s1q.value + "%0a"
                if(s1o.value != 0) {
                    url +=  "Obs: " + s1o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 02*: " + sobremesa2 + "%0a"
                + "Quantidade: " + s2q.value + "%0a"
                if(s2o.value != 0) {
                    url +=  "Obs: " + s2o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 03*: " + sobremesa3 + "%0a"
                + "Quantidade: " + s3q.value + "%0a"
                if(s3o.value != 0) {
                    url +=  "Obs: " + s3o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 04*: " + sobremesa4 + "%0a"
                + "Quantidade: " + s4q.value + "%0a"
                if(s4o.value != 0) {
                    url +=  "Obs: " + s4o.value +"%0a" +"%0a"
                }else url += '%0a'
    }else if(sobremesa3 != 0) {
        url +=
                  "-------------------------*Sobremesas*-------------------------" + "%0a"
                + "*Sobremesa 01*: " + sobremesa1 + "%0a"
                + "Quantidade: " + s1q.value + "%0a"
                if(s1o.value != 0) {
                    url +=  "Obs: " + s1o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 02*: " + sobremesa2 + "%0a"
                + "Quantidade: " + s2q.value + "%0a"
                if(s2o.value != 0) {
                    url +=  "Obs: " + s2o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 03*: " + sobremesa3 + "%0a"
                + "Quantidade: " + s3q.value + "%0a"
                if(s3o.value != 0) {
                    url +=  "Obs: " + s3o.value +"%0a" +"%0a"
                }else url += '%0a'
    }else if(sobremesa2 != 0) {
        url +=
                "-------------------------*Sobremesas*-------------------------" + "%0a"
                + "*Sobremesa 01*: " + sobremesa1 + "%0a" 
                + "Quantidade: " + s1q.value + "%0a"
                if(s1o.value != 0) {
                    url +=  "Obs: " + s1o.value +"%0a" +"%0a"
                }else url += '%0a'

                url+= "*Sobremesa 02*: " + sobremesa2 + "%0a"
                + "Quantidade: " + s2q.value + "%0a"
                if(s2o.value != 0) {
                    url +=  "Obs: " + s2o.value +"%0a" +"%0a"
                }else url += '%0a'

    }else if(sobremesa1 != 0) {
        url +=
                "-------------------------*Sobremesas*-------------------------" + "%0a"
                + "*Sobremesa 01*: " + sobremesa1 + "%0a" 
                + "Quantidade: " + s1q.value + "%0a"
                if(s1o.value != 0) {
                    url +=  "Obs: " + s1o.value +"%0a" +"%0a"
                }else url += '%0a'
    }

    //MSG

    if(msg != 0) {
        url +=  "------------*Mensagem*-------------" + '%0a' + msg;
    }



    window.open(url, '_blank').focus();
  }




  
  $('input:radio[name="consulta"]').change(function() {
    if ($(this).val() == 1) {
      $("#m1").attr("hidden", false);
      $(this).attr("checked", true);
      
      $("#m2").attr("hidden", true);
      $(this).attr("checked", true);
      
    } else if ($(this).val() == 2) {
      $("#m2").attr("hidden", false);
      $(this).attr("checked", true);
      
      $("#m1").attr("hidden", true);
      $(this).attr("checked", true);
    }
  });


const buttonAdd = document.getElementById('botaoAdd');

buttonAdd.addEventListener('click', addPrato);

var flagPrato = 0;

function addPrato() {

    if(flagPrato == 0) {
        var prato = document.getElementById("prato2");
        prato.style.display = "block";
        q2.style.display = "block"
        o2.style.display = "block"
    }else if(flagPrato == 1) {
        var prato = document.getElementById("prato3");
        prato.style.display = "block";
        q3.style.display = "block"
        o3.style.display = "block"
    }else if(flagPrato == 2) {
        var prato = document.getElementById("prato4");
        prato.style.display = "block";
        q4.style.display = "block"
        o4.style.display = "block"
    }else if(flagPrato == 3) {
        var prato = document.getElementById("prato5");
        prato.style.display = "block";
        q5.style.display = "block"
        o5.style.display = "block"
    }else if(flagPrato == 4) {
        var prato = document.getElementById("prato6");
        prato.style.display = "block";
        q6.style.display = "block"
        o6.style.display = "block"
    }else if(flagPrato == 5) {
        var prato = document.getElementById("prato7");
        prato.style.display = "block";
        q7.style.display = "block"
        o7.style.display = "block"
    }else if(flagPrato == 6) {
        var prato = document.getElementById("prato8");
        prato.style.display = "block";
        q8.style.display = "block"
        o8.style.display = "block"
    }

    flagPrato++;
}

const botaoAddAlcools = document.getElementById('botaoAddAlcools');

botaoAddAlcools.addEventListener('click', addAlcool);

var flagAlcool = 0;

function addAlcool() {

    if(flagAlcool == 0) {
        var alcool = document.getElementById("alcool2");
        alcool.style.display = "block";
        a2q.style.display = "block"
        a2o.style.display = "block"
    }else if(flagAlcool == 1) {
        var alcool = document.getElementById("alcool3");
        alcool.style.display = "block";
        a3q.style.display = "block"
        a3o.style.display = "block"
    }else if(flagAlcool == 2) {
        var alcool = document.getElementById("alcool4");
        alcool.style.display = "block";
        a4q.style.display = "block"
        a4o.style.display = "block"
    }else if(flagAlcool == 3) {
        var alcool = document.getElementById("alcool5");
        alcool.style.display = "block";
        a5q.style.display = "block"
        a5o.style.display = "block"
    }else if(flagAlcool == 4) {
        var alcool = document.getElementById("alcool6");
        alcool.style.display = "block";
        a6q.style.display = "block"
        a6o.style.display = "block"
    }else if(flagAlcool == 5) {
        var alcool = document.getElementById("alcool7");
        alcool.style.display = "block";
        a7q.style.display = "block"
        a7o.style.display = "block"
    }else if(flagAlcool == 6) {
        var alcool = document.getElementById("alcool8");
        alcool.style.display = "block";
        a8q.style.display = "block"
        a8o.style.display = "block"
    }

    flagAlcool++;
}

const botaoAddNaoAlcools = document.getElementById('botaoAddNaoAlcools');

botaoAddNaoAlcools.addEventListener('click', addNaoAlcool);

var flagNaoAlcool = 0;

function addNaoAlcool() {

    if(flagNaoAlcool == 0) {
        var NaoAlcool = document.getElementById("semalcool2");
        NaoAlcool.style.display = "block";
        sa2q.style.display = "block"
        sa2o.style.display = "block"
    }else if(flagNaoAlcool == 1) {
        var NaoAlcool = document.getElementById("semalcool3");
        NaoAlcool.style.display = "block";
        sa3q.style.display = "block"
        sa3o.style.display = "block"
    }else if(flagNaoAlcool == 2) {
        var NaoAlcool = document.getElementById("semalcool4");
        NaoAlcool.style.display = "block";
        sa4q.style.display = "block"
        sa4o.style.display = "block"
    }else if(flagNaoAlcool == 3) {
        var NaoAlcool = document.getElementById("semalcool5");
        NaoAlcool.style.display = "block";
        sa5q.style.display = "block"
        sa5o.style.display = "block"
    }else if(flagNaoAlcool == 4) {
        var NaoAlcool = document.getElementById("semalcool6");
        NaoAlcool.style.display = "block";
        sa6q.style.display = "block"
        sa6o.style.display = "block"
    }else if(flagNaoAlcool == 5) {
        var NaoAlcool = document.getElementById("semalcool7");
        NaoAlcool.style.display = "block";
        sa7q.style.display = "block"
        sa7o.style.display = "block"
    }else if(flagNaoAlcool == 6) {
        var NaoAlcool = document.getElementById("semalcool8");
        NaoAlcool.style.display = "block";
        sa8q.style.display = "block"
        sa8o.style.display = "block"
    }

    flagNaoAlcool++;
}

const botaoAddSobremesa = document.getElementById('botaoAddSobremesa');

botaoAddSobremesa.addEventListener('click', addSobremesa);

var flagSobremesa = 0;

function addSobremesa() {

    if(flagSobremesa == 0) {
        var Sobremesa = document.getElementById("sobremesa2");
        Sobremesa.style.display = "block";
        s2q.style.display = "block"
        s2o.style.display = "block"
    }else if(flagSobremesa == 1) {
        var Sobremesa = document.getElementById("sobremesa3");
        Sobremesa.style.display = "block";
        s3q.style.display = "block"
        s3o.style.display = "block"
    }else if(flagSobremesa == 2) {
        var Sobremesa = document.getElementById("sobremesa4");
        Sobremesa.style.display = "block";
        s4q.style.display = "block"
        s4o.style.display = "block"
    }else if(flagSobremesa == 3) {
        var Sobremesa = document.getElementById("sobremesa5");
        Sobremesa.style.display = "block";
        s5q.style.display = "block"
        s5o.style.display = "block"
    }else if(flagSobremesa == 4) {
        var Sobremesa = document.getElementById("sobremesa6");
        Sobremesa.style.display = "block";
        s6q.style.display = "block"
        s6o.style.display = "block"
    }else if(flagSobremesa == 5) {
        var Sobremesa = document.getElementById("sobremesa7");
        Sobremesa.style.display = "block";
        s7q.style.display = "block"
        s7o.style.display = "block"
    }else if(flagSobremesa == 6) {
        var Sobremesa = document.getElementById("sobremesa8");
        Sobremesa.style.display = "block";
        s8q.style.display = "block"
        s8o.style.display = "block"
    }

    flagSobremesa++;
}