function Bankacc(acn,fam,typ,balnc){
    this.Acc_number = acn;
    this.Name = fam;
    this.Type = typ;
    this.Balance = balnc;
    this.status =true;
    this.deposit= function(deosit){
        this.Balance=this.Balance+deosit
        console.log("Remaining Balance after deposit ₹"+(this.Balance));
    }
    this.withdraw=function(wid){
        if(this.Balance>=wid)
        {
            this.Balance=this.Balance-wid
            console.log("Remaining Balance after withdrawal ₹"+(this.Balance));
        }
        else
        {
            console.log("insufficient balance");
        }
    }
    this.checkbal=function(){
        console.log("Balance ₹"+(this.Balance));
    }
    this.isActive =function(con){
        if(this.status===true)
        {
            this.status=con
            console.log("Account is Active");
        }
        else
        {
            this.status=con
            console.log("Account is Inactive");
        }
    }
}
let ac1= new Bankacc(1001,"palak","sb_eazy_account",20000)
let ac2= new Bankacc(1002,"priya","sb_eazy_account",90000)
let ac3= new Bankacc(1101,"Rani","crb_bsn_account",2500000)
function getTotalBalance(){
    let total=ac1.Balance+ac2.Balance+ac3.Balance
    console.log("Total account Balance ₹"+(total));;
}
ac1.deposit(10000)
ac2.withdraw(10000)
ac1.checkbal()
ac2.checkbal()
ac3.checkbal()
ac1.isActive(false)
ac1.isActive()
ac2.isActive()
ac3.isActive()
getTotalBalance()