var newAccount;
var balance
function Account(accountNumber,name,amount,date){
    this.accountNumber=accountNumber;
    this.name=name;
    this.amount=amount;
    this.date=date;
    
}

Account.prototype.fullAccount = function () {
    return this.accountNumber + " " + this.name +" "+ this.amount + " " + this.date;
}

//user interface logic
$(document).ready(function () {
    $("#initialForm").hide()
    $("#registerForm").submit(function (event) {
        event.preventDefault();
        var inputtedAccountNumber = $("input#accountNumber").val();
        var inputtedName = $("input#name").val();
        var inputtedAmount = parseInt($("input#amount").val());
        var inputtedDate = $("input#date").val();
        newAccount = new Account(inputtedAccountNumber,inputtedName,inputtedAmount, inputtedDate  );
        
        // $("#initialForm").append(newAccount.fullAccount());
        $("#initialForm").show();
        $("#registerForm").hide();
        // $("#initialForm").text(newAccount.fullAccount());
        $("#initAccount").text(newAccount.accountNumber);
        $("#initName").text(newAccount.name);
        $("#initialAmout").text(newAccount.amount);
        $("#initialDate").text(newAccount.date);
       $("button#submit").click(function () {            
});
$("#deposit").click(function(){
    // alert("click")
    $("#depositForm").show(); 
    $("#initialForm").hide();
    $("input#depositName").val(newAccount.name);
    $("input#depositAccount").val(newAccount.accountNumber);
})
$("#dep").click(function(){
    // alert("click")
    // $("#depositForm").show(); 
    // $("#initialForm").hide(); 
    // $("input#depositName").val(newAccount.name);
    // $("input#depositAccount").val(newAccount.accountNumber);
    var deposit = parseInt($("input#depositAmout").val());
    balance = deposit + newAccount.amount
    console.log(balance)
    $("#accountForm").show();
    $("#depositForm").hide();
    $("#accountName").text(newAccount.name);
    $("#account").text(newAccount.accountNumber);
    $("#accountDate").text(newAccount.date);
    $("#accountAmout").text(balance);

    
 


    

});
$("#withdrow").click(function(){
    // alert("click")
    $("#withdrowForm").show(); 
    $("#initialForm").hide(); 
    $("input#withdrowName").val(newAccount.name);
    $("input#withdrowAccount").val(newAccount.accountNumber);
    
});
$("#with").click(function(){ 
var withdrow = parseInt($("input#withdrowAmout").val()); 
    balance = newAccount.amount-withdrow  
    console.log(balance)
    var date = $("input#depositDate").val();
    $("#accountForm").show();
    $("#withdrowForm").hide();
    $("#accountName").text(newAccount.name);
    $("#account").text(newAccount.accountNumber);
    $("#accountDate").text(newAccount.date);
    $("#accountAmout").text(balance);
});

});
});
