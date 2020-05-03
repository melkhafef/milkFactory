/*
style="background-color:lightyellow ;"
style="background-color:lightsteelblue ;"
style="background-color:lightslategray ;"
style="background-color:lightskyblue ;"
style="background-color:lightseagreen ;"
 style="background-color:lightsalmon ;"
style="background-color:lightpink ;"
style="background-color:lightgrey ;"
style="background-color:lightgreen ;"
style="background-color:lightgray ;"
style="background-color:lightgoldenrodyellow ;"
style="background-color: lightcyan ;"
style="background-color: lightcoral;"
style="background-color: lightblue;"
*/
var milks = [];
var salaries = [];
var others = [];
var owners = [];
var milksAdd = [];
var salariesAdd = [];
var othersAdd = [];
var ownersAdd = [];
var otherTypes = [];
var ownerNames = [];
var othersBuy = [];
var othersBuyAdd = [];
var otherBuyTypes= [];
var otherBuyNames= [];
var productions=[];
var productionsAdd=[];
var sales=[];
var salesAdd=[];
var sellers=[];
var employes=[];
var products=[];
var buys=[];
let thursdays = [];
var theBox = '8465';
var activeSection = 'milk';
var nextSeller = 'زيادات';
var nextEmployee = '';
var nextOther = '';
var nextOwner = '';
var nextProduction = '';
var key1 = 0;
var key2 = 0;
var key3 = 0;
var key4 = 0;
var key5 = 0;
var key6 = 0;
var key7 = 0;
var timeConstant = []
let dateNow = new Date();
let dayNow = dateNow.getDate();
let monthNow = dateNow.getMonth() + 1;
let yearNow = dateNow.getFullYear();
let timeMENow = dateNow.getHours();
if (timeMENow < 12) {
    timeMENow = "ًصباحا";

    }
    else {
    timeMENow = "ًمساءا";
    }
let start = "1 3 2020 ًصباحا" ;
/*
var factoryDatabase = idb.open('Factory', 9, function (upgradeDb) {
    upgradeDb.deleteObjectStore('otherBuy');
    let storeotherBuy =  upgradeDb.createObjectStore('otherBuy', { keyPath: 'key' });
    storeotherBuy.createIndex('name','name');
    storeotherBuy.createIndex('key','key');
    storeotherBuy.createIndex('type','type');
});
*/
if (localStorage.getItem('box') == undefined){
    localStorage.setItem('box', JSON.stringify(theBox));
    localStorage.setItem('seller', JSON.stringify(sellers));
    localStorage.setItem('buy', JSON.stringify(buys));
    localStorage.setItem('employee', JSON.stringify(employes));
    localStorage.setItem('otherType', JSON.stringify(otherTypes));
    localStorage.setItem('ownerName', JSON.stringify(ownerNames));
    localStorage.setItem('otherBuyType', JSON.stringify(otherBuyTypes));
    localStorage.setItem('otherBuyName', JSON.stringify(otherBuyNames));
    localStorage.setItem('product', JSON.stringify(products));
    localStorage.setItem('timeConstant', JSON.stringify(timeConstant));
    localStorage.setItem('nextSeller', JSON.stringify(nextSeller));
    localStorage.setItem('nextProduction', JSON.stringify(nextProduction));
    localStorage.setItem('nextEmployee', JSON.stringify(nextEmployee));
    localStorage.setItem('nextOther', JSON.stringify(nextOther));
    localStorage.setItem('nextOwner', JSON.stringify(nextOwner));
    localStorage.setItem('activeSection', JSON.stringify(activeSection));   
    localStorage.setItem('thursday', JSON.stringify(thursdays)); 
}
const printArea = document.querySelector('#DivIdToPrint');
const content = document.querySelector('#body');
const loadingData = document.querySelector('#loading');
const authentication = document.querySelector('#authentication');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const sign = document.querySelector('#sign');
const moving = document.querySelector("#moving");
const movingOther = document.querySelector("#movingOther");
const selectArr = document.querySelectorAll('select');
function dateConstant (){
    timeConstant = [];
    for(let i=0;i<Days.length;i++){
        timeConstant.push({
            day: Days[i].value,
            month: Monthes[i].value,
            year: Years[i].value,
            time: Time[i].value
        });
    }
    localStorage.setItem('timeConstant', JSON.stringify(timeConstant));
    let dateFixed = JSON.parse(localStorage.getItem('timeConstant'));
    for (i = 0; i < dateFixed.length; i++) {
        Days[i].value = dateFixed[i].day;
        Monthes[i].value = dateFixed[i].month;
        Years[i].value = dateFixed[i].year;
        Time[i].value = dateFixed[i].time;
    }
}

function logIn(){
    if (sessionStorage["user"] === "احمد الخفيف" && sessionStorage["passwoed"] === "01016415126") {
        authentication.classList.add('hide');
        loadingData.classList.remove('hide');    }
    else if (sessionStorage["user"] === 'ناصر العمروسي' && sessionStorage["passwoed"] === "12345678") {
        authentication.classList.add('hide');
        loadingData.classList.remove('hide'); 
          }
    else if (sessionStorage["user"] === 'احمد الحوفي' && sessionStorage["passwoed"] === "87654321") {
        authentication.classList.add('hide');
        loadingData.classList.remove('hide');  
      }
}
logIn();
sign.addEventListener('click', function(){
    if (username.value === 'احمد الخفيف' && password.value==='01016415126'){
        authentication.classList.add('hide');
        loadingData.classList.remove('hide');
        sessionStorage.setItem('user', 'احمد الخفيف');
        sessionStorage.setItem('passwoed', '01016415126');
        window.location.reload();
    }
    else if (username.value === 'ناصر العمروسي' && password.value==='12345678'){
        authentication.classList.add('hide');
        loadingData.classList.remove('hide');
        sessionStorage.setItem('user', 'ناصر العمروسي');
        sessionStorage.setItem('passwoed', '12345678');
        window.location.reload();
    }
    else if (username.value === 'احمد الحوفي' && password.value==='87654321'){
        authentication.classList.add('hide');
        loadingData.classList.remove('hide');
        sessionStorage.setItem('user', 'احمد الحوفي');
        sessionStorage.setItem('passwoed', '87654321');
        window.location.reload();
    }

    else{
        alert('اسم المستخدم أو كلمة السر غير صحيحة')
    }
})
/******* milk ******/
const box = document.querySelector('#boxAndTime input');
const milksellers = document.querySelector('#milk #sellers');
const milkSummary = document.querySelector('#milkSummary');
const milkSummaryHeader = document.querySelector('#milkSummary h1');
const milksellersSalary = document.querySelector('#milk #salary');
const milksellersAdditions = document.querySelector('#milk #addtions');
const milksellersAddtionsDescription = document.querySelector('#milk #addtionsDescription');
const milkNotes = document.querySelector('#milk #notes');
const salariesNotes = document.querySelector('#salaries #notes');
const othersNotes = document.querySelector('#others #notes');
const ownersNotes = document.querySelector('#owners #notes');
const othersBuyNotes = document.querySelector('#othersBuy #notes');
const productionNotes = document.querySelector('#production #notes');
const salesNotes = document.querySelector('#sales #notes');
//const milkTypes = document.querySelector('#milk #milkType');
const milkAmountBakary = document.querySelector('#milk #amountBakary');
const milkPriceBakary = document.querySelector('#milk #priceBakary');
const milkTotalBakary = document.querySelector('#milk #totalBakary');
const milkAmountGamos = document.querySelector('#milk #amountGamos');
const milkPriceGamos = document.querySelector('#milk #priceGamos');
const milkTotalGamos = document.querySelector('#milk #totalGamos');
const milkPaid = document.querySelector('#milk #paid');
const milkDays = document.querySelector('#milk #days');
const milkMonthes = document.querySelector('#milk #monthes');
const milkYears = document.querySelector('#milk #years');
const milkTime = document.querySelector('#milk #time');
const fromDays = document.querySelector('#from #days');
const fromMonthes = document.querySelector('#from #monthes');
const fromYears = document.querySelector('#from #years');
const fromTime = document.querySelector('#from #time');
const toDays = document.querySelector('#to #days');
const toMonthes = document.querySelector('#to #monthes');
const toYears = document.querySelector('#to #years');
const toTime = document.querySelector('#to #time');
const milkBuy = document.querySelector('#milk #buy');
const saveMilkData = document.querySelector('#save');
const milkInfo = document.querySelector('#milkInfo');
const totalMilk = document.querySelector('#totalMilk');
const totalMoney = document.querySelector('#totalMoney');
const totalMilkMAvg = document.querySelector('#totalMilkMAvg');
const totalMilkGamosy = document.querySelector('#totalMilkGamosy');
const totalMilkGamosyM = document.querySelector('#totalMilkGamosyM');
const totalMilkGamosyAvg = document.querySelector('#totalMilkGamosyAvg');
const totalMilkBaary = document.querySelector('#totalMilkBaary');
const totalMilkBaaryM = document.querySelector('#totalMilkBaaryM');
const totalMilkBaaryAvg = document.querySelector('#totalMilkBaaryAvg');
const milkDetails = document.querySelector('#milkDetails');
const milkTable = document.querySelector('#milkTable');
const Days = document.querySelectorAll('#days');
const Monthes = document.querySelectorAll('#monthes');
const Years = document.querySelectorAll('#years');
const Time = document.querySelectorAll('#time');
const DaysName = document.querySelectorAll('#dateNames');
function putDaysNames(){
    for(let i=0;i<Days.length;i++){
        debugger;
        let d = Monthes[i].value + '/' + Days[i].value + '/' + Years[i].value ;
        let date = new Date(d);
        let day = date.getDay();
        if(day==0){
            DaysName[i].value = " الاحد" +" "+ `${Time[i].value}`;
        }
        else if(day==1){
            DaysName[i].value = " الاثنين" +" "+ `${Time[i].value}`;
        }
        else if(day==2){
            DaysName[i].value = " الثلاثاء" +" "+ `${Time[i].value}`;
    
        }
        else if(day==3){
            DaysName[i].value = " الاربعاء" +" "+ `${Time[i].value}`;
    
        }
        else if(day==4){
            DaysName[i].value = " الخميس" +" "+ `${Time[i].value}`;
    
        }
        else if(day==5){
            DaysName[i].value = " الجمعة" +" "+ `${Time[i].value}`;
    
        }
        else if(day==6){
            DaysName[i].value = " السبت" +" "+ `${Time[i].value}`;
    
        }
    }
}
function putDaysNamesSpicified(dateNumbers) {
    let dayName = '';
    let dateOfDay = dateNumbers.split(' ');
    let d = dateOfDay[1] + '/' + dateOfDay[0] + '/' + dateOfDay[2];
    let date = new Date(d);
    let day = date.getDay();
    if (day == 0) {
        dayName = " " + " الاحد";
    }
    else if (day == 1) {
        dayName = " " + " الاثنين";
    }
    else if (day == 2) {
        dayName = " " + " الثلاثاء";

    }
    else if (day == 3) {
        dayName = " " + " الاربعاء";

    }
    else if (day == 4) {
        dayName = " " + " الخميس";

    }
    else if (day == 5) {
        dayName = " " + " الجمعة";

    }
    else if (day == 6) {
        dayName = " " + " السبت";

    }
    return dayName;
}
for(let i=0;i<Days.length;i++){
    Days[i].oninput=function(){
        putDaysNames();
    }
}
for(let i=0;i<Monthes.length;i++){
    Monthes[i].oninput=function(){
        putDaysNames();
    }
}
for(let i=0;i<Years.length;i++){
    Years[i].oninput=function(){
        putDaysNames();
    }
}
for(let i=0;i<Time.length;i++){
    Time[i].oninput=function(){
        putDaysNames();
    }
}
const btnDeleteEmployee = document.querySelector('#btnDeleteEmployee');
dateNow = new Date();
day = dateNow.getDate();
month = dateNow.getMonth() + 1;
year = dateNow.getFullYear();
timeME = dateNow.getHours();
for(i=0;i<Days.length;i++){
    Days[i].value = day;
    Monthes[i].value = month;
    Years[i].value = year;
    if (timeME<12){
        Time[i].value = "ًصباحا";
        
    }
    else{
        Time[i].value = "ًمساءا";
    }
}
milksellersSalary.value = 0;
milksellersAdditions.value = 0;
milkAmountBakary.value = '';
milkAmountGamos.value = '';
milkPriceBakary.value = 0;
milkPriceGamos.value = 0;
milkTotalBakary.value = 0;
milkTotalGamos.value = 0;
milkPaid.value = 0;
milkTotalBakary.disabled = true;
milkTotalGamos.disabled = true;
box.disabled = true;
debugger;
/******* salaries ********/
const employees = document.querySelector('#employees');
const employeeType = document.querySelector('#employeeType');
const salaryPaid = document.querySelector('#salaryPaid');
const salaryAddtions = document.querySelector('#salaries #addtions');
const salaryRemainder = document.querySelector('#salaryRemainder');
const addEmployee = document.querySelector('#addEmployee');
const btnAddEmployee = document.querySelector('#btnAddEmployee');
const employeeName = document.querySelector('#employeeName');
const employeeTypeSelect = document.querySelector('#employeeTypeSelect');
const employeeMonthSalary = document.querySelector('#employeeMonthSalary');
const plusEmployee = document.querySelector('#plusEmployee');
const updateEmployee = document.querySelector('#updateEmployee');
const btnUpdateEmployee = document.querySelector('#btnUpdateEmployee');
const nowEmployeeName = document.querySelector('#nowEmployeeName');
const nowEmployeeSalary = document.querySelector('#nowEmployeeSalary');
const afterEmployeeName = document.querySelector('#afterEmployeeName');
const afterEmployeeTypeSelect = document.querySelector('#afterEmployeeTypeSelect');
const afterEmployeeSalary = document.querySelector('#afterEmployeeSalary');
const changeEmployee = document.querySelector('#changeEmployee');
const salaryDays = document.querySelector('#salaries #days');
const salaryMonthes = document.querySelector('#salaries #monthes');
const salaryYears = document.querySelector('#salaries #years');
const salaryTime = document.querySelector('#salaries #time');
const salaryPay = document.querySelector('#salaries #pay');
const salarySave = document.querySelector('#salaries #save');
const salaryInfo = document.querySelector('#salariesInfo');
const salaryDetails = document.querySelector('#salaryDetails');
const addseller = document.querySelector('#addseller');
const btnAddSeller = document.querySelector('#btnAddSeller');
const sellerName = document.querySelector('#sellerName');
const sellerNameBakaryPrice = document.querySelector('#sellerNameBakaryPrice');
const sellerNameOrder = document.querySelector('#sellerNameOrder');
const sellerNameGamosyPrice = document.querySelector('#sellerNameGamosyPrice');
const plusSeller = document.querySelector('#plusSeller');
const updateseller = document.querySelector('#updateseller');
const btnUpdateSeller = document.querySelector('#btnUpdateSeller');
const nowSellerName = document.querySelector('#nowSellerName');
const nowSellerNameBakaryPrice = document.querySelector('#nowSellerNameBakaryPrice');
const nowSellerNameOrder = document.querySelector('#nowSellerNameOrder');
const nowSellerNameGamosyPrice = document.querySelector('#nowSellerNameGamosyPrice');
const afterSellerNameBakaryPrice = document.querySelector('#afterSellerNameBakaryPrice');
const afterSellerNameOrder = document.querySelector('#afterSellerNameOrder');
const afterSellerNameGamosyPrice = document.querySelector('#afterSellerNameGamosyPrice');
const changeSeller = document.querySelector('#changeSeller');
const btnDeleteSeller = document.querySelector('#btnDeleteSeller');
salaryPaid.value = 0;
salaryAddtions.value = 0;
/******* others ********/
const othersTypes = document.querySelector('#othersTypes');
const othersAmount = document.querySelector('#others #amount');
const othersPrice = document.querySelector('#others #cost');
const othersTotal = document.querySelector('#others #totalCost');
const othersDays = document.querySelector('#others #days');
const othersMonthes = document.querySelector('#others #monthes');
const othersYears = document.querySelector('#others #years');
const othersTime = document.querySelector('#others #time');
const othersPay = document.querySelector('#others #pay');
const othersSave = document.querySelector('#others #save');
const othersInfo = document.querySelector('#othersInfo');
const otherDetails = document.querySelector('#otherDetails');
const addOther = document.querySelector('#addOther');
const btnAddOther = document.querySelector('#btnAddOther');
const OtherName = document.querySelector('#otherName');
const plusOther = document.querySelector('#plusOther');
const updateOther = document.querySelector('#updateOther');
const btnUpdateOther = document.querySelector('#btnUpdateOther');
const nowOtherName = document.querySelector('#nowOtherName');
const afterOtherName = document.querySelector('#afterOtherName');
const changeOther = document.querySelector('#changeOther');
const btnDeleteOther = document.querySelector('#btnDeleteOther');
const addToMasrof = document.querySelector('#addToMasrof');
othersAmount.value=0;
othersPrice.value=0;
othersTotal.value=0;
othersTotal.disabled = true;
/******* owners ********/
const ownersNames = document.querySelector('#ownersNames');
const ownersCash = document.querySelector('#owners #cash');
const ownersPaid = document.querySelector('#owners #paid');
const ownersDays = document.querySelector('#owners #days');
const ownersMonthes = document.querySelector('#owners #monthes');
const ownersYears = document.querySelector('#owners #years');
const ownersTime = document.querySelector('#owners #time');
const ownersSave = document.querySelector('#owners #save');
const ownersInfo = document.querySelector('#ownersInfo');
const ownerDetails = document.querySelector('#ownerDetails');
const addOwner = document.querySelector('#addOwner');
const btnAddOwner = document.querySelector('#btnAddOwner');
const OwnerName = document.querySelector('#ownerName');
const plusOwner = document.querySelector('#plusOwner');
const updateOwner = document.querySelector('#updateOwner');
const btnUpdateOwner = document.querySelector('#btnUpdateOwner');
const nowOwnerName = document.querySelector('#nowOwnerName');
const afterOwnerName = document.querySelector('#afterOwnerName');
const changeOwner = document.querySelector('#changeOwner');
const btnDeleteOwner = document.querySelector('#btnDeleteOwner');
ownersCash.value=0;
ownersPaid.value=0;
/******* othersBuy ********/
const othersBuyTypes = document.querySelector('#othersBuyTypes');
const othersBuyNames = document.querySelector('#othersBuyNames');
const othersBuyAmount = document.querySelector('#othersBuy #amount');
const othersBuyPrice = document.querySelector('#othersBuy #cost');
const othersBuyTotal = document.querySelector('#othersBuy #totalCost');
const othersBuyPaid = document.querySelector('#othersBuy #paid');
const othersBuyRemainder = document.querySelector('#othersBuy #remainder');
const othersBuyDays = document.querySelector('#othersBuy #days');
const othersBuyMonthes = document.querySelector('#othersBuy #monthes');
const othersBuyYears = document.querySelector('#othersBuy #years');
const othersBuyTime = document.querySelector('#othersBuy #time');
const othersBuyPay = document.querySelector('#othersBuy #pay');
const othersBuySave = document.querySelector('#othersBuy #save');
const othersBuyInfo = document.querySelector('#othersBuyInfo');
const otherBuyDetails = document.querySelector('#otherBuyDetails');
const addOtherBuy = document.querySelector('#addOtherBuy');
const addOtherBuyName = document.querySelector('#addOtherBuyName');
const btnAddOtherBuy = document.querySelector('#btnAddOtherBuy');
const btnAddOtherBuyName = document.querySelector('#btnAddOtherBuyName');
const OtherNameBuy = document.querySelector('#otherNameBuy');
const OtherNameBuyName = document.querySelector('#otherNameBuyName');
const OtherNameBuyAdd = document.querySelector('#otherNameBuyAdd');
const plusOtherBuy = document.querySelector('#plusOtherBuy');
const updateOtherBuy = document.querySelector('#updateOtherBuy');
const btnUpdateOtherBuy = document.querySelector('#btnUpdateOtherBuy');
const btnUpdateOtherBuyName = document.querySelector('#btnUpdateOtherBuyName');
const nowOtherNameBuy = document.querySelector('#nowOtherNameBuy');
const nowOtherNameBuyName = document.querySelector('#nowOtherNameBuyName');
const afterOtherNameBuy = document.querySelector('#afterOtherNameBuy');
const afterOtherNameBuyName = document.querySelector('#afterOtherNameBuyName');
const afterOtherNameBuyAdd = document.querySelector('#afterOtherNameBuyAdd');
const changeOtherBuy = document.querySelector('#changeOtherBuy');
const changeOtherBuyName = document.querySelector('#changeOtherBuyName');
const btnDeleteOtherBuy = document.querySelector('#btnDeleteOtherBuy');
const btnDeleteOtherBuyName = document.querySelector('#btnDeleteOtherBuyName');
othersBuyAmount.value=0;
othersBuyPrice.value=0;
othersBuyTotal.value=0;
othersBuyPaid.value=0;
othersBuyTotal.disabled = true;
/******* production ********/
const productionTypes = document.querySelector('#productionType');
const productionAmount = document.querySelector('#production #amount');
const amountBakaryInProduction = document.querySelector('#production #amountBakaryInProduction');
const amountGamosInProduction = document.querySelector('#production #amountGamosInProduction');
const productionDays = document.querySelector('#production #date #days');
const productionMonthes = document.querySelector('#production #date #monthes');
const productionYears = document.querySelector('#production #date #years');
const productionTime = document.querySelector('#production #date #time');
const productionDaysMilk = document.querySelector('#production #dateMilk  #days');
const productionMonthesMilk = document.querySelector('#production #dateMilk #monthes');
const productionYearsMilk = document.querySelector('#production #dateMilk #years');
const productionTimeMilk = document.querySelector('#production #dateMilk #time');
const productionStock = document.querySelector('#production #stock');
const productionSave = document.querySelector('#production #save');
const productionInfo = document.querySelector('#productionInfo');
const productionDetails = document.querySelector('#productionDetails');
const addProduct = document.querySelector('#addProduct');
const btnAddProduct = document.querySelector('#btnAddProduct');
const ProductName = document.querySelector('#ProductName');
const plusProduct = document.querySelector('#plusProduct');
const updateProduct = document.querySelector('#updateProduct');
const productionSummary = document.querySelector('#productionSummary');
const productionSummaryType = document.querySelector('#productionSummary #type');
const productionSummaryAmount = document.querySelector('#productionSummary #amount'); 
const btnUpdateProduct = document.querySelector('#btnUpdateProduct');
const nowProductName = document.querySelector('#nowProductName');
const afterProductName = document.querySelector('#afterProductName');
const changeProduct = document.querySelector('#changeProduct');
const btnDeleteProduct = document.querySelector('#btnDeleteProduct');
productionAmount.value = 0;
amountBakaryInProduction.value = 0;
amountGamosInProduction.value = 0;
/******* strore ********/
const storeTypes = document.querySelector('#storeType');
const storeAmount = document.querySelector('#store #amount');
storeAmount.disabled=true;
/******* sales ********/
const salesSummary = document.querySelector('#salesSummary');
const salesSummaryType = document.querySelector('#salesSummary #type');
const salesSummaryAmount = document.querySelector('#salesSummary #amount');
const payroll = document.querySelector('#payroll  button');
const debts = document.querySelector('#debts  button');
const changeMilkPricesInSpecificDates = document.querySelector('#changeMilkPricesInSpecificDates  button');
const changeMilkPricesInSpecificDatesView = document.querySelector('#changeMilkPricesInSpecificDates');
const payrollTable = document.querySelector('#payroll  table');
const debtsTable = document.querySelector('#debts  table');
const kashefElMilkTable = document.querySelector('#kashefElMilk  table');
const viewArea = document.querySelector('#viewArea');
const reportViewArea = document.querySelector('#reportViewArea');
const changeMilkPricesInSpecificDatesName = document.querySelector('#changeMilkPricesInSpecificDates  #name');
const changeMilkPricesInSpecificDatesBakaryPrice = document.querySelector('#changeMilkPricesInSpecificDates  #bakaryPrice');
const changeMilkPricesInSpecificDatesGamosPrice = document.querySelector('#changeMilkPricesInSpecificDates  #gamosPrice');
const salesTypes = document.querySelector('#salesTypes');
const salesName = document.querySelector('#salesName');
const salesAmount = document.querySelector('#sales #amount');
const salesWeight = document.querySelector('#sales #weight');
const salesPrice = document.querySelector('#sales #cost');
const salesTotal = document.querySelector('#sales #totalCost');
const salesDays = document.querySelector('#sales #days');
const salesMonthes = document.querySelector('#sales #monthes');
const salesYears = document.querySelector('#sales #years');
const salesTime = document.querySelector('#sales #time');
const salesSell = document.querySelector('#sales #sell');
const salesSave = document.querySelector('#sales #save');
const salesInfo = document.querySelector('#salesInfo');
const salesDetails = document.querySelector('#salesDetails');
const paidToFactory = document.querySelector('#paidToFactory');
const retainToFactory = document.querySelector('#retainToFactory');
const amountOrW = document.querySelector('#amountOrW');
const addBuy = document.querySelector('#addBuy');
const btnAddBuy = document.querySelector('#btnAddBuy');
const buyName = document.querySelector('#buyName');
const plusBuy = document.querySelector('#plusBuy');
const updateBuy = document.querySelector('#updateBuy');
const btnUpdateBuy = document.querySelector('#btnUpdateBuy');
const nowBuyName = document.querySelector('#nowBuyName');
const afterBuyName = document.querySelector('#afterBuyName');
const changeBuy = document.querySelector('#changeBuy');
const btnDeleteBuy = document.querySelector('#btnDeleteBuy');
salesAmount.value = 0;
salesPrice.value = 0;
salesTotal.value = 0;
salesWeight.value = 0;
paidToFactory.value = 0;
salesTotal.disabled = true;
salesWeight.disabled = true;
salesAmount.disabled = true;
salesPrice.disabled = true;
/****** analyis ********/
const productionsPrices = document.querySelector('#productionsPrices');
const sellerNameSalary = document.querySelector('#sellerNameSalary');
const nowSellerNameSalary = document.querySelector('#nowSellerNameSalary');
const afterSellerNameSalary = document.querySelector('#afterSellerNameSalary');
const out = document.querySelector('#out');
const income = document.querySelector('#in');
const outPaid = document.querySelector('#outPaid');
const incomePaid = document.querySelector('#inPaid');
const outRemainder = document.querySelector('#outRemainder');
const incomeRemainder = document.querySelector('#inRemainder');
const profit = document.querySelector('#profit');
const allNames = document.querySelector("#specified #selectors #name");
const allTypes = document.querySelector("#specified #selectors #type");
const calculationsView = document.querySelector("#calculations #view");
const viewButton = document.querySelector("#calculations #toView");
const printButton = document.querySelector("#calculations #toPrint");
const reportViewButton = document.querySelector("#listOfReports #reportToView");
const reportPrintButton = document.querySelector("#listOfReports #reportToPrint");
const listOfReports = document.querySelector("#listOfReports select");

/********************************/
let dateFixed = JSON.parse(localStorage.getItem('timeConstant'));
function detectNamesOfViewAndPrintButtons(){
    console.log(allTypes.value)
    viewButton.innerText=`عرض بيانات ${allNames.value} في ${allTypes.value}`;
    printButton.innerText=`طباعة بيانات ${allNames.value} في ${allTypes.value}`;
}
function detectNamesOfReportsViewAndPrintButtons(){
    debugger;
    reportViewButton.innerText = `عرض ${listOfReports.value} في الفترة المحددة`;
    reportPrintButton.innerText = `طباعة ${listOfReports.value} في الفترة المحددة`;
}
let loading = 0 ;
    let factoryDatabase1 = idb.open('Factory');
    factoryDatabase1.then(function (db) {
        var txMilk = db.transaction('milk', 'readwrite');
        var storeMilk = txMilk.objectStore('milk');
        let info1 = storeMilk.getAll();
        info1.then(function (res) {
            milks = res;
            for (i = 0; i < milks.length; i++) {
                if(milks[i].date == dateFixed[0].day + ' ' + dateFixed[0].month + ' ' + dateFixed[0].year + ' ' + dateFixed[0].time ){
                    milkInfo.insertAdjacentHTML('afterend', `<tr>
       <td style="background-color:lightyellow ;">${milks[i].date}</td>
       <td style="background-color:lightsteelblue ;">${milks[i].notes}</td>
        <td style="background-color:lightslategray ;">${milks[i].addtionsDescription}</td>
       <td style="background-color:lightskyblue ;">${milks[i].addtions}</td>
       <td style="background-color:lightseagreen ;">${milks[i].salary}</td>
       <td  style="background-color:lightsalmon ;">${milks[i].paid}</td>
       <td style="background-color:lightpink ;">${milks[i].total}</td>
       <td style="background-color:lightgrey ;">${milks[i].totalGamos}</td>
        <td style="background-color:lightgreen ;">${milks[i].priceGamos}</td>
        <td style="background-color:lightgray ;">${milks[i].amountGamos}</td>
        <td style="background-color:lightgoldenrodyellow ;">${milks[i].totalBakary}</td>
        <td style="background-color: lightcyan ;">${milks[i].priceBakary}</td>
        <td style="background-color: lightcoral;">${milks[i].amountBakary}</td>
        <td style="background-color: lightblue;">${milks[i].seller}</td>
        <td style="background-color: mediumvioletred;"><button onclick=deleteItemInMilkTable(event)>حذف</button></td>
        <td style="background-color: mediumspringgreen;"><button onclick=updateItemInMilkTable(event)>تعديل</button></td>
        <td class='hide'>${milks[i].key}</td>
        </tr>`)
                }
               
                key1 = milks[i].key;
            }
        }).then(function(){
            var txSalary = db.transaction('salary', 'readwrite');
            var storeSalary = txSalary.objectStore('salary');
            let info2 = storeSalary.getAll();
            info2.then(function (res) {
                salaries = res;
                for (i = 0; i < salaries.length; i++) {
                    if (salaries[i].date == dateFixed[1].day + ' ' + dateFixed[1].month + ' ' + dateFixed[1].year + ' ' + dateFixed[1].time) {
                        salaryInfo.insertAdjacentHTML('afterend', `<tr>
           <td style = "background-color:lightgrey ;">${salaries[i].date}</td>
            <td style = "background-color:lightgreen ;">${salaries[i].notes}</td>
           <td style = "background-color:lightgray ;">${salaries[i].addtions}</td>
           <td style = "background-color:lightgoldenrodyellow ;">${salaries[i].paid}</td>
           <td style = "background-color: lightcyan ;">${salaries[i].type}</td>
           <td style = "background-color: lightcoral;">${salaries[i].salary}</td>
            <td style = "background-color: lightblue;">${salaries[i].employee}</td>
            <td style="background-color: mediumvioletred;"><button onclick=deleteItemInSalariesTable(event)>حذف</button></td>
            <td style="background-color: mediumspringgreen;"><button onclick=updateItemInSalariesTable(event)>تعديل</button></td>
            <td class='hide'>${salaries[i].key}</td>
            </tr>`)
                    }
                    key2 = salaries[i].key;
                }
            }).then(function(){
                var txOther = db.transaction('other', 'readwrite');
                var storeOther = txOther.objectStore('other');
                let info3 = storeOther.getAll();
                info3.then(function (res) { 
                    others = res;
                    for (i = 0; i < others.length; i++) {
                        if (others[i].date == dateFixed[2].day + ' ' + dateFixed[2].month + ' ' + dateFixed[2].year + ' ' + dateFixed[2].time) {

                            othersInfo.insertAdjacentHTML('afterend', `<tr>
           <td style = "background-color:lightgreen ;">${others[i].date}</td>
            <td style = "background-color:lightgray ;">${others[i].notes}</td>
            <td style = "background-color:lightgoldenrodyellow ;">${others[i].total}</td>
            <td style = "background-color: lightcyan ;">${others[i].price}</td>
            <td style = "background-color: lightcoral;">${others[i].amount}</td>
            <td style = "background-color: lightblue;">${others[i].type}</td>
                   <td style="background-color: mediumvioletred;"><button onclick=deleteItemInOthersTable(event)>حذف</button></td>
            <td style="background-color: mediumspringgreen;"><button onclick=updateItemInOthersTable(event)>تعديل</button></td>
                    <td class='hide'>${others[i].key}</td>
    
            </tr>`)
                        }
                        key3 = others[i].key;
                    }
                }).then(function(){
                    var txOwner = db.transaction('owner', 'readwrite');
                    var storeOwner = txOwner.objectStore('owner');
                     let info7 = storeOwner.getAll();
                    info7.then(function (res) {
                        owners = res;
                        for (i = 0; i < owners.length; i++) {
                            if (owners[i].date == dateFixed[3].day + ' ' + dateFixed[3].month + ' ' + dateFixed[3].year + ' ' + dateFixed[3].time) {
    
                                ownersInfo.insertAdjacentHTML('afterend', `<tr>
               <td style = "background-color:lightgray ;" >${owners[i].date}</td>
               <td style = "background-color:lightgoldenrodyellow ;" >${owners[i].notes}</td>
                <td style = "background-color: lightcyan ;" >${owners[i].paid}</td>
                <td style = "background-color: lightcoral;" >${owners[i].cash}</td>
                <td style = "background-color: lightblue; ">${owners[i].name}</td>
                       <td style="background-color: mediumvioletred;"><button onclick=deleteItemInOwnersTable(event)>حذف</button></td>
                <td style="background-color: mediumspringgreen;"><button onclick=updateItemInOwnersTable(event)>تعديل</button></td>
                        <td class='hide'>${owners[i].key}</td>
        
                </tr>`)
                            }
                            key7 = owners[i].key;
                        }
                    }).then(function () {
                        var txOtherBuy = db.transaction('otherBuy', 'readwrite');
                        var storeOtherBuy = txOtherBuy.objectStore('otherBuy');
                        let info4 = storeOtherBuy.getAll();
                        info4.then(function (res) {
                            othersBuy = res;
                            for (i = 0; i < othersBuy.length; i++) {
                                if (othersBuy[i].date == dateFixed[4].day + ' ' + dateFixed[4].month + ' ' + dateFixed[4].year + ' ' + dateFixed[4].time) {

                                    othersBuyInfo.insertAdjacentHTML('afterend', `<tr>
           <td style = "background-color:lightpink ;">${othersBuy[i].date}</td>
            <td style = "background-color:lightgrey ;">${othersBuy[i].notes}</td>
           <td style = "background-color:lightgreen ;">${othersBuy[i].paid}</td>
            <td style = "background-color:lightgray ;">${othersBuy[i].total}</td>
            <td style = "background-color:lightgoldenrodyellow ;">${othersBuy[i].price}</td>
            <td style = "background-color: lightcyan ;">${othersBuy[i].amount}</td>
            <td style = "background-color: lightcoral;">${othersBuy[i].type}</td>
            <td style = "background-color: lightblue;">${othersBuy[i].name}</td>
            <td style="background-color: mediumvioletred;" ><button onclick=deleteItemInOthersBuyTable(event)>حذف</button></td>
            <td style="background-color: mediumspringgreen;" ><button onclick=updateItemInOthersBuyTable(event)>تعديل</button></td>
                    <td class='hide'>${othersBuy[i].key}</td>
    
            </tr>`)
                                }
                                key6 = othersBuy[i].key;
                            }
                        }).then(function () {
                            var txProduction = db.transaction('production', 'readwrite');
                            var storeProduction = txProduction.objectStore('production');
                             let info5 = storeProduction.getAll();
                            info5.then(function (res) {
                                productions = res;
                                for (i = 0; i < productions.length; i++) {
                                    if (productions[i].date == dateFixed[6].day + ' ' + dateFixed[6].month + ' ' + dateFixed[6].year + ' ' + dateFixed[6].time) {

                                        productionInfo.insertAdjacentHTML('afterend', `<tr>
           <td style = "background-color:lightgrey ;">${productions[i].date}</td>
             <td style = "background-color:lightgreen ;">${productions[i].notes}</td>
             <td style = "background-color:lightgray ;">${productions[i].dateMilk}</td>
            <td style = "background-color:lightgoldenrodyellow ;">${productions[i].amount}</td>
            <td style = "background-color: lightcyan ;">${productions[i].type}</td>
            <td style = "background-color: lightcoral;">${productions[i].amountGamos}</td>
            <td style = "background-color: lightblue;">${productions[i].amountBakary}</td>
                   <td style="background-color: mediumvioletred;"><button onclick=deleteItemInProductionsTable(event)>حذف</button></td>
            <td style="background-color: mediumspringgreen;"><button onclick=updateItemInProductionsTable(event)>تعديل</button></td>
                    <td class='hide'>${productions[i].key}</td>
    
            </tr>`)
                                    }
                                    key4 = productions[i].key;
                                }
                            }).then(function () {
                                var txSale = db.transaction('sale', 'readwrite');
                                var storeSale = txSale.objectStore('sale');
                                let info6 = storeSale.getAll();
                                info6.then(function (res) {
                                    sales = res;
                                    for (i = 0; i < sales.length; i++) {
                                        if (sales[i].date == dateFixed[7].day + ' ' + dateFixed[7].month + ' ' + dateFixed[7].year + ' ' + dateFixed[7].time) {

                                            salesInfo.insertAdjacentHTML('afterend', `<tr>
           <td style = "background-color:lightsalmon ;">${sales[i].date}</td>
            <td style = "background-color:lightpink ;">${sales[i].notes}</td>
           <td style = "background-color:lightgrey ;">${sales[i].paidFactory}</td>
            <td style = "background-color:lightgreen ;">${sales[i].total}</td>
            <td style = "background-color:lightgray ;">${sales[i].price}</td>
            <td style = "background-color:lightgoldenrodyellow ;">${sales[i].weight}</td>
            <td style = "background-color: lightcyan ;">${sales[i].amount}</td>
            <td style = "background-color: lightcoral;">${sales[i].type}</td>
            <td style = "background-color: lightblue;">${sales[i].name}</td>
            <td style="background-color: mediumvioletred;"><button onclick=deleteItemInSalesTable(event)>حذف</button></td>
            <td style="background-color: mediumspringgreen;"><button onclick=updateItemInSalesTable(event)>تعديل</button></td>
                    <td class='hide'>${sales[i].key}</td>
            </tr>`)
                                        }
                                        key5 = sales[i].key;
                                    }
                                }).then(function () {
                                    if (sessionStorage["user"] === "احمد الخفيف" && sessionStorage["passwoed"] === "01016415126") {
                                        debugger;
                                        loading = 6;
                                        content.classList.remove('hide');
                                        loadingData.classList.add('hide');
                                        for (let i = 0; i < employes.length; i++) {
                                            if (employees.value == employes[i].name) {
                                                employeeSalary.value = employes[i].salary;
                                                employeeType.value = employes[i].type;
                                            }
                                        }
                                        putDaysNames();
                                        sellersAndPrices();
                                        storeCalc();
                                        addSalaryToMilkSellers();
                                        detectNamesOfViewAndPrintButtons();
                                        detectNamesOfReportsViewAndPrintButtons();
                                        document.getElementById("amountBakary").focus();
                                        activeSection = localStorage.getItem('activeSection');
                                        debugger;
                                        if (activeSection == '"milk"') {
                                            gotoMilk();
                                        }
                                        else if (activeSection == '"salaries"') {
                                            gotoSalary();
                                        }
                                        else if (activeSection == '"otherBuys"') {
                                            gotoOtherBuy();
                                        }
                                        else if (activeSection == '"other"') {
                                            gotoOther();
                                        }
                                        else if (activeSection == '"owner"') {
                                            gotoOwner();
                                        }
                                        else if (activeSection == '"production"') {
                                            gotoProduction();
                                        }
                                        else if (activeSection == '"sales"') {
                                            gotoSales();
                                        }
                                        else if (activeSection == '"store"') {
                                            gotoStore();
                                        }
                                        else if (activeSection == '"specified"') {
                                            gotoCalcSpecified();
                                        }
                                       
                                    }
                                    else if (sessionStorage["user"] === "ناصر العمروسي" && sessionStorage["passwoed"] === "12345678") {
                                        debugger;
                                        putDaysNames();
                                        moving.classList.add('hide');
                                        movingOther.classList.remove('hide');
                                        gotoCalcSpecified();
                                        changeMilkPricesInSpecificDatesView.classList.add('hide');                                    
                                         loading = 6;
                                        content.classList.remove('hide');
                                        loadingData.classList.add('hide');
                                        for (let i = 0; i < employes.length; i++) {
                                            if (employees.value == employes[i].name) {
                                                employeeSalary.value = employes[i].salary;
                                                employeeType.value = employes[i].type;
                                            }
                                        }
                                        sellersAndPrices();
                                        storeCalc();
                                        addSalaryToMilkSellers();
                                        detectNamesOfViewAndPrintButtons();
                                        detectNamesOfReportsViewAndPrintButtons();
                                        document.getElementById("amountBakary").focus();
                                        activeSection = localStorage.getItem('activeSection');
                                        debugger;
                                        if (activeSection == '"milk"') {
                                            gotoMilk();
                                        }
                                        else if (activeSection == '"salaries"') {
                                            gotoSalary();
                                        }
                                        else if (activeSection == '"otherBuys"') {
                                            gotoOtherBuy();
                                        }
                                        else if (activeSection == '"other"') {
                                            gotoOther();
                                        }
                                        else if (activeSection == '"owner"') {
                                            gotoOwner();
                                        }
                                        else if (activeSection == '"production"') {
                                            gotoProduction();
                                        }
                                        else if (activeSection == '"sales"') {
                                            gotoSales();
                                        }
                                        else if (activeSection == '"store"') {
                                            gotoStore();
                                        }
                                        else if (activeSection == '"specified"') {
                                            gotoCalcSpecified();
                                        }
                                       
                                    }
                                    else if (sessionStorage["user"] === "احمد الحوفي" && sessionStorage["passwoed"] === "87654321") {
                                        debugger;
                                        moving.classList.add('hide');
                                        putDaysNames();
                                        movingOther.classList.remove('hide');
                                        gotoCalcSpecified();
                                        changeMilkPricesInSpecificDatesView.classList.add('hide');                                    
                                        loading = 6;
                                        content.classList.remove('hide');
                                        loadingData.classList.add('hide');
                                        for (let i = 0; i < employes.length; i++) {
                                            if (employees.value == employes[i].name) {
                                                employeeSalary.value = employes[i].salary;
                                                employeeType.value = employes[i].type;
                                            }
                                        }
                                        sellersAndPrices();
                                        storeCalc();
                                        addSalaryToMilkSellers();
                                        detectNamesOfViewAndPrintButtons();
                                        detectNamesOfReportsViewAndPrintButtons();
                                        document.getElementById("amountBakary").focus();
                                        activeSection = localStorage.getItem('activeSection');
                                        debugger;
                                        if (activeSection == '"milk"') {
                                            gotoMilk();
                                        }
                                        else if (activeSection == '"salaries"') {
                                            gotoSalary();
                                        }
                                        else if (activeSection == '"otherBuys"') {
                                            gotoOtherBuy();
                                        }
                                        else if (activeSection == '"other"') {
                                            gotoOther();
                                        }
                                        else if (activeSection == '"owner"') {
                                            gotoOwner();
                                        }
                                        else if (activeSection == '"production"') {
                                            gotoProduction();
                                        }
                                        else if (activeSection == '"sales"') {
                                            gotoSales();
                                        }
                                        else if (activeSection == '"store"') {
                                            gotoStore();
                                        }
                                        else if (activeSection == '"specified"') {
                                            gotoCalcSpecified();
                                        }
                                      
                                    }
                                })
                            })
                        })
                    })
                    
                })
                })
        })
    });
function addSalaryToMilkSellers() {
    debugger
    let dateMilk = milkMonthes.value + "/" + milkDays.value + "/" + milkYears.value;
    dateMilk = new Date(dateMilk);
    let dayName = dateMilk.getDay();
    if (dayName == 4 && !(thursdays.includes(milkDays.value + ' ' + milkMonthes.value + ' ' + milkYears.value + ' ' + milkTime.value))) {
        milks = [];
        thursdays.push(milkDays.value + ' ' + milkMonthes.value + ' ' + milkYears.value + ' ' + milkTime.value);
        if (milkTime.value == "ًصباحا") {
            thursdays.push(milkDays.value + ' ' + milkMonthes.value + ' ' + milkYears.value + ' ' + "ًمساءا");
        }
        else {
            thursdays.push(milkDays.value + ' ' + milkMonthes.value + ' ' + milkYears.value + ' ' + "ًصباحا");
        }
        localStorage.setItem('thursday', JSON.stringify(thursdays));
        milkTime.value = "ًصباحا";
        for (let i = 0; i < sellers.length; i++) {
            milksAdd.push({
                key: key1 + 1,
                seller: sellers[i].name,
                amountBakary: 0,
                priceBakary: sellers[i].bakaryPrice,
                totalBakary: 0,
                amountGamos: 0,
                priceGamos: sellers[i].gamosyPrice,
                totalGamos: 0,
                total: 0,
                paid: 0,
                salary: sellers[i].salary,
                addtions: 0,
                addtionsDescription: '',
                notes: '',
                date: milkDays.value + ' ' + milkMonthes.value + ' ' + milkYears.value + ' ' + milkTime.value
            });
            key1++;
            theBox = parseFloat(box.value) - parseFloat(milkPaid.value);
        }
        save();
    }
}
allNames.oninput = function(){
    detectNamesOfViewAndPrintButtons();
}
allTypes.oninput = function(){
    detectNamesOfViewAndPrintButtons();
}
listOfReports.oninput = function () {
    detectNamesOfReportsViewAndPrintButtons();
}
milkAmountBakary.oninput = function () { 
    milkTotalBakary.value = (parseFloat(milkAmountBakary.value) * parseFloat(milkPriceBakary.value)).toFixed(2); 
}
milkAmountGamos.oninput = function () { 
    milkTotalGamos.value = (parseFloat(milkAmountGamos.value) * parseFloat(milkPriceGamos.value)).toFixed(2); }
milkPriceBakary.oninput = function () { 
    milkTotalBakary.value = (parseFloat(milkAmountBakary.value) * parseFloat(milkPriceBakary.value)).toFixed(2); }
milkPriceGamos.oninput = function () { 
    milkTotalGamos.value = (parseFloat(milkAmountGamos.value) * parseFloat(milkPriceGamos.value)).toFixed(2) ; }
employees.oninput=function(){
    for (let i = 0; i < employes.length; i++) {
        if (employees.value == employes[i].name) {
            employeeSalary.value = employes[i].salary;
            employeeType.value = employes[i].type;
        }
    } 
} 
othersAmount.oninput = function () { 
    othersTotal.value = parseFloat(othersAmount.value) * parseFloat(othersPrice.value); }
othersPrice.oninput = function () { 
    othersTotal.value = parseFloat(othersAmount.value) * parseFloat(othersPrice.value); }
othersBuyAmount.oninput = function () { 
    othersBuyTotal.value = parseFloat(othersBuyAmount.value) * parseFloat(othersBuyPrice.value); }
othersBuyPrice.oninput = function () { 
    othersBuyTotal.value = parseFloat(othersBuyAmount.value) * parseFloat(othersBuyPrice.value); }
salesAmount.oninput = function () { 
    if(amountOrW.checked){

        salesTotal.value = parseFloat(salesWeight.value) * parseFloat(salesPrice.value); }
    else {

        salesTotal.value = parseFloat(salesAmount.value) * parseFloat(salesPrice.value); 
    }
}

salesPrice.oninput = function () { 
    if (amountOrW.checked) {

        salesTotal.value = parseFloat(salesWeight.value) * parseFloat(salesPrice.value);
    }
    else {

        salesTotal.value = parseFloat(salesAmount.value) * parseFloat(salesPrice.value);
    }}
salesWeight.oninput = function () { 
    if (amountOrW.checked) {

        salesTotal.value = parseFloat(salesWeight.value) * parseFloat(salesPrice.value);
    }
    else {

        salesTotal.value = parseFloat(salesAmount.value) * parseFloat(salesPrice.value);
    }}
amountOrW.onclick = function () { 
    if (amountOrW.checked) {

        salesTotal.value = parseFloat(salesWeight.value) * parseFloat(salesPrice.value);
    }
    else {

        salesTotal.value = parseFloat(salesAmount.value) * parseFloat(salesPrice.value);
    }}
if (localStorage["box"] !== undefined && localStorage["box"]!=="null"){
theBox = JSON.parse(localStorage.getItem('box'));
    box.value = theBox;
}
if (localStorage["timeConstant"] !== undefined && localStorage["timeConstant"]!=="null"){
    let dateFixed = JSON.parse(localStorage.getItem('timeConstant'));
    for (i = 0; i < dateFixed.length; i++) {
        Days[i].value = dateFixed[i].day;
        Monthes[i].value = dateFixed[i].month;
        Years[i].value = dateFixed[i].year;
        Time[i].value = dateFixed[i].time;
    }
}
if (localStorage["thursday"] !== undefined && localStorage["thursday"] !== "null") {
    thursdays = JSON.parse(localStorage.getItem('thursday'));
    localStorage.setItem('thursday', JSON.stringify(thursdays));

}
if (localStorage["seller"] !== undefined && localStorage["seller"] !== null) {
    debugger;
    sellers = JSON.parse(localStorage.getItem('seller'));
    for (let i = 0; i < sellers.length; i++) {
        if (sellers[i].order == null) {

        }
        else if (sellers[i].order > i + 1) {
            for (let y = i; y < sellers.length - 1; y++) {
                console.log(y);
                let temp = sellers[y];
                sellers[y] = sellers[y + 1];
                sellers[y + 1] = temp;
            }
            i = 0;
        }

    }
    localStorage.setItem('seller', JSON.stringify(sellers));
    sellers = JSON.parse(localStorage.getItem('seller'));
    milksellers.insertAdjacentHTML('beforeend', `
       <optgroup label="بائعي اللبن">`)
    salesName.insertAdjacentHTML('beforeend', `
       <optgroup label="بائعي اللبن">`)
    changeMilkPricesInSpecificDatesName.insertAdjacentHTML('beforeend', `
       <optgroup label="بائعي اللبن">`)
    othersBuyNames.insertAdjacentHTML('beforeend', `
       <optgroup label="بائعي اللبن">`)
    allNames.insertAdjacentHTML('beforeend', `
       <optgroup label="بائعي اللبن">`)
    for (i = 0; i < sellers.length; i++) {
        milksellers.insertAdjacentHTML('beforeend', `
       <option title=${sellers[i].order}>${sellers[i].name}</option>`)
        salesName.insertAdjacentHTML('beforeend', `
       <option>${sellers[i].name}</option>`)
        changeMilkPricesInSpecificDatesName.insertAdjacentHTML('beforeend', `
       <option>${sellers[i].name}</option>`)
        othersBuyNames.insertAdjacentHTML('beforeend', `
       <option>${sellers[i].name}</option>`)
        allNames.insertAdjacentHTML('beforeend', `
       <option>${sellers[i].name}</option>`)
    }
    milksellers.insertAdjacentHTML('beforeend', `
       </optgroup>`)
    salesName.insertAdjacentHTML('beforeend', `
       </optgroup>`)
    changeMilkPricesInSpecificDatesName.insertAdjacentHTML('beforeend', `
       </optgroup>`)
    othersBuyNames.insertAdjacentHTML('beforeend', `
       </optgroup>`)
    allNames.insertAdjacentHTML('beforeend', `
       </optgroup>`)
    if (localStorage["nextSeller"] !== undefined && localStorage["nextSeller"] !== "null") {
        nextSeller = JSON.parse(localStorage.getItem('nextSeller'));
        milksellers.value = nextSeller;
    }
}

if (localStorage["employee"] !== undefined && localStorage["employee"] !== null) {
    employes = JSON.parse(localStorage.getItem('employee'));
    employees.insertAdjacentHTML('beforeend', `
       <optgroup label="الموظفين والمشال">`)
    salesName.insertAdjacentHTML('beforeend', `
       <optgroup label="الموظفين والمشال">`)
    othersBuyNames.insertAdjacentHTML('beforeend', `
       <optgroup label="الموظفين والمشال">`)
    allNames.insertAdjacentHTML('beforeend', `
       <optgroup label="الموظفين والمشال">`)
    for (i = 0; i < employes.length; i++) {
        employees.insertAdjacentHTML('beforeend', `
       <option>${employes[i].name}</option>`)
        salesName.insertAdjacentHTML('beforeend', `
       <option>${employes[i].name}</option>`)
        othersBuyNames.insertAdjacentHTML('beforeend', `
       <option>${employes[i].name}</option>`)
        allNames.insertAdjacentHTML('beforeend', `
       <option>${employes[i].name}</option>`)
    }
    employees.insertAdjacentHTML('beforeend', `
       </optgroup>`)
    salesName.insertAdjacentHTML('beforeend', `
       </optgroup>`)
    othersBuyNames.insertAdjacentHTML('beforeend', `
       </optgroup>`)
    allNames.insertAdjacentHTML('beforeend', `
       </optgroup>`)
    for (let i = 0; i < employes.length; i++) {
        if (employees.value == employes[i].name) {
            employeeSalary.value = employes[i].salary;
        }
    }
    if (localStorage["nextEmployee"] !== undefined && localStorage["nextEmployee"] !== "null") {
        nextEmployee = JSON.parse(localStorage.getItem('nextEmployee'));
        employees.value = nextEmployee;
    }
}
if (localStorage["buy"] !== undefined && localStorage["buy"] !== null) {
    buys = JSON.parse(localStorage.getItem('buy'));
    salesName.insertAdjacentHTML('afterbegin', `
       </optgroup>`)
    for (i = 0; i < buys.length; i++) {
        salesName.insertAdjacentHTML('afterbegin', `
       <option>${buys[i].name}</option>`)
    }
    salesName.insertAdjacentHTML('afterbegin', `
       <optgroup label="المشترين">`)
    othersBuyNames.insertAdjacentHTML('beforeend', `
       <optgroup label="المشترين">`)
    allNames.insertAdjacentHTML('beforeend', `
       <optgroup label="المشترين">`)
    for (i = 0; i < buys.length; i++) {
        salesName.insertAdjacentHTML('beforeend', `
       <option>${buys[i].name}</option>`)
        othersBuyNames.insertAdjacentHTML('beforeend', `
       <option>${buys[i].name}</option>`)
        allNames.insertAdjacentHTML('beforeend', `
       <option>${buys[i].name}</option>`)
        
    }
    othersBuyNames.insertAdjacentHTML('beforeend', `
       </optgroup>`)
    allNames.insertAdjacentHTML('beforeend', `
       </optgroup>`)
}
if (localStorage["otherType"] !== undefined && localStorage["otherType"] !== null) {
    otherTypes = JSON.parse(localStorage.getItem('otherType'));
    othersTypes.insertAdjacentHTML('beforeend', `
       <optgroup label="انواع المصروفات الاخرى">`)
    allNames.insertAdjacentHTML('beforeend', `
       <optgroup label="انواع المصروفات الاخرى">`)
    for (i = 0; i < otherTypes.length; i++) {
        othersTypes.insertAdjacentHTML('beforeend', `
       <option>${otherTypes[i].name}</option>`)
        allNames.insertAdjacentHTML('beforeend', `
       <option>${otherTypes[i].name}</option>`)
    }
    othersTypes.insertAdjacentHTML('beforeend', `
       </optgroup>`)
    allNames.insertAdjacentHTML('beforeend', `
       </optgroup>`)
    if (localStorage["nextOther"] !== undefined && localStorage["nextOther"] !== "null") {
        nextOther = JSON.parse(localStorage.getItem('nextOther'));
        othersTypes.value = nextOther;
    }
}
if (localStorage["ownerName"] !== undefined && localStorage["ownerName"] !== null) {
    ownerNames = JSON.parse(localStorage.getItem('ownerName'));
    ownersNames.insertAdjacentHTML('beforeend', `
       <optgroup label="الملاك">`)
    allNames.insertAdjacentHTML('beforeend', `
       <optgroup label="الملاك">`)
    salesName.insertAdjacentHTML('beforeend', `
       <optgroup label="الملاك">`)
    for (i = 0; i < ownerNames.length; i++) {
        ownersNames.insertAdjacentHTML('beforeend', `
       <option>${ownerNames[i].name}</option>`)
        allNames.insertAdjacentHTML('beforeend', `
       <option>${ownerNames[i].name}</option>`)
        salesName.insertAdjacentHTML('beforeend', `
       <option>${ownerNames[i].name}</option>`)
    }
    ownersNames.insertAdjacentHTML('beforeend', `
       </optgroup>`)
    allNames.insertAdjacentHTML('beforeend', `
       </optgroup>`)
    salesName.insertAdjacentHTML('beforeend', `
       </optgroup>`)
    if (localStorage["nextOwner"] !== undefined && localStorage["nextOwner"] !== "null") {
        nextOwner = JSON.parse(localStorage.getItem('nextOwner'));
        ownersNames.value = nextOwner;
    }
}
if (localStorage["otherBuyType"] !== undefined && localStorage["otherBuyType"] !== null) {
    otherBuyTypes = JSON.parse(localStorage.getItem('otherBuyType'));
    othersBuyTypes.insertAdjacentHTML('beforeend', `
       <optgroup label="انواع المشتريات الاخرى">`)
   
    allNames.insertAdjacentHTML('beforeend', `
       <optgroup label="انواع المشتريات الاخرى">`)
    for (i = 0; i < otherBuyTypes.length; i++) {
        othersBuyTypes.insertAdjacentHTML('beforeend', `
       <option>${otherBuyTypes[i].name}</option>`)
        allNames.insertAdjacentHTML('beforeend', `
       <option>${otherBuyTypes[i].name}</option>`)
    }
    for (i = 0; i < otherBuyTypes.length; i++) {
        if (otherBuyTypes[i].addToStoreAndSales){
            storeType.insertAdjacentHTML('beforeend', `
           <option>${otherBuyTypes[i].name}</option>`)
            salesTypes.insertAdjacentHTML('beforeend', `
           <option>${otherBuyTypes[i].name}</option>`)
        }
    }
    othersBuyTypes.insertAdjacentHTML('beforeend', `
       </optgroup>`)
    allNames.insertAdjacentHTML('beforeend', `
       </optgroup>`)
}
if (localStorage["otherBuyName"] !== undefined && localStorage["otherBuyName"] !== null) {
    otherBuyNames = JSON.parse(localStorage.getItem('otherBuyName'));
    othersBuyNames.insertAdjacentHTML('afterbegin', `
       </optgroup>`)
       for (i = 0; i < otherBuyNames.length; i++) {
           othersBuyNames.insertAdjacentHTML('afterbegin', `
          <option>${otherBuyNames[i].name}</option>`)
       }
    othersBuyNames.insertAdjacentHTML('afterbegin', `
       <optgroup label="البائعين الاخرين">`)
    salesName.insertAdjacentHTML('beforeend', `
       <optgroup label="البائعين الاخرين">`)
    allNames.insertAdjacentHTML('beforeend', `
       <optgroup label="البائعين الاخرين">`)
    for (i = 0; i < otherBuyNames.length; i++) {
        salesName.insertAdjacentHTML('beforeend', `
       <option>${otherBuyNames[i].name}</option>`)
        allNames.insertAdjacentHTML('beforeend', `
       <option>${otherBuyNames[i].name}</option>`)
    }
   
    salesName.insertAdjacentHTML('beforeend', `
       </optgroup>`)
    allNames.insertAdjacentHTML('beforeend', `
       </optgroup>`)
}
if (localStorage["product"] !== undefined && localStorage["product"] !== null) {
    products = JSON.parse(localStorage.getItem('product'));
    allNames.insertAdjacentHTML('beforeend', `
       <optgroup label="المنتجات">`)
    productionType.insertAdjacentHTML('beforeend', `
       <optgroup label="المنتجات">`)
    for (i = 0; i < products.length; i++) {
        productionsPrices.insertAdjacentHTML('beforeend', `
        <input value='${products[i].name}' disabled>
        <input id="product${i}" placeholder="السعر" value = 0>
        <br>
        `);
        productionType.insertAdjacentHTML('beforeend', `
       <option>${products[i].name}</option>`)
        storeType.insertAdjacentHTML('beforeend', `
       <option>${products[i].name}</option>`)
        salesTypes.insertAdjacentHTML('beforeend', `
       <option>${products[i].name}</option>`)
        othersBuyTypes.insertAdjacentHTML('beforeend', `
       <option>${products[i].name}</option>`)
        allNames.insertAdjacentHTML('beforeend', `
       <option>${products[i].name}</option>`)
    }
    allNames.insertAdjacentHTML('beforeend', `
       </optgroup>`)
    productionType.insertAdjacentHTML('beforeend', `
       </optgroup>`)
    if (localStorage["nextProduction"] !== undefined && localStorage["nextProduction"] !== "null") {
        nextProduction = JSON.parse(localStorage.getItem('nextProduction'));
        productionTypes.value = nextProduction;
    }
  
}
allNames.insertAdjacentHTML('beforeend', `
    <option>لبن بقري</option>
    <option>لبن جاموسي</option>
     <option>دفع</option>
     <option>عليه</option>
     `)

amountOrW.addEventListener('click',function(){
    if (amountOrW.checked){
        salesWeight.disabled = false;
    }
    else{
        salesWeight.disabled = true;

    }
});
function save (){
    saveMilk();

}
function saveBox() {
    localStorage.setItem('box', JSON.stringify(theBox));
}
function saveSeller() {
    localStorage.setItem('seller', JSON.stringify(sellers));
}
function saveBuy() {
    localStorage.setItem('buy', JSON.stringify(buys));
}
function saveEmployee() {
    localStorage.setItem('employee', JSON.stringify(employes));
}
function saveOtherType() {
    localStorage.setItem('otherType', JSON.stringify(otherTypes));
}
function saveOwnerName() {
    localStorage.setItem('ownerName', JSON.stringify(ownerNames));
}
function saveOtherBuyType() {
    localStorage.setItem('otherBuyType', JSON.stringify(otherBuyTypes));
}
function saveOtherBuyName() {
    localStorage.setItem('otherBuyName', JSON.stringify(otherBuyNames));
}
function saveProduct() {
    localStorage.setItem('product', JSON.stringify(products));
}
function saveThersdays() {
    localStorage.setItem('thursday', JSON.stringify(thursdays));
}
function saveMilk() {
    let factoryDatabase = idb.open('Factory');
    let dbPro ;
    factoryDatabase.then(function (db) {
        dbPro = db ;
        var txMilk = dbPro.transaction('milk', 'readwrite');
        var storeMilk = txMilk.objectStore('milk');
        for (let i = 0; i < milksAdd.length; i++) {
            storeMilk.add(milksAdd[i]).catch(function () { });
        }
    }).then(function () {
        var txSalary = dbPro.transaction('salary', 'readwrite');
        var storeSalary = txSalary.objectStore('salary');
        for (let i = 0; i < salariesAdd.length; i++) {
            storeSalary.add(salariesAdd[i]).catch(function () { });
        }
    }).then(function () {
        var txOther = dbPro.transaction('other', 'readwrite');
        var storeOther = txOther.objectStore('other');
        for (let i = 0; i < othersAdd.length; i++) {
            storeOther.add(othersAdd[i]).catch(function () { });
        }
    }).then(function () {
        var txOwner = dbPro.transaction('owner', 'readwrite');
        var storeOwner = txOwner.objectStore('owner');
        for (let i = 0; i < ownersAdd.length; i++) {
            storeOwner.add(ownersAdd[i]).catch(function () { });
        }
    }).then(function () {
        var txOtherBuy = dbPro.transaction('otherBuy', 'readwrite');
        var storeOtherBuy = txOtherBuy.objectStore('otherBuy');
        for (let i = 0; i < othersBuyAdd.length; i++) {
            storeOtherBuy.add(othersBuyAdd[i]).catch(function () { });
        }
    }).then(function () {
        var txProduction = dbPro.transaction('production', 'readwrite');
        var storeProduction = txProduction.objectStore('production');
        for (let i = 0; i < productionsAdd.length; i++) {
            storeProduction.add(productionsAdd[i]).catch(function () { });
        }
        
    }).then(function () {
        var txSale = dbPro.transaction('sale', 'readwrite');
        var storeSale = txSale.objectStore('sale');
            for(let i=0 ; i < salesAdd.length ; i++){
                storeSale.add(salesAdd[i]).catch(function(){});
        }
    }).then(function () {
        console.log('All items added successfully!');
        saveBox();
        saveSeller();
        saveBuy();
        saveEmployee();
        saveOtherType();
        saveOwnerName();
        saveOtherBuyType();
        saveProduct();
        saveOtherBuyName();
        saveThersdays();
        dateConstant();
    }).then(function () {
        setTimeout(function(){
            window.location.reload();
        } , 300)
    });

}
function sellersAndPrices(){
    for ( let i =0 ;i < sellers.length ; i++){
        if(milksellers.value == sellers[i].name){
            milkPriceBakary.value = sellers[i].bakaryPrice ;
            milkPriceGamos.value = sellers[i].gamosyPrice ;
            break;
        }
        else{
            milkPriceBakary.value = 0;
            milkPriceGamos.value = 0; 
        }
        
    }
}
sellersAndPrices();
for (let i = 0; i < sellers.length; i++) {
    if (changeMilkPricesInSpecificDatesName.value == sellers[i].name) {
        changeMilkPricesInSpecificDatesBakaryPrice.value = sellers[i].bakaryPrice;
        changeMilkPricesInSpecificDatesGamosPrice.value = sellers[i].gamosyPrice;
        break;
    }
    else {
        changeMilkPricesInSpecificDatesBakaryPrice.value = 0;
        changeMilkPricesInSpecificDatesGamosPrice.value = 0;
    }

}
milksellers.oninput=function(){
    sellersAndPrices();
}
othersBuyNames.oninput=function(){
}
salesTypes.oninput=function(){
    if (salesTypes.value === 'دفع') {
        salesTotal.disabled = true;
        salesWeight.disabled = true;
        salesAmount.disabled = true;
        salesPrice.disabled = true;
    }
    else {
        storeTypes.value = salesTypes.value;
        storeCalc();
        salesAmount.disabled = false;
        salesPrice.disabled = false;
    }
    
}
changeMilkPricesInSpecificDates.innerText = `تعديل سعر اللبن ل ${changeMilkPricesInSpecificDatesName.value} في الفترة المحددة`

changeMilkPricesInSpecificDatesName.oninput=function(){
    changeMilkPricesInSpecificDates.innerText = `تعديل سعر اللبن ل ${changeMilkPricesInSpecificDatesName.value} في الفترة المحددة`
    for (let i = 0; i < sellers.length; i++) {
        if (changeMilkPricesInSpecificDatesName.value == sellers[i].name) {
            changeMilkPricesInSpecificDatesBakaryPrice.value = sellers[i].bakaryPrice;
            changeMilkPricesInSpecificDatesGamosPrice.value = sellers[i].gamosyPrice;
            break;
        }
        else {
            changeMilkPricesInSpecificDatesBakaryPrice.value = 0;
            changeMilkPricesInSpecificDatesGamosPrice.value = 0;
        }
    }
}
storeTypes.oninput=function(){
 storeCalc();
}  
function storeCalc(){
    numberOfMilkGInStore = 0 ;
    numberOfMilkBInStore = 0 ;
    if (storeTypes.value == "لبن جاموسي" || storeTypes.value == "لبن بقري" ) {
        for(let i =0 ; i<milks.length ; i++){
            if (storeTypes.value == "لبن جاموسي"){
                numberOfMilkGInStore = numberOfMilkGInStore + parseFloat(milks[i].amountGamos)  ;
            }
            if (storeTypes.value == "لبن بقري"){
                numberOfMilkBInStore = numberOfMilkBInStore + parseFloat(milks[i].amountBakary)  ;
            }
        }
        for(let i =0 ; i<productions.length ; i++){
                numberOfMilkGInStore = numberOfMilkGInStore - parseFloat(productions[i].amountGamos)  ;
                numberOfMilkBInStore = numberOfMilkBInStore - parseFloat(productions[i].amountBakary)  ;
        }
        for(let i =0 ; i<sales.length ; i++){
            if (sales[i].type == "لبن جاموسي"){
                numberOfMilkGInStore = numberOfMilkGInStore - parseFloat(sales[i].amount)  ;
            }
            if (sales[i].type == "لبن بقري"){
                numberOfMilkBInStore = numberOfMilkBInStore - parseFloat(sales[i].amount)  ;
            }
        }
        if (storeTypes.value == "لبن جاموسي" ) {
            storeAmount.value = numberOfMilkGInStore ;
        }
        if ( storeTypes.value == "لبن بقري") {
            storeAmount.value = numberOfMilkBInStore ;
        }

    }
    else  if (loading == 6) {
        debugger;
        totalAmount = 0;
        for (i = 0; i < productions.length; i++) {
            if (productions[i].type === storeTypes.value) {
                totalAmount = totalAmount + parseFloat(productions[i].amount);
            }
        }
        if (loading == 6) {
            for (i = 0; i < othersBuy.length; i++) {
                if (othersBuy[i].type === storeTypes.value) {
                    totalAmount = totalAmount + parseFloat(othersBuy[i].amount);
            }
        }}
        if (loading == 6) {
             for (i = 0; i < sales.length; i++) {
                 if (sales[i].type === storeTypes.value) {
                     totalAmount = totalAmount - parseFloat(sales[i].amount);
                 }
             }
         }
        storeAmount.value = totalAmount;
    }
     
}
salesName.oninput = function (){
}
function profitCalc() {

}

function datesSpecifiedCalculation() {
    debugger;
    let day = fromDays.value;
    let month = fromMonthes.value;
    let year = fromYears.value;
    let pmAm = fromTime.value;
    let specifiedDays = [];
    let go = false;
    if (parseInt(year) < parseInt(toYears.value)) {
        go = true;
    }
    else if (parseInt(year) == parseInt(toYears.value)) {
        if (parseInt(month) < parseInt(toMonthes.value)) {
            go = true;
        }
        else if (parseInt(month) == parseInt(toMonthes.value)) {
            if (parseInt(day) < parseInt(toDays.value)) {
                go = true;
            }
            else if (parseInt(day) == parseInt(toDays.value)) {
                if (pmAm == "ًصباحا" && toTime.value == "ًمساءا") {
                    go = true;
                }
                if (toTime.value == pmAm) {
                    go = true;
                }
            }

        }
    }

    if (go) {
        while (day + ' ' + month + ' ' + year + ' ' + pmAm !== toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value) {
            specifiedDays.push(day + ' ' + month + ' ' + year + ' ' + pmAm);
            if (pmAm === "ًصباحا") {
                pmAm = "ًمساءا";
            }
            else {
                pmAm = "ًصباحا";
                day = parseInt(day) + 1;
                if (day == 32) {
                    month = parseInt(month) + 1;
                    day = 1;
                    if (month == 13) {
                        year = parseInt(year) + 1;
                        month = 1;
                    }
                }
            }
        }
        if (day + ' ' + month + ' ' + year + ' ' + pmAm === toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value) {
            specifiedDays.push(day + ' ' + month + ' ' + year + ' ' + pmAm);
        }
    }
    return specifiedDays;
}
function datesSpecifiedCalculation30() {
    debugger;
    let day = fromDays.value;
    let month = fromMonthes.value;
    let year = fromYears.value;
    let pmAm = fromTime.value;
    let specifiedDays = [];
    let go = false;
    if (parseInt(year) < parseInt(toYears.value)) {
        go = true;
    }
    else if (parseInt(year) == parseInt(toYears.value)) {
        if (parseInt(month) < parseInt(toMonthes.value)) {
            go = true;
        }
        else if (parseInt(month) == parseInt(toMonthes.value)) {
            if (parseInt(day) < parseInt(toDays.value)) {
                go = true;
            }
            else if (parseInt(day) == parseInt(toDays.value)) {
                if (pmAm == "ًصباحا" && toTime.value == "ًمساءا") {
                    go = true;
                }
                if (toTime.value == pmAm) {
                    go = true;
                }
            }

        }
    }

    if (go) {
        while (day + ' ' + month + ' ' + year + ' ' + pmAm !== toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value) {
            specifiedDays.push(day + ' ' + month + ' ' + year + ' ' + pmAm);
            if (pmAm === "ًصباحا") {
                pmAm = "ًمساءا";
            }
            else {
                pmAm = "ًصباحا";
                day = parseInt(day) + 1;
                if (day == 31) {
                    month = parseInt(month) + 1;
                    day = 1;
                    if (month == 13) {
                        year = parseInt(year) + 1;
                        month = 1;
                    }
                }
            }
        }
        if (day + ' ' + month + ' ' + year + ' ' + pmAm === toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value) {
            specifiedDays.push(day + ' ' + month + ' ' + year + ' ' + pmAm);
        }
    }
    return specifiedDays;
}
function datesSpecifiedTransport() {
    debugger;
    let day = fromDays.value;
    let month = fromMonthes.value;
    let year = fromYears.value;
    let pmAm = fromTime.value;
    let specifiedDays = [];
    if ((toDays.value == 30 || toDays.value == 29) && toMonthes.value == 2 && parseFloat(toYears.value) % 4 != 0) {
        toDays.value = 28;
    }
    else if (toDays.value == 30 && toMonthes.value == 2 && parseFloat(toYears.value) % 4 == 0) {
        toDays.value = 29;
    }
    else if (toDays.value == 31 && (toMonthes.value == 4 || toMonthes.value == 6 || toMonthes.value == 9 || toMonthes.value == 11)) {
        toDays.value = 30;
    }
    let go = false;
    if (parseInt(year) < parseInt(toYears.value)) {
        go = true;
    }
    else if (parseInt(year) == parseInt(toYears.value)) {
        if (parseInt(month) < parseInt(toMonthes.value)) {
            go = true;
        }
        else if (parseInt(month) == parseInt(toMonthes.value)) {
            if (parseInt(day) < parseInt(toDays.value)) {
                go = true;
            }
            else if (parseInt(day) == parseInt(toDays.value)) {
                if (pmAm == "ًصباحا" && toTime.value == "ًمساءا") {
                    go = true;
                }
                if (toTime.value == pmAm) {
                    go = true;
                }
            }

        }
    }

    if (go) {
        while (day + ' ' + month + ' ' + year + ' ' + pmAm !== toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value) {
            if ((day == 31 && (month == 4 || month == 6 || month == 9 || month == 11)) || (day == 32 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)) || (day == 30 && month == 2 && (year % 4 == 0)) || (day == 29 && month == 2 && (year % 4 != 0))) {
                month = parseInt(month) + 1;
                day = 1;
                pmAm == "ًصباحا";
                if (month == 13) {
                    year = parseInt(year) + 1;
                    month = 1;
                }

            }
            specifiedDays.push(day + ' ' + month + ' ' + year + ' ' + pmAm);
            if (pmAm === "ًصباحا") {
                pmAm = "ًمساءا";
            }
            else {
                pmAm = "ًصباحا";
                day = parseInt(day) + 1;
                if ((day == 31 && (month == 4 || month == 6 || month == 9 || month == 11)) || (day == 32 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)) || (day == 30 && month == 2 && (year % 4 == 0)) || (day == 29 && month == 2 && (year % 4 != 0))) {
                    month = parseInt(month) + 1;
                    day = 1;
                    if (month == 13) {
                        year = parseInt(year) + 1;
                        month = 1;
                    }
                }
            }
        }
        if (day + ' ' + month + ' ' + year + ' ' + pmAm === toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value) {
            specifiedDays.push(day + ' ' + month + ' ' + year + ' ' + pmAm);
        }
    }
    return specifiedDays;
}
function datesSpecifiedCalculation3() {
    debugger
    let storeStart = "27 2 2020 ًصباحا";
    let date = storeStart.split(' ');
    let day = date[0];
    let month = date[1];
    let year = date[2];
    let pmAm = date[3];
    let specifiedDays = [];
    let go = false;
    if (parseInt(year) < parseInt(toYears.value)) {
        go = true;
    }
    else if (parseInt(year) == parseInt(toYears.value)) {
        if (parseInt(month) < parseInt(toMonthes.value)) {
            go = true;
        }
        else if (parseInt(month) == parseInt(toMonthes.value)) {
            if (parseInt(day) < parseInt(toDays.value)) {
                go = true;
            }
            else if (parseInt(day) == parseInt(toDays.value)) {
                if (pmAm == "ًصباحا" && toTime.value == "ًمساءا") {
                    go = true;
                }
                if (toTime.value == pmAm) {
                    go = true;
                }
            }

        }
    }

    if (go) {
        while (day + ' ' + month + ' ' + year + ' ' + pmAm !== toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value) {
            specifiedDays.push(day + ' ' + month + ' ' + year + ' ' + pmAm);
            if (pmAm === "ًصباحا") {
                pmAm = "ًمساءا";
            }
            else {
                pmAm = "ًصباحا";
                day = parseInt(day) + 1;
                if (day == 32) {
                    month = parseInt(month) + 1;
                    day = 1;
                    if (month == 13) {
                        year = parseInt(year) + 1;
                        month = 1;
                    }
                }
            }
        }
        if (day + ' ' + month + ' ' + year + ' ' + pmAm === toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value) {
            specifiedDays.push(day + ' ' + month + ' ' + year + ' ' + pmAm);
        }
    }
    return specifiedDays;
}
function datesSpecifiedCalculation32() {
    debugger
    let storeStart = "27 2 2020 ًصباحا";
    let date = storeStart.split(' ');
    let day = date[0];
    let month = date[1];
    let year = date[2];
    let pmAm = date[3];
    let specifiedDays = [];
    let go = false;
    if (parseInt(year) < parseInt(fromYears.value)) {
        go = true;
    }
    else if (parseInt(year) == parseInt(fromYears.value)) {
        if (parseInt(month) < parseInt(fromMonthes.value)) {
            go = true;
        }
        else if (parseInt(month) == parseInt(fromMonthes.value)) {
            if (parseInt(day) < parseInt(fromDays.value)) {
                go = true;
            }
            else if (parseInt(day) == parseInt(fromDays.value)) {
                if (pmAm == "ًصباحا" && fromTime.value == "ًمساءا") {
                    go = true;
                }
                if (fromTime.value == pmAm) {
                    go = true;
                }
            }

        }
    }

    if (go) {
        while (day + ' ' + month + ' ' + year + ' ' + pmAm !== fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value) {
            specifiedDays.push(day + ' ' + month + ' ' + year + ' ' + pmAm);
            if (pmAm === "ًصباحا") {
                pmAm = "ًمساءا";
            }
            else {
                pmAm = "ًصباحا";
                day = parseInt(day) + 1;
                if (day == 32) {
                    month = parseInt(month) + 1;
                    day = 1;
                    if (month == 13) {
                        year = parseInt(year) + 1;
                        month = 1;
                    }
                }
            }
        }
        if (day + ' ' + month + ' ' + year + ' ' + pmAm === fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value) {
            specifiedDays.push(day + ' ' + month + ' ' + year + ' ' + pmAm);
        }
    }
    return specifiedDays;
}
function datesFromStatToNow() {
    let from = start.split(' ');
    let day = from[0];
    let month = from[1];
    let year = from[2];
    let pmAm = from[3];
    let specifiedDays = [];
    let go = false;
    if (parseInt(year) < parseInt(yearNow)) {
        go = true;
    }
    else if (parseInt(year) == parseInt(yearNow)) {
        if (parseInt(month) < parseInt(monthNow)) {
            go = true;
        }
        else if (parseInt(month) == parseInt(monthNow)) {
            if (parseInt(day) < parseInt(dayNow)) {
                go = true;
            }
            else if (parseInt(day) == parseInt(dayNow)) {
                if (pmAm == "ًصباحا" && toTime.value == "ًمساءا") {
                    go = true;
                }
                if (toTime.value == pmAm) {
                    go = true;
                }
            }

        }
    }
    if (go) {
        while (day + ' ' + month + ' ' + year + ' ' + pmAm !== dayNow + ' ' + monthNow + ' ' + yearNow + ' ' + timeMENow) {
            specifiedDays.push(day + ' ' + month + ' ' + year + ' ' + pmAm);
            if (pmAm === "ًصباحا") {
                pmAm = "ًمساءا";
            }
            else {
                pmAm = "ًصباحا";
                day = parseInt(day) + 1;
                if (day == 31) {
                    month = parseInt(month) + 1;
                    day = 1;
                    if (month == 13) {
                        year = parseInt(year) + 1;
                        month = 1;
                    }
                }
            }
        }
        if (day + ' ' + month + ' ' + year + ' ' + pmAm === dayNow + ' ' + monthNow + ' ' + yearNow + ' ' + timeMENow) {
            specifiedDays.push(day + ' ' + month + ' ' + year + ' ' + pmAm);
        }
    }
    return specifiedDays;
}
function datesFromStatToSpecified(endDate) {
    debugger;
    let storeStart = "27 2 2020 ًصباحا";
    let from = storeStart.split(' ');
    let day = from[0];
    let month = from[1];
    let year = from[2];
    let pmAm = from[3];
    let end = endDate.split(' ');
    let dayEnd = end[0];
    let monthEnd = end[1];
    let yearEnd = end[2];
    let pmAmEnd = end[3];
    let specifiedDays = [];
    let go = false;
    if (parseInt(year) < parseInt(yearEnd)) {
        go = true;
    }
    else if (parseInt(year) == parseInt(yearEnd)) {
        if (parseInt(month) < parseInt(monthEnd)) {
            go = true;
        }
        else if (parseInt(month) == parseInt(monthEnd)) {
            if (parseInt(day) < parseInt(dayEnd)) {
                go = true;
            }
            else if (parseInt(day) == parseInt(dayEnd)) {
                if (pmAm == "ًصباحا" && pmAmEnd == "ًمساءا") {
                    go = true;
                }
                if (pmAmEnd == pmAm) {
                    go = true;
                }
            }

        }
    }
    if (go) {
        while (day + ' ' + month + ' ' + year + ' ' + pmAm !== dayEnd + ' ' + monthEnd + ' ' + yearEnd + ' ' + pmAmEnd) {
            specifiedDays.push(day + ' ' + month + ' ' + year + ' ' + pmAm);
            if (pmAm === "ًصباحا") {
                pmAm = "ًمساءا";
            }
            else {
                pmAm = "ًصباحا";
                day = parseInt(day) + 1;
                if (day == 31) {
                    month = parseInt(month) + 1;
                    day = 1;
                    if (month == 13) {
                        year = parseInt(year) + 1;
                        month = 1;
                    }
                }
            }
        }
        if (day + ' ' + month + ' ' + year + ' ' + pmAm === dayEnd + ' ' + monthEnd + ' ' + yearEnd + ' ' + pmAmEnd) {
            specifiedDays.push(day + ' ' + month + ' ' + year + ' ' + pmAm);
        }
    }
    return specifiedDays;
}
function datesFromStatToNowTransport() {
    debugger;
    let from = start.split(' ');
    let day = from[0];
    let month = from[1];
    let year = from[2];
    let pmAm = from[3];
    let specifiedDays = [];
    let go = false;
    if (parseInt(year) < parseInt(yearNow)) {
        go = true;
    }
    else if (parseInt(year) == parseInt(yearNow)) {
        if (parseInt(month) < parseInt(monthNow)) {
            go = true;
        }
        else if (parseInt(month) == parseInt(monthNow)) {
            if (parseInt(day) < parseInt(dayNow)) {
                go = true;
            }
            else if (parseInt(day) == parseInt(dayNow)) {
                if (pmAm == "ًصباحا" && toTime.value == "ًمساءا") {
                    go = true;
                }
                if (toTime.value == pmAm) {
                    go = true;
                }
            }

        }
    }
    if (go) {
        while (day + ' ' + month + ' ' + year + ' ' + pmAm !== dayNow + ' ' + monthNow + ' ' + yearNow + ' ' + timeMENow) {
            specifiedDays.push(day + ' ' + month + ' ' + year + ' ' + pmAm);
            if (pmAm === "ًصباحا") {
                pmAm = "ًمساءا";
            }
            else {
                pmAm = "ًصباحا";
                day = parseInt(day) + 1;
                if ((day == 31 && (month == 4 || month == 6 || month == 9 || month == 11)) || (day == 32 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)) || (day == 30 && month == 2 && (year % 4 == 0)) || (day == 29 && month == 2 && (year % 4 != 0))) {
                    month = parseInt(month) + 1;
                    day = 1;
                    if (month == 13) {
                        year = parseInt(year) + 1;
                        month = 1;
                    }
                }
            }
        }
        if (day + ' ' + month + ' ' + year + ' ' + pmAm === dayNow + ' ' + monthNow + ' ' + yearNow + ' ' + timeMENow) {
            specifiedDays.push(day + ' ' + month + ' ' + year + ' ' + pmAm);
        }
    }
    return specifiedDays;
}

changeMilkPricesInSpecificDates.addEventListener('click', function () {
    let specifiedDays =  datesSpecifiedCalculation();
    let milkBP = parseFloat(changeMilkPricesInSpecificDatesBakaryPrice.value) ;
    let milkGP = parseFloat(changeMilkPricesInSpecificDatesGamosPrice.value) ;
    let factoryDatabase1 = idb.open('Factory');
    factoryDatabase1.then(function (db) {
        var txMilk = db.transaction('milk', 'readwrite');
        var storeMilk = txMilk.objectStore('milk');
        let index = storeMilk.index('seller');
        return index.openCursor(changeMilkPricesInSpecificDatesName.value) ;    
}).then(function change (cursor){
    if (!cursor) { 
        activeSection = 'specified';
        localStorage.setItem('activeSection', JSON.stringify(activeSection));    
        return save();
     }
    if(specifiedDays.includes(cursor.value.date)){
        console.log('Cursored at:', cursor.value);
        let update = cursor.value;
        update.priceBakary = milkBP;
        update.priceGamos = milkGP;
        update.totalBakary = milkBP * parseFloat(update.amountBakary);
        update.totalGamos = milkGP * parseFloat(update.amountGamos);
        update.total = (milkGP * parseFloat(update.amountGamos)) + (milkBP * parseFloat(update.amountBakary));
        cursor.update(update); 
    }
    return cursor.continue().then(change);

})
}) 
   
milkDetails.addEventListener('click',function(){
    milkTable.classList.toggle('hide');
    for (let i = 1; i < milkTable.children[0].children[0].childElementCount;){
        milkTable.children[0].children[0].children[i].remove()
    }
    debugger;
    for (i = 0; i < milks.length; i++) {
        if (milks[i].date == milkDays.value + ' ' + milkMonthes.value + ' ' + milkYears.value + ' ' + milkTime.value) {
            milkInfo.insertAdjacentHTML('afterend', `<tr>
       <td style="background-color:lightyellow ;">${milks[i].date}</td>
       <td style="background-color:lightsteelblue ;">${milks[i].notes}</td>
        <td style="background-color:lightslategray ;">${milks[i].addtionsDescription}</td>
       <td style="background-color:lightskyblue ;">${milks[i].addtions}</td>
       <td style="background-color:lightseagreen ;">${milks[i].salary}</td>
       <td  style="background-color:lightsalmon ;">${milks[i].paid}</td>
       <td style="background-color:lightpink ;">${milks[i].total}</td>
       <td style="background-color:lightgrey ;">${milks[i].totalGamos}</td>
        <td style="background-color:lightgreen ;">${milks[i].priceGamos}</td>
        <td style="background-color:lightgray ;">${milks[i].amountGamos}</td>
        <td style="background-color:lightgoldenrodyellow ;">${milks[i].totalBakary}</td>
        <td style="background-color: lightcyan ;">${milks[i].priceBakary}</td>
        <td style="background-color: lightcoral;">${milks[i].amountBakary}</td>
        <td style="background-color: lightblue;">${milks[i].seller}</td>
        <td style="background-color: mediumvioletred;"><button onclick=deleteItemInMilkTable(event)>حذف</button></td>
        <td style="background-color: mediumspringgreen;"><button onclick=updateItemInMilkTable(event)>تعديل</button></td>
        <td class='hide'>${milks[i].key}</td>
        </tr>`)
        }

        key1 = milks[i].key;
    }
})
salaryDetails.addEventListener('click', function () {
    debugger;
    salaryTable.classList.toggle('hide'); 
    for (let i = 1; i < salaryTable.children[0].children[0].childElementCount; ) {
        salaryTable.children[0].children[0].children[i].remove();
    }
   for (i = 0; i < salaries.length; i++) {
                    if (salaries[i].date == salaryDays.value + ' ' + salaryMonthes.value + ' ' + salaryYears.value + ' ' + salaryTime.value) {
                        salaryInfo.insertAdjacentHTML('afterend', `<tr>
           <td style = "background-color:lightgrey ;">${salaries[i].date}</td>
            <td style = "background-color:lightgreen ;">${salaries[i].notes}</td>
           <td style = "background-color:lightgray ;">${salaries[i].addtions}</td>
           <td style = "background-color:lightgoldenrodyellow ;">${salaries[i].paid}</td>
           <td style = "background-color: lightcyan ;">${salaries[i].type}</td>
           <td style = "background-color: lightcoral;">${salaries[i].salary}</td>
            <td style = "background-color: lightblue;">${salaries[i].employee}</td>
            <td style="background-color: mediumvioletred;"><button onclick=deleteItemInSalariesTable(event)>حذف</button></td>
            <td style="background-color: mediumspringgreen;"><button onclick=updateItemInSalariesTable(event)>تعديل</button></td>
            <td class='hide'>${salaries[i].key}</td>
            </tr>`)
                    }
                    key2 = salaries[i].key;
                }
    

})
otherDetails.addEventListener('click', function () {
    for (let i = 1; i < othersTable.children[0].children[0].childElementCount;) {
        othersTable.children[0].children[0].children[i].remove()
    }
    othersTable.classList.toggle('hide'); 
    for (i = 0; i < others.length; i++) {
                        if (others[i].date == othersDays.value + ' ' + othersMonthes.value + ' ' + othersYears.value + ' ' + othersTime.value) {

                            othersInfo.insertAdjacentHTML('afterend', `<tr>
           <td style = "background-color:lightgreen ;">${others[i].date}</td>
            <td style = "background-color:lightgray ;">${others[i].notes}</td>
            <td style = "background-color:lightgoldenrodyellow ;">${others[i].total}</td>
            <td style = "background-color: lightcyan ;">${others[i].price}</td>
            <td style = "background-color: lightcoral;">${others[i].amount}</td>
            <td style = "background-color: lightblue;">${others[i].type}</td>
                   <td style="background-color: mediumvioletred;"><button onclick=deleteItemInOthersTable(event)>حذف</button></td>
            <td style="background-color: mediumspringgreen;"><button onclick=updateItemInOthersTable(event)>تعديل</button></td>
                    <td class='hide'>${others[i].key}</td>
    
            </tr>`)
                        }
                        key3 = others[i].key;
                    }
    

})
ownerDetails.addEventListener('click', function () {
    for (let i = 1; i < ownersTable.children[0].children[0].childElementCount; ) {
        ownersTable.children[0].children[0].children[i].remove()
    }
    ownersTable.classList.toggle('hide');      
    for (i = 0; i < owners.length; i++) {
                            if (owners[i].date == ownersDays.value + ' ' + ownersMonthes.value + ' ' + ownersYears.value + ' ' + ownersTime.value) {
    
                                ownersInfo.insertAdjacentHTML('afterend', `<tr>
               <td style = "background-color:lightgray ;">${owners[i].date}</td>
               <td style = "background-color:lightgoldenrodyellow ;">${owners[i].notes}</td>
                <td style = "background-color: lightcyan ;">${owners[i].paid}</td>
                <td style = "background-color: lightcoral;">${owners[i].cash}</td>
                <td style = "background-color: lightblue;">${owners[i].name}</td>
                       <td style="background-color: mediumvioletred;"><button onclick=deleteItemInOwnersTable(event)>حذف</button></td>
                <td style="background-color: mediumspringgreen;"><button onclick=updateItemInOwnersTable(event)>تعديل</button></td>
                        <td class='hide'>${owners[i].key}</td>
        
                </tr>`)
                            }
                            key7 = owners[i].key;
                        }


})
otherBuyDetails.addEventListener('click', function () {
    for (let i = 1; i < othersBuyTable.children[0].children[0].childElementCount;) {
        othersBuyTable.children[0].children[0].children[i].remove()
    }
    othersBuyTable.classList.toggle('hide');       for (i = 0; i < othersBuy.length; i++) {
                                if (othersBuy[i].date == othersBuyDays.value + ' ' + othersBuyMonthes.value + ' ' + othersBuyYears.value + ' ' + othersBuyTime.value) {

                                    othersBuyInfo.insertAdjacentHTML('afterend', `<tr>
           <td style = "background-color:lightpink ;">${othersBuy[i].date}</td>
            <td style = "background-color:lightgrey ;">${othersBuy[i].notes}</td>
           <td style = "background-color:lightgreen ;">${othersBuy[i].paid}</td>
            <td style = "background-color:lightgray ;">${othersBuy[i].total}</td>
            <td style = "background-color:lightgoldenrodyellow ;">${othersBuy[i].price}</td>
            <td style = "background-color: lightcyan ;">${othersBuy[i].amount}</td>
            <td style = "background-color: lightcoral;">${othersBuy[i].type}</td>
            <td style = "background-color: lightblue;">${othersBuy[i].name}</td>
            <td style="background-color: mediumvioletred;"><button onclick=deleteItemInOthersBuyTable(event)>حذف</button></td>
            <td style="background-color: mediumspringgreen;"><button onclick=updateItemInOthersBuyTable(event)>تعديل</button></td>
                    <td class='hide'>${othersBuy[i].key}</td>
    
            </tr>`)
                                }
                                key6 = othersBuy[i].key;
                            }
    

})
productionDetails.addEventListener('click', function () {
    for (let i = 1; i < productionTable.children[0].children[0].childElementCount; ) {
        productionTable.children[0].children[0].children[i].remove()
    }
    productionTable.classList.toggle('hide');
                                for (i = 0; i < productions.length; i++) {
                                    if (productions[i].date == productionDays.value + ' ' + productionMonthes.value + ' ' + productionYears.value + ' ' + productionTime.value) {

                                        productionInfo.insertAdjacentHTML('afterend', `<tr>
           <td style = "background-color:lightgrey ;">${productions[i].date}</td>
           <td style = "background-color:lightgreen ;">${productions[i].notes}</td>
           <td style = "background-color:lightgray ;">${productions[i].dateMilk}</td>
            <td style = "background-color:lightgoldenrodyellow ;">${productions[i].amount}</td>
            <td style = "background-color: lightcyan ;">${productions[i].type}</td>
            <td style = "background-color: lightcoral;">${productions[i].amountGamos}</td>
            <td style = "background-color: lightblue";>${productions[i].amountBakary}</td>
                   <td style="background-color: mediumvioletred;"><button onclick=deleteItemInProductionsTable(event)>حذف</button></td>
            <td style="background-color: mediumspringgreen;"><button onclick=updateItemInProductionsTable(event)>تعديل</button></td>
                    <td class='hide'>${productions[i].key}</td>
    
            </tr>`)
                                    }
                                    key4 = productions[i].key;
                                }
    

})
salesDetails.addEventListener('click', function () {
    for (let i = 1; i < salesTable.children[0].children[0].childElementCount; ) {
        salesTable.children[0].children[0].children[i].remove()
    }
    salesTable.classList.toggle('hide');
    for (i = 0; i < sales.length; i++) {
                                        if (sales[i].date == salesDays.value + ' ' + salesMonthes.value + ' ' + salesYears.value + ' ' + salesTime.value) {

                                            salesInfo.insertAdjacentHTML('afterend', `<tr>
           <td style = "background-color:lightsalmon ;">${sales[i].date}</td>
            <td style = "background-color:lightpink ;">${sales[i].notes}</td>
           <td style = "background-color:lightgrey ;">${sales[i].paidFactory}</td>
            <td style = "background-color:lightgreen ;">${sales[i].total}</td>
            <td style = "background-color:lightgray ;">${sales[i].price}</td>
            <td style = "background-color:lightgoldenrodyellow ;">${sales[i].weight}</td>
            <td style = "background-color: lightcyan ;">${sales[i].amount}</td>
            <td style = "background-color: lightcoral;">${sales[i].type}</td>
            <td style = "background-color: lightblue;">${sales[i].name}</td>
            <td style="background-color: mediumvioletred;"><button onclick=deleteItemInSalesTable(event)>حذف</button></td>
            <td style="background-color: mediumspringgreen;"><button onclick=updateItemInSalesTable(event)>تعديل</button></td>
                    <td class='hide'>${sales[i].key}</td>
            </tr>`)
                                        }
                                        key5 = sales[i].key;
                                    }
    

})
btnAddSeller.addEventListener('click', function () {
    btnUpdateSeller.disabled=true;  
    addseller.classList.remove('hide')
})
btnUpdateSeller.addEventListener('click', function () {
    for (let i = 0; i < sellers.length; i++) {
        if (sellers[i].name == milksellers.value) {
            nowSellerNameSalary.value = sellers[i].salary;
            afterSellerNameSalary.value = sellers[i].salary;
            break;
        }
    }
    btnAddSeller.disabled = true;
    updateseller.classList.remove('hide');
    nowSellerName.value = milksellers.value;
    nowSellerNameBakaryPrice.value = milkPriceBakary.value;
    nowSellerNameGamosyPrice.value = milkPriceGamos.value;
    afterSellerName.value = milksellers.value;
    afterSellerNameBakaryPrice.value = milkPriceBakary.value;
    afterSellerNameGamosyPrice.value = milkPriceGamos.value;
    nowSellerName.disabled = true;
    nowSellerNameBakaryPrice.disabled = true;
    nowSellerNameGamosyPrice.disabled = true;
    nowSellerNameOrder.disabled = true;
    nowSellerNameSalary.disabled = true;
    for (let i = 0; i < sellers.length; i++) {
        if (sellers[i].name == milksellers.value) {
            if (sellers[i].order == null) {
                nowSellerNameOrder.value = sellers.length;
                afterSellerNameOrder.value = sellers.length;
            }
            else {
                nowSellerNameOrder.value = sellers[i].order;
                afterSellerNameOrder.value = sellers[i].order;
            }
            break;
        }
    }
})
plusSeller.addEventListener('click', function () {
    if (checkNameFound(sellerName.value)){
        alert('الاسم المضاف موجود مسبقاً')
    }
    else{
        btnUpdateSeller.disabled = false;  
        milksellers.insertAdjacentHTML('afterbegin', `<option>${sellerName.value}</option>`);
        milkPriceBakary.value = sellerNameBakaryPrice.value ;
        milkPriceGamos.value = sellerNameGamosyPrice.value ;
        addseller.classList.add('hide');
        for(let i=0;i<sellers.length;i++){
            if (sellers[i].order >= parseFloat(sellerNameOrder.value)){
                sellers[i].order = parseInt(sellers[i].order)+1;
            }
        }
        sellers.push({
            name: sellerName.value,
            bakaryPrice: sellerNameBakaryPrice.value ,
            gamosyPrice: sellerNameGamosyPrice.value ,
            salary: sellerNameSalary.value,
            order: parseInt(sellerNameOrder.value)
        })
        activeSection = 'milk';
        localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
        save();
    }
})
changeSeller.addEventListener('click', function () {
    if (checkNameFound(afterSellerName.value) && (nowSellerName.value != afterSellerName.value)) {
        alert('الاسم المضاف موجود مسبقاً')
    }
    else{
        debugger;
        btnUpdateSeller.disabled = false;  
        if (localStorage["seller"] !== undefined && localStorage["seller"] !== null) {
            sellers = JSON.parse(localStorage.getItem('seller'));
            if (parseInt(nowSellerNameOrder.value) < parseInt(afterSellerNameOrder.value)){
                for (i = parseInt(nowSellerNameOrder.value); i < parseInt(afterSellerNameOrder.value) ; i++) {
                    sellers[i].order = sellers[i].order -1 ;
                }
            }
            else if (parseInt(nowSellerNameOrder.value) > parseInt(afterSellerNameOrder.value)){
                for (i = parseInt(afterSellerNameOrder.value)-1; i < parseInt(nowSellerNameOrder.value) ; i++) {
                    sellers[i].order = sellers[i].order + 1;
                }
            }
            for (i = 0; i < sellers.length; i++) {
                if (sellers[i].name === nowSellerName.value) {
                    sellers[i].name = afterSellerName.value;
                    sellers[i].bakaryPrice = afterSellerNameBakaryPrice.value;
                    sellers[i].gamosyPrice = afterSellerNameGamosyPrice.value;
                    sellers[i].salary = afterSellerNameSalary.value;
                    sellers[i].order = parseInt(afterSellerNameOrder.value);
                }
            }
        }
        if (loading == 6) {
            let factoryDatabase1 = idb.open('Factory');
            factoryDatabase1.then(function (db) {
                var txMilk = db.transaction('milk', 'readwrite');
                var storeMilk = txMilk.objectStore('milk');
                let index = storeMilk.index('seller');
                return index.openCursor(nowSellerName.value);
            }).then(function change2(cursor) {
                if (!cursor) {
                    updateseller.classList.add('hide')
                    activeSection = 'milk';
                    localStorage.setItem('activeSection', JSON.stringify(activeSection));
                    return save();
                }
                console.log('Cursored at:', cursor.value);
                let update = cursor.value;
                update.seller = afterSellerName.value;
                cursor.update(update);
                return cursor.continue().then(change2);

            })
        }
        updateseller.classList.add('hide')
        activeSection = 'milk';
        localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
        save();

    }

})
btnDeleteSeller.addEventListener('click',function(){
    if (localStorage["seller"] !== undefined && localStorage["seller"] !== null) {
        sellers = JSON.parse(localStorage.getItem('seller'));
        let index ;
        for (i = 0; i < sellers.length; i++) {
            if (sellers[i].name === milksellers.value) {
                sellers.splice(i, 1);
                index = i;
                break;
            }
        }
        for (i = index; i < sellers.length; i++) {
            sellers[i].order = sellers[i].order-1;
        }
    }
    activeSection = 'milk';
    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
    save();

})
btnAddEmployee.addEventListener('click', function () {
    btnUpdateEmployee.disabled = true;
    addEmployee.classList.remove('hide')
})
plusEmployee.addEventListener('click', function () {
    if (checkNameFound(employeeName.value)) {
        alert('الاسم المضاف موجود مسبقاً')
    }
    else {
        btnUpdateEmployee.disabled = false;
        employees.insertAdjacentHTML('afterbegin', `<option>${employeeName.value}</option>`)
        employeeSalary.value = employeeMonthSalary.value ;
        employees.value = employeeName.value ;
        employeeType.value = employeeTypeSelect.value ;
        addEmployee.classList.add('hide')
        employes.push({
            name: employeeName.value,
            salary : employeeSalary.value,
            type: employeeTypeSelect.value
        })
        activeSection = 'salaries';
        localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
        save();
    }
})
btnUpdateEmployee.addEventListener('click', function () {
    btnAddEmployee.disabled = true;
    updateEmployee.classList.remove('hide');
    nowEmployeeName.value = employees.value;
    nowEmployeeSalary.value = employeeSalary.value;
    afterEmployeeName.value = employees.value;
    afterEmployeeSalary.value = employeeSalary.value;
    afterEmployeeTypeSelect.value = employeeTypeSelect.value;
    nowEmployeeSalary.disabled = true;
})
changeEmployee.addEventListener('click', function () {
    if (checkNameFound(afterEmployeeName.value) && (nowEmployeeName.value != afterEmployeeName.value)) {
        alert('الاسم المضاف موجود مسبقاً')
    }
    else {
        btnUpdateEmployee.disabled = false;  
        if (localStorage["employee"] !== undefined && localStorage["employee"] !== null) {
            employes = JSON.parse(localStorage.getItem('employee'));
            for (i = 0; i < employes.length; i++) {
                if (employes[i].name === nowEmployeeName.value) {
                    employes[i].name = afterEmployeeName.value;
                    employes[i].salary = afterEmployeeSalary.value;
                    employes[i].type = afterEmployeeTypeSelect.value;
                }
            }
        }
        if (loading == 6) {
            let factoryDatabase1 = idb.open('Factory');
            factoryDatabase1.then(function (db) {
                var txSalary = db.transaction('salary', 'readwrite');
                var storeSalary = txSalary.objectStore('salary');
                let index = storeSalary.index('employee');
                return index.openCursor(nowEmployeeName.value);
            }).then(function change2(cursor) {
                if (!cursor) { 
                    updateEmployee.classList.add('hide')
                    activeSection = 'salaries';
                    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
                    return save(); }
                    console.log('Cursored at:', cursor.value);
                    let update = cursor.value;
                    update.employee = afterEmployeeName.value;
                    cursor.update(update);
                return cursor.continue().then(change2);
    
            })
        }
        updateEmployee.classList.add('hide')
        activeSection = 'salaries';
        localStorage.setItem('activeSection', JSON.stringify(activeSection));
        save();
    }

})
btnDeleteEmployee.addEventListener('click',function(){
    if (localStorage["employee"] !== undefined && localStorage["employee"] !== null) {
        employes = JSON.parse(localStorage.getItem('employee'));
        for (i = 0; i < employes.length; i++) {
            if (employes[i].name === employees.value) {
                employes.splice(i, 1);
            }
        }
    }
    activeSection = 'salaries';
    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
    save();

})
btnAddOther.addEventListener('click', function () {
    btnUpdateOther.disabled = true;
    addOther.classList.remove('hide')
})
btnAddOwner.addEventListener('click', function () {
    btnUpdateOwner.disabled = true;
    addOwner.classList.remove('hide')
})
btnAddOtherBuy.addEventListener('click', function () {
    btnUpdateOtherBuy.disabled = true;
    addOtherBuy.classList.remove('hide')
})
btnAddOtherBuyName.addEventListener('click', function () {
    btnUpdateOtherBuyName.disabled = true;
    addOtherBuyName.classList.remove('hide')
})

plusOther.addEventListener('click', function () {
    if (checkNameFound(OtherName.value)) {
        alert('الاسم المضاف موجود مسبقاً')
    }
    else {
        btnUpdateOther.disabled = false;
        othersTypes.insertAdjacentHTML('afterbegin', `<option>${OtherName.value}</option>`)
        addOther.classList.add('hide')
        otherTypes.push({
            name: OtherName.value
        })
        activeSection = 'other';
        localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
        save();
    }
})
plusOwner.addEventListener('click', function () {
    if (checkNameFound(OwnerName.value)) {
        alert('الاسم المضاف موجود مسبقاً')
    }
    else {
        btnUpdateOwner.disabled = false;
        ownersNames.insertAdjacentHTML('afterbegin', `<option>${OwnerName.value}</option>`)
        addOwner.classList.add('hide')
        ownerNames.push({
            name: OwnerName.value
        })
        activeSection = 'owner';
        localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
        save();
    }
})
plusOtherBuy.addEventListener('click', function () {
    if (checkNameFound(OtherNameBuy.value)) {
        alert('الاسم المضاف موجود مسبقاً')
    }
    else {
        btnUpdateOtherBuy.disabled = false;
        othersBuyTypes.insertAdjacentHTML('afterbegin', `<option>${OtherNameBuy.value}</option>`)
        addOtherBuy.classList.add('hide')
        otherBuyTypes.push({
            name: OtherNameBuy.value,
            addToStoreAndSales: OtherNameBuyAdd.checked
        })
        activeSection = 'otherBuys';
        localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
        save();
    }
})
plusOtherBuyName.addEventListener('click', function () {
    if (checkNameFound(OtherNameBuyName.value)) {
        alert('الاسم المضاف موجود مسبقاً')
    }
    else{
        btnUpdateOtherBuyName.disabled = false;
        othersBuyNames.insertAdjacentHTML('afterbegin', `<option>${OtherNameBuyName.value}</option>`)
        addOtherBuyName.classList.add('hide')
        otherBuyNames.push({
            name: OtherNameBuyName.value,
        })
        activeSection = 'otherBuys';
        localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
        save();
    }
})
btnUpdateOther.addEventListener('click', function () {
    btnAddOther.disabled = true;
    updateOther.classList.remove('hide');
    nowOtherName.value = othersTypes.value;
    afterOtherName.value = othersTypes.value;
    nowOtherName.disabled = true;
})
btnUpdateOwner.addEventListener('click', function () {
    btnAddOwner.disabled = true;
    updateOwner.classList.remove('hide');
    nowOwnerName.value = ownersNames.value;
    afterOwnerName.value = ownerNames.value;
    nowOwnerName.disabled = true;
})
btnUpdateOtherBuy.addEventListener('click', function () {
    btnAddOtherBuy.disabled = true;
    updateOtherBuy.classList.remove('hide');
    nowOtherNameBuy.value = othersBuyTypes.value;
    afterOtherNameBuy.value = othersBuyTypes.value;
    for (let i = 0; i < otherBuyTypes.length ; i++){
        if (otherBuyTypes[i].name == othersBuyTypes.value){
            afterOtherNameBuyAdd.checked = otherBuyTypes[i].addToStoreAndSales;
        }
    }
    nowOtherNameBuy.disabled = true;
})
btnUpdateOtherBuyName.addEventListener('click', function () {
    btnAddOtherBuyName.disabled = true;
    updateOtherBuyName.classList.remove('hide');
    nowOtherNameBuyName.value = othersBuyNames.value;
    afterOtherNameBuyName.value = othersBuyNames.value;
    afterOtherNameBuyName.value = OtherNameBuyName.value;
    nowOtherNameBuyName.disabled = true;
})
changeOther.addEventListener('click', function () {
    if (checkNameFound(afterOtherName.value) && (nowOtherName.value != afterOtherName.value)) {
        alert('الاسم المضاف موجود مسبقاً')
    }
    else {
        btnUpdateOther.disabled = false;
        if (localStorage["otherType"] !== undefined && localStorage["otherType"] !== null) {
            otherTypes = JSON.parse(localStorage.getItem('otherType'));
            for (i = 0; i < otherTypes.length; i++) {
                if (otherTypes[i].name === nowOtherName.value) {
                    otherTypes[i].name = afterOtherName.value;
                }
            }
        }
        if (loading == 6) {
            let factoryDatabase1 = idb.open('Factory');
            factoryDatabase1.then(function (db) {
                var txOther = db.transaction('other', 'readwrite');
                var storeOther = txOther.objectStore('other');
                let index = storeOther.index('type');
                return index.openCursor(nowOtherName.value);
            }).then(function change2(cursor) {
                if (!cursor) {
                    updateOther.classList.add('hide')
                    activeSection = 'other';
                    localStorage.setItem('activeSection', JSON.stringify(activeSection));
                    return save();
                }
                console.log('Cursored at:', cursor.value);
                let update = cursor.value;
                update.type = afterOtherName.value;
                cursor.update(update);
                return cursor.continue().then(change2);

            })
        }
        updateOther.classList.add('hide')
        activeSection = 'other';
        localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
        save();
    }

})
changeOwner.addEventListener('click', function () {
    if (checkNameFound(afterOwnerName.value) && (nowOwnerName.value != afterOwnerName.value)) {
        alert('الاسم المضاف موجود مسبقاً')
    }
    else {
        btnUpdateOwner.disabled = false;
        if (localStorage["ownerName"] !== undefined && localStorage["ownerName"] !== null) {
            ownerNames = JSON.parse(localStorage.getItem('ownerName'));
            for (i = 0; i < ownerNames.length; i++) {
                if (ownerNames[i].name === nowOwnerName.value) {
                    ownerNames[i].name = afterOwnerName.value;
                }
            }
        }
        if (loading == 6) {
            let factoryDatabase1 = idb.open('Factory');
            factoryDatabase1.then(function (db) {
                var txOwner = db.transaction('owner', 'readwrite');
                var storeOwner = txOwner.objectStore('owner');
                let index = storeOwner.index('name');
                return index.openCursor(nowOwnerName.value);
            }).then(function change2(cursor) {
                if (!cursor) {
                    updateOwner.classList.add('hide')
                    activeSection = 'owner';
                    localStorage.setItem('activeSection', JSON.stringify(activeSection));
                    return save();
                }
                console.log('Cursored at:', cursor.value);
                let update = cursor.value;
                update.name = afterOwnerName.value;
                cursor.update(update);
                return cursor.continue().then(change2);

            })
        }
        updateOwner.classList.add('hide')
        activeSection = 'owner';
        localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
        save();
    }

})
changeOtherBuy.addEventListener('click', function () {
    if (checkNameFound(afterOtherNameBuy.value) && (nowOtherNameBuy.value != afterOtherNameBuy.value)) {
        alert('الاسم المضاف موجود مسبقاً')
    }
    else {
        btnUpdateOtherBuy.disabled = false;
        if (localStorage["otherBuyType"] !== undefined && localStorage["otherBuyType"] !== null) {
            otherBuyTypes = JSON.parse(localStorage.getItem('otherBuyType'));
            debugger;
            for (i = 0; i < otherBuyTypes.length; i++) {
                if (otherBuyTypes[i].name === nowOtherNameBuy.value) {
                    otherBuyTypes[i].name = afterOtherNameBuy.value;
                    otherBuyTypes[i].addToStoreAndSales = afterOtherNameBuyAdd.checked;
                }
            }
        }
        if (loading == 6) {
            let factoryDatabase1 = idb.open('Factory');
            factoryDatabase1.then(function (db) {
                var txOtherBuy = db.transaction('otherBuy', 'readwrite');
                var storeOtherBuy = txOtherBuy.objectStore('otherBuy');
                let index = storeOtherBuy.index('type');
                return index.openCursor(nowOtherNameBuy.value);
            }).then(function change2(cursor) {
                if (!cursor) {
                    updateOtherBuy.classList.add('hide')
                    activeSection = 'otherBuys';
                    localStorage.setItem('activeSection', JSON.stringify(activeSection));
                    return save();
                }
                console.log('Cursored at:', cursor.value);
                let update = cursor.value;
                update.type = afterOtherNameBuy.value;
                cursor.update(update);
                return cursor.continue().then(change2);

            })
        }
        updateOtherBuy.classList.add('hide')
        activeSection = 'otherBuys';
        localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
        save();
    }

})
changeOtherBuyName.addEventListener('click', function () {
    if (checkNameFound(afterOtherNameBuyName.value) && (nowOtherNameBuyName.value != afterOtherNameBuyName.value)) {
        alert('الاسم المضاف موجود مسبقاً')
    }
    else {
        btnUpdateOtherBuyName.disabled = false;
        if (localStorage["otherBuyName"] !== undefined && localStorage["otherBuyName"] !== null) {
            otherBuyNames = JSON.parse(localStorage.getItem('otherBuyName'));
            for (i = 0; i < otherBuyNames.length; i++) {
                if (otherBuyNames[i].name === nowOtherNameBuyName.value) {
                    otherBuyNames[i].name = afterOtherNameBuyName.value;
                }
            }
        }
        if (loading == 6) {
            let factoryDatabase1 = idb.open('Factory');
            factoryDatabase1.then(function (db) {
                var txOtherBuy = db.transaction('otherBuy', 'readwrite');
                var storeOtherBuy = txOtherBuy.objectStore('otherBuy');
                let index = storeOtherBuy.index('name');
                return index.openCursor(nowOtherNameBuyName.value);
            }).then(function change2(cursor) {
                if (!cursor) {
                    updateOtherBuy.classList.add('hide')
                    activeSection = 'otherBuys';
                    localStorage.setItem('activeSection', JSON.stringify(activeSection));
                    return save();
                }
                console.log('Cursored at:', cursor.value);
                let update = cursor.value;
                update.name = afterOtherNameBuyName.value;
                cursor.update(update);
                return cursor.continue().then(change2);

            })
        }
        updateOtherBuyName.classList.add('hide')
        activeSection = 'otherBuys';
        localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
        save();
    }

})
btnDeleteOther.addEventListener('click', function () {
    if (localStorage["otherType"] !== undefined && localStorage["otherType"] !== null) {
        otherTypes = JSON.parse(localStorage.getItem('otherType'));
        for (i = 0; i < otherTypes.length; i++) {
            if (otherTypes[i].name === othersTypes.value) {
                otherTypes.splice(i, 1);
            }
        }
    }
    activeSection = 'other';
    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
    save();

})
btnDeleteOwner.addEventListener('click', function () {
    if (localStorage["ownerName"] !== undefined && localStorage["ownerName"] !== null) {
        ownerNames = JSON.parse(localStorage.getItem('ownerName'));
        for (i = 0; i < ownerNames.length; i++) {
            if (ownerNames[i].name === ownerNames.value) {
                ownerNames.splice(i, 1);
            }
        }
    }
    activeSection = 'owner';
    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
    save();

})
btnDeleteOtherBuy.addEventListener('click', function () {
    if (localStorage["otherBuyType"] !== undefined && localStorage["otherBuyType"] !== null) {
        
        
        otherBuyTypes = JSON.parse(localStorage.getItem('otherBuyType'));
        for (i = 0; i < otherBuyTypes.length; i++) {
            if (otherBuyTypes[i].name === othersBuyTypes.value) {
                otherBuyTypes.splice(i, 1);
            }
        }
    }
    save();

})
btnDeleteOtherBuyName.addEventListener('click', function () {
    if (localStorage["otherBuyName"] !== undefined && localStorage["otherBuyName"] !== null) {
        otherBuyNames = JSON.parse(localStorage.getItem('otherBuyName'));
        for (i = 0; i < otherBuyNames.length; i++) {
            if (otherBuyNames[i].name === othersBuyNames.value) {
                otherBuyNames.splice(i, 1);
            }
        }
    }
    activeSection = 'otherBuys';
    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
    save();

})
btnAddProduct.addEventListener('click', function () {
    btnUpdateProduct.disabled = true;
    addProduct.classList.remove('hide')
})
plusProduct.addEventListener('click', function () {
    if (checkNameFound(ProductName.value)) {
        alert('الاسم المضاف موجود مسبقاً')
    }
    else {
        btnUpdateProduct.disabled = false;
        productionTypes.insertAdjacentHTML('afterbegin', `<option>${ProductName.value}</option>`)
        storeType.insertAdjacentHTML('afterbegin', `<option>${ProductName.value}</option>`)
        salesTypes.insertAdjacentHTML('afterbegin', `<option>${ProductName.value}</option>`)
        addProduct.classList.add('hide')
        products.push({
            name: ProductName.value
        })
        activeSection = 'production';
        localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
        save();
    }
})
btnUpdateProduct.addEventListener('click', function () {
    btnAddProduct.disabled = true;
    updateProduct.classList.remove('hide');
    nowProductName.value = productionTypes.value;
    afterProductName.value = productionTypes.value;
    nowProductName.disabled = true;
})
changeProduct.addEventListener('click', function () {
    if (checkNameFound(afterProductName.value) && (nowProductName.value != afterProductName.value)) {
        alert('الاسم المضاف موجود مسبقاً')
    }
    else {
        btnUpdateProduct.disabled = false;
        if (localStorage["product"] !== undefined && localStorage["product"] !== null) {
            products = JSON.parse(localStorage.getItem('product'));
            for (i = 0; i < products.length; i++) {
                if (products[i].name === nowProductName.value) {
                    products[i].name = afterProductName.value;
                }
            }
        }
        if (loading == 6) {
            let factoryDatabase1 = idb.open('Factory');
            factoryDatabase1.then(function (db) {
                var txProduction = db.transaction('production', 'readwrite');
                var storeProduction = txProduction.objectStore('production');
                let index = storeProduction.index('type');
                return index.openCursor(nowProductName.value);
            }).then(function change2(cursor) {
                if (!cursor) {
                    updateProduct.classList.add('hide');
                    activeSection = 'production';
                    localStorage.setItem('activeSection', JSON.stringify(activeSection));
                    return save();
                }
                console.log('Cursored at:', cursor.value);
                let update = cursor.value;
                update.type = afterProductName.value;
                cursor.update(update);
                return cursor.continue().then(change2);

            })
        }
        updateProduct.classList.add('hide')
        activeSection = 'production';
        localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
        save();
    }

})
btnDeleteProduct.addEventListener('click', function () {
    if (localStorage["product"] !== undefined && localStorage["product"] !== null) {
        products = JSON.parse(localStorage.getItem('product'));
        for (i = 0; i < products.length; i++) {
            if (products[i].name === productionTypes.value) {
                products.splice(i, 1);
            }
        }
    }
    activeSection = 'production';
    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
    save();

})
btnAddBuy.addEventListener('click', function () {
    btnUpdateBuy.disabled = true;
    addBuy.classList.remove('hide')
})
btnUpdateBuy.addEventListener('click', function () {
    btnAddBuy.disabled = true;
    updateBuy.classList.remove('hide');
    nowBuyName.value = salesName.value;
    afterBuyName.value = salesName.value;
    nowBuyName.disabled = true;
})
plusBuy.addEventListener('click', function () {
    if (checkNameFound(buyName.value)) {
        alert('الاسم المضاف موجود مسبقاً')
    }
    else {
        btnUpdateBuy.disabled = false;
        salesName.insertAdjacentHTML('afterbegin', `<option>${buyName.value}</option>`)
        addBuy.classList.add('hide')
        buys.push({
            name: buyName.value
        })
        activeSection = 'sales';
        localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
        save();
    }
})
changeBuy.addEventListener('click', function () {
    if (checkNameFound(afterBuyName.value) && (nowBuyName.value != afterBuyName.value)) {
        alert('الاسم المضاف موجود مسبقاً')
    }
    else {
        btnUpdateBuy.disabled = false;
        if (localStorage["buy"] !== undefined && localStorage["buy"] !== null) {
            buys = JSON.parse(localStorage.getItem('buy'));
            for (i = 0; i < buys.length; i++) {
                if (buys[i].name === nowBuyName.value) {
                    buys[i].name = afterBuyName.value;
                }
            }
        }
        if (loading == 6) {
            let factoryDatabase1 = idb.open('Factory');
            factoryDatabase1.then(function (db) {
                var txSale = db.transaction('sale', 'readwrite');
                var storeSale = txSale.objectStore('sale');
                let index = storeSale.index('name');
                return index.openCursor(nowBuyName.value);
            }).then(function change2(cursor) {
                if (!cursor) {
                    updateBuy.classList.add('hide');
                    activeSection = 'sales';
                    localStorage.setItem('activeSection', JSON.stringify(activeSection));
                    return save();
                }
                console.log('Cursored at:', cursor.value);
                let update = cursor.value;
                update.name = afterBuyName.value;
                cursor.update(update);
                return cursor.continue().then(change2);

            })
        }
        updateBuy.classList.add('hide')
        activeSection = 'sales';
        localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
        save();
    }

})
btnDeleteBuy.addEventListener('click', function () {
    if (localStorage["buy"] !== undefined && localStorage["buy"] !== null) {
        buys = JSON.parse(localStorage.getItem('buy'));
        for (i = 0; i < buys.length; i++) {
            if (buys[i].name === salesName.value) {
                buys.splice(i, 1);
            }
        }
    }
    activeSection = 'sales';
    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
    save();
})
saveMilkData.addEventListener('click', function () {
    let t0 = performance.now();
    if (isNaN(milkAmountBakary.value) || isNaN(milkPriceBakary.value) || isNaN(milkAmountGamos.value) || isNaN(milkPriceGamos.value) || isNaN(milkPaid.value)) {
        alert('you must enter numbers only');
    }
    else if ((milkAmountBakary.value === '0' && milkPriceBakary.value === '0') && (milkAmountGamos.value === '0' && milkPriceGamos.value === '0') && milksellers.value != "زيادات" && (milksellersAdditions.value === '0' && milksellersSalary.value === '0') && (milkPaid.value === '0')) {
        alert('يجب ادخال على الاقل كمية اللبن وسعر الكيلو أو المدفوع');
    }
    else if ((milkAmountBakary.value === '0' && milkPriceBakary.value === '0' && milkAmountGamos.value === '0' && milkPriceGamos.value === '0') && (milkPaid.value !== '0')) {
        for (let y = 0; y < sellers.length; y++) {
            if (sellers[y].name == milksellers.value) {
                let index = y + 1;
                if (y == sellers.length - 1) {
                    index = 0;
                }
                nextSeller = sellers[index].name;
                localStorage.setItem('nextSeller', JSON.stringify(nextSeller));
                break;
            }
        }
        if (milkAmountBakary.value == '') {
            milkAmountBakary.value = 0;
        }
        if (milkAmountGamos.value == '') {
            milkAmountGamos.value = 0;
        }
        let res = true;
        for (let i = 0; i < milks.length; i++) {
            if (milks[i].date == milkDays.value + ' ' + milkMonthes.value + ' ' + milkYears.value + ' ' + milkTime.value && milks[i].seller == milksellers.value) {
                res = confirm(" تم ادخاله سابقاً في هذا التاريخ");
                console.log(res);
                break;
            }
        }

        if (res == true) {
            milksAdd.push({
                key: key1 + 1,
                seller: milksellers.value,
                amountBakary: milkAmountBakary.value,
                priceBakary: milkPriceBakary.value,
                totalBakary: milkTotalBakary.value,
                amountGamos: milkAmountGamos.value,
                priceGamos: milkPriceGamos.value,
                totalGamos: milkTotalGamos.value,
                total: parseFloat(milkTotalGamos.value) + parseFloat(milkTotalBakary.value),
                paid: milkPaid.value,
                salary: milksellersSalary.value,
                addtions: milksellersAdditions.value,
                addtionsDescription: milksellersAddtionsDescription.value,
                notes: milkNotes.value,
                date: milkDays.value + ' ' + milkMonthes.value + ' ' + milkYears.value + ' ' + milkTime.value
            });
            key1++;
            theBox = parseFloat(box.value) - parseFloat(milkPaid.value);
        }


    }
    else {
        for (let y = 0; y < sellers.length; y++) {
            if (sellers[y].name == milksellers.value) {
                let index = y + 1;
                if (y == sellers.length - 1) {
                    index = 0;
                }
                nextSeller = sellers[index].name;
                localStorage.setItem('nextSeller', JSON.stringify(nextSeller));
                break;
            }
        }
        if (milkAmountBakary.value == '') {
            milkAmountBakary.value = 0;
        }
        if (milkAmountGamos.value == '') {
            milkAmountGamos.value = 0;
        }
        let res = true;
        for (let i = 0; i < milks.length; i++) {
            if (milks[i].date == milkDays.value + ' ' + milkMonthes.value + ' ' + milkYears.value + ' ' + milkTime.value && milks[i].seller == milksellers.value) {
                res = confirm(" تم ادخاله سابقاً في هذا التاريخ");
                break;
            }
        }
        if (res == true) {
            milksAdd.push({
                key: key1 + 1,
                seller: milksellers.value,
                amountBakary: milkAmountBakary.value,
                priceBakary: milkPriceBakary.value,
                totalBakary: milkTotalBakary.value,
                amountGamos: milkAmountGamos.value,
                priceGamos: milkPriceGamos.value,
                totalGamos: milkTotalGamos.value,
                total: parseFloat(milkTotalGamos.value) + parseFloat(milkTotalBakary.value),
                paid: milkPaid.value,
                salary: milksellersSalary.value,
                addtions: milksellersAdditions.value,
                addtionsDescription: milksellersAddtionsDescription.value,
                notes: milkNotes.value,
                date: milkDays.value + ' ' + milkMonthes.value + ' ' + milkYears.value + ' ' + milkTime.value
            });
            key1++;
            theBox = parseFloat(box.value) - parseFloat(milkPaid.value);
        }

    }
    setTimeout(function () {
        box.value = parseFloat(box.value) - parseFloat(milkPaid.value);
        milkAmountBakary.value = 0;
        milkAmountGamos.value = 0;
        milkPriceBakary.value = 0;
        milkPriceGamos.value = 0;
        milkTotalBakary.value = 0;
        milkTotalGamos.value = 0;
        milkPaid.value = 0;
    }, 1)
    activeSection = 'milk';
    localStorage.setItem('activeSection', JSON.stringify(activeSection));
    save();
})
salarySave.addEventListener('click', function () {
    let reaminderBefore = calcReminder(employees.value);
    let toOrOn = ''
    if (reaminderBefore <= 0) {
        toOrOn = 'عليه سابقاً'
    }
    else {
        toOrOn = 'له سابقاً'
    }
    for (let y = 0; y < employes.length; y++) {
        if (employes[y].name == employees.value) {
            let index = y + 1;
            if (y == employes.length - 1) {
                index = 0;
            }
            nextEmployee = employes[index].name;
            localStorage.setItem('nextEmployee', JSON.stringify(nextEmployee));
            break;
        }
    }
    salariesAdd.push({
        key: key2 + 1,
        employee: employees.value,
        type: employeeType.value,
        paid: salaryPaid.value,
        addtions: salaryAddtions.value,
        salary: employeeSalary.value,
        notes: salariesNotes.value,
        date: salaryDays.value + ' ' + salaryMonthes.value + ' ' + salaryYears.value + ' ' + salaryTime.value
    })
    key2++;
    theBox = parseFloat(box.value) - parseFloat(salaryPaid.value);
    setTimeout(function () {
        box.value = parseFloat(box.value) - parseFloat(salaryPaid.value)
        salaryData = salariesAdd;
        printArea.innerHTML = '';
        let reamonderNow = parseFloat(reaminderBefore) - parseFloat(salaryData[salaryData.length - 1].paid);
        let toOrOnNow = ''
        if (reamonderNow <= 0) {
            toOrOnNow = 'عليه '
        }
        else {
            toOrOnNow = 'له '
        }
        printArea.insertAdjacentHTML('afterbegin', `<h1>ايصال استلام</h1>
        <hr>
        <table class='arabic' class='arabic' style="width:105mm;text-align:center;margin:auto">
        <tr>
        <td style="height:20mm">${salaryData[salaryData.length - 1].employee} </td>
        <th style="height:20mm"> الاسم </th>
        </tr>
        <tr>
        <td style="height:20mm">${Math.abs(reaminderBefore)} </td>
        <th style="height:20mm"> ${toOrOn} </th>
        </tr>
        <tr>
        <td style="height:20mm">${salaryData[salaryData.length - 1].paid} </td>
        <th style="height:20mm">  المدفوع </th>
        </tr>
        <tr>
        <td style="height:20mm">${Math.abs(reamonderNow)} </td>
        <th style="height:20mm">  ${toOrOnNow} </th>
        </tr>
        <tr>
        <td style="height:20mm">${salaryData[salaryData.length - 1].date + putDaysNamesSpicified(salaryData[salaryData.length - 1].date)} </td>
        <th style="height:20mm"> التاريخ </th>
        </tr>
        <tr>
        <td style="height:20mm"> </td>
        <th style="height:20mm"> التوقيع </th>
        </tr>
        </table>
     `);

        debugger;
        $('#DivIdToPrint').persianNum();
        printDiv();
        salaryPaid.value = 0;
        salaryAddtions.value = 0;
    }, 1)
    activeSection = 'salaries';
    localStorage.setItem('activeSection', JSON.stringify(activeSection));
    save();
})
othersSave.addEventListener('click', function () {
    if (isNaN(othersAmount.value) || isNaN(othersPrice.value)) {
        alert('you must enter numbers only');
    } else if (othersAmount.value === '0' || othersPrice.value === '0') {
        alert('يجب ادخال الكمية والسعر');
    } else {
        for (let y = 0; y < otherTypes.length; y++) {
            if (otherTypes[y].name == othersTypes.value) {
                let index = y + 1;
                if (y == otherTypes.length - 1) {
                    index = 0;
                }
                nextOther = otherTypes[index].name;
                localStorage.setItem('nextOther', JSON.stringify(nextOther));
                break;
            }
        }
        othersAdd.push({
            key: key3 + 1,
            type: othersTypes.value,
            amount: othersAmount.value,
            price: othersPrice.value,
            total: othersTotal.value,
            notes: othersNotes.value,
            date: othersDays.value + ' ' + othersMonthes.value + ' ' + othersYears.value + ' ' + othersTime.value,
            addMasrof: addToMasrof.checked
        });
        key3++;
        theBox = parseFloat(box.value) - parseFloat(othersTotal.value);
    }
    setTimeout(function () {
        box.value = parseFloat(box.value) - parseFloat(othersTotal.value);
        othersData = othersAdd;
        printArea.innerHTML = '';
        printArea.insertAdjacentHTML('afterbegin', `<h1>ايصال مصروفات</h1>
        <hr>
        <table class='arabic' class='arabic' style="width:105mm;text-align:center;margin:auto">
        <tr>
        <td style="height:10mm">${othersData[othersData.length - 1].type} </td>
        <th style="height:10mm"> النوع </th>
        </tr>
        <tr>
        <td style="height:10mm">${othersData[othersData.length - 1].amount} </td>
        <th style="height:10mm"> الكمية </th>
        </tr>
        <tr>
        <td style="height:10mm">${othersData[othersData.length - 1].price} </td>
        <th style="height:10mm"> سعر الوحدة </th>
        </tr>
        <tr>
        <tr>
        <td style="height:10mm">${othersData[othersData.length - 1].total} </td>
        <th style="height:10mm"> الاجمالي </th>
        </tr>
        <tr>
        <td style="height:10mm">${othersData[othersData.length - 1].date + putDaysNamesSpicified(othersData[othersData.length - 1].date)} </td>
        <th style="height:10mm"> التاريخ </th>
        </tr>
        <tr>
        <td style="height:10mm"> </td>
        <th style="height:10mm"> التوقيع </th>
        </tr>
        </table>
     `);
        $('#DivIdToPrint').persianNum();
        printDiv();
        othersAmount.value = 0;
        othersPrice.value = 0;
        othersTotal.value = 0;
    }, 1)
    activeSection = 'other';
    localStorage.setItem('activeSection', JSON.stringify(activeSection));
    save();
})
ownersSave.addEventListener('click', function () {
    if (isNaN(ownersCash.value) || isNaN(ownersPaid.value)) {
        alert('you must enter numbers only');
    } else if (ownersCash.value == '0' && ownersPaid.value == '0') {
        alert('يجب ادخال المدفوع او المسحوب');
    } else {
        debugger
        for (let y = 0; y < ownerNames.length; y++) {
            if (ownerNames[y].name == ownersNames.value) {
                let index = y + 1;
                if (y == ownerNames.length - 1) {
                    index = 0;
                }
                nextOwner = ownerNames[index].name;
                localStorage.setItem('nextOwner', JSON.stringify(nextOwner));
                break;
            }
        }
        ownersAdd.push({
            key: key7 + 1,
            name: ownersNames.value,
            cash: ownersCash.value,
            paid: ownersPaid.value,
            notes: ownersNotes.value,
            date: ownersDays.value + ' ' + ownersMonthes.value + ' ' + ownersYears.value + ' ' + ownersTime.value,
        });
        key7++;
        theBox = parseFloat(box.value) - parseFloat(ownersPaid.value) + parseFloat(ownersCash.value);
    }
    setTimeout(function () {
        box.value = parseFloat(box.value) - parseFloat(ownersPaid.value) + parseFloat(ownersCash.value);
        ownersData = ownersAdd;
        printArea.innerHTML = '';
        printArea.insertAdjacentHTML('afterbegin', `<h1>ايصال </h1>
        <hr>
        <table class='arabic' class='arabic' style="width:105mm;text-align:center;margin:auto">
        <tr>
        <td style="height:10mm">${ownersData[ownersData.length - 1].name} </td>
        <th style="height:10mm"> الاسم </th>
        </tr>
        <tr>
        <td style="height:10mm">${ownersData[ownersData.length - 1].cash} </td>
        <th style="height:10mm"> دفع </th>
        </tr>
        <tr>
        <td style="height:10mm">${ownersData[ownersData.length - 1].paid} </td>
        <th style="height:10mm"> سحب </th>
        </tr>
        <tr>
        <td style="height:10mm">${ownersData[ownersData.length - 1].notes} </td>
        <th style="height:10mm"> الملاحظات </th>
        </tr>
        <tr>
        <td style="height:10mm">${ownersData[ownersData.length - 1].date + putDaysNamesSpicified(ownersData[ownersData.length - 1].date)} </td>
        <th style="height:10mm"> التاريخ </th>
        </tr>
        <tr>
        <td style="height:10mm"> </td>
        <th style="height:10mm"> التوقيع </th>
        </tr>
        </table>
     `);
        $('#DivIdToPrint').persianNum();
        printDiv();
        ownersCash.value = 0;
        ownersPaid.value = 0;
    }, 1)
    activeSection = 'owner';
    localStorage.setItem('activeSection', JSON.stringify(activeSection));
    save();
})
othersBuySave.addEventListener('click', function () {
    if (isNaN(othersBuyAmount.value) || isNaN(othersBuyPrice.value)) {
        alert('you must enter numbers only');
    }
    else {
        othersBuyAdd.push({
            key: key6 + 1,
            name: othersBuyNames.value,
            type: othersBuyTypes.value,
            amount: othersBuyAmount.value,
            price: othersBuyPrice.value,
            total: othersBuyTotal.value,
            paid: othersBuyPaid.value,
            notes: othersBuyNotes.value,
            date: othersBuyDays.value + ' ' + othersBuyMonthes.value + ' ' + othersBuyYears.value + ' ' + othersBuyTime.value,
        });
        key6++;
        theBox = parseFloat(box.value) - parseFloat(othersBuyPaid.value);
    }
    setTimeout(function () {
        box.value = parseFloat(box.value) - parseFloat(othersBuyPaid.value);
        othersBuyData = othersBuyAdd;
        let reaminderBefore = calcReminder(othersBuyNames.value);
        let toOrOn = ''
        if (reaminderBefore <= 0) {
            toOrOn = 'عليه سابقاً'
        }
        else {
            toOrOn = 'له سابقاً'
        }
        let reamonderNow = parseFloat(othersBuyData[othersBuyData.length - 1].total) - parseFloat(othersBuyData[othersBuyData.length - 1].paid) + parseFloat(reaminderBefore);
        let toOrOnNow = ''
        if (reamonderNow <= 0) {
            toOrOnNow = 'عليه '
        }
        else {
            toOrOnNow = 'له '
        }
        printArea.innerHTML = '';
        printArea.insertAdjacentHTML('afterbegin', `<h1>ايصال مشتريات</h1>
        <hr>
        <table class='arabic' class="arabic"  style="width:105mm;text-align:center;margin:auto">
        <tr>
        <td style="height:10mm">${othersBuyData[othersBuyData.length - 1].name} </td>
        <th style="height:10mm"> الاسم </th>
        </tr>
           <tr>
        <td style="height:10mm">${Math.abs(reaminderBefore)} </td>
        <th style="height:10mm"> ${toOrOn} </th>
        </tr>
        <tr>
        <td style="height:10mm">${othersBuyData[othersBuyData.length - 1].type} </td>
        <th style="height:10mm"> النوع </th>
        </tr>
        <tr>
        <td style="height:10mm">${othersBuyData[othersBuyData.length - 1].amount} </td>
        <th style="height:10mm"> الكمية </th>
        </tr>
        <tr>
        <td style="height:10mm">${othersBuyData[othersBuyData.length - 1].price} </td>
        <th style="height:10mm"> سعر الوحدة </th>
        </tr>
        <tr>
        <td style="height:10mm">${othersBuyData[othersBuyData.length - 1].total} </td>
        <th style="height:10mm"> الاجمالي </th>
        </tr>
        <tr>
        <td style="height:10mm">${othersBuyData[othersBuyData.length - 1].paid} </td>
        <th style="height:10mm"> المدفوع </th>
        </tr>
        <tr>
        <td style="height:10mm">${Math.abs(reamonderNow)} </td>
        <th style="height:10mm"> ${toOrOnNow} </th>
        </tr>
        <tr>
        <td style="height:10mm">${othersBuyData[othersBuyData.length - 1].date + putDaysNamesSpicified(othersBuyData[othersBuyData.length - 1].date)} </td>
        <th style="height:10mm"> التاريخ </th>
        </tr>
        <tr>
        <td style="height:10mm"> </td>
        <th style="height:10mm"> التوقيع </th>
        </tr>
        </table>
     `);
        $('#DivIdToPrint').persianNum();
        printDiv();
        othersBuyAmount.value = 0;
        othersBuyPrice.value = 0;
        othersBuyTotal.value = 0;
        othersBuyPaid.value = 0;
        othersBuyRemainder.value = 0;
    }, 1)
    activeSection = 'otherBuys';
    localStorage.setItem('activeSection', JSON.stringify(activeSection));
    save();
})
productionSave.addEventListener('click', function () {
    for (let y = 0; y < products.length; y++) {
        if (products[y].name == productionTypes.value) {
            let index = y + 1;
            if (y == products.length - 1) {
                index = 0;
            }
            nextProduction = products[index].name;
            localStorage.setItem('nextProduction', JSON.stringify(nextProduction));
            break;
        }
    }
    productionsAdd.push({
        key: key4 + 1,
        type: productionTypes.value,
        amount: productionAmount.value,
        amountBakary: amountBakaryInProduction.value,
        amountGamos: amountGamosInProduction.value,
        dateMilk: productionDaysMilk.value + ' ' + productionMonthesMilk.value + ' ' + productionYearsMilk.value + ' ' + productionTimeMilk.value,
        notes: productionNotes.value,
        date: productionDays.value + ' ' + productionMonthes.value + ' ' + productionYears.value + ' ' + productionTime.value
    });
    key4++;
    activeSection = 'production';
    localStorage.setItem('activeSection', JSON.stringify(activeSection));
    save();
})
let totalInSalesBill = 0;
let paidInSalesBill = 0;
let reaminderInSalesBill = 0;
salesSave.addEventListener('click', function () {
    debugger;
    let bill;
    let reaminderBefore = calcReminder(salesName.value);
    let toOrOn = ''
    if (reaminderBefore <= 0) {
        toOrOn = 'عليه سابقاً'
    }
    else {
        toOrOn = 'له سابقاً'
    }
    if (isNaN(salesAmount.value) || isNaN(salesPrice.value)) {
        alert('you must enter numbers only');
    }
    else if ((parseFloat(salesAmount.value) > parseFloat(storeAmount.value)) && salesTypes.value != "دفع" && salesTypes.value != "عليه") {
        alert('الكمية غير متوفرة');
    }
    else {
        totalInSalesBill = totalInSalesBill + parseFloat(salesTotal.value);
        paidInSalesBill = paidInSalesBill + parseFloat(paidToFactory.value);
        if (amountOrW.checked) {
            salesAdd.push({
                key: key5 + 1,
                name: salesName.value,
                type: salesTypes.value,
                amount: salesAmount.value,
                weight: salesWeight.value,
                price: salesPrice.value,
                total: salesTotal.value,
                paidFactory: paidToFactory.value,
                notes: salesNotes.value,
                date: salesDays.value + ' ' + salesMonthes.value + ' ' + salesYears.value + ' ' + salesTime.value
            });
        }
        else {
            salesAdd.push({
                key: key5 + 1,
                name: salesName.value,
                type: salesTypes.value,
                amount: salesAmount.value,
                weight: 'ــــــــ',
                price: salesPrice.value,
                total: salesTotal.value,
                paidFactory: paidToFactory.value,
                notes: salesNotes.value,
                date: salesDays.value + ' ' + salesMonthes.value + ' ' + salesYears.value + ' ' + salesTime.value
            });
        }
        key5++;
        theBox = parseFloat(box.value) + parseFloat(paidToFactory.value);
        box.value = parseFloat(box.value) + parseFloat(paidToFactory.value);
        salesData = salesAdd;
        if (printArea.childElementCount == 0) {
            printArea.innerHTML = ``;
            printArea.insertAdjacentHTML('afterbegin', `<h1>ايصال مبيعات</h1>
        <hr>
        <table class='arabic' id="bill2" style="width:105mm;text-align:center;margin:auto">
          <tr>
        <td  style="border : 1px solid black ; text-align : center" colspan='3' >${Math.abs(reaminderBefore)}</td>
        <td  style="border : 1px solid black ; text-align : center" colspan='4'>  ${toOrOn}   </td>
        <td style="border : 1px solid black ; text-align : center" colspan='2'>${salesData[salesData.length - 1].name} </td>
        </tr>
        <tr>
        <th  style="border : 1px solid black ; text-align : center"> التوقيع </th>
        <th  style="border : 1px solid black ; text-align : center"> التاريخ </th>
        <th  style="border : 1px solid black ; text-align : center">  المدفوع للمصنع </th>
        <th  style="border : 1px solid black ; text-align : center"> الاجمالي </th>
        <th  style="border : 1px solid black ; text-align : center"> سعر الوحدة </th>
        <th  style="border : 1px solid black ; text-align : center"> الوزن </th>
        <th  style="border : 1px solid black ; text-align : center"> الكمية </th>
        <th  style="border : 1px solid black ; text-align : center"> النوع </th>
        <th  style="border : 1px solid black ; text-align : center"> الاسم </th>
        </tr>
        <tr>
        <td  style="border : 1px solid black ; text-align : center"></td>
        <td  style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].date + putDaysNamesSpicified(salesData[salesData.length - 1].date)} </td>
        <td  style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].paidFactory} </td>
        <td  style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].total} </td>
        <td  style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].price} </td>
        <td  style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].weight} </td>
        <td  style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].amount} </td>
        <td  style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].type} </td>
        <td  style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].name} </td>
        </tr>
        </table>
        `);
            bill = document.querySelector('#bill2')

        }
        else if (printArea.children[0].innerText == "ايصال مبيعات") {
            bill = document.querySelector('#bill2')

            bill.insertAdjacentHTML('beforeend', `
             <tr>
        <td style="border : 1px solid black ; text-align : center"></td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].date + putDaysNamesSpicified(salesData[salesData.length - 1].date)} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].paidFactory} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].total} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].price} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].weight} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].amount} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].type} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].name} </td>
        </tr>
        
     `);
            bill.insertAdjacentHTML('afterbegin', `
            <tr>
        <td  style="border : 1px solid black ; text-align : center" colspan='3' >${Math.abs(reaminderBefore)}</td>
        <td  style="border : 1px solid black ; text-align : center" colspan='4'>  ${toOrOn}   </td>
        <td style="border : 1px solid black ; text-align : center" colspan='2'>${salesData[salesData.length - 1].name} </td>
        </tr>
        
     `);
        }
        bill = document.querySelector('#bill2')
        let reamonderNow = parseFloat(reaminderBefore) - totalInSalesBill + paidInSalesBill ;
        let toOrOnNow = ''
        if (reamonderNow <= 0) {
            toOrOnNow = 'عليه '
        }
        else {
            toOrOnNow = 'له '
        }
        bill.insertAdjacentHTML('beforeend', `
             <tr>
        <td style="border : 1px solid black ; text-align : center">التوقيع</td>
        <td style="border : 1px solid black ; text-align : center">${toOrOnNow}</td>
        <td style="border : 1px solid black ; text-align : center">اجمالي المدفوع</td>
        <td style="border : 1px solid black ; text-align : center">اجمالي قيمة الفاتورة </td>
        <td style="border : 1px solid black ; text-align : center" colspan="5">اجمالي الفاتورة</td>
        </tr>
             <tr>
        <td style="border : 1px solid black ; text-align : center"></td>
        <td style="border : 1px solid black ; text-align : center">${Math.abs(reamonderNow)} </td>
        <td style="border : 1px solid black ; text-align : center">${paidInSalesBill} </td>
        <td style="border : 1px solid black ; text-align : center">${totalInSalesBill} </td>
        <td style="border : 1px solid black ; text-align : center" colspan="5">اجمالي الفاتورة</td>
        </tr>
        
     `);

        $('#DivIdToPrint').persianNum();

        printDiv();

        salesAmount.value = 0;
        salesPrice.value = 0;
        salesTotal.value = 0;
        paidToFactory.value = 0;

    }
    activeSection = 'sales';
    localStorage.setItem('activeSection', JSON.stringify(activeSection));
    save();

})
function addTypeToBill() {
    let bill;
    if (isNaN(salesAmount.value) || isNaN(salesPrice.value)) {
        alert('you must enter numbers only');
    }
    else if ((parseFloat(salesAmount.value) > parseFloat(storeAmount.value)) && salesTypes.value != "دفع" && salesTypes.value != "عليه") {
        alert('الكمية غير متوفرة');
    }
    else {
        totalInSalesBill = totalInSalesBill + parseFloat(salesTotal.value);
        paidInSalesBill = paidInSalesBill + parseFloat(paidToFactory.value);
        if (amountOrW.checked) {
            salesAdd.push({
                key: key5 + 1,
                name: salesName.value,
                type: salesTypes.value,
                amount: salesAmount.value,
                weight: salesWeight.value,
                price: salesPrice.value,
                total: salesTotal.value,
                paidFactory: paidToFactory.value,
                notes: salesNotes.value,
                date: salesDays.value + ' ' + salesMonthes.value + ' ' + salesYears.value + ' ' + salesTime.value
            });
        }
        else {
            salesAdd.push({
                key: key5 + 1,
                name: salesName.value,
                type: salesTypes.value,
                amount: salesAmount.value,
                weight: 'ــــــــ',
                price: salesPrice.value,
                total: salesTotal.value,
                paidFactory: paidToFactory.value,
                notes: salesNotes.value,
                date: salesDays.value + ' ' + salesMonthes.value + ' ' + salesYears.value + ' ' + salesTime.value
            });
        }
        key5++;
        theBox = parseFloat(box.value) + parseFloat(paidToFactory.value);
        box.value = parseFloat(box.value) + parseFloat(paidToFactory.value);
        salesData = salesAdd;
        salesInfo.insertAdjacentHTML('afterend', `<tr>
        <td>${salesData[salesData.length - 1].date + putDaysNamesSpicified(salesData[salesData.length - 1].date)}</td>
        <td>${salesData[salesData.length - 1].retainFactory}</td>
        <td>${salesData[salesData.length - 1].paidFactory}</td>
        <td>${salesData[salesData.length - 1].total}</td>
        <td>${salesData[salesData.length - 1].price}</td>
        <td>${salesData[salesData.length - 1].weight}</td>
        <td>${salesData[salesData.length - 1].amount}</td>
        <td>${salesData[salesData.length - 1].type}</td>
        <td>${salesData[salesData.length - 1].name}</td>
        <td class='hide'>${salesData[salesData.length - 1].key}</td>
        </tr>`)
        if (printArea.childElementCount == 0) {
            printArea.innerHTML = ``;
            printArea.insertAdjacentHTML('afterbegin', `<h1>ايصال مبيعات</h1>
        <hr>
        <table class='arabic' id="bill2" style="width:105mm;text-align:center;margin:auto">
        <tr>
        <th style="border : 1px solid black ; text-align : center"> التوقيع </th>
        <th style="border : 1px solid black ; text-align : center"> التاريخ </th>
        <th style="border : 1px solid black ; text-align : center"> المدفوع للمصنع </th>
        <th style="border : 1px solid black ; text-align : center"> الاجمالي </th>
        <th style="border : 1px solid black ; text-align : center"> سعر الوحدة </th>
        <th style="border : 1px solid black ; text-align : center"> الوزن </th>
        <th style="border : 1px solid black ; text-align : center"> الكمية </th>
        <th style="border : 1px solid black ; text-align : center"> النوع </th>
        <th style="border : 1px solid black ; text-align : center"> الاسم </th>
        </tr>
        <tr>
        <td style="border : 1px solid black ; text-align : center"></td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].date + putDaysNamesSpicified(salesData[salesData.length - 1].date)} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].paidFactory} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].total} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].price} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].weight} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].amount} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].type} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].name} </td>
        </tr>
        </table>
        `);
            bill = document.querySelector('#bill2')

        }
        else if (printArea.children[0].innerText == "ايصال مبيعات") {
            bill = document.querySelector('#bill2')
            bill.insertAdjacentHTML('beforeend', `
             <tr>
        <td style="border : 1px solid black ; text-align : center"></td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].date + putDaysNamesSpicified(salesData[salesData.length - 1].date)} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].paidFactory} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].total} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].price} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].weight} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].amount} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].type} </td>
        <td style="border : 1px solid black ; text-align : center">${salesData[salesData.length - 1].name} </td>
        </tr>
        
     `);
        }
        salesAmount.value = 0;
        salesPrice.value = 0;
        salesTotal.value = 0;
        salesWeight.value = 0;
        paidToFactory.value = 0;
    }
}
function printDiv() {
    debugger;

    var newWin = window.open('', 'Print-Window');

    newWin.document.open();

    newWin.document.write(`<html><body style='text-align:center; border: 2px solid black' onload="window.print()"> ${printArea.innerHTML} </body > </html>`);

    newWin.document.close();

    setTimeout(function () {
        newWin.close();
    }, 20);

}
function deleteItemInMilkTable (e) {
    for (i = 0; i < milks.length; i++) {
        if (milks[i].key == e.path[2].cells[16].innerText) {
            let index = i ;
            theBox = parseFloat(theBox) + parseFloat(milks[i].paid);
            let factoryDatabase1 = idb.open('Factory');
            factoryDatabase1.then(function (db) {
                var txMilk = db.transaction('milk', 'readwrite');
                var storeMilk = txMilk.objectStore('milk');
                let info1 = storeMilk.delete(milks[index].key);
                info1.then(function (res) {
                    milks.splice(index, 1);
                    activeSection = 'milk';
                    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
                    save();
                })
            });
        }
    }
}
function deleteItemInSalariesTable (e) {
    console.log(e)
    for (i = 0; i < salaries.length; i++) {
        if (salaries[i].key == e.path[2].cells[9].innerText) {
            let index = i ;
            theBox = parseFloat(theBox) + parseFloat(salaries[i].paid);
            let factoryDatabase1 = idb.open('Factory');
            factoryDatabase1.then(function (db) {
                var txSalary = db.transaction('salary', 'readwrite');
                var storeSalary = txSalary.objectStore('salary');
                let info1 = storeSalary.delete(salaries[index].key);
                info1.then(function (res) {
                    salaries.splice(index, 1);
                    activeSection = 'salaries';
                    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
                    save();
                })
            });
        }
    }
}
function deleteItemInOthersTable (e) {
    for (i = 0; i < others.length; i++) {
        if (others[i].key == e.path[2].cells[8].innerText) {
            let index = i ;
            theBox = parseFloat(theBox) + parseFloat(others[i].total);
            let factoryDatabase1 = idb.open('Factory');
            factoryDatabase1.then(function (db) {
                var txOther = db.transaction('other', 'readwrite');
                var storeOther = txOther.objectStore('other');
                let info1 = storeOther.delete(others[index].key);
                info1.then(function (res) {
                    others.splice(index, 1);
                    activeSection = 'other';
                    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
                    save();
                })
            });
        }
    }
}
function deleteItemInOwnersTable (e) {
    for (i = 0; i < owners.length; i++) {
        if (owners[i].key == e.path[2].cells[7].innerText) {
            let index = i ;
            theBox = parseFloat(theBox) + parseFloat(owners[i].paid) - parseFloat(owners[i].cash);
            let factoryDatabase1 = idb.open('Factory');
            factoryDatabase1.then(function (db) {
                var txOwner = db.transaction('owner', 'readwrite');
                var storeOwner = txOwner.objectStore('owner');
                let info1 = storeOwner.delete(owners[index].key);
                info1.then(function (res) {
                    owners.splice(index, 1);
                    activeSection = 'owner';
                    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
                    save();
                })
            });
        }
    }
}
function deleteItemInOthersBuyTable (e) {
    for (i = 0; i < othersBuy.length; i++) {
        if (othersBuy[i].key == e.path[2].cells[10].innerText) {
            let index = i ;
            theBox = parseFloat(theBox) + parseFloat(othersBuy[i].paid);
            let factoryDatabase1 = idb.open('Factory');
            factoryDatabase1.then(function (db) {
                var txOtherBuy = db.transaction('otherBuy', 'readwrite');
                var storeOtherBuy = txOtherBuy.objectStore('otherBuy');
                let info1 = storeOtherBuy.delete(othersBuy[index].key);
                info1.then(function (res) {
                    othersBuy.splice(index, 1);
                    activeSection = 'otherBuys';
                    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
                    save();
                })
            });
        }
    }
}
function deleteItemInProductionsTable (e) {
    debugger;
    console.log(e);
    for (i = 0; i < productions.length; i++) {
        if (productions[i].key == e.path[2].cells[9].innerText) {
            let index = i ;
            let factoryDatabase1 = idb.open('Factory');
            factoryDatabase1.then(function (db) {
                var txProduction = db.transaction('production', 'readwrite');
                var storeProduction = txProduction.objectStore('production');
                let info1 = storeProduction.delete(productions[index].key);
                info1.then(function (res) {
                    productions.splice(index, 1);
                    activeSection = 'production';
                    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
                    save();
                })
            });
        }
    }
}
function deleteItemInSalesTable (e) {
    for (i = 0; i < sales.length; i++) {
        if (sales[i].key == e.path[2].cells[11].innerText) {
            let index = i ;
            theBox = parseFloat(theBox) - parseFloat(sales[i].paidFactory);
            let factoryDatabase1 = idb.open('Factory');
            factoryDatabase1.then(function (db) {
                var txSale = db.transaction('sale', 'readwrite');
                var storeSale = txSale.objectStore('sale');
                let info1 = storeSale.delete(sales[index].key);
                info1.then(function (res) {
                    sales.splice(index, 1);
                    activeSection = 'sales';
                    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
                    save();
                })
            });
        }
    }
}
function closeMilk (e){
    console.log(e);
    e.path[4].cells[15].children[0].disabled = false ;
    e.path[3].remove();
}
function closeSalary (e){
    console.log(e);
    e.path[3].cells[8].children[0].disabled = false ;
    e.path[2].remove();
}
function closeOther (e){
    console.log(e);
    e.path[3].cells[7].children[0].disabled = false ;
    e.path[2].remove();
}
function closeOwner (e){
    console.log(e);
    e.path[3].cells[6].children[0].disabled = false ;
    e.path[2].remove();
}
function closeOtherBuy (e){
    console.log(e);
    e.path[3].cells[9].children[0].disabled = false ;
    e.path[2].remove();
}
function closeSale (e){
    console.log(e);
    e.path[3].cells[10].children[0].disabled = false ;
    e.path[2].remove();
}
function closeProduction (e){
    console.log(e);
    e.path[3].cells[8].children[0].disabled = false ;
    e.path[2].remove();
}
function updateMilk (e){
    const nameSellerUpdate = document.querySelector('#nameSellerUpdate');
    const amountBakaryUpdate = document.querySelector('#amountBakaryUpdate');
    const priceBakaryUpdate = document.querySelector('#priceBakaryUpdate');
    const totalBakaryUpdate = document.querySelector('#totalBakaryUpdate');
    const amountGamosUpdate = document.querySelector('#amountGamosUpdate');
    const priceGamosUpdate = document.querySelector('#priceGamosUpdate');
    const totalGamosUpdate = document.querySelector('#totalGamosUpdate');
    const totalUpdate = document.querySelector('#totalUpdate');
    const paidUpdate = document.querySelector('#paidUpdate');
    const salaryUpdate = document.querySelector('#salaryUpdate');
    const addtionsUpdate = document.querySelector('#addtionsUpdate');
    const addtionsDescriptionUpdate = document.querySelector('#addtionsDescriptionUpdate');
    const notesUpdate = document.querySelector('#notesUpdate');
    const dateUpdateDay = document.querySelector('#dateUpdate #daysUpdate');
    const dateUpdateMonth = document.querySelector('#dateUpdate #monthesUpdate');
    const dateUpdateYear = document.querySelector('#dateUpdate #yearsUpdate');
    const dateUpdateTime = document.querySelector('#dateUpdate #timeUpdate');
    totalBakaryUpdate.value = parseFloat(amountBakaryUpdate.value) * parseFloat(priceBakaryUpdate.value) ;
    totalGamosUpdate.value = parseFloat(amountGamosUpdate.value) * parseFloat(priceGamosUpdate.value) ;
    totalUpdate.value = (parseFloat(amountBakaryUpdate.value) * parseFloat(priceBakaryUpdate.value)) + (parseFloat(amountGamosUpdate.value) * parseFloat(priceGamosUpdate.value));
    let index = 0 ;
    for ( let r=0 ; r< milks.length ; r++){
        if (milks[r].key == parseInt(e.path[4].cells[16].innerText)  ){
            index = r ;
        }
    }
    let factoryDatabase1 = idb.open('Factory');
    factoryDatabase1.then(function (db) {
        var txMilk = db.transaction('milk', 'readwrite');
        var storeMilk = txMilk.objectStore('milk');
        theBox = theBox + parseFloat(milks[index].paid) - parseFloat(paidUpdate.value) 
        let info1 = storeMilk.put({
            key: parseInt(e.path[4].cells[16].innerText),
            seller: nameSellerUpdate.value,
            amountBakary: amountBakaryUpdate.value,
            priceBakary: priceBakaryUpdate.value,
            totalBakary: totalBakaryUpdate.value,
            amountGamos: amountGamosUpdate.value,
            priceGamos: priceGamosUpdate.value,
            totalGamos: totalGamosUpdate.value,
            total: totalUpdate.value,
            paid: paidUpdate.value,
            salary: salaryUpdate.value,
            addtions: addtionsUpdate.value,
            addtionsDescription: addtionsDescriptionUpdate.value,
            notes: notesUpdate.value,
            date: dateUpdateDay.value + " " + dateUpdateMonth.value + " " + dateUpdateYear.value + " " + dateUpdateTime.value
        });
        info1.then(function () {
            activeSection = 'milk';
            localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
            save();
        })
    });

}
function updateSalary (e){
    console.log(e);
    const employeesUpdate = document.querySelector('#employeesUpdate');
    const employeeSalaryUpdate = document.querySelector('#employeeSalaryUpdate');
    const employeeTypeUpdate = document.querySelector('#employeeTypeUpdate');
    const salaryPaidUpdate = document.querySelector('#salaryPaidUpdate');
    const salaryAddtionsUpdate = document.querySelector('#salaryAddtionsUpdate');
    const dateUpdateDay = document.querySelector('#dateUpdate #daysUpdate1');
    const dateUpdateMonth = document.querySelector('#dateUpdate #monthesUpdate1');
    const dateUpdateYear = document.querySelector('#dateUpdate #yearsUpdate1');
    const dateUpdateTime = document.querySelector('#dateUpdate #timeUpdate1');
    const notesUpdate = document.querySelector('#notesUpdate');
    let factoryDatabase1 = idb.open('Factory');
    factoryDatabase1.then(function (db) {
        var txSalary = db.transaction('salary', 'readwrite');
        var storeSalary = txSalary.objectStore('salary');
        let index = storeSalary.index('key');
        return index.openCursor(parseInt(e.path[3].cells[9].innerText));
    }).then(function change3(cursor) {
        if (!cursor) {
            activeSection = 'salaries';
            localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
            return save();
        }
        console.log('Cursored at:', cursor.value);
        let update = cursor.value;
        theBox = theBox + parseFloat(update.paid) - parseFloat(salaryPaidUpdate.value);
        update.employee = employeesUpdate.value;
        update.salary = employeeSalaryUpdate.value;
        update.type = employeeTypeUpdate.value;
        update.paid = salaryPaidUpdate.value;
        update.addtions = salaryAddtionsUpdate.value;
        update.notes = notesUpdate.value;
        update.date = dateUpdateDay.value + ' ' + dateUpdateMonth.value + ' ' + dateUpdateYear.value + ' ' + dateUpdateTime.value;
        cursor.update(update);
        return cursor.continue().then(change3);

    })

}
function updateOther2 (e){
    console.log(e);
    const typeUpdate = document.querySelector('#typeUpdate');
    const amountUpdate = document.querySelector('#amountUpdate');
    const costUpdate = document.querySelector('#costUpdate');
    const totalCostUpdate = document.querySelector('#totalCostUpdate');
    const dateUpdateDay = document.querySelector('#dateUpdate #daysUpdate2');
    const dateUpdateMonth = document.querySelector('#dateUpdate #monthesUpdate2');
    const dateUpdateYear = document.querySelector('#dateUpdate #yearsUpdate2');
    const dateUpdateTime = document.querySelector('#dateUpdate #timeUpdate2');
    const notesUpdate = document.querySelector('#notesUpdate');
    let factoryDatabase1 = idb.open('Factory');
    factoryDatabase1.then(function (db) {
        var txOther = db.transaction('other', 'readwrite');
        var storeOther = txOther.objectStore('other');
        let index = storeOther.index('key');
        return index.openCursor(parseInt(e.path[3].cells[8].innerText));
    }).then(function change4 (cursor) {
        if (!cursor) {
            activeSection = 'other';
            localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
            return save();
        }
        console.log('Cursored at:', cursor.value);
        let update = cursor.value;
        theBox = theBox + parseFloat(update.total) - (parseFloat(amountUpdate.value).toFixed(2) * parseFloat(costUpdate.value).toFixed(2));
        update.type = typeUpdate.value;
        update.amount = amountUpdate.value;
        update.price = costUpdate.value;
        update.notes = notesUpdate.value;
        update.total = parseFloat(amountUpdate.value).toFixed(2) * parseFloat(costUpdate.value).toFixed(2);
        update.date = dateUpdateDay.value + ' ' + dateUpdateMonth.value + ' ' + dateUpdateYear.value + ' ' + dateUpdateTime.value;
        cursor.update(update);
        return cursor.continue().then(change4);

    })

}
function updateOwner2 (e){
    console.log(e);
    const nameUpdate = document.querySelector('#nameUpdate');
    const cashUpdate = document.querySelector('#cashUpdate');
    const paidUpdate = document.querySelector('#paidUpdate');
    const dateUpdateDay = document.querySelector('#dateUpdate #daysUpdate2');
    const dateUpdateMonth = document.querySelector('#dateUpdate #monthesUpdate2');
    const dateUpdateYear = document.querySelector('#dateUpdate #yearsUpdate2');
    const dateUpdateTime = document.querySelector('#dateUpdate #timeUpdate2');
    const notesUpdate = document.querySelector('#notesUpdate');
    let factoryDatabase1 = idb.open('Factory');
    factoryDatabase1.then(function (db) {
        var txOwner = db.transaction('owner', 'readwrite');
        var storeOwner = txOwner.objectStore('owner');
        let index = storeOwner.index('key');
        return index.openCursor(parseInt(e.path[3].cells[7].innerText));
    }).then(function change4 (cursor) {
        if (!cursor) {
            activeSection = 'owner';
            localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
            return save();
        }
        console.log('Cursored at:', cursor.value);
        let update = cursor.value;
        debugger;
        theBox = theBox + parseFloat(update.paid) - parseFloat(update.cash) + parseFloat(cashUpdate.value)  - parseFloat(paidUpdate.value);
        update.name = nameUpdate.value;
        update.cash = cashUpdate.value;
        update.paid = paidUpdate.value;
        update.notes = notesUpdate.value;
        update.date = dateUpdateDay.value + ' ' + dateUpdateMonth.value + ' ' + dateUpdateYear.value + ' ' + dateUpdateTime.value;
        cursor.update(update);
        return cursor.continue().then(change4);

    })

}
function updateOtherBuy2 (e){
    console.log(e);
    const nameUpdate3 = document.querySelector('#nameUpdate3');
    const typeUpdate3 = document.querySelector('#typeUpdate3');
    const amountUpdate3 = document.querySelector('#amountUpdate3');
    const costUpdate3 = document.querySelector('#costUpdate3');
    const paidUpdate3 = document.querySelector('#paidUpdate3');
    const notesUpdate3 = document.querySelector('#notesUpdate3');
    const dateUpdateDay = document.querySelector('#dateUpdate3 #daysUpdate3');
    const dateUpdateMonth = document.querySelector('#dateUpdate3 #monthesUpdate3');
    const dateUpdateYear = document.querySelector('#dateUpdate3 #yearsUpdate3');
    const dateUpdateTime = document.querySelector('#dateUpdate3 #timeUpdate3');
    let factoryDatabase1 = idb.open('Factory');
    factoryDatabase1.then(function (db) {
        var txOtherBuy = db.transaction('otherBuy', 'readwrite');
        var storeOtherBuy = txOtherBuy.objectStore('otherBuy');
        let index = storeOtherBuy.index('key');
        return index.openCursor(parseInt(e.path[3].cells[10].innerText));
    }).then(function change4 (cursor) {
        if (!cursor) {
            activeSection = 'otherBuys';
            localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
            return save();
        }
        console.log('Cursored at:', cursor.value);
        let update = cursor.value;
        theBox = theBox + parseFloat(update.paid) - parseFloat(paidUpdate3.value);
        update.name = nameUpdate3.value;
        update.type = typeUpdate3.value;
        update.amount = amountUpdate3.value;
        update.price = costUpdate3.value;
        update.paid = paidUpdate3.value;
        update.notes = notesUpdate3.value;
        update.total = parseFloat(amountUpdate3.value) * parseFloat(costUpdate3.value);
        update.date = dateUpdateDay.value + ' ' + dateUpdateMonth.value + ' ' + dateUpdateYear.value + ' ' + dateUpdateTime.value;
        cursor.update(update);
        return cursor.continue().then(change4);

    })

}
function updateProduction2 (e){
    console.log(e);
    const typeUpdate4 = document.querySelector('#typeUpdate4');
    const amountUpdate4 = document.querySelector('#amountUpdate4');
    const amountBakaryUpdate4 = document.querySelector('#amountBakaryUpdate4');
    const amountGamosUpdate4 = document.querySelector('#amountGamosUpdate4');
    const notesUpdate4 = document.querySelector('#notesUpdate4');
    const dateUpdateDay = document.querySelector('#dateUpdate4 #daysUpdate4');
    const dateUpdateMonth = document.querySelector('#dateUpdate4 #monthesUpdate4');
    const dateUpdateYear = document.querySelector('#dateUpdate4 #yearsUpdate4');
    const dateUpdateTime = document.querySelector('#dateUpdate4 #timeUpdate4');
    const dateMilkUpdateDay = document.querySelector('#dateMilkUpdate4 #daysMilkUpdate4');
    const dateMilkUpdateMonth = document.querySelector('#dateMilkUpdate4 #monthesMilkUpdate4');
    const dateMilkUpdateYear = document.querySelector('#dateMilkUpdate4 #yearsMilkUpdate4');
    const dateMilkUpdateTime = document.querySelector('#dateMilkUpdate4 #timeMilkUpdate4');
    let factoryDatabase1 = idb.open('Factory');
    factoryDatabase1.then(function (db) {
        var txProduction = db.transaction('production', 'readwrite');
        var storeProduction = txProduction.objectStore('production');
        let index = storeProduction.index('key');
        return index.openCursor(parseInt(e.path[3].cells[9].innerText));
    }).then(function change4 (cursor) {
        if (!cursor) {
            activeSection = 'production';
            localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
            return save();
        }
        console.log('Cursored at:', cursor.value);
        let update = cursor.value;
        update.type = typeUpdate4.value;
        update.amount = amountUpdate4.value;
        update.notes = notesUpdate4.value;
        update.amountBakary = amountBakaryUpdate4.value;
        update.amountGamos = amountGamosUpdate4.value;
        update.date = dateUpdateDay.value + ' ' + dateUpdateMonth.value + ' ' + dateUpdateYear.value + ' ' + dateUpdateTime.value;
        update.dateMilk = dateMilkUpdateDay.value + ' ' + dateMilkUpdateMonth.value + ' ' + dateMilkUpdateYear.value + ' ' + dateMilkUpdateTime.value;
        cursor.update(update);
        return cursor.continue().then(change4);

    })

}
function updateSale2(e) {
    console.log(e);
    const nameUpdate5 = document.querySelector('#nameUpdate5');
    const typeUpdate5 = document.querySelector('#typeUpdate5');
    const amountUpdate5 = document.querySelector('#amountUpdate5');
    const weightUpdate5 = document.querySelector('#weightUpdate5');
    const amountOrWUpdate5 = document.querySelector('#amountOrWUpdate5');
    const costUpdate5 = document.querySelector('#costUpdate5');
    const paidUpdate5 = document.querySelector('#paidUpdate5');
    const notesUpdate5 = document.querySelector('#notesUpdate5');
    const dateUpdateDay = document.querySelector('#dateUpdate5 #daysUpdate5');
    const dateUpdateMonth = document.querySelector('#dateUpdate5 #monthesUpdate5');
    const dateUpdateYear = document.querySelector('#dateUpdate5 #yearsUpdate5');
    const dateUpdateTime = document.querySelector('#dateUpdate5 #timeUpdate5');
    let factoryDatabase1 = idb.open('Factory');
    factoryDatabase1.then(function (db) {
        var txSale = db.transaction('sale', 'readwrite');
        var storeSale = txSale.objectStore('sale');
        let index = storeSale.index('key');
        return index.openCursor(parseInt(e.path[3].cells[11].innerText) );
    }).then(function change6(cursor) {
        if (!cursor) {
            activeSection = 'sales';
            localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
            return save();
        }
        console.log('Cursored at:', cursor.value);
        debugger
        let update = cursor.value;
        theBox = theBox - parseFloat(update.paidFactory) + parseFloat(paidUpdate5.value);
        update.name = nameUpdate5.value;
        update.type = typeUpdate5.value;
        update.amount = amountUpdate5.value;
        update.notes = notesUpdate5.value;
        update.weight = weightUpdate5.value;
        update.price = costUpdate5.value;
        update.paidFactory = paidUpdate5.value;
        if ( amountOrWUpdate5.checked == true){
            update.total = parseFloat(weightUpdate5.value) * parseFloat(costUpdate5.value);
        }
        else {
            update.total = parseFloat(amountUpdate5.value) * parseFloat(costUpdate5.value);
            update.weight = "________" ;
        }
        update.date = dateUpdateDay.value + ' ' + dateUpdateMonth.value + ' ' + dateUpdateYear.value + ' ' + dateUpdateTime.value;
        cursor.update(update);
        return cursor.continue().then(change6);

    })

}
function updateItemInMilkTable (e) {
    e.target.disabled = true ;
    let date = e.path[2].cells[0].innerText ;
    date = date.split(' ');
    e.path[2].cells[16].insertAdjacentHTML("afterend",`
    <div>
    <div>
                <input id="nameSellerUpdate" value = "${e.path[2].cells[13].innerText}">
                <label> الاسم</label>
            </div>
                <div>
                <h3>لبن بقري</h3>
            </div>
            <div>
                <input id="amountBakaryUpdate" type="number" value = "${e.path[2].cells[12].innerText}">
                <label> كمية اللبن البقري</label>
            </div>
            <div>
                <input id="priceBakaryUpdate" type="number" value = "${e.path[2].cells[11].innerText}">
                <label>سعر الكيلو اللبن البقري</label>
            </div>
            <div>
                <input id="totalBakaryUpdate" disabled value = "${e.path[2].cells[10].innerText}">
                <label>اجمالي سعر اللبن البقري</label>
            </div>
            <div>
                <h3>لبن جاموسي</h3>
            </div>
            <div>
                <input id="amountGamosUpdate" type="number" value = "${e.path[2].cells[9].innerText}">
                <label> كمية اللبن الجاموسي</label>
            </div>
            <div>
                <input id="priceGamosUpdate" type="number" value = "${e.path[2].cells[8].innerText}">
                <label>سعر الكيلو اللبن الجاموسي</label>
            </div>
            <div>
                <input id="totalGamosUpdate" disabled value = "${e.path[2].cells[7].innerText}">
                <label>اجمالي سعر اللبن الجاموسي</label>
            </div>
            <div>
            <div>
                <input id="totalUpdate" disabled value = "${e.path[2].cells[6].innerText}">
                <label>اجمالي</label>
            </div>
            <div>
                <input id="paidUpdate" type="number" value = "${e.path[2].cells[5].innerText}">
                <label>المدفوع</label>
            </div>
            <div>
                <input id="salaryUpdate" type="number" value = "${e.path[2].cells[4].innerText}">
                <label>المرتب</label>
            </div>
            <div>
                <input id="addtionsUpdate" type="number" value = "${e.path[2].cells[3].innerText}">
                <label>اضافات</label>
            </div>
           <div>
                <input id="addtionsDescriptionUpdate"  value = "${e.path[2].cells[2].innerText}">
                <label>وصف الاضافات</label>
            </div>
            <div>
                <input id="notesUpdate"  value = "${e.path[2].cells[1].innerText}">
                <label>ملاحظات</label>
            </div>
            <div>
                <div id="dateUpdate">
                    <select id="daysUpdate" value = ${date[0]}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                    </select>
                    <select id="monthesUpdate" value = ${date[1]}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                    <select id="yearsUpdate" value = ${date[2]}>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>2027</option>
                        <option>2028</option>
                        <option>2029</option>
                        <option>2030</option>
                    </select>
                    <select id="timeUpdate" value = ${date[3]}>
                        <option>ًصباحا</option>
                        <option>ًمساءا</option>
                    </select>
                </div>
                <label>التاريخ</label>
                <button onclick=updateMilk(event)>تعديل</button>
                <button onclick=closeMilk(event)>اغلاق</button>
            </div>
            </div>
            `)
    document.getElementById('daysUpdate').selectedIndex = date[0]-1;
    document.getElementById('monthesUpdate').selectedIndex = date[1]-1;
    document.getElementById('yearsUpdate').selectedIndex = date[2]-2018;
    if (date[3] == "ًمساءا"){
        document.getElementById('timeUpdate').selectedIndex = 1;
    }
    else{
        document.getElementById('timeUpdate').selectedIndex = 0; 
    }
}
function updateItemInSalariesTable (e) {
    console.log(e);
    e.target.disabled = true ;
    let date = e.path[2].cells[0].innerText ;
    date = date.split(' ');
    e.path[2].cells[8].insertAdjacentHTML("afterend",`
    <div>
    <div>
                        <div>
                        <input id="employeesUpdate" disabled value = "${e.path[2].cells[6].innerText}"></input>
                        <label>الاسم</label>
                        <br>
                        <input id="employeeSalaryUpdate" type="text" value = "${e.path[2].cells[5].innerText}">
                        <label> مرتب الشهر</label>
                    </div>
                    <div>
                        <select id="employeeTypeUpdate">
                            <option>موظف</option>
                            <option>مشال</option>
                        </select>
                        <label>النوع</label>
                    </div>
                    <div>
                        <input id="salaryPaidUpdate" type="number" value = "${e.path[2].cells[3].innerText}">
                        <label>المدفوع</label>
                    </div>
                    <div>
                        <input id="salaryAddtionsUpdate" type="number" value = "${e.path[2].cells[2].innerText}">
                        <label>اضافات</label>
                    </div>
                         <div>
                <input id="notesUpdate"  value = "${e.path[2].cells[1].innerText}">
                <label>ملاحظات</label>
            </div>
                    <div>
                        <div id="dateUpdate">
                            <select id="daysUpdate1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                            <select id="monthesUpdate1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                            <select id="yearsUpdate1">
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                            </select>
                            <select id="timeUpdate1">
                                <option>ًصباحا</option>
                                <option>ًمساءا</option>
                            </select>
                        </div>
                        <label>التاريخ</label>
                    </div>
                <button onclick=updateSalary(event)>تعديل</button>
                <button onclick=closeSalary(event)>اغلاق</button>
            </div>
            </div>
            </div>
            `)
    document.getElementById('daysUpdate1').selectedIndex = date[0]-1;
    document.getElementById('monthesUpdate1').selectedIndex = date[1]-1;
    document.getElementById('yearsUpdate1').selectedIndex = date[2]-2018;
    if (date[3] == "ًمساءا"){
        document.getElementById('timeUpdate1').selectedIndex = 1;
    }
    else{
        document.getElementById('timeUpdate1').selectedIndex = 0; 
    }
    if (e.path[2].cells[4].innerText == "موظف"){
        document.getElementById('employeeTypeUpdate').selectedIndex = 0;
    }
    else{
        document.getElementById('employeeTypeUpdate').selectedIndex = 1; 
    }
}
function updateItemInOthersTable (e) {
    e.target.disabled = true ;
    let date = e.path[2].cells[0].innerText ;
    date = date.split(' ');
    e.path[2].cells[7].insertAdjacentHTML("afterend",`
    <div>
    <div>
                       <div>
                        <input id="typeUpdate" disabled type="text" value = "${e.path[2].cells[5].innerText}">
                        <label>النوع</label>
                    </div>
                       <div>
                        <input id="amountUpdate" type="number" value = "${e.path[2].cells[4].innerText}">
                        <label>الكمية</label>
                    </div>
                    <div>
                        <input id="costUpdate" type="number" value = "${e.path[2].cells[3].innerText}">
                        <label>السعر</label>
                    </div>
                         <div>
                <input id="notesUpdate"  value = "${e.path[2].cells[1].innerText}">
                <label>ملاحظات</label>
            </div>
                    <div>
                        <div id="dateUpdate">
                            <select id="daysUpdate2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                            <select id="monthesUpdate2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                            <select id="yearsUpdate2">
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                            </select>
                            <select id="timeUpdate2">
                                <option>ًصباحا</option>
                                <option>ًمساءا</option>
                            </select>
                        </div>
                        <label>التاريخ</label>
                    </div>
                <button onclick=updateOther2(event)>تعديل</button>
                <button onclick=closeOther(event)>اغلاق</button>
            </div>
            </div>
            </div>
            `)
    document.getElementById('daysUpdate2').selectedIndex = date[0]-1;
    document.getElementById('monthesUpdate2').selectedIndex = date[1]-1;
    document.getElementById('yearsUpdate2').selectedIndex = date[2]-2018;
    if (date[3] == "ًمساءا"){
        document.getElementById('timeUpdate2').selectedIndex = 1;
    }
    else{
        document.getElementById('timeUpdate2').selectedIndex = 0; 
    }
}
function updateItemInOwnersTable (e) {
    e.target.disabled = true ;
    let date = e.path[2].cells[0].innerText ;
    date = date.split(' ');
    e.path[2].cells[6].insertAdjacentHTML("afterend",`
    <div>
    <div>
                       <div>
                        <input id="nameUpdate" disabled type="text" value = "${e.path[2].cells[4].innerText}">
                        <label>الاسم</label>
                    </div>
                       <div>
                        <input id="cashUpdate" type="number" value = "${e.path[2].cells[3].innerText}">
                        <label>دفع</label>
                    </div>
                    <div>
                        <input id="paidUpdate" type="number" value = "${e.path[2].cells[2].innerText}">
                        <label>سحب</label>
                    </div>
                         <div>
                <input id="notesUpdate"  value = "${e.path[2].cells[1].innerText}">
                <label>ملاحظات</label>
            </div>
                    <div>
                        <div id="dateUpdate">
                            <select id="daysUpdate2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                            <select id="monthesUpdate2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                            <select id="yearsUpdate2">
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                            </select>
                            <select id="timeUpdate2">
                                <option>ًصباحا</option>
                                <option>ًمساءا</option>
                            </select>
                        </div>
                        <label>التاريخ</label>
                    </div>
                <button onclick=updateOwner2(event)>تعديل</button>
                <button onclick=closeOwner(event)>اغلاق</button>
            </div>
            </div>
            </div>
            `)
    document.getElementById('daysUpdate2').selectedIndex = date[0]-1;
    document.getElementById('monthesUpdate2').selectedIndex = date[1]-1;
    document.getElementById('yearsUpdate2').selectedIndex = date[2]-2018;
    if (date[3] == "ًمساءا"){
        document.getElementById('timeUpdate2').selectedIndex = 1;
    }
    else{
        document.getElementById('timeUpdate2').selectedIndex = 0; 
    }
}
function updateItemInOthersBuyTable (e) {
    console.log(e);
    e.target.disabled = true ;
    let date = e.path[2].cells[0].innerText ;
    date = date.split(' ');
    e.path[2].cells[9].insertAdjacentHTML("afterend",`
    <div>
    <div>
                 <div>
                        <input id="nameUpdate3" disabled value = "${e.path[2].cells[7].innerText}">
                        <label>الاسم</label>
                    </div>
                 <div>
                        <input id="typeUpdate3" disabled value = "${e.path[2].cells[6].innerText}">
                        <label>النوع</label>
                    </div>
                 <div>
                        <input id="amountUpdate3" type="number" value = "${e.path[2].cells[5].innerText}">
                        <label>الكمية</label>
                    </div>
                    <div>
                        <input id="costUpdate3" type="number" value = "${e.path[2].cells[4].innerText}">
                        <label>السعر</label>
                    </div>
                    <div>
                        <input id="paidUpdate3" value = "${e.path[2].cells[2].innerText}">
                        <label>المدفوع</label>
                    </div>
                         <div>
                <input id="notesUpdate3"  value = "${e.path[2].cells[1].innerText}">
                <label>ملاحظات</label>
            </div>
                    <div>
                        <div id="dateUpdate3">
                            <select id="daysUpdate3">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                            <select id="monthesUpdate3">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                            <select id="yearsUpdate3">
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                            </select>
                            <select id="timeUpdate3">
                                <option>ًصباحا</option>
                                <option>ًمساءا</option>
                            </select>
                        </div>
                        <label>التاريخ</label>
                    </div>
                <button onclick=updateOtherBuy2(event)>تعديل</button>
                <button onclick=closeOtherBuy(event)>اغلاق</button>
            </div>
            </div>
            </div>
            `)
    document.getElementById('daysUpdate3').selectedIndex = date[0]-1;
    document.getElementById('monthesUpdate3').selectedIndex = date[1]-1;
    document.getElementById('yearsUpdate3').selectedIndex = date[2]-2018;
    if (date[3] == "ًمساءا"){
        document.getElementById('timeUpdate3').selectedIndex = 1;
    }
    else{
        document.getElementById('timeUpdate3').selectedIndex = 0; 
    }
}
function updateItemInProductionsTable (e) {
    e.target.disabled = true ;
    let date = e.path[2].cells[0].innerText ;
    let dateM = e.path[2].cells[2].innerText ;
    date = date.split(' ');
    dateM = dateM.split(' ');
    e.path[2].cells[8].insertAdjacentHTML("afterend",`
    <div>
    <div>
                  <div>
                        <input id="amountBakaryUpdate4" type="number" value = "${e.path[2].cells[6].innerText}">
                        <label>كمية اللبن البقري الداخل في الانتاج</label>
                    </div>
                     <div>
                        <input id="amountGamosUpdate4" type="number" value = "${e.path[2].cells[5].innerText}">
                        <label>كمية اللبن الجاموسي الداخل في الانتاج</label>
                    </div>
                 <div>
                        <input id="typeUpdate4" disabled  value = "${e.path[2].cells[4].innerText}" >
                        <label>النوع</label>
                    </div>
                 <div>
                        <input id="amountUpdate4" type="number" value = "${e.path[2].cells[3].innerText}">
                        <label>الكمية</label>
                    </div>
                    <div>
                        <div id="dateMilkUpdate4">
                            <select id="daysMilkUpdate4">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                            <select id="monthesMilkUpdate4">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                            <select id="yearsMilkUpdate4">
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                            </select>
                            <select id="timeMilkUpdate4">
                                <option>ًصباحا</option>
                                <option>ًمساءا</option>
                            </select>
                            <label>منتج من لبن</label>
                        </div>
                    </div>
                         <div>
                <input id="notesUpdate4"  value = "${e.path[2].cells[1].innerText}">
                <label>ملاحظات</label>
            </div>
                    <div>
                        <div id="dateUpdate4">
                            <select id="daysUpdate4">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                            <select id="monthesUpdate4">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                            <select id="yearsUpdate4">
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                            </select>
                            <select id="timeUpdate4">
                                <option>ًصباحا</option>
                                <option>ًمساءا</option>
                            </select>
                            <label>التاريخ</label>
                        </div>
                    </div>
                <button onclick=updateProduction2(event)>تعديل</button>
                <button onclick=closeProduction(event)>اغلاق</button>
            </div>
            </div>
            </div>
            `)
    document.getElementById('daysUpdate4').selectedIndex = date[0]-1;
    document.getElementById('monthesUpdate4').selectedIndex = date[1]-1;
    document.getElementById('yearsUpdate4').selectedIndex = date[2]-2018;
    if (date[3] == "ًمساءا"){
        document.getElementById('timeUpdate4').selectedIndex = 1;
    }
    else{
        document.getElementById('timeUpdate4').selectedIndex = 0; 
    }
    document.getElementById('daysMilkUpdate4').selectedIndex = dateM[0]-1;
    document.getElementById('monthesMilkUpdate4').selectedIndex = dateM[1]-1;
    document.getElementById('yearsMilkUpdate4').selectedIndex = dateM[2]-2018;
    if (dateM[3] == "ًمساءا"){
        document.getElementById('timeMilkUpdate4').selectedIndex = 1;
    }
    else{
        document.getElementById('timeMilkUpdate4').selectedIndex = 0; 
    }
}
function updateItemInSalesTable(e) {
    e.target.disabled = true;
    let date = e.path[2].cells[0].innerText;
    date = date.split(' ');
    e.path[2].cells[10].insertAdjacentHTML("afterend", `
    <div>
    <div>
                 <div>
                        <input id="nameUpdate5" disabled value = "${e.path[2].cells[8].innerText}">
                        <label>الاسم</label>
                    </div>
                 <div>
                        <input id="typeUpdate5" disabled value = "${e.path[2].cells[7].innerText}">
                        <label>النوع</label>
                    </div>
                 <div>
                        <input id="amountUpdate5" type="number" value = "${e.path[2].cells[6].innerText}">
                        <label>الكمية</label>
                    </div>
                 <div>
                        <input id="amountOrWUpdate5" type="checkbox">
                        <input id="weightUpdate5" type="number" value = "${e.path[2].cells[5].innerText}">
                        <label>الوزن</label>
                    </div>
                    <div>
                        <input id="costUpdate5" type="number" value = "${e.path[2].cells[4].innerText}">
                        <label>السعر</label>
                    </div>
                    <div>
                        <input id="paidUpdate5" value = "${e.path[2].cells[2].innerText}">
                        <label>المدفوع</label>
                    </div>
                         <div>
                <input id="notesUpdate5"  value = "${e.path[2].cells[1].innerText}">
                <label>ملاحظات</label>
            </div>
                    <div>
                        <div id="dateUpdate5">
                            <select id="daysUpdate5">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                            <select id="monthesUpdate5">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                            <select id="yearsUpdate5">
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                            </select>
                            <select id="timeUpdate5">
                                <option>ًصباحا</option>
                                <option>ًمساءا</option>
                            </select>
                        </div>
                        <label>التاريخ</label>
                    </div>
                <button onclick=updateSale2(event)>تعديل</button>
                <button onclick=closeSale(event)>اغلاق</button>
            </div>
            </div>
            </div>
            `)
    document.getElementById('daysUpdate5').selectedIndex = date[0] - 1;
    document.getElementById('monthesUpdate5').selectedIndex = date[1] - 1;
    document.getElementById('yearsUpdate5').selectedIndex = date[2] - 2018;
    if (date[3] == "ًمساءا") {
        document.getElementById('timeUpdate5').selectedIndex = 1;
    }
    else {
        document.getElementById('timeUpdate5').selectedIndex = 0;
    }
}
const milkDiv = document.querySelector('#milk');
const salariesDiv = document.querySelector('#salaries');
const othersDiv = document.querySelector('#others');
const ownersDiv = document.querySelector('#owners');
const productionDiv = document.querySelector('#production');
const storeDiv = document.querySelector('#store');
const salesDiv = document.querySelector('#sales');
const specifiedDiv = document.querySelector('#specified');
const othersBuyDiv = document.querySelector('#othersBuy');
function  gotoMilk(){
    activeSection = 'milk';
    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
    milkDiv.disabled =true ;
    salariesDiv.disabled =false ;
    othersDiv.disabled =false ;
    ownersDiv.disabled =false ;
    othersBuyDiv.disabled =false ;
    productionDiv.disabled =false ;
    salesDiv.disabled =false ;
    storeDiv.disabled =false ;
    specifiedDiv.disabled =false ;
    milkDiv.classList.remove('hide');
    salariesDiv.classList.add('hide');
    othersDiv.classList.add('hide');
    ownersDiv.classList.add('hide');
    othersBuyDiv.classList.add('hide');
    productionDiv.classList.add('hide');
    salesDiv.classList.add('hide');
    storeDiv.classList.add('hide');
    specifiedDiv.classList.add('hide');
    specifiedDiv.classList.remove('flex');
}
function  gotoSalary(){
    activeSection = 'salaries';
    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
    milkDiv.disabled = false;
    salariesDiv.disabled = true;
    othersDiv.disabled = false;
    ownersDiv.disabled = false;
    othersBuyDiv.disabled = false;
    productionDiv.disabled = false;
    salesDiv.disabled = false;
    storeDiv.disabled = false;
    specifiedDiv.disabled = false;
    milkDiv.classList.add('hide');
    salariesDiv.classList.remove('hide');
    othersDiv.classList.add('hide');
    ownersDiv.classList.add('hide');
    othersBuyDiv.classList.add('hide');
    productionDiv.classList.add('hide');
    salesDiv.classList.add('hide');
    storeDiv.classList.add('hide');
    specifiedDiv.classList.add('hide');
    specifiedDiv.classList.remove('flex');
}
function gotoOther(){
    activeSection = 'other';
    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
    milkDiv.disabled = false;
    salariesDiv.disabled = false;
    othersDiv.disabled = true;
    ownersDiv.disabled = false;
    othersBuyDiv.disabled = false;
    productionDiv.disabled = false;
    salesDiv.disabled = false;
    storeDiv.disabled = false;
    specifiedDiv.disabled = false;
    milkDiv.classList.add('hide');
    salariesDiv.classList.add('hide');
    othersDiv.classList.remove('hide');
    ownersDiv.classList.add('hide');
    othersBuyDiv.classList.add('hide');
    productionDiv.classList.add('hide');
    salesDiv.classList.add('hide');
    storeDiv.classList.add('hide');
    specifiedDiv.classList.add('hide');
    specifiedDiv.classList.remove('flex');

}
function gotoOwner(){
    activeSection = 'owner';
    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
    milkDiv.disabled = false;
    salariesDiv.disabled = false;
    ownersDiv.disabled = true;
    othersDiv.disabled = false;
    othersBuyDiv.disabled = false;
    productionDiv.disabled = false;
    salesDiv.disabled = false;
    storeDiv.disabled = false;
    specifiedDiv.disabled = false;
    milkDiv.classList.add('hide');
    salariesDiv.classList.add('hide');
    ownersDiv.classList.remove('hide');
    othersDiv.classList.add('hide');
    othersBuyDiv.classList.add('hide');
    productionDiv.classList.add('hide');
    salesDiv.classList.add('hide');
    storeDiv.classList.add('hide');
    specifiedDiv.classList.add('hide');
    specifiedDiv.classList.remove('flex');

}
function gotoOtherBuy(){
    activeSection = 'otherBuys';
    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
    milkDiv.disabled = false;
    salariesDiv.disabled = false;
    othersDiv.disabled = false;
    ownersDiv.disabled = false;
    othersBuyDiv.disabled = true;
    productionDiv.disabled = false;
    salesDiv.disabled = false;
    storeDiv.disabled = false;
    specifiedDiv.disabled = false;
    milkDiv.classList.add('hide');
    salariesDiv.classList.add('hide');
    othersDiv.classList.add('hide');
    ownersDiv.classList.add('hide');
    othersBuyDiv.classList.remove('hide');
    productionDiv.classList.add('hide');
    salesDiv.classList.add('hide');
    storeDiv.classList.add('hide');
    specifiedDiv.classList.add('hide');
    specifiedDiv.classList.remove('flex');

}
function gotoProduction(){
    activeSection = 'production';
    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
    milkDiv.disabled = false;
    salariesDiv.disabled = false;
    othersDiv.disabled = false;
    ownersDiv.disabled = false;
    othersBuyDiv.disabled = false;
    productionDiv.disabled = true;
    salesDiv.disabled = false;
    storeDiv.disabled = false;
    specifiedDiv.disabled = false;
    milkDiv.classList.add('hide');
    salariesDiv.classList.add('hide');
    othersDiv.classList.add('hide');
    ownersDiv.classList.add('hide');
    othersBuyDiv.classList.add('hide');
    productionDiv.classList.remove('hide');
    salesDiv.classList.add('hide');
    storeDiv.classList.add('hide');
    specifiedDiv.classList.add('hide');
    specifiedDiv.classList.remove('flex');

}
function gotoSales(){
    activeSection = 'sales';
    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
    milkDiv.disabled = false;
    salariesDiv.disabled = false;
    othersDiv.disabled = false;
    ownersDiv.disabled = false;
    othersBuyDiv.disabled = false;
    productionDiv.disabled = false;
    salesDiv.disabled = true;
    storeDiv.disabled = false;
    specifiedDiv.disabled = false;
    milkDiv.classList.add('hide');
    salariesDiv.classList.add('hide');
    othersDiv.classList.add('hide');
    ownersDiv.classList.add('hide');
    othersBuyDiv.classList.add('hide');
    productionDiv.classList.add('hide');
    salesDiv.classList.remove('hide');
    storeDiv.classList.add('hide');
    specifiedDiv.classList.add('hide');
    specifiedDiv.classList.remove('flex');

}
function gotoStore(){
    activeSection = 'store';
    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
    milkDiv.disabled = false;
    salariesDiv.disabled = false;
    othersDiv.disabled = false;
    ownersDiv.disabled = false;
    othersBuyDiv.disabled = false;
    productionDiv.disabled = false;
    salesDiv.disabled = false;
    storeDiv.disabled = true;
    specifiedDiv.disabled = false;
    milkDiv.classList.add('hide');
    salariesDiv.classList.add('hide');
    othersDiv.classList.add('hide');
    ownersDiv.classList.add('hide');
    othersBuyDiv.classList.add('hide');
    productionDiv.classList.add('hide');
    salesDiv.classList.add('hide');
    storeDiv.classList.remove('hide');
    specifiedDiv.classList.add('hide');
    specifiedDiv.classList.remove('flex');
}
function gotoCalcSpecified(){
    activeSection = 'specified';
    localStorage.setItem('activeSection', JSON.stringify(activeSection)); 
    milkDiv.disabled = false;
    salariesDiv.disabled = false;
    othersDiv.disabled = false;
    ownersDiv.disabled = false;
    othersBuyDiv.disabled = false;
    productionDiv.disabled = false;
    salesDiv.disabled = false;
    storeDiv.disabled = false;
    specifiedDiv.disabled = true;
    milkDiv.classList.add('hide');
    salariesDiv.classList.add('hide');
    othersDiv.classList.add('hide');
    ownersDiv.classList.add('hide');
    othersBuyDiv.classList.add('hide');
    productionDiv.classList.add('hide');
    salesDiv.classList.add('hide');
    storeDiv.classList.add('hide');
    specifiedDiv.classList.remove('hide');
    specifiedDiv.classList.add('flex');
}

function closeAdd (e){
    e.path[2].children[1].children[1].disabled = false ;
    e.path[1].classList.add('hide');
}
function closeUpdate (e){
 console.log(e);
    e.path[1].classList.add('hide');
    e.path[2].children[1].children[2].disabled = false ;

}
function closeAdd2 (e){
    console.log(e);

    e.path[2].children[4].children[1].disabled = false ;
    e.path[1].classList.add('hide');
}
function closeUpdate2 (e){
 console.log(e);
    e.path[1].classList.add('hide');
    e.path[2].children[4].children[2].disabled = false ;

}
function closeAdd3 (e){
    console.log(e);

    e.path[2].children[3].children[1].disabled = false ;
    e.path[1].classList.add('hide');
}
function closeUpdate3 (e){
 console.log(e);
    e.path[1].classList.add('hide');
    e.path[2].children[3].children[2].disabled = false ;

}
function putItemsToSalariesForCalcSalary(date){
    let fromDate = date;
    let found = false;
    for (let i = 0; i < employes.length; i++) {
        for (let j = 0; j < salaries.length; j++) {
            if (salaries[j].employee == employes[i].name && salaries[j].date == fromDate) {
                found = true;
                break;
            }
        }
        if (!found) {
            salaries.push({
                key: key2 + 1,
                employee: employes[i].name,
                type: employes[i].type,
                paid: 0,
                addtions: 0,
                salary: employes[i].salary,
                notes: '',
                date: fromDate
            })
            key2++;
        }
    }

}
function calculateMilkInfoForOne(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableSummaryId;
    let tableDetailsId;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableId = "kashef";
    }
    else {
        area.classList.add('hide');
        tableId = "kashefPrint";
    }
    let totalBakaryAmount = 0;
    let totalBakaryMoney = 0;
    let totalGamosAmount = 0;
    let totalGamosMoney = 0;
    let totalMilkAmount = 0;
    let totalMilkMoney = 0;
    let totalMilkSalary = 0;
    let totalMilkAddtions = 0;
    let totalMoney = 0;
    let totalPaid = 0;
    let remainder = 0;
    area.innerHTML = ``;
    area.innerHTML = `
        <h3 style="color : black ;">حساب ${allTypes.value} ل ${allNames.value} في الفترة من ${fromDate} الى ${toDate}</h3>
        <table class='arabic' id=${tableId} style="width : 100%">
         <tr>
        <th style="border : 1px solid black ;text-align : center;background-color:lightsteelblue ;" rowspan='2'>التاريخ</th>
        <th style="border : 1px solid black ;text-align : center;background-color:lightgoldenrodyellow ;"colspan='4'>الجاموسي</th>
        <th style="border : 1px solid black ;text-align : center;background-color:lightblue ;"colspan='4'>البقري</th>
        </tr>
         <tr>
        <th style="border : 1px solid black ;text-align : center;background-color:lightgoldenrodyellow ;"colspan='2'>مساءاً</th>
        <th style="border : 1px solid black ;text-align : center;background-color: lightgoldenrodyellow;"colspan='2'>صباحاً</th>
        <th style="border : 1px solid black ;text-align : center;background-color:lightblue ;"colspan='2'>مساءاً</th>
        <th style="border : 1px solid black ;text-align : center;background-color: lightblue;"colspan='2'>صباحاً</th>
        </tr>
        </table >
        `
    //if (pmAm == "ًصباحا" && toTime.value == "ًمساءا") {

    let kashef = document.querySelector(`#${tableId}`);
    let specifiedDays = datesSpecifiedCalculation();
    let milksGamosAM =0 ;
    let milksBakaryAM =0 ;
    let milksGamosPM =0 ;
    let milksBakaryPM =0 ;
    let datePushed=[];
    for (let k = 0; k < specifiedDays.length;k++){
        debugger;
        let date = specifiedDays[k].split(' ');
        for (let i = 0; i < milks.length; i++) {
            let dateMilk2 = milks[i].date.split(' ');
            if (dateMilk2[0] == date[0] && dateMilk2[1] == date[1] && dateMilk2[2] == date[2] &&  milks[i].seller == allNames.value) {
                if (k == 0 && date[3] == "ًمساءا" && dateMilk2[3] == "ًمساءا" ){
                    debugger;
                    milksGamosPM = milksGamosPM + parseFloat(milks[i].amountGamos) ;
                    milksBakaryPM = milksBakaryPM + parseFloat(milks[i].amountBakary) ; 
                    milksGamosAM = 0;
                    milksBakaryAM = 0;
                }
                else if (k == 0 && date[3] == "ًمساءا") {
                }
             else if (k == specifiedDays.length - 1 && date[3] == "ًصباحا" && dateMilk2[3] == "ًصباحا"  ){
                 debugger;
                    milksGamosAM = milksGamosAM + parseFloat(milks[i].amountGamos);
                    milksBakaryAM = milksBakaryAM + parseFloat(milks[i].amountBakary);
                    milksGamosPM = 0;
                    milksBakaryPM = 0;
                }
                else if (k == specifiedDays.length - 1 && date[3] == "ًصباحا") {
                }
                else{
                    if (dateMilk2[3] == "ًصباحا" ){
                        milksGamosAM = milksGamosAM + parseFloat(milks[i].amountGamos) ;
                        milksBakaryAM = milksBakaryAM + parseFloat(milks[i].amountBakary) ;
                       
                    }
                    else  {
                        debugger;
                        milksGamosPM = milksGamosPM + parseFloat(milks[i].amountGamos);
                        milksBakaryPM = milksBakaryPM + parseFloat(milks[i].amountBakary);
                    }
                }
               
            }
        }
        debugger;
        if (!datePushed.includes(date[0] + '/' + date[1] + '/' + date[2])) {
            kashef.insertAdjacentHTML('beforeend', `
                     <tr>
                     <td style="border : 1px solid black ; text-align : center;background-color:lightsteelblue ;;">${date[0]+'/'+date[1]+'/'+date[2] + putDaysNamesSpicified(specifiedDays[k])}</td>
                     <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;;"colspan='2'>${milksGamosPM}</td>
                     <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;;"colspan='2'>${milksGamosAM}</td>
                     <td style="border : 1px solid black ; text-align : center;background-color: lightblue;;" colspan='2'>${milksBakaryPM}</td>
                     <td style="border : 1px solid black ; text-align : center;background-color: lightblue;;" colspan='2'>${milksBakaryAM}</td>
                    </tr>
                    `)
        }
        
         milksGamosAM = 0;
         milksBakaryAM = 0;
         milksGamosPM = 0;
         milksBakaryPM = 0;
        datePushed.push(date[0]+'/'+date[1]+'/'+date[2]);
        }
    for (let i = 0; i < milks.length; i++) {
        if (specifiedDays.includes(milks[i].date) && milks[i].seller == allNames.value) {
            totalBakaryAmount = totalBakaryAmount + parseFloat(milks[i].amountBakary);
            totalBakaryMoney = totalBakaryMoney + parseFloat(milks[i].totalBakary);
            totalGamosAmount = totalGamosAmount + parseFloat(milks[i].amountGamos);
            totalGamosMoney = totalGamosMoney + parseFloat(milks[i].totalGamos);
            totalMilkSalary = totalMilkSalary + parseFloat(milks[i].salary);
            totalMilkAddtions = totalMilkAddtions + parseFloat(milks[i].addtions);
            totalPaid = totalPaid + parseFloat(milks[i].paid);
        }
    }
    totalMilkAmount = totalBakaryAmount + totalGamosAmount;
    totalMilkMoney = totalBakaryMoney + totalGamosMoney;
    totalMoney = totalMilkMoney + totalMilkSalary + totalMilkAddtions;
    remainder = totalMoney - totalPaid;
    let toOrOnNow = '';
    if (remainder <= 0) {
        toOrOnNow = 'عليه '
    }
    else {
        toOrOnNow = 'له '
    }
    kashef.insertAdjacentHTML('beforeend', `
    <tr>
    <th colspan='11' style="text-align:center;background-color:limegreen ;">الاجمالي</th>
    </tr>
      <tr>
        <th style="border : 1px solid black ; text-align : center;background-color:lightskyblue ;;">${toOrOnNow}</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightseagreen ;;">اجمالي المدفوع للبن</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightsalmon ;;">اجمالي المستحق للبن</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightpink ;;">اجمالي الاضافات</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgrey ;;">اجمالي المرتب</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgreen ;;">اجمالي حساب اللبن</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;;">اجمالي كمية اللبن</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;;">اجمالي قيمة اللبن الجاموسي</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;;">اجمالي كمية اللبن الجاموسي</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;;">اجمالي قيمة اللبن البفري</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;;">اجمالي كمية اللبن البقري</th>
        </tr>
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightskyblue ;">${Math.abs(remainder)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightseagreen ;">${totalPaid}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightsalmon ;">${totalMoney}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightpink ;">${totalMilkAddtions}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">${totalMilkSalary}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${totalMilkMoney}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${totalMilkAmount}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${totalGamosMoney}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${totalGamosAmount}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${totalBakaryMoney}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${totalBakaryAmount}</td>
            </tr>
            `)
    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateSalariesInfoForOne(area) {
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableSummaryId;
    let tableDetailsId;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableSummaryId = "kashefSummary";
        tableDetailsId = "kashefDetails";
    }
    else {
        area.classList.add('hide');
        tableSummaryId = "kashefSummaryPrint";
        tableDetailsId = "kashefDetailsPrint";
    }
    let totalMoney = 0;
    let totalPaid = 0;
    let remainder = 0;
    let specifiedDays = datesSpecifiedCalculation();
    let specifiedDays30 = datesSpecifiedCalculation30();
    let specifiedDaysTransport = datesSpecifiedTransport();
    let salaryOfHalfDay = 0;
    let totalAddtions = 0;
    let salary = 0;
    let numberOfDays;
    let type = '';
    for (let i = 0; i < employes.length; i++) {
        if (employes[i].name == allNames.value) {
            type = employes[i].type;
            break;
        }
    }
    if (type == "موظف") {
        for (j = 0; j < specifiedDays30.length; j++) {
            for (i = 0; i < salaries.length; i++) {
                if (salaries[i].employee === allNames.value && salaries[i].date == specifiedDays30[j]) {
                    if (salaries[i].type == "موظف") {
                        numberOfDays = specifiedDays30.length / 2;
                        totalPaid = totalPaid + parseFloat(salaries[i].paid);
                        totalAddtions = totalAddtions + parseFloat(salaries[i].addtions);
                        salaryOfHalfDay = parseFloat(salaries[i].salary) / 60;
                    }
                }
            }
            totalMoney = totalMoney + parseFloat(salaryOfHalfDay);
            salary = salary + parseFloat(salaryOfHalfDay);
        }
    }
    else if (type == "مشال") {
        for (j = 0; j < specifiedDaysTransport.length; j++) {
            for (i = 0; i < salaries.length; i++) {
                if (salaries[i].employee === allNames.value && salaries[i].date == specifiedDaysTransport[j]) {
                    if (salaries[i].type == "مشال") {
                        numberOfDays = specifiedDaysTransport.length / 2;
                        totalPaid = totalPaid + parseFloat(salaries[i].paid);
                        totalAddtions = totalAddtions + parseFloat(salaries[i].addtions);
                        salaryOfHalfDay = parseFloat(salaries[i].salary) / 14;
                    }
                }
            }
            totalMoney = totalMoney + parseFloat(salaryOfHalfDay);
            salary = salary + parseFloat(salaryOfHalfDay);
        }
    }
    totalMoney = totalMoney + totalAddtions;
    remainder = totalMoney - totalPaid;
    let toOrOnNow = '';
    if (remainder <= 0) {
        toOrOnNow = 'عليه '
    }
    else {
        toOrOnNow = 'له '
    }
    area.innerHTML = ``;
    area.innerHTML = `
        <h1 style="color : black ;">حساب ${allTypes.value} ل ${allNames.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <h2 style="color : black ;"> الاجمالي </h2>
        <table class='arabic' class='arabic' id=${tableSummaryId} style="width : 100%">
        <tr>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${toOrOnNow}</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">المدفوع</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">اجمالي المستحق</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">الاضافات</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">الاجر المستحق</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">عدد الأيام</th>
        </tr>
        </table >
        <h2 style="color : black ;"> التفصيل</h2>
        <table class='arabic' id=${tableDetailsId} style="width : 100%">
        <tr>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">التاريخ</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">ملاحظات</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">اضافات</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">المدفوع للاجور</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">المرتب</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">النوع</th>
        </tr>
        </table >
        `
    let kashefSummary = document.querySelector(`#${tableSummaryId}`);
    let kashefDetails = document.querySelector(`#${tableDetailsId}`);
    for (let i = 0; i < salaries.length; i++) {
        debugger;
        if (specifiedDays.includes(salaries[i].date) && salaries[i].employee == allNames.value) {
            kashefDetails.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${salaries[i].date + putDaysNamesSpicified(salaries[i].date)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${salaries[i].notes}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${salaries[i].addtions}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${salaries[i].paid}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${salaries[i].salary}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${salaries[i].type}</td>
            </tr>
            `)
        }
    }

    kashefSummary.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${Math.abs(remainder.toFixed(2))}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${totalPaid.toFixed(2)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${totalMoney.toFixed(2)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${totalAddtions.toFixed(2)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${salary.toFixed(2)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${numberOfDays}</td>
            </tr>
            `)

    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateOthersInfoForOne(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableSummaryId;
    let tableDetailsId;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableSummaryId = "kashefSummary";
        tableDetailsId = "kashefDetails";
    }
    else {
        area.classList.add('hide');
        tableSummaryId = "kashefSummaryPrint";
        tableDetailsId = "kashefDetailsPrint";
    }
    let totalAmount = 0;
    let totalMoney = 0;
    area.innerHTML = ``;
    area.innerHTML = `
        <h1 style="color : black ;">حساب ${allTypes.value} ل ${allNames.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <h2 style="color : black ;"> الاجمالي </h2>
        <table class='arabic' id=${tableSummaryId} style="width : 100%">
        <tr>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">اجمالي القيمة</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">متوسط سعر الوحدة</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">اجمالي الكمية</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">النوع</th>
        </tr>
        </table >
        <h2 style="color : black ;"> التفصيل</h2>
        <table class='arabic' id=${tableDetailsId} style="width : 100%">
        <tr>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">التاريخ</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">اجمالي القيمة</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">سعر الوحدة</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">الكمية</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">النوع</th>
        </tr>
        </table >
        `
    let kashefSummary = document.querySelector(`#${tableSummaryId}`);
    let kashefDetails = document.querySelector(`#${tableDetailsId}`);
    let specifiedDays = datesSpecifiedCalculation();
    for (let i = 0; i < others.length; i++) {
        debugger;
        if (specifiedDays.includes(others[i].date) && others[i].type == allNames.value) {
            totalAmount = totalAmount + parseFloat(others[i].amount);
            totalMoney = totalMoney + parseFloat(others[i].total);
            kashefDetails.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${others[i].date + putDaysNamesSpicified(others[i].date)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${others[i].total}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${others[i].price}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${others[i].amount}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${others[i].type}</td>
            </tr>
            `)
        }
    }
    kashefSummary.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${totalMoney}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${totalMoney / totalAmount}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${totalAmount}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${allNames.value}</td>
            </tr>
            `)
    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateOwnersInfoForOne(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableSummaryId;
    let tableDetailsId;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableSummaryId = "kashefSummary";
        tableDetailsId = "kashefDetails";
    }
    else {
        area.classList.add('hide');
        tableSummaryId = "kashefSummaryPrint";
        tableDetailsId = "kashefDetailsPrint";
    }
    let totalCash = 0;
    let totalPaid = 0;
    let totalSalesAccount = 0;
    area.innerHTML = ``;
    area.innerHTML = `
        <h1 style="color : black ;">حساب ${allTypes.value} ل ${allNames.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <h2 style="color : black ;"> الاجمالي </h2>
        <table class='arabic' id=${tableSummaryId} style="width : 100%">
        <tr>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">الفرق</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">اجمالي المسحوب </th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">اجمالي المسحوب مبيعات </th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">اجمالي المسحوب نقداً</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">اجمالي المدفوع نقداً</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاسم</th>
        </tr>
        </table >
        <h2 style="color : black ;"> التفصيل</h2>
        <table class='arabic' id=${tableDetailsId} style="width : 100%">
        <tr>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">التاريخ</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;"> ملاحظات</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;"> المسحوب مبيعات</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;"> المسحوب نقداً</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">المدفوع</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاسم</th>
        </tr>
        </table >
        `
    let kashefSummary = document.querySelector(`#${tableSummaryId}`);
    let kashefDetails = document.querySelector(`#${tableDetailsId}`);
    let specifiedDays = datesSpecifiedCalculation();
    for (let i = 0; i < owners.length; i++) {
        debugger;
        if (specifiedDays.includes(owners[i].date) && owners[i].name == allNames.value) {
            totalCash = totalCash + parseFloat(owners[i].cash);
            totalPaid = totalPaid + parseFloat(owners[i].paid);
            kashefDetails.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${owners[i].date + putDaysNamesSpicified(owners[i].date)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${owners[i].notes}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${0}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${owners[i].paid}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${owners[i].cash}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${owners[i].name}</td>
            </tr>
            `)
        }
    }
    for (let i = 0; i < sales.length; i++) {
        debugger;
        if (specifiedDays.includes(sales[i].date) && sales[i].name == allNames.value) {
            totalSalesAccount = totalSalesAccount + parseFloat(sales[i].total) - parseFloat(sales[i].paidFactory);
            kashefDetails.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${sales[i].date + putDaysNamesSpicified(sales[i].date)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${sales[i].notes}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${sales[i].total}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${0}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${sales[i].paidFactory}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${sales[i].name}</td>
            </tr>
            `)
        }
    }
    kashefSummary.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${totalCash - totalSalesAccount - totalPaid}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${totalSalesAccount + totalPaid}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${totalSalesAccount}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${totalPaid}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${totalCash}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${allNames.value}</td>
            </tr>
            `)
    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateOthersBuyInfoForOne(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableSummaryId;
    let tableDetailsId;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableSummaryId = "kashefSummary";
        tableDetailsId = "kashefDetails";
    }
    else {
        area.classList.add('hide');
        tableSummaryId = "kashefSummaryPrint";
        tableDetailsId = "kashefDetailsPrint";
    }
    let totalAmount = 0;
    let totalMoney = 0;
    let totalPaid = 0;
    area.innerHTML = ``;
    area.innerHTML = `
        <h1 style="color : black ;">حساب ${allTypes.value} ل ${allNames.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <h2 style="color : black ;"> الاجمالي </h2>
        <table class='arabic' id=${tableSummaryId} style="width : 100%">
        <tr>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">المتبقي</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">اجمالي المدفوع</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">اجمالي القيمة</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">متوسط سعر الوحدة</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">اجمالي الكمية</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">النوع</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاسم</th>
        </tr>
        </table >
        <h2 style="color : black ;"> التفصيل</h2>
        <table class='arabic' id=${tableDetailsId} style="width : 100%">
        <tr>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">التاريخ</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">المدفوع</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">اجمالي القيمة</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">سعر الوحدة</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">الكمية</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">النوع</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاسم</th>
        </tr>
        </table >
        `
    let kashefSummary = document.querySelector(`#${tableSummaryId}`);
    let kashefDetails = document.querySelector(`#${tableDetailsId}`);
    let specifiedDays = datesSpecifiedCalculation();
    for (let i = 0; i < othersBuy.length; i++) {
        debugger;
        if (specifiedDays.includes(othersBuy[i].date) && othersBuy[i].name == allNames.value) {
            totalAmount = totalAmount + parseFloat(othersBuy[i].amount);
            totalMoney = totalMoney + parseFloat(othersBuy[i].total);
            totalPaid = totalPaid + parseFloat(othersBuy[i].paid);
            kashefDetails.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">${othersBuy[i].date + putDaysNamesSpicified(othersBuy[i].date)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${othersBuy[i].paid}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${othersBuy[i].total}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${othersBuy[i].price}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${othersBuy[i].amount}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${othersBuy[i].type}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${othersBuy[i].name}</td>
            </tr>
            `)
        }
    }
    let listOfTypes = [];
    for (let i = 0; i < otherBuyTypes.length; i++) {
        listOfTypes.push(otherBuyTypes[i].name);
    }
    for (let i = 0; i < products.length; i++) {
        listOfTypes.push(products[i].name);
    }
    for (let k = 0; k < listOfTypes.length; k++) {
        let totalAmountSpecifiedType = 0;
        let totalMoneySpecifiedType = 0;
        for (let i = 0; i < othersBuy.length; i++) {
            debugger;
            if (specifiedDays.includes(othersBuy[i].date) && othersBuy[i].name == allNames.value && othersBuy[i].type == listOfTypes[k]) {
                totalAmountSpecifiedType = totalAmountSpecifiedType + parseFloat(othersBuy[i].amount);
                totalMoneySpecifiedType = totalMoneySpecifiedType + parseFloat(othersBuy[i].total);
            }
        }
        if (totalAmountSpecifiedType != 0) {

            kashefSummary.insertAdjacentHTML('beforeend', `
                 <tr>
                 <td style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">---</td>
                 <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">---</td>
                 <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${totalMoneySpecifiedType}</td>
                 <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${totalMoneySpecifiedType / totalAmountSpecifiedType}</td>
                 <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${totalAmountSpecifiedType}</td>
                 <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${listOfTypes[k]}</td>
                 <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${allNames.value}</td>
                </tr>
                `)
        }
    }
    kashefSummary.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">${totalMoney - totalPaid}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${totalPaid}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${totalMoney}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">---</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">---</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">الاجمالي</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${allNames.value}</td>
            </tr>
            `)

    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateOthersBuyTypesInfoForOne(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableSummaryId;
    let tableDetailsId;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableSummaryId = "kashefSummary";
        tableDetailsId = "kashefDetails";
    }
    else {
        area.classList.add('hide');
        tableSummaryId = "kashefSummaryPrint";
        tableDetailsId = "kashefDetailsPrint";
    }
    let totalAmount = 0;
    let totalMoney = 0;
    area.innerHTML = ``;
    area.innerHTML = `
        <h1 style="color : black ;">حساب ${allTypes.value} ل ${allNames.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <h2 style="color : black ;"> الاجمالي </h2>
        <table class='arabic' id=${tableSummaryId} style="width : 100%">
        <tr>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">اجمالي القيمة</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">متوسط سعر الوحدة</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">اجمالي الكمية</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">النوع</th>
        </tr>
        </table >
        <h2 style="color : black ;"> التفصيل</h2>
        <table class='arabic' id=${tableDetailsId} style="width : 100%">
        <tr>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">التاريخ</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">اجمالي القيمة</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">سعر الوحدة</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">الكمية</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">النوع</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاسم</th>
        </tr>
        </table >
        `
    let kashefSummary = document.querySelector(`#${tableSummaryId}`);
    let kashefDetails = document.querySelector(`#${tableDetailsId}`);
    let specifiedDays = datesSpecifiedCalculation();
    for (let i = 0; i < othersBuy.length; i++) {
        debugger;
        if (specifiedDays.includes(othersBuy[i].date) && othersBuy[i].type == allNames.value) {
            totalAmount = totalAmount + parseFloat(othersBuy[i].amount);
            totalMoney = totalMoney + parseFloat(othersBuy[i].total);
            kashefDetails.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${othersBuy[i].date + putDaysNamesSpicified(othersBuy[i].date)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${othersBuy[i].total}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${othersBuy[i].price}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${othersBuy[i].amount}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${othersBuy[i].type}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${othersBuy[i].name}</td>
            </tr>
            `)
        }
    }
    kashefSummary.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${totalMoney}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${totalMoney / totalAmount}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${totalAmount}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${allNames.value}</td>
            </tr>
            `)

    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateProductionInfoForOne(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableSummaryId;
    let tableSummary2Id;
    let tableDetailsId;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableSummaryId = "kashefSummary";
        tableSummary2Id = "kashefSummary2";
        tableDetailsId = "kashefDetails";
    }
    else {
        area.classList.add('hide');
        tableSummaryId = "kashefSummaryPrint";
        tableSummary2Id = "kashefSummary2Print";
        tableDetailsId = "kashefDetailsPrint";
    }
    let totalAmount = 0;
    let totalAmountFromMilk = 0;
    area.innerHTML = ``;
    area.innerHTML = `
        <h1 style="color : black ;">حساب ${allTypes.value} ل ${allNames.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <h2 style="color : black ;"> الاجمالي للانتاج خلال الفترة </h2>
        <table class='arabic' id=${tableSummaryId} style="width : 100%">
        <tr>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">اجمالي الكمية</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">النوع</th>
        </tr>
        </table >
        <h2 style="color : black ;"> الاجمالي للانتاج من لبن هذه الفترة </h2>
        <table class='arabic' id=${tableSummary2Id} style="width : 100%">
        <tr>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">اجمالي الكمية</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">النوع</th>
        </tr>
        </table >
        <h2 style="color : black ;"> التفصيل</h2>
        <table class='arabic' id=${tableDetailsId} style="width : 100%">
        <tr>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">التاريخ</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">منتج من لبن</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">الكمية</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">النوع</th>
        </tr>
        </table >
        `
    let kashefSummary = document.querySelector(`#${tableSummaryId}`);
    let kashefSummary2 = document.querySelector(`#${tableSummary2Id}`);
    let kashefDetails = document.querySelector(`#${tableDetailsId}`);
    const viweDetailsProductionPrint = document.querySelector('#viweDetailsProductionPrint');
    let specifiedDays = datesSpecifiedCalculation();
    for (let i = 0; i < productions.length; i++) {
        debugger;
        if (specifiedDays.includes(productions[i].dateMilk) && productions[i].type == allNames.value) {
            if (specifiedDays.includes(productions[i].date)) {
                totalAmount = totalAmount + parseFloat(productions[i].amount);
            }
            totalAmountFromMilk = totalAmountFromMilk + parseFloat(productions[i].amount);
            kashefDetails.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${productions[i].date + putDaysNamesSpicified(productions[i].date)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${productions[i].dateMilk + putDaysNamesSpicified(productions[i].dateMilk)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${productions[i].amount}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${productions[i].type}</td>
            </tr>
            `)
        }
        else if (specifiedDays.includes(productions[i].date) && productions[i].type == allNames.value) {
            totalAmount = totalAmount + parseFloat(productions[i].amount);
            kashefDetails.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${productions[i].date + putDaysNamesSpicified(productions[i].date)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${productions[i].dateMilk + putDaysNamesSpicified(productions[i].dateMilk)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${productions[i].amount}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${productions[i].type}</td>
            </tr>
            `)
        }
    }
    kashefSummary.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${totalAmount}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${allNames.value}</td>
            </tr>
            `)
    kashefSummary2.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${totalAmountFromMilk}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${allNames.value}</td>
            </tr>
            `)

    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateSalesTypesInfoForOne(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableSummaryId;
    let tableDetailsId;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableSummaryId = "kashefSummary";
        tableDetailsId = "kashefDetails";
    }
    else {
        area.classList.add('hide');
        tableSummaryId = "kashefSummaryPrint";
        tableDetailsId = "kashefDetailsPrint";
    }
    let totalAmount = 0;
    let totalWeight = 0;
    let totalMoney = 0;
    area.innerHTML = ``;
    area.innerHTML = `
        <h1 style="color : black ;">حساب ${allTypes.value} ل ${allNames.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <h2 style="color : black ;"> الاجمالي </h2>
        <table class='arabic' id=${tableSummaryId} style="width : 100%">
        <tr>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">اجمالي القيمة</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">متوسط سعر الوحدة</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">اجمالي الوزن</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">اجمالي الكمية</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">النوع</th>
        </tr>
        </table >
        <h2 style="color : black ;"> التفصيل</h2>
        <table class='arabic' id=${tableDetailsId} style="width : 100%">
        <tr>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">التاريخ</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">اجمالي القيمة</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">سعر الوحدة</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">الوزن</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">الكمية</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">النوع</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاسم</th>
        </tr>
        </table >
        `
    let kashefSummary = document.querySelector(`#${tableSummaryId}`);
    let kashefDetails = document.querySelector(`#${tableDetailsId}`);
    let specifiedDays = datesSpecifiedCalculation();
    for (let i = 0; i < sales.length; i++) {
        debugger;
        if (specifiedDays.includes(sales[i].date) && sales[i].type == allNames.value) {
            totalAmount = totalAmount + parseFloat(sales[i].amount);
            if (sales[i].weight != "ــــــــ") {
                totalWeight = totalWeight + parseFloat(sales[i].weight);
            }
            totalMoney = totalMoney + parseFloat(sales[i].total);
            kashefDetails.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">${sales[i].date + putDaysNamesSpicified(sales[i].date)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${sales[i].total}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${sales[i].price}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${sales[i].weight}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${sales[i].amount}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${sales[i].type}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${sales[i].name}</td>
            </tr>
            `)
        }
    }
    let avgPrice = 0;
    if (totalWeight > 0) {
        avgPrice = totalMoney / totalWeight;
    }
    else {
        avgPrice = totalMoney / totalAmount;
    }
    kashefSummary.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${totalMoney}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${avgPrice}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${totalWeight}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${totalAmount}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${allNames.value}</td>
            </tr>
            `)
    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateSalesInfoForOne(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableSummaryId;
    let tableDetailsId;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableSummaryId = "kashefSummary";
        tableDetailsId = "kashefDetails";
    }
    else {
        area.classList.add('hide');
        tableSummaryId = "kashefSummaryPrint";
        tableDetailsId = "kashefDetailsPrint";
    }
    let totalAmount = 0;
    let totalMoney = 0;
    let totalPaid = 0;
    let totalWeight = 0;
    area.innerHTML = ``;
    area.innerHTML = `
        <h1 style="color : black ;">حساب ${allTypes.value} ل ${allNames.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <h2 style="color : black ;"> الاجمالي </h2>
        <table class='arabic' id=${tableSummaryId} style="width : 100%">
        <tr>
        <th style="border : 1px solid black ; text-align : center;background-color:lightpink ;">المتبقي</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">اجمالي المدفوع</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">اجمالي القيمة</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">متوسط سعر الوحدة</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">اجمالي الوزن</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">اجمالي الكمية</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">النوع</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاسم</th>
        </tr>
        </table >
        <h2 style="color : black ;"> التفصيل</h2>
        <table class='arabic' id=${tableDetailsId} style="width : 100%">
        <tr>
        <th style="border : 1px solid black ; text-align : center;background-color:lightsalmon ;">التاريخ</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightpink ;">المدفوع</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">الملاحظات</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">اجمالي القيمة</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">سعر الوحدة</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">الوزن</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">الكمية</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">النوع</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاسم</th>
        </tr>
        </table >
        `
    let kashefSummary = document.querySelector(`#${tableSummaryId}`);
    let kashefDetails = document.querySelector(`#${tableDetailsId}`);
    let specifiedDays = datesSpecifiedCalculation();
    for (let i = 0; i < sales.length; i++) {
        debugger;
        if (specifiedDays.includes(sales[i].date) && sales[i].name == allNames.value) {
            totalAmount = totalAmount + parseFloat(sales[i].amount);
            if (sales[i].weight != "ــــــــ") {
                totalWeight = totalWeight + parseFloat(sales[i].weight);
            }
            totalMoney = totalMoney + parseFloat(sales[i].total);
            totalPaid = totalPaid + parseFloat(sales[i].paidFactory);
            kashefDetails.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightsalmon ;">${sales[i].date + putDaysNamesSpicified(sales[i].date)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightpink ;">${sales[i].notes}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">${sales[i].paidFactory}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${sales[i].total}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${sales[i].price}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${sales[i].weight}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${sales[i].amount}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${sales[i].type}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${sales[i].name}</td>
            </tr>
            `)
        }
    }
    let listOfTypes = [];
    listOfTypes.push("دفع");
    listOfTypes.push("عليه");
    listOfTypes.push("لبن بقري");
    listOfTypes.push("لبن جاموسي");
    for (let i = 0; i < otherBuyTypes.length; i++) {
        listOfTypes.push(otherBuyTypes[i].name);
    }
    for (let i = 0; i < products.length; i++) {
        listOfTypes.push(products[i].name);
    }
    for (let k = 0; k < listOfTypes.length; k++) {
        let totalAmountSpecifiedType = 0;
        let totalWeightSpecifiedType = 0;
        let totalMoneySpecifiedType = 0;
        for (let i = 0; i < sales.length; i++) {
            debugger;
            if (specifiedDays.includes(sales[i].date) && sales[i].name == allNames.value && sales[i].type == listOfTypes[k]) {
                totalAmountSpecifiedType = totalAmountSpecifiedType + parseFloat(sales[i].amount);
                totalMoneySpecifiedType = totalMoneySpecifiedType + parseFloat(sales[i].total);
                if (sales[i].weight != "ــــــــ") {
                    totalWeightSpecifiedType = totalWeightSpecifiedType + parseFloat(sales[i].weight);
                }
            }
        }
        let avgPrice = 0;
        if (totalWeightSpecifiedType > 0) {
            avgPrice = totalMoneySpecifiedType / totalWeightSpecifiedType;
        }
        else {
            avgPrice = totalMoneySpecifiedType / totalAmountSpecifiedType;

        }
        if (totalWeightSpecifiedType == 0 && totalWeightSpecifiedType == 0 && totalMoneySpecifiedType == 0) {
        }
        else {
            kashefSummary.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightpink ;">---</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">---</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${totalMoneySpecifiedType}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${avgPrice}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${totalWeightSpecifiedType}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${totalAmountSpecifiedType}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${listOfTypes[k]}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${allNames.value}</td>
            </tr>
            `)
        }
    }
    kashefSummary.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightpink ;">${totalPaid - totalMoney}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">${totalPaid}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${totalMoney}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">---</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">---</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">---</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">الاجمالي</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${allNames.value}</td>
            </tr>
            `)
    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateAllInfoForOne(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableSummaryId;
    let tableDetailsId;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableSummaryId = "kashefSummary";
        tableDetailsId = "kashefDetails";
    }
    else {
        area.classList.add('hide');
        tableSummaryId = "kashefSummaryPrint";
        tableDetailsId = "kashefDetailsPrint";
    }
    let totalPaid = 0;
    let totalMoney = 0;
    area.innerHTML = ``;
    area.innerHTML = `
        <h1 style="color : black ;">حساب ${allTypes.value} ل ${allNames.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <h2 style="color : black ;"> الاجمالي </h2>
        <table class='arabic' id=${tableSummaryId} style="width : 100%">
        <tr>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">المتبقي </th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">اجمالي المدفوع</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">اجمالي المستحق</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاسم</th>
        </tr>
        </table >
        <h2 style="color : black ;"> التفصيل</h2>
        <table class='arabic' id=${tableDetailsId} style="width : 100%">
        <tr>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">المتبقي له</th>
        <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">المدفوع</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">المستحق </th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">حساب</th>
        <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاسم</th>
        </tr>
        </table >
        `
    let kashefSummary = document.querySelector(`#${tableSummaryId}`);
    let kashefDetails = document.querySelector(`#${tableDetailsId}`);
    let specifiedDays = datesSpecifiedCalculation();
    let specifiedDays30 = datesSpecifiedCalculation30();
    let totalPaidSpecified = 0;
    let totalMoneySpecified = 0;
    for (let i = 0; i < milks.length; i++) {
        if (specifiedDays.includes(milks[i].date) && milks[i].seller == allNames.value) {
            totalPaidSpecified = totalPaidSpecified + parseFloat(milks[i].paid);
            totalMoneySpecified = totalMoneySpecified + parseFloat(milks[i].total) + parseFloat(milks[i].salary) + parseFloat(milks[i].addtions);
        }
    }

    kashefDetails.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${(totalMoneySpecified - totalPaidSpecified).toFixed(2)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${(totalPaidSpecified).toFixed(2)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${(totalMoneySpecified).toFixed(2)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">اللبن</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${allNames.value}</td>
            </tr>
            `)
    totalMoney = totalMoney + totalMoneySpecified;
    totalPaid = totalPaid + totalPaidSpecified;
    totalPaidSpecified = 0;
    totalMoneySpecified = 0;
    for (let i = 0; i < othersBuy.length; i++) {
        if (specifiedDays.includes(othersBuy[i].date) && othersBuy[i].name == allNames.value) {
            totalPaidSpecified = totalPaidSpecified + parseFloat(othersBuy[i].paid);
            totalMoneySpecified = totalMoneySpecified + parseFloat(othersBuy[i].total);
        }
    }
    kashefDetails.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${(totalMoneySpecified - totalPaidSpecified).toFixed(2)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${(totalPaidSpecified).toFixed(2)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${(totalMoneySpecified).toFixed(2)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">المشتريات الاخرى</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${allNames.value}</td>
            </tr>
            `)
    totalMoney = totalMoney + totalMoneySpecified;
    totalPaid = totalPaid + totalPaidSpecified;
    totalPaidSpecified = 0;
    totalMoneySpecified = 0;
    for (let i = 0; i < sales.length; i++) {
        if (specifiedDays.includes(sales[i].date) && sales[i].name == allNames.value) {
            totalPaidSpecified = totalPaidSpecified + parseFloat(sales[i].paidFactory);
            totalMoneySpecified = totalMoneySpecified + parseFloat(sales[i].total);
        }
    }
    kashefDetails.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${((-1 * totalMoneySpecified) - (-1 * totalPaidSpecified)).toFixed(2)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${(-1 * totalPaidSpecified).toFixed(2)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${(-1 * totalMoneySpecified).toFixed(2)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">المبيعات</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${allNames.value}</td>
            </tr>
            `)
    totalMoney = totalMoney - totalMoneySpecified;
    totalPaid = totalPaid - totalPaidSpecified;
    totalPaidSpecified = 0;
    totalMoneySpecified = 0;
    let salaryOfHalfDay = 0;
    let totalAddtions = 0;
    let specifiedDaysTransport = datesSpecifiedTransport();
    let type = '';
    for (let i = 0; i < employes.length; i++) {
        if (employes[i].name == allNames.value) {
            type = employes[i].type;
            break;
        }
    }
    if (type == "موظف") {
        for (j = 0; j < specifiedDays30.length; j++) {
            for (i = 0; i < salaries.length; i++) {
                if (salaries[i].employee === allNames.value && salaries[i].date == specifiedDays30[j]) {
                    if (salaries[i].type == "موظف") {
                        totalPaidSpecified = totalPaidSpecified + parseFloat(salaries[i].paid);
                        totalAddtions = totalAddtions + parseFloat(salaries[i].addtions);
                        salaryOfHalfDay = parseFloat(salaries[i].salary) / 60;
                    }
                }
            }
            totalMoneySpecified = totalMoneySpecified + parseFloat(salaryOfHalfDay);
        }
    }
    else if (type == "مشال") {
        for (j = 0; j < specifiedDaysTransport.length; j++) {
            for (i = 0; i < salaries.length; i++) {
                if (salaries[i].employee === allNames.value && salaries[i].date == specifiedDaysTransport[j]) {
                    if (salaries[i].type == "مشال") {
                        totalPaidSpecified = totalPaidSpecified + parseFloat(salaries[i].paid);
                        totalAddtions = totalAddtions + parseFloat(salaries[i].addtions);
                        salaryOfHalfDay = parseFloat(salaries[i].salary) / 14;
                    }
                }
            }
            totalMoneySpecified = totalMoneySpecified + parseFloat(salaryOfHalfDay);
        }
    }

    totalMoneySpecified = totalMoneySpecified + totalAddtions;

    kashefDetails.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${((totalMoneySpecified) - (totalPaidSpecified)).toFixed(2)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${(totalPaidSpecified).toFixed(2)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${(totalMoneySpecified).toFixed(2)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">الاجر للعمال و المشال</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${allNames.value}</td>
            </tr>
            `)
    totalMoney = totalMoney + totalMoneySpecified;
    totalPaid = totalPaid + totalPaidSpecified;
    totalPaidSpecified = 0;
    totalMoneySpecified = 0;

    kashefSummary.insertAdjacentHTML('beforeend', `
             <tr>
             <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${(totalMoney - totalPaid).toFixed(2)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${(totalPaid).toFixed(2)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${(totalMoney).toFixed(2)}</td>
             <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${allNames.value}</td>
            </tr>
            `)
    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateMilkSuppliersKashf(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableId;
    //let table2Id;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableId = "kashef";
        // table2Id = "kashef2";
    }
    else {
        area.classList.add('hide');
        tableId = "kashefPrint";
        //table2Id = "kashef2Print";
    }
    area.classList.remove('hide');
    area.innerHTML = ``
    area.innerHTML = `
                <h1 style="color : black ;"> ${listOfReports.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <table class='arabic' id=${tableId} style="width : 100%">
            <tr>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">له أو عليه</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">المدفوع</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">الاجمالي</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">اضافات</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">المرتب</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">قيمة اللبن</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاسم</th>
            </tr>
            </table>`
    let kashef = document.querySelector(`#${tableId}`);
    let listOfParteners = [];
    let mostahak = 0;
    let mostahakMilk = 0;
    let mostahakSalary = 0;
    let mostahakAddtions = 0;
    let totalMostahakMilk = 0;
    let totalMostahakSalary = 0;
    let totalMostahakAddtions = 0;
    let paid = 0;
    let TotalMostahak = 0;
    let totalPaid = 0;
    let totalremainderTotal = 0;
    let specifiedDays = datesSpecifiedCalculation();
    let specifiedDays30 = datesSpecifiedCalculation30();
    let listOfPartenersOptions = allNames.selectedOptions;
    for (let i = 0; i < listOfPartenersOptions.length; i++) {
        if (!listOfParteners.includes(listOfPartenersOptions[i].value)) {
            listOfParteners.push(listOfPartenersOptions[i].value);
        }
    }
    for (let k = 0; k < listOfParteners.length; k++) {
        let remainderTotal = calcReminder(listOfParteners[k]);
        debugger;
        for (i = 0; i < milks.length; i++) {
            if (specifiedDays.includes(milks[i].date) && milks[i].seller == listOfParteners[k]) {
                mostahak = mostahak + parseFloat(milks[i].total) + parseFloat(milks[i].salary) + parseFloat(milks[i].addtions);
                mostahakMilk = mostahakMilk + parseFloat(milks[i].total);
                mostahakSalary = mostahakSalary + parseFloat(milks[i].salary);
                mostahakAddtions = mostahakAddtions + parseFloat(milks[i].addtions);
                paid = paid + parseFloat(milks[i].paid);
            }
        }
        kashef.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">${mostahak - paid}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${paid}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${mostahak}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${mostahakAddtions}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${mostahakSalary}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${mostahakMilk}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${listOfParteners[k]}</td>
        </tr>`)
        totalPaid = totalPaid + paid;
        totalremainderTotal = totalremainderTotal + parseFloat(remainderTotal);
        TotalMostahak = TotalMostahak + mostahak;
        totalMostahakMilk = totalMostahakMilk + mostahakMilk;
        totalMostahakSalary = totalMostahakSalary + mostahakSalary;
        totalMostahakAddtions = totalMostahakAddtions + mostahakAddtions;
        paid = 0;
        mostahak = 0;
        mostahakMilk = 0;
        mostahakSalary = 0;
        mostahakAddtions = 0;
    }
    kashef.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">${TotalMostahak - totalPaid}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${totalPaid}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${TotalMostahak}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${totalMostahakAddtions}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${totalMostahakSalary}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${totalMostahakMilk}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاجمالي</td>
        </tr>`)

    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateMilkSuppliersTotallyKashf(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableId;
    //let table2Id;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableId = "kashef";
        // table2Id = "kashef2";
    }
    else {
        area.classList.add('hide');
        tableId = "kashefPrint";
        //table2Id = "kashef2Print";
    }
    area.innerHTML = ``
    area.innerHTML = `
                <h1 style="color : black ;"> ${listOfReports.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <table class='arabic' id=${tableId} style="width : 100%">
            <tr>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">له أو عليه</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">المدفوع</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">الاجمالي</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاسم</th>
            </tr>
            </table>`
    let kashef = document.querySelector(`#${tableId}`);
    let listOfParteners = [];
    let mostahak = 0;
    let mostahakMilk = 0;
    let mostahakSalary = 0;
    let mostahakAddtions = 0;
    let totalMostahakMilk = 0;
    let totalMostahakSalary = 0;
    let totalMostahakAddtions = 0;
    let paid = 0;
    let TotalMostahak = 0;
    let totalPaid = 0;
    let totalremainderTotal = 0;
    let specifiedDays = datesSpecifiedCalculation();
    let listOfPartenersOptions = allNames.selectedOptions;
    for (let i = 0; i < listOfPartenersOptions.length; i++) {
        if (!listOfParteners.includes(listOfPartenersOptions[i].value)) {
            listOfParteners.push(listOfPartenersOptions[i].value);
        }
    }
    for (let k = 0; k < listOfParteners.length; k++) {
        debugger;
        let remainderTotal = calcReminder(listOfParteners[k]);
        for (i = 0; i < milks.length; i++) {
            if (specifiedDays.includes(milks[i].date) && milks[i].seller == listOfParteners[k]) {
                mostahak = mostahak + parseFloat(milks[i].total) + parseFloat(milks[i].salary) + parseFloat(milks[i].addtions);
                mostahakMilk = mostahakMilk + parseFloat(milks[i].total);
                mostahakSalary = mostahakSalary + parseFloat(milks[i].salary);
                mostahakAddtions = mostahakAddtions + parseFloat(milks[i].addtions);
                paid = paid + parseFloat(milks[i].paid);
            }
        }
        kashef.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${mostahak - paid}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${paid}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${mostahak}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${listOfParteners[k]}</td>
        </tr>`)
        totalPaid = totalPaid + paid;
        totalremainderTotal = totalremainderTotal + parseFloat(remainderTotal);
        TotalMostahak = TotalMostahak + mostahak;
        totalMostahakMilk = totalMostahakMilk + mostahakMilk;
        totalMostahakSalary = totalMostahakSalary + mostahakSalary;
        totalMostahakAddtions = totalMostahakAddtions + mostahakAddtions;
        paid = 0;
        mostahak = 0;
        mostahakMilk = 0;
        mostahakSalary = 0;
        mostahakAddtions = 0;
    }
    kashef.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${TotalMostahak - totalPaid}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${totalPaid}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${TotalMostahak}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاجمالي</td>
        </tr>`)

    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateMilkSuppliersDetailsKashf(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableId;
    //let table2Id;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableId = "kashef";
        // table2Id = "kashef2";
    }
    else {
        area.classList.add('hide');
        tableId = "kashefPrint";
        //table2Id = "kashef2Print";
    }
    area.innerHTML = ``
    area.innerHTML = `
                <h3 style="color : black ;"> ${listOfReports.value} في الفترة من ${fromDate} الى ${toDate}</h3>
        <table class='arabic' id=${tableId} style="width : 100%">
            <tr>
            <th style="border : 1px solid black ; text-align : center;background-color:lightseagreen ;">له أو عليه</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightsalmon ;">المدفوع الاجمالي</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightpink ;">المستحق الاجمالي</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgreen ;"> حساب المبيعات الاجلة</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">حساب المشتريات الاخرى</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">الاضافات</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">المرتب</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">حساب اللبن</th>
            </tr>
            </table>`
    let kashef = document.querySelector(`#${tableId}`);
    let listOfParteners = [];
    let mostahak = 0;
    let mostahakSales = 0;
    let mostahakOthersBuy = 0;
    let mostahakSalaries = 0;
    let mostahakMilk = 0;
    let mostahakMilkTotal=0;
    let mostahakMilkSalary=0;
    let mostahakMilkAdditions=0;
    let paid = 0;
    let paidSales = 0;
    let paidOthersBuy = 0;
    let paidSalaries = 0;
    let paidMilk = 0;
    let TotalMostahak = 0;
    let totalPaid = 0;
    let totalremainderTotal = 0;
    let totalPaidSales=0;
    let specifiedDays = datesSpecifiedCalculation();
    let specifiedDays30 = datesSpecifiedCalculation30();
    let listOfPartenersOptions = allNames.selectedOptions;
    for (let i = 0; i < listOfPartenersOptions.length; i++) {
        if (!listOfParteners.includes(listOfPartenersOptions[i].value)) {
            listOfParteners.push(listOfPartenersOptions[i].value);
        }
    }
    for (let k = 0; k < listOfParteners.length; k++) {
        debugger;
        let remainderTotal = calcReminder(listOfParteners[k]);
        for (i = 0; i < milks.length; i++) {
            if (specifiedDays.includes(milks[i].date) && milks[i].seller == listOfParteners[k]) {
                mostahak = mostahak + parseFloat(milks[i].total) + parseFloat(milks[i].salary) + parseFloat(milks[i].addtions);
                paid = paid + parseFloat(milks[i].paid);
                mostahakMilkTotal = mostahakMilkTotal + parseFloat(milks[i].total);
                mostahakMilkSalary = mostahakMilkSalary + parseFloat(milks[i].salary);
                mostahakMilkAdditions = mostahakMilkAdditions + parseFloat(milks[i].addtions);
                paidMilk = paidMilk + parseFloat(milks[i].paid);
            }
        }
        mostahakMilk = mostahakMilkTotal + mostahakMilkSalary+mostahakMilkAdditions;
        for (let t = 0; t < sales.length; t++) {
            if (specifiedDays.includes(sales[t].date) && sales[t].name == listOfParteners[k] && sales[t].total!=sales[t].paidFactory) {
                mostahak = mostahak - parseFloat(sales[t].total);
                //paid = paid - parseFloat(sales[t].paidFactory);
                mostahakSales = mostahakSales - parseFloat(sales[t].total);
                paidSales = paidSales - parseFloat(sales[t].paidFactory);
            }
        }
        for (let t = 0; t < othersBuy.length; t++) {
            if (specifiedDays.includes(othersBuy[t].date) && othersBuy[t].name == listOfParteners[k]) {
                mostahak = mostahak + parseFloat(othersBuy[t].total);
                paid = paid + parseFloat(othersBuy[t].paid);
                mostahakOthersBuy = mostahakOthersBuy + parseFloat(othersBuy[t].total);
                paidOthersBuy = paidOthersBuy + parseFloat(othersBuy[t].paid);
            }
        }
        let salaryOfHalfDay = 0;
        let totalAddtions = 0;
        let specifiedDaysTransport = datesSpecifiedTransport();
        let type = '';
        for (let i = 0; i < employes.length; i++) {
            if (employes[i].name == listOfParteners[k]) {
                type = employes[i].type;
                break;
            }
        }
        if (type == "موظف") {
            for (j = 0; j < specifiedDays30.length; j++) {
                for (i = 0; i < salaries.length; i++) {
                    if (salaries[i].employee === listOfParteners[k] && salaries[i].date == specifiedDays30[j]) {
                        if (salaries[i].type == "موظف") {
                            paid = paid + parseFloat(salaries[i].paid);
                            totalAddtions = totalAddtions + parseFloat(salaries[i].addtions);
                            paidSalaries = paidSalaries + parseFloat(salaries[i].paid);
                            salaryOfHalfDay = parseFloat(salaries[i].salary) / 60;
                        }
                    }
                }
                mostahak = mostahak + parseFloat(salaryOfHalfDay);
                mostahakSalaries = mostahakSalaries + parseFloat(salaryOfHalfDay);
            }
        }
        else if (type == "مشال") {
            for (j = 0; j < specifiedDaysTransport.length; j++) {
                for (i = 0; i < salaries.length; i++) {
                    if (salaries[i].employee === listOfParteners[k] && salaries[i].date == specifiedDaysTransport[j]) {
                        if (salaries[i].type == "مشال") {
                            paid = paid + parseFloat(salaries[i].paid);
                            totalAddtions = totalAddtions + parseFloat(salaries[i].addtions);
                            paidSalaries = paidSalaries + parseFloat(salaries[i].paid);
                            salaryOfHalfDay = parseFloat(salaries[i].salary) / 14;
                        }
                    }
                }
                mostahak = mostahak + parseFloat(salaryOfHalfDay);
                mostahakSalaries = mostahakSalaries + parseFloat(salaryOfHalfDay);
            }
        }


        mostahak = mostahak + totalAddtions;
        mostahakSalaries = mostahakSalaries + totalAddtions;

        kashef.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color:lightseagreen ;">${(mostahak - paidSales  - paid).toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightsalmon ;">${paid.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightpink ;">${(parseFloat(mostahak) - parseFloat(paidSales)).toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${(parseFloat(mostahakSales) - parseFloat(paidSales)).toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${(parseFloat(mostahakOthersBuy) - parseFloat(paidOthersBuy)).toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${mostahakMilkAdditions.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${mostahakMilkSalary.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${mostahakMilkTotal.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${listOfParteners[k]}</td>
        </tr>`)
        totalPaid = totalPaid + paid;
        totalPaidSales = totalPaidSales + paidSales;
        totalremainderTotal = totalremainderTotal + parseFloat(remainderTotal);
        TotalMostahak = TotalMostahak + mostahak;
        paid = 0;
        mostahak = 0;
        paidMilk = 0;
        mostahakMilk = 0;
        paidSalaries = 0;
        mostahakSalaries = 0;
        paidOthersBuy = 0;
        mostahakOthersBuy = 0;
        paidSales = 0;
        mostahakSales = 0;
        mostahakMilkTotal=0;
        mostahakMilkSalary=0;
        mostahakMilkAdditions=0;
    }
    kashef.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${(TotalMostahak - totalPaidSales - totalPaid).toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${totalPaid.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${(TotalMostahak - totalPaidSales).toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue; " colspan="7">الاجمالي</td>
        </tr>`)

    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateMilkAmounts(area) {
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableSummaryId;
    let tableDetailsId;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableSummaryId = "kashefSummary";
        tableDetailsId = "kashefDetails";
    }
    else {
        area.classList.add('hide');
        tableSummaryId = "kashefSummaryPrint";
        tableDetailsId = "kashefDetailsPrint";
    }
    area.innerHTML = ``;
    area.innerHTML = `
    <h1 style="color : black ;"> ${listOfReports.value} في الفترة من ${fromDate} الى ${toDate}</h1>
    <h3>الاجمالي</h3>
    <table class='arabic' style="width : 100%" id=${tableSummaryId} class='arabic'>
    <tr>
    <th style='border : 1px solid black; text-align:center;background-color:lightsalmon ;'>متوسط سعر كيلو اللبن البقري</th>
    <th style='border : 1px solid black; text-align:center;background-color:lightpink ;'>اجمالي نقود اللبن البقري</th>
    <th style='border : 1px solid black; text-align:center;background-color:lightgrey ;'>اجمالي اللبن البقري</th>
    <th style='border : 1px solid black; text-align:center;background-color:lightgreen ;'>متوسط سعر كيلو اللبن الجاموسي</th>
    <th style='border : 1px solid black; text-align:center;background-color:lightgray ;'>اجمالي نقود اللبن الجاموسي</th>
    <th style='border : 1px solid black; text-align:center;background-color:lightgoldenrodyellow ;'>اجمالي اللبن الجاموسي</th>
    <th style='border : 1px solid black; text-align:center;background-color: lightcyan ;'>متوسط سعر كيلو اللبن</th>
    <th style='border : 1px solid black; text-align:center;background-color: lightcoral;'>اجمالي نقود اللبن </th>
    <th style='border : 1px solid black; text-align:center;background-color: lightblue;'>اجمالي اللبن</th>
    </tr>
    </table>
    <h3>التفصيل</h3>
    <table class='arabic' style="width : 100%" id=${tableDetailsId} class='arabic'>
    <tr>
    <th style='border : 1px solid black; text-align:center;background-color:lightseagreen ;;'>التاريخ</th>
    <th style='border : 1px solid black; text-align:center;background-color:lightsalmon ;;'>متوسط سعر كيلو اللبن البقري</th>
    <th style='border : 1px solid black; text-align:center;background-color:lightpink ;;'>اجمالي نقود اللبن البقري</th>
    <th style='border : 1px solid black; text-align:center;background-color:lightgrey ;;'>اجمالي اللبن البقري</th>
    <th style='border : 1px solid black; text-align:center;background-color:lightgreen ;;'>متوسط سعر كيلو اللبن الجاموسي</th>
    <th style='border : 1px solid black; text-align:center;background-color:lightgray ;;'>اجمالي نقود اللبن الجاموسي</th>
    <th style='border : 1px solid black; text-align:center;background-color:lightgoldenrodyellow ;;'>اجمالي اللبن الجاموسي</th>
    <th style='border : 1px solid black; text-align:center;background-color: lightcyan ;;'>متوسط سعر كيلو اللبن</th>
    <th style='border : 1px solid black; text-align:center;background-color: lightcoral;;'>اجمالي نقود اللبن </th>
    <th style='border : 1px solid black; text-align:center;background-color: lightblue;;'>اجمالي اللبن</th>
    </tr>
    </table>
    `;
    let kashefSummary = document.querySelector(`#${tableSummaryId}`);
    let kashefDetails = document.querySelector(`#${tableDetailsId}`);
    tMilkG = 0;
    tMilkGM = 0;
    tMilkB = 0;
    tMilkBM = 0;
    dMilkG = 0;
    dMilkGM = 0;
    dMilkB = 0;
    dMilkBM = 0;
    let specifiedDays = datesSpecifiedCalculation();
    for (let j = 0; j < specifiedDays.length; j++) {
        for (i = 0; i < milks.length; i++) {
            if (specifiedDays[j] == milks[i].date) {
                tMilkG = tMilkG + parseFloat(milks[i].amountGamos);
                tMilkB = tMilkB + parseFloat(milks[i].amountBakary);
                tMilkGM = tMilkGM + parseFloat(milks[i].totalGamos);
                tMilkBM = tMilkBM + parseFloat(milks[i].totalBakary);
                dMilkG = dMilkG + parseFloat(milks[i].amountGamos);
                dMilkB = dMilkB + parseFloat(milks[i].amountBakary);
                dMilkGM = dMilkGM + parseFloat(milks[i].totalGamos);
                dMilkBM = dMilkBM + parseFloat(milks[i].totalBakary);
            }
        }
        debugger;
        if (dMilkG + dMilkB != 0) {

            kashefDetails.insertAdjacentHTML('beforeend', `
        <tr>
        <td style='border : 1px solid black; text-align:center;background-color:lightseagreen ;'>${specifiedDays[j]}</td>
        <td style='border : 1px solid black; text-align:center;background-color:lightsalmon ;'>${(dMilkBM / dMilkB).toFixed(5)}</td>
        <td style='border : 1px solid black; text-align:center;background-color:lightpink ;'>${dMilkBM}</td>
        <td style='border : 1px solid black; text-align:center;background-color:lightgrey ;'>${dMilkB}</td>
        <td style='border : 1px solid black; text-align:center;background-color:lightgreen ;'>${(dMilkGM / dMilkG).toFixed(5)}</td>
        <td style='border : 1px solid black; text-align:center;background-color:lightgray ;'>${dMilkGM}</td>
        <td style='border : 1px solid black; text-align:center;background-color:lightgoldenrodyellow ;'>${dMilkG}</td>
        <td style='border : 1px solid black; text-align:center;background-color: lightcyan ;'>${((dMilkBM + dMilkGM) / (dMilkB + dMilkG)).toFixed(5)}</td>
        <td style='border : 1px solid black; text-align:center;background-color: lightcoral;'>${dMilkBM + dMilkGM}</td>
        <td style='border : 1px solid black; text-align:center;background-color: lightblue;'>${dMilkG + dMilkB}</td>
        </tr>
        </table>
        `);
        }
        dMilkG = 0;
        dMilkGM = 0;
        dMilkB = 0;
        dMilkBM = 0;
    }

    kashefSummary.insertAdjacentHTML('beforeend', `
    <tr>
    <td style='border : 1px solid black; text-align:center;background-color:lightsalmon ;'>${(tMilkBM / tMilkB).toFixed(5)}</td>
    <td style='border : 1px solid black; text-align:center;background-color:lightpink ;'>${tMilkBM}</td>
    <td style='border : 1px solid black; text-align:center;background-color:lightgrey ;'>${tMilkB}</td>
    <td style='border : 1px solid black; text-align:center;background-color:lightgreen ;'>${(tMilkGM / tMilkG).toFixed(5)}</td>
    <td style='border : 1px solid black; text-align:center;background-color:lightgray ;'>${tMilkGM}</td>
    <td style='border : 1px solid black; text-align:center;background-color:lightgoldenrodyellow ;'>${tMilkG}</td>
    <td style='border : 1px solid black; text-align:center;background-color: lightcyan ;'>${((tMilkBM + tMilkGM) / (tMilkB + tMilkG)).toFixed(5)}</td>
    <td style='border : 1px solid black; text-align:center;background-color: lightcoral;'>${tMilkBM + tMilkGM}</td>
    <td style='border : 1px solid black; text-align:center;background-color: lightblue;'>${tMilkG + tMilkB}</td>
    </tr>
    </table>
    `);
    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();
        printDiv();
    }
}
function calculateSalariesKashf(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableId;
    //let table2Id;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableId = "kashef";
        // table2Id = "kashef2";
    }
    else {
        area.classList.add('hide');
        tableId = "kashefPrint";
        //table2Id = "kashef2Print";
    }
    area.innerHTML = ``
    area.innerHTML = `
        <h1 style="color : black ;"> ${listOfReports.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <table class='arabic' id=${tableId} style="width : 100%">
            <tr>
            <th style="border : 1px solid black ; text-align : center;background-color:lightseagreen ;">له أو عليه</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightpink ;"> المدفوع </th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightpink ;"> اجمالي المستحق </th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">حساب المبيعات</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">حساب المشتريات الاخرى</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">المستحق للاجور</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاسم</th>
            </tr>
            </table>`
    let kashef = document.querySelector(`#${tableId}`);
    let listOfParteners = [];
    let mostahak = 0;
    let mostahakSales = 0;
    let mostahakOthersBuy = 0;
    let mostahakSalaries = 0;
    let mostahakMilk = 0;
    let paid = 0;
    let paidSales = 0;
    let paidOthersBuy = 0;
    let paidSalaries = 0;
    let paidMilk = 0;
    let TotalMostahak = 0;
    let totalMostahakSalary = 0;
    let totalMostahakOthersBuy = 0;
    let totalMostahakSales = 0;
    let totalPaid = 0;
    let specifiedDays = datesSpecifiedCalculation();
    let specifiedDays30 = datesSpecifiedCalculation30();

    for (let i = 0; i < employes.length; i++) {
        if (!listOfParteners.includes(employes[i].name)) {
            listOfParteners.push(employes[i].name);
        }
    }
    for (let k = 0; k < listOfParteners.length; k++) {
        debugger;
        for (i = 0; i < milks.length; i++) {
            if (specifiedDays.includes(milks[i].date) && milks[i].seller == listOfParteners[k]) {
                mostahak = mostahak + parseFloat(milks[i].total) + parseFloat(milks[i].salary) + parseFloat(milks[i].addtions);
                paid = paid + parseFloat(milks[i].paid);
                mostahakMilk = mostahakMilk + parseFloat(milks[i].total) + parseFloat(milks[i].salary) + parseFloat(milks[i].addtions);
                paidMilk = paidMilk + parseFloat(milks[i].paid);
            }
        }
        for (let t = 0; t < sales.length; t++) {
            if (specifiedDays.includes(sales[t].date) && sales[t].name == listOfParteners[k]) {
                mostahak = mostahak - parseFloat(sales[t].total);
                mostahakSales = mostahakSales - parseFloat(sales[t].total);
                paidSales = paidSales - parseFloat(sales[t].paidFactory);
            }
        }
        for (let t = 0; t < othersBuy.length; t++) {
            if (specifiedDays.includes(othersBuy[t].date) && othersBuy[t].name == listOfParteners[k]) {
                mostahak = mostahak + parseFloat(othersBuy[t].total);
                paid = paid + parseFloat(othersBuy[t].paid);
                mostahakOthersBuy = mostahakOthersBuy + parseFloat(othersBuy[t].total);
                paidOthersBuy = paidOthersBuy + parseFloat(othersBuy[t].paid);
            }
        }
        let totalAddtions = 0;
        let salaryOfHalfDay = 0;
        let specifiedDaysTransport = datesSpecifiedTransport();
        let type = '';
        for (let i = 0; i < employes.length; i++) {
            if (employes[i].name == listOfParteners[k]) {
                type = employes[i].type;
                break;
            }
        }
        if (type == "موظف") {
            for (j = 0; j < specifiedDays30.length; j++) {
                for (i = 0; i < salaries.length; i++) {
                    if (salaries[i].employee === listOfParteners[k] && salaries[i].date == specifiedDays30[j]) {
                        if (salaries[i].type == "موظف") {
                            paid = paid + parseFloat(salaries[i].paid);
                            totalAddtions = totalAddtions + parseFloat(salaries[i].addtions);
                            paidSalaries = paidSalaries + parseFloat(salaries[i].paid);
                            debugger;
                            salaryOfHalfDay = parseFloat(salaries[i].salary) / 60;
                        }
                    }
                }
                mostahak = mostahak + parseFloat(salaryOfHalfDay);
                mostahakSalaries = mostahakSalaries + parseFloat(salaryOfHalfDay);
            }
        }
        else if (type == "مشال") {
            for (j = 0; j < specifiedDaysTransport.length; j++) {
                for (i = 0; i < salaries.length; i++) {
                    if (salaries[i].employee === listOfParteners[k] && salaries[i].date == specifiedDaysTransport[j]) {
                        if (salaries[i].type == "مشال") {
                            paid = paid + parseFloat(salaries[i].paid);
                            totalAddtions = totalAddtions + parseFloat(salaries[i].addtions);
                            paidSalaries = paidSalaries + parseFloat(salaries[i].paid);
                            salaryOfHalfDay = parseFloat(salaries[i].salary) / 14;
                        }
                    }
                }
                mostahak = mostahak + parseFloat(salaryOfHalfDay);
                mostahakSalaries = mostahakSalaries + parseFloat(salaryOfHalfDay);
            }
        }


        mostahak = mostahak + totalAddtions;
        mostahakSalaries = mostahakSalaries + totalAddtions;
        kashef.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color:lightseagreen ;">${(mostahak - paidSales - paid).toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightsalmon ;">${paid.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightpink ;">${(parseFloat(mostahak) - parseFloat(paidSales)).toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${(parseFloat(mostahakSales) - parseFloat(paidSales)).toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${(parseFloat(mostahakOthersBuy) - parseFloat(paidOthersBuy)).toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${mostahakSalaries.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${listOfParteners[k]}</td>
        </tr>`)
        totalPaid = totalPaid + paid;
        TotalMostahak = TotalMostahak + mostahak - paidSales;
        totalMostahakSalary = totalMostahakSalary + mostahakSalaries;
        totalMostahakOthersBuy = totalMostahakOthersBuy + mostahakSales - paidSales;
        totalMostahakSales = totalMostahakSales + mostahakOthersBuy - paidOthersBuy;
        paid = 0;
        mostahak = 0;
        paidMilk = 0;
        mostahakMilk = 0;
        paidSalaries = 0;
        mostahakSalaries = 0;
        paidOthersBuy = 0;
        mostahakOthersBuy = 0;
        paidSales = 0;
        mostahakSales = 0;
    }
    kashef.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${(TotalMostahak - totalPaid).toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${totalPaid.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${TotalMostahak.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${totalMostahakOthersBuy.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${totalMostahakSales.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${totalMostahakSalary.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue; ">الاجمالي</td>
        </tr>`)

    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateOtherSellersKashf(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableId;
    //let table2Id;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableId = "kashef";
        // table2Id = "kashef2";
    }
    else {
        area.classList.add('hide');
        tableId = "kashefPrint";
        //table2Id = "kashef2Print";
    }
    area.innerHTML = ``
    area.innerHTML = `
                <h1 style="color : black ;"> ${listOfReports.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <table class='arabic' id=${tableId} style="width : 100%">
            <tr>
            <th style="border : 1px solid black ; text-align : center;background-color:lightpink ;">له أو عليه</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">المدفوع الاجمالي</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">المستحق الاجمالي</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">المدفوع للمبيعات</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">المستحق للمبيعات</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">المدفوع للمشتريات الاخرى</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">المستحق للمشتريات الاخرى</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاسم</th>
            </tr>
            </table>`
    let kashef = document.querySelector(`#${tableId}`);
    let listOfParteners = [];
    let mostahak = 0;
    let mostahakSales = 0;
    let mostahakOthersBuy = 0;
    let mostahakSalaries = 0;
    let mostahakMilk = 0;
    let paid = 0;
    let paidSales = 0;
    let paidOthersBuy = 0;
    let paidSalaries = 0;
    let paidMilk = 0;
    let TotalMostahak = 0;
    let totalPaid = 0;
    let specifiedDays = datesSpecifiedCalculation();
    let specifiedDays30 = datesSpecifiedCalculation30();
    for (let i = 0; i < otherBuyNames.length; i++) {
        if (!listOfParteners.includes(otherBuyNames[i].name)) {
            listOfParteners.push(otherBuyNames[i].name);
        }
    }
    for (let k = 0; k < listOfParteners.length; k++) {
        debugger;
        for (i = 0; i < milks.length; i++) {
            if (specifiedDays.includes(milks[i].date) && milks[i].seller == listOfParteners[k]) {
                mostahak = mostahak + parseFloat(milks[i].total) + parseFloat(milks[i].salary) + parseFloat(milks[i].addtions);
                paid = paid + parseFloat(milks[i].paid);
                mostahakMilk = mostahakMilk + parseFloat(milks[i].total) + parseFloat(milks[i].salary) + parseFloat(milks[i].addtions);
                paidMilk = paidMilk + parseFloat(milks[i].paid);
            }
        }
        for (let t = 0; t < sales.length; t++) {
            if (specifiedDays.includes(sales[t].date) && sales[t].name == listOfParteners[k]) {
                mostahak = mostahak - parseFloat(sales[t].total);
                paid = paid - parseFloat(sales[t].paidFactory);
                mostahakSales = mostahakSales - parseFloat(sales[t].total);
                paidSales = paidSales - parseFloat(sales[t].paidFactory);
            }
        }
        for (let t = 0; t < othersBuy.length; t++) {
            if (specifiedDays.includes(othersBuy[t].date) && othersBuy[t].name == listOfParteners[k]) {
                mostahak = mostahak + parseFloat(othersBuy[t].total);
                paid = paid + parseFloat(othersBuy[t].paid);
                mostahakOthersBuy = mostahakOthersBuy + parseFloat(othersBuy[t].total);
                paidOthersBuy = paidOthersBuy + parseFloat(othersBuy[t].paid);
            }
        }
        let salaryOfHalfDay = 0;
        let totalAddtions = 0;
        let specifiedDaysTransport = datesSpecifiedTransport();
        let type = '';
        for (let i = 0; i < employes.length; i++) {
            if (employes[i].name == listOfParteners[k]) {
                type = employes[i].type;
                break;
            }
        }
        if (type == "موظف") {
            for (j = 0; j < specifiedDays30.length; j++) {
                for (i = 0; i < salaries.length; i++) {
                    if (salaries[i].employee === listOfParteners[k] && salaries[i].date == specifiedDays30[j]) {
                        if (salaries[i].type == "موظف") {
                            paid = paid + parseFloat(salaries[i].paid);
                            totalAddtions = totalAddtions + parseFloat(salaries[i].addtions);
                            paidSalaries = paidSalaries + parseFloat(salaries[i].paid);
                            salaryOfHalfDay = parseFloat(salaries[i].salary) / 60;
                        }
                    }
                }
                mostahak = mostahak + parseFloat(salaryOfHalfDay);
                mostahakSalaries = mostahakSalaries + parseFloat(salaryOfHalfDay);
            }
        }
        else if (type == "مشال") {
            for (j = 0; j < specifiedDaysTransport.length; j++) {
                for (i = 0; i < salaries.length; i++) {
                    if (salaries[i].employee === listOfParteners[k] && salaries[i].date == specifiedDaysTransport[j]) {
                        if (salaries[i].type == "مشال") {
                            paid = paid + parseFloat(salaries[i].paid);
                            totalAddtions = totalAddtions + parseFloat(salaries[i].addtions);
                            paidSalaries = paidSalaries + parseFloat(salaries[i].paid);
                            salaryOfHalfDay = parseFloat(salaries[i].salary) / 14;
                        }
                    }
                }
                mostahak = mostahak + parseFloat(salaryOfHalfDay);
                mostahakSalaries = mostahakSalaries + parseFloat(salaryOfHalfDay);
            }
        }


        mostahak = mostahak + totalAddtions;
        mostahakSalaries = mostahakSalaries + totalAddtions;
        kashef.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color:lightpink ;">${(mostahak - paid).toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">${paid.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${mostahak.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${paidSales.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${mostahakSales.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${paidOthersBuy.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${mostahakOthersBuy.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${listOfParteners[k]}</td>
        </tr>`)
        totalPaid = totalPaid + paid;
        TotalMostahak = TotalMostahak + mostahak;
        paid = 0;
        mostahak = 0;
        paidMilk = 0;
        mostahakMilk = 0;
        paidSalaries = 0;
        mostahakSalaries = 0;
        paidOthersBuy = 0;
        mostahakOthersBuy = 0;
        paidSales = 0;
        mostahakSales = 0;
    }
    kashef.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${(TotalMostahak - totalPaid).toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${totalPaid.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${TotalMostahak.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue; " colspan="5">الاجمالي</td>
        </tr>`)

    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateBuyersKashf(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableId;
    //let table2Id;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableId = "kashef";
        // table2Id = "kashef2";
    }
    else {
        area.classList.add('hide');
        tableId = "kashefPrint";
        //table2Id = "kashef2Print";
    }
    area.innerHTML = ``
    area.innerHTML = `
                <h1 style="color : black ;"> ${listOfReports.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <table class='arabic' id=${tableId} style="width : 100%">
            <tr>
            <th style="border : 1px solid black ; text-align : center;background-color:lightpink ;">له أو عليه</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">المدفوع الاجمالي</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">المستحق الاجمالي</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">المدفوع للمشتريات الاخرى</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">المستحق للمشتريات الاخرى</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">المدفوع للمبيعات</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">المستحق للمبيعات</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاسم</th>
            </tr>
            </table>`
    let kashef = document.querySelector(`#${tableId}`);
    let listOfParteners = [];
    let mostahak = 0;
    let mostahakSales = 0;
    let mostahakOthersBuy = 0;
    let mostahakSalaries = 0;
    let mostahakMilk = 0;
    let paid = 0;
    let paidSales = 0;
    let paidOthersBuy = 0;
    let paidSalaries = 0;
    let paidMilk = 0;
    let TotalMostahak = 0;
    let totalPaid = 0;
    let specifiedDays = datesSpecifiedCalculation();
    let specifiedDays30 = datesSpecifiedCalculation30();
    for (let i = 0; i < buys.length; i++) {
        if (!listOfParteners.includes(buys[i].name)) {
            listOfParteners.push(buys[i].name);
        }
    }
    for (let k = 0; k < listOfParteners.length; k++) {
        debugger;
        for (i = 0; i < milks.length; i++) {
            if (specifiedDays.includes(milks[i].date) && milks[i].seller == listOfParteners[k]) {
                mostahak = mostahak + parseFloat(milks[i].total) + parseFloat(milks[i].salary) + parseFloat(milks[i].addtions);
                paid = paid + parseFloat(milks[i].paid);
                mostahakMilk = mostahakMilk + parseFloat(milks[i].total) + parseFloat(milks[i].salary) + parseFloat(milks[i].addtions);
                paidMilk = paidMilk + parseFloat(milks[i].paid);
            }
        }
        for (let t = 0; t < sales.length; t++) {
            if (specifiedDays.includes(sales[t].date) && sales[t].name == listOfParteners[k]) {
                mostahak = mostahak - parseFloat(sales[t].total);
                paid = paid - parseFloat(sales[t].paidFactory);
                mostahakSales = mostahakSales - parseFloat(sales[t].total);
                paidSales = paidSales - parseFloat(sales[t].paidFactory);
            }
        }
        for (let t = 0; t < othersBuy.length; t++) {
            if (specifiedDays.includes(othersBuy[t].date) && othersBuy[t].name == listOfParteners[k]) {
                mostahak = mostahak + parseFloat(othersBuy[t].total);
                paid = paid + parseFloat(othersBuy[t].paid);
                mostahakOthersBuy = mostahakOthersBuy + parseFloat(othersBuy[t].total);
                paidOthersBuy = paidOthersBuy + parseFloat(othersBuy[t].paid);
            }
        }
        let salaryOfHalfDay = 0;
        let totalAddtions = 0;
        let specifiedDaysTransport = datesSpecifiedTransport();
        let type = '';
        for (let i = 0; i < employes.length; i++) {
            if (employes[i].name == listOfParteners[k]) {
                type = employes[i].type;
                break;
            }
        }
        if (type == "موظف") {
            for (j = 0; j < specifiedDays30.length; j++) {
                for (i = 0; i < salaries.length; i++) {
                    if (salaries[i].employee === listOfParteners[k] && salaries[i].date == specifiedDays30[j]) {
                        if (salaries[i].type == "موظف") {
                            paid = paid + parseFloat(salaries[i].paid);
                            totalAddtions = totalAddtions + parseFloat(salaries[i].addtions);
                            paidSalaries = paidSalaries + parseFloat(salaries[i].paid);
                            salaryOfHalfDay = parseFloat(salaries[i].salary) / 60;
                        }
                    }
                }
                mostahak = mostahak + parseFloat(salaryOfHalfDay);
                mostahakSalaries = mostahakSalaries + parseFloat(salaryOfHalfDay);
            }
        }
        else if (type == "مشال") {
            for (j = 0; j < specifiedDaysTransport.length; j++) {
                for (i = 0; i < salaries.length; i++) {
                    if (salaries[i].employee === listOfParteners[k] && salaries[i].date == specifiedDaysTransport[j]) {
                        if (salaries[i].type == "مشال") {
                            paid = paid + parseFloat(salaries[i].paid);
                            totalAddtions = totalAddtions + parseFloat(salaries[i].addtions);
                            paidSalaries = paidSalaries + parseFloat(salaries[i].paid);
                            salaryOfHalfDay = parseFloat(salaries[i].salary) / 14;
                        }
                    }
                }
                mostahak = mostahak + parseFloat(salaryOfHalfDay);
                mostahakSalaries = mostahakSalaries + parseFloat(salaryOfHalfDay);
            }
        }


        mostahak = mostahak + totalAddtions;
        mostahakSalaries = mostahakSalaries + totalAddtions;
        kashef.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color:lightpink ;">${(mostahak - paid).toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">${paid.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${mostahak.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${paidOthersBuy.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${mostahakOthersBuy.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${paidSales.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${mostahakSales.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${listOfParteners[k]}</td>
        </tr>`)
        totalPaid = totalPaid + paid;
        TotalMostahak = TotalMostahak + mostahak;
        paid = 0;
        mostahak = 0;
        paidMilk = 0;
        mostahakMilk = 0;
        paidSalaries = 0;
        mostahakSalaries = 0;
        paidOthersBuy = 0;
        mostahakOthersBuy = 0;
        paidSales = 0;
        mostahakSales = 0;
    }
    kashef.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${(TotalMostahak - totalPaid).toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${totalPaid.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${TotalMostahak.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue; " colspan="5">الاجمالي</td>
        </tr>`)

    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateOtherExpensesKashf(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableId;
    //let table2Id;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableId = "kashef";
        // table2Id = "kashef2";
    }
    else {
        area.classList.add('hide');
        tableId = "kashefPrint";
        //table2Id = "kashef2Print";
    }

    area.innerHTML = ``
    area.innerHTML = `
                <h1 style="color : black ;"> ${listOfReports.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <table class='arabic' id=${tableId} style="width : 100%">
            <tr>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">اجمالي التكلفة</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">متوسط سعر الوحدة</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">الكمية</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">النوع</th>
            </tr>
            </table>`
    let kashef = document.querySelector(`#${tableId}`);
    let listOfParteners = [];
    let mostahak = 0;
    let amount = 0;
    let TotalMostahak = 0;
    let TotalMostahak2 = 0;
    let specifiedDays = datesSpecifiedCalculation();
    for (let i = 0; i < otherTypes.length; i++) {
        if (!listOfParteners.includes(otherTypes[i].name)) {
            listOfParteners.push(otherTypes[i].name);
        }
    }
    for (let k = 0; k < listOfParteners.length; k++) {
        for (i = 0; i < others.length; i++) {
            if (specifiedDays.includes(others[i].date) && others[i].type == listOfParteners[k] && others[i].addMasrof) {
               
                mostahak = mostahak + parseFloat(others[i].total);
                amount = amount + parseFloat(others[i].amount);
            }
        }
        if(amount>0){

            kashef.insertAdjacentHTML('beforeend', `
                <tr>
                <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${mostahak.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${(mostahak / amount).toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${amount.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${listOfParteners[k]}</td>
            </tr>`)
        }
        TotalMostahak = TotalMostahak + mostahak;
        amount = 0;
        mostahak = 0;
    }
    kashef.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${TotalMostahak.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue; " colspan="3">الاجمالي</td>
        </tr>
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;" colspan="4">مصرفات لا تخصم في ارباح الفترة</td>
        </tr>
        `)
    for (let k = 0; k < listOfParteners.length; k++) {
        for (i = 0; i < others.length; i++) {
            if (specifiedDays.includes(others[i].date) && others[i].type == listOfParteners[k] && !others[i].addMasrof) {
               
                mostahak = mostahak + parseFloat(others[i].total);
                amount = amount + parseFloat(others[i].amount);
            }
        }
        if(amount>0){

            kashef.insertAdjacentHTML('beforeend', `
                <tr>
                <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${mostahak.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${(mostahak / amount).toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${amount.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${listOfParteners[k]}</td>
            </tr>`)
        }
        TotalMostahak2 = TotalMostahak2 + mostahak;
        amount = 0;
        mostahak = 0;
    }
    kashef.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${TotalMostahak2.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue; " colspan="3">الاجمالي</td>
        </tr>
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue; " colspan="4">الاجمالي</td>
        </tr>
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;"colspan="4">${TotalMostahak2 + TotalMostahak}</td>
        </tr>
        
        `)

    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateOtherBuysAmountKashf(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableId;
    //let table2Id;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableId = "kashef";
        // table2Id = "kashef2";
    }
    else {
        area.classList.add('hide');
        tableId = "kashefPrint";
        //table2Id = "kashef2Print";
    }
    area.innerHTML = ``
    area.innerHTML = `
                <h1 style="color : black ;"> ${listOfReports.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <table class='arabic' id=${tableId} style="width : 100%">
            <tr>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">اجمالي التكلفة</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">متوسط سعر الوحدة</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">الكمية</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">النوع</th>
            </tr>
            </table>`
    let kashef = document.querySelector(`#${tableId}`);
    let listOfParteners = [];
    let mostahak = 0;
    let amount = 0;
    let paid = 0;
    let TotalMostahak = 0;
    let specifiedDays = datesSpecifiedCalculation();
    for (let i = 0; i < otherBuyTypes.length; i++) {
        if (!listOfParteners.includes(otherBuyTypes[i].name)) {
            listOfParteners.push(otherBuyTypes[i].name);
        }
    }
    for (let i = 0; i < products.length; i++) {
        if (!listOfParteners.includes(products[i].name)) {
            listOfParteners.push(products[i].name);
        }
    }
    for (let k = 0; k < listOfParteners.length; k++) {
        for (i = 0; i < othersBuy.length; i++) {
            if (specifiedDays.includes(othersBuy[i].date) && othersBuy[i].type == listOfParteners[k]) {
                mostahak = mostahak + parseFloat(othersBuy[i].total);
                amount = amount + parseFloat(othersBuy[i].amount);
                paid = paid + parseFloat(othersBuy[i].paid);
            }
        }
        if (amount != 0) {

            kashef.insertAdjacentHTML('beforeend', `
                <tr>
                <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${mostahak.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${mostahak.toFixed(2) / amount.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${amount.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${listOfParteners[k]}</td>
            </tr>`)
        }
        TotalMostahak = TotalMostahak + mostahak;
        amount = 0;
        mostahak = 0;
    }
    kashef.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ; " colspan="1">الباقي</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral; " colspan="1">المدفوع</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue; " colspan="2">الاجمالي</td>
        </tr>
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${TotalMostahak.toFixed(2) - paid.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${paid.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue;" colspan="2">${TotalMostahak.toFixed(2)}</td>
        </tr>
        
        `

    )

    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateSalesAmountKashf(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableId;
    //let table2Id;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableId = "kashef";
        // table2Id = "kashef2";
    }
    else {
        area.classList.add('hide');
        tableId = "kashefPrint";
        //table2Id = "kashef2Print";
    }
    area.innerHTML = ``
    area.innerHTML = `
                <h1 style="color : black ;"> ${listOfReports.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <table class='arabic' id=${tableId} style="width : 100%">
            <tr>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">اجمالي القيمة</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">متوسط سعر الوحدة</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">الوزن</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">الكمية</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">النوع</th>
            </tr>
            </table>`
    let kashef = document.querySelector(`#${tableId}`);
    let listOfParteners = [];
    let mostahak = 0;
    let amount = 0;
    let weight = 0;
    let paid = 0;
    let TotalMostahak = 0;
    let specifiedDays = datesSpecifiedCalculation();
    listOfParteners.push("دفع");
    listOfParteners.push("عليه");
    listOfParteners.push("لبن بقري");
    listOfParteners.push("لبن جاموسي");
    for (let i = 0; i < otherBuyTypes.length; i++) {
        if (!listOfParteners.includes(otherBuyTypes[i].name)) {
            listOfParteners.push(otherBuyTypes[i].name);
        }
    }
    for (let i = 0; i < products.length; i++) {
        if (!listOfParteners.includes(products[i].name)) {
            listOfParteners.push(products[i].name);
        }
    }
    for (let k = 0; k < listOfParteners.length; k++) {
        for (i = 0; i < sales.length; i++) {
            if (specifiedDays.includes(sales[i].date) && sales[i].type == listOfParteners[k]) {
                mostahak = mostahak + parseFloat(sales[i].total);
                amount = amount + parseFloat(sales[i].amount);
                if (sales[i].weight != "ــــــــ") {
                    weight = weight + parseFloat(sales[i].weight);
                }
                paid = paid + parseFloat(sales[i].paidFactory);
            }
        }
        let avgPrice = 0;
        if (weight > 0) {
            avgPrice = mostahak.toFixed(2) / weight.toFixed(2)
        }
        else {
            avgPrice = mostahak.toFixed(2) / amount.toFixed(2)
        }
        if (amount != 0) {

            kashef.insertAdjacentHTML('beforeend', `
                <tr>
                <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${mostahak.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${avgPrice}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${weight.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${amount.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${listOfParteners[k]}</td>
            </tr>`)
        }
        TotalMostahak = TotalMostahak + mostahak;
        amount = 0;
        weight = 0;
        mostahak = 0;
    }
    kashef.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ; " colspan="1">الباقي للمصنع</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral; " colspan="1">المحصل</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue; " colspan="3">الاجمالي</td>
        </tr>
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${TotalMostahak.toFixed(2) - paid.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${paid.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue;" colspan="3">${TotalMostahak.toFixed(2)}</td>
        </tr>
        
        `

    )

    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateProductionKashf(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableId;
    //let table2Id;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableId = "kashef";
        // table2Id = "kashef2";
    }
    else {
        area.classList.add('hide');
        tableId = "kashefPrint";
        //table2Id = "kashef2Print";
    }
    area.innerHTML = ``
    area.innerHTML = `
                <h1 style="color : black ;"> ${listOfReports.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <table class='arabic' id=${tableId} style="width : 100%">
            <tr>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">الكمية المنتجة خلال الفترة</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">الكمية المنتجة من لبن الفترة</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">النوع</th>
            </tr>
            </table>`
    let kashef = document.querySelector(`#${tableId}`);
    let listOfParteners = [];
    let amountBakary = 0;
    let amountGamos = 0;
    let amount = 0;
    let amountFromMilk = 0;
    let specifiedDays = datesSpecifiedCalculation();
    for (let i = 0; i < otherBuyTypes.length; i++) {
        if (!listOfParteners.includes(otherBuyTypes[i].name)) {
            listOfParteners.push(otherBuyTypes[i].name);
        }
    }
    for (let i = 0; i < products.length; i++) {
        if (!listOfParteners.includes(products[i].name)) {
            listOfParteners.push(products[i].name);
        }
    }
    for (let k = 0; k < listOfParteners.length; k++) {
        for (i = 0; i < productions.length; i++) {
            if (specifiedDays.includes(productions[i].date) && productions[i].type == listOfParteners[k]) {
                amountBakary = amountBakary + parseFloat(productions[i].amountBakary);
                amountGamos = amountGamos + parseFloat(productions[i].amountGamos);
                amount = amount + parseFloat(productions[i].amount);
            }
        }
        for (let i = 0; i < productions.length; i++) {
            debugger;
            if (specifiedDays.includes(productions[i].dateMilk) && productions[i].type == listOfParteners[k]) {
                amountFromMilk = amountFromMilk + parseFloat(productions[i].amount);
            }
        }
        kashef.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${amount.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${amountFromMilk.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${listOfParteners[k]}</td>
        </tr>`)
        amount = 0;
        amountFromMilk = 0;
    }
    kashef.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral; " colspan="1">كمية اللبن الجاموسي الداخل في الانتاج</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue; " colspan="1">كمية اللبن البقري الداخل في الانتاج</td>
        </tr>
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${amountGamos}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${amountBakary}</td>
        </tr>
        
        `

    )

    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateStoreKashf(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableId;
    //let table2Id;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableId = "kashef";
        // table2Id = "kashef2";
    }
    else {
        area.classList.add('hide');
        tableId = "kashefPrint";
        //table2Id = "kashef2Print";
    }
    area.innerHTML = ``
    area.innerHTML = `
                <h1 style="color : black ;"> ${listOfReports.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <table class='arabic' id=${tableId} style="width : 100%">
            <tr>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">الكمية المتبقية في المخزن</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">الكمية الخارجة</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">الكمية الداخلة</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">النوع</th>
            </tr>
            </table>
            `
    let kashef = document.querySelector(`#${tableId}`);
    let listOfParteners = [];
    let amountOut = 0;
    let amountIn = 0;
    let amountOutAll = 0;
    let amountInAll = 0;
    let specifiedDays = datesSpecifiedCalculation();
    let specifiedDays3 = datesSpecifiedCalculation3();
    listOfParteners.push('لبن جاموسي')
    listOfParteners.push('لبن بقري')
    for (let i = 0; i < otherBuyTypes.length; i++) {
        if (!listOfParteners.includes(otherBuyTypes[i].name) && otherBuyTypes[i].addToStoreAndSales) {
            listOfParteners.push(otherBuyTypes[i].name);
        }
    }
    for (let i = 0; i < products.length; i++) {
        if (!listOfParteners.includes(products[i].name)) {
            listOfParteners.push(products[i].name);
        }
    }
    for (let k = 0; k < listOfParteners.length; k++) {
        if (listOfParteners[k] == "لبن جاموسي") {
            for (let i = 0; i < milks.length; i++) {
                if (specifiedDays.includes(milks[i].date)) {
                    amountIn = amountIn + parseFloat(milks[i].amountGamos);
                }
                    amountInAll = amountInAll + parseFloat(milks[i].amountGamos);
            }
            for (let i = 0; i < productions.length; i++) {
                if (specifiedDays.includes(productions[i].date)) {
                    amountOut = amountOut + parseFloat(productions[i].amountGamos);
                }
               
                    amountOutAll = amountOutAll + parseFloat(productions[i].amountGamos);
                
            }
            for (let i = 0; i < sales.length; i++) {
                if (sales[i].type == "لبن جاموسي" && specifiedDays.includes(sales[i].date)) {
                    amountOut = amountOut + parseFloat(sales[i].amount);
                }
                if (sales[i].type == "لبن جاموسي")  {
                    amountOutAll = amountOutAll + parseFloat(sales[i].amount);
                }
                
            }
        }
        else if (listOfParteners[k] == "لبن بقري"){
            for (let i = 0; i < milks.length; i++) {
                if (specifiedDays.includes(milks[i].date) ) {
                    amountIn = amountIn + parseFloat(milks[i].amountBakary);
                } 
                    amountInAll = amountInAll + parseFloat(milks[i].amountBakary);
            }
            for (let i = 0; i < productions.length; i++) {
                if (specifiedDays.includes(productions[i].date)) {
                    amountOut = amountOut + parseFloat(productions[i].amountBakary);
                }

                    amountOutAll = amountOutAll + parseFloat(productions[i].amountBakary);
            }
            for (let i = 0; i < sales.length; i++) {
                if (sales[i].type == "لبن بقري" && specifiedDays.includes(sales[i].date)) {
                    amountOut = amountOut + parseFloat(sales[i].amount);
                }
                if (sales[i].type == "لبن بقري") {
                    amountOutAll = amountOutAll + parseFloat(sales[i].amount);
                }

            }
        }
        else {
            for (i = 0; i < productions.length; i++) {
                if (productions[i].type === listOfParteners[k] && specifiedDays.includes(productions[i].dateMilk)) {
                    amountIn = amountIn + parseFloat(productions[i].amount);
                }
                if (productions[i].type === listOfParteners[k] && specifiedDays3.includes(productions[i].dateMilk)) {
                    amountInAll = amountInAll + parseFloat(productions[i].amount);
                }
            }

            for (i = 0; i < othersBuy.length; i++) {
                if (othersBuy[i].type === listOfParteners[k] && specifiedDays.includes(othersBuy[i].date)) {
                    amountIn = amountIn + parseFloat(othersBuy[i].amount);
                }
                if (othersBuy[i].type === listOfParteners[k] && specifiedDays3.includes(othersBuy[i].date)) {
                    amountInAll = amountInAll + parseFloat(othersBuy[i].amount);
                }
            }
            for (i = 0; i < sales.length; i++) {
                if (sales[i].type === listOfParteners[k] && specifiedDays.includes(sales[i].date)) {
                    amountOut = amountOut + parseFloat(sales[i].amount);
                }
                if (sales[i].type === listOfParteners[k] && specifiedDays3.includes(sales[i].date)) {
                    amountOutAll = amountOutAll + parseFloat(sales[i].amount);
                }
            }
        }
        debugger;
        if (amountIn > 0 || amountOut > 0 || (amountInAll - amountOutAll) >0 ){

            kashef.insertAdjacentHTML('beforeend', `
                <tr>
                <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${amountInAll - amountOutAll}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${amountOut}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${amountIn}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${listOfParteners[k]}</td>
            </tr>`)
        }
        amountIn = 0;
        amountOut = 0;
        amountInAll = 0;
        amountOutAll = 0;
    }

    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateCreditorAndDebitsKashf(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableId;
    let table2Id;
    let table3Id;
    let table4Id;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableId = "kashef";
        table2Id = "kashef2";
        table3Id = "kashef3";
        table4Id = "kashef4";
    }
    else {
        area.classList.add('hide');
        tableId = "kashefPrint";
        table2Id = "kashef2Print";
        table3Id = "kashef3Print";
        table4Id = "kashef4Print";
    }
    area.innerHTML = ``
    area.innerHTML = `
                <h1 style="color : black ;"> ${listOfReports.value} في الفترة من ${fromDate} الى ${toDate}</h1>
                <h3 style="color : black ;"> كشف الدائنيين </h3>
        <table class='arabic' id=${tableId} style="width : 100%">
            <tr>
            <th style="border : 1px solid black ; text-align : center;background-color:lightslategray ;">له</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightskyblue ;">المدفوع الاجمالي</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightseagreen ;">المستحق الاجمالي</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightsalmon ;">المدفوع للبن</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightpink ;">المستحق للبن</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">المدفوع للمبيعات</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">المستحق للمبيعات</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">المدفوع للاجور</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">المستحق للاجور</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">المدفوع للمشتريات الاخرى</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">المستحق للمشتريات الاخرى</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاسم</th>
            </tr>
            </table>
            <h3 style="color : black ;"> كشف المدينيين </h3>
        <table class='arabic' id=${table2Id} style="width : 100%">
            <tr>
            <th style="border : 1px solid black ; text-align : center;background-color:lightslategray ;">عليه</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightskyblue ;">المدفوع الاجمالي</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightseagreen ;">المستحق الاجمالي</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightsalmon ;">المدفوع للبن</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightpink ;">المستحق للبن</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">المدفوع للمبيعات</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">المستحق للمبيعات</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">المدفوع للاجور</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">المستحق للاجور</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">المدفوع للمشتريات الاخرى</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">المستحق للمشتريات الاخرى</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاسم</th>
            </tr>
            </table>
            <h3 style="color : black ;"> كشف الصافي </h3>
        <table class='arabic' id=${table3Id} style="width : 100%">
            <tr>
            <th style="border : 1px solid black ; text-align : center;background-color:lightslategray ;">عليه</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightskyblue ;">المدفوع الاجمالي</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightseagreen ;">المستحق الاجمالي</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightsalmon ;">المدفوع للبن</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightpink ;">المستحق للبن</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">المدفوع للمبيعات</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">المستحق للمبيعات</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgray ;">المدفوع للاجور</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">المستحق للاجور</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">المدفوع للمشتريات الاخرى</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">المستحق للمشتريات الاخرى</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">الاسم</th>
            </tr>
            </table>
            <h3 style="color : black ;"> كشف الاجمالي</h3>
        <table class='arabic' id=${table4Id} style="width : 100%">
            <tr>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ; ">الفرق</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">عليه</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">له</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">المصنع</th>
            </tr>
            </table>
            
            `
    let kashef = document.querySelector(`#${tableId}`);
    let kashef2 = document.querySelector(`#${table2Id}`);
    let kashef3 = document.querySelector(`#${table3Id}`);
    let kashef4 = document.querySelector(`#${table4Id}`);
    let listOfParteners = [];
    let mostahak = 0;
    let mostahakSales = 0;
    let mostahakOthersBuy = 0;
    let mostahakSalaries = 0;
    let mostahakMilk = 0;
    let paid = 0;
    let paidSales = 0;
    let paidOthersBuy = 0;
    let paidSalaries = 0;
    let paidMilk = 0;
    let TotalMostahak = 0;
    let totalPaid = 0;
    let factoryCreditor = 0;
    let factoryDebit = 0;
    let specifiedDays = datesSpecifiedCalculation();
    let specifiedDays30 = datesSpecifiedCalculation30();
    for (let i = 0; i < otherBuyNames.length; i++) {
        if (!listOfParteners.includes(otherBuyNames[i].name)) {
            listOfParteners.push(otherBuyNames[i].name);
        }
    }
    for (let i = 0; i < buys.length; i++) {
        if (!listOfParteners.includes(buys[i].name)) {
            listOfParteners.push(buys[i].name);
        }
    }
    for (let i = 0; i < employes.length; i++) {
        if (!listOfParteners.includes(employes[i].name)) {
            listOfParteners.push(employes[i].name);
        }
    }
    for (let i = 0; i < sellers.length; i++) {
        if (!listOfParteners.includes(sellers[i].name)) {
            listOfParteners.push(sellers[i].name);
        }
    }
    for (let k = 0; k < listOfParteners.length; k++) {
        debugger;
        for (i = 0; i < milks.length; i++) {
            if (specifiedDays.includes(milks[i].date) && milks[i].seller == listOfParteners[k]) {
                mostahak = mostahak + parseFloat(milks[i].total) + parseFloat(milks[i].salary) + parseFloat(milks[i].addtions);
                paid = paid + parseFloat(milks[i].paid);
                mostahakMilk = mostahakMilk + parseFloat(milks[i].total) + parseFloat(milks[i].salary) + parseFloat(milks[i].addtions);
                paidMilk = paidMilk + parseFloat(milks[i].paid);
            }
        }
        for (let t = 0; t < sales.length; t++) {
            if (specifiedDays.includes(sales[t].date) && sales[t].name == listOfParteners[k]) {
                mostahak = mostahak - parseFloat(sales[t].total);
                paid = paid - parseFloat(sales[t].paidFactory);
                mostahakSales = mostahakSales - parseFloat(sales[t].total);
                paidSales = paidSales - parseFloat(sales[t].paidFactory);
            }
        }
        for (let t = 0; t < othersBuy.length; t++) {
            if (specifiedDays.includes(othersBuy[t].date) && othersBuy[t].name == listOfParteners[k]) {
                mostahak = mostahak + parseFloat(othersBuy[t].total);
                paid = paid + parseFloat(othersBuy[t].paid);
                mostahakOthersBuy = mostahakOthersBuy + parseFloat(othersBuy[t].total);
                paidOthersBuy = paidOthersBuy + parseFloat(othersBuy[t].paid);
            }
        }
        let salaryOfHalfDay = 0;
        let totalAddtions = 0;
        let specifiedDaysTransport = datesSpecifiedTransport();
        let type = '';
        for (let i = 0; i < employes.length; i++) {
            if (employes[i].name == listOfParteners[k]) {
                type = employes[i].type;
                break;
            }
        }
        if (type == "موظف") {
            for (j = 0; j < specifiedDays30.length; j++) {
                for (i = 0; i < salaries.length; i++) {
                    if (salaries[i].employee === listOfParteners[k] && salaries[i].date == specifiedDays30[j]) {
                        if (salaries[i].type == "موظف") {
                            paid = paid + parseFloat(salaries[i].paid);
                            totalAddtions = totalAddtions + parseFloat(salaries[i].addtions);
                            paidSalaries = paidSalaries + parseFloat(salaries[i].paid);
                            salaryOfHalfDay = parseFloat(salaries[i].salary) / 60;
                        }
                    }
                }
                mostahak = mostahak + parseFloat(salaryOfHalfDay);
                mostahakSalaries = mostahakSalaries + parseFloat(salaryOfHalfDay);
            }
        }
        else if (type == "مشال") {
            for (j = 0; j < specifiedDaysTransport.length; j++) {
                for (i = 0; i < salaries.length; i++) {
                    if (salaries[i].employee === listOfParteners[k] && salaries[i].date == specifiedDaysTransport[j]) {
                        if (salaries[i].type == "مشال") {
                            paid = paid + parseFloat(salaries[i].paid);
                            totalAddtions = totalAddtions + parseFloat(salaries[i].addtions);
                            paidSalaries = paidSalaries + parseFloat(salaries[i].paid);
                            salaryOfHalfDay = parseFloat(salaries[i].salary) / 14;
                        }
                    }
                }
                mostahak = mostahak + parseFloat(salaryOfHalfDay);
                mostahakSalaries = mostahakSalaries + parseFloat(salaryOfHalfDay);
            }
        }


        mostahak = mostahak + totalAddtions;
        mostahakSalaries = mostahakSalaries + totalAddtions;
        if (mostahak > paid) {
            factoryDebit = factoryDebit + mostahak - paid;
            kashef.insertAdjacentHTML('beforeend', `
                <tr>
                <td style="border : 1px solid black ; text-align : center;background-color:lightslategray ;">${(mostahak - paid).toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightskyblue ;">${paid.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightseagreen ;">${mostahak.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightsalmon ;">${paidMilk.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightpink ;">${mostahakMilk.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">${paidSales.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${mostahakSales.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${paidSalaries.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${mostahakSalaries.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${paidOthersBuy.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${mostahakOthersBuy.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${listOfParteners[k]}</td>
            </tr>`)
        }
        if (mostahak < paid) {
            factoryCreditor = factoryCreditor + paid - mostahak;
            kashef2.insertAdjacentHTML('beforeend', `
                <tr>
                <td style="border : 1px solid black ; text-align : center;background-color:lightslategray ;">${(mostahak - paid).toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightskyblue ;">${paid.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightseagreen ;">${mostahak.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightsalmon ;">${paidMilk.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightpink ;">${mostahakMilk.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">${paidSales.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${mostahakSales.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${paidSalaries.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${mostahakSalaries.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${paidOthersBuy.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${mostahakOthersBuy.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${listOfParteners[k]}</td>
            </tr>`)
        }
        if (mostahak.toFixed(2) == paid.toFixed(2)) {
            kashef3.insertAdjacentHTML('beforeend', `
                <tr>
                <td style="border : 1px solid black ; text-align : center;background-color:lightslategray ;">${(mostahak - paid).toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightskyblue ;">${paid.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightseagreen ;">${mostahak.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightsalmon ;">${paidMilk.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightpink ;">${mostahakMilk.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">${paidSales.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightgreen ;">${mostahakSales.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightgray ;">${paidSalaries.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${mostahakSalaries.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${paidOthersBuy.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${mostahakOthersBuy.toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${listOfParteners[k]}</td>
            </tr>`)
        }
        totalPaid = totalPaid + paid;
        TotalMostahak = TotalMostahak + mostahak;
        paid = 0;
        mostahak = 0;
        paidMilk = 0;
        mostahakMilk = 0;
        paidSalaries = 0;
        mostahakSalaries = 0;
        paidOthersBuy = 0;
        mostahakOthersBuy = 0;
        paidSales = 0;
        mostahakSales = 0;
    }
    kashef4.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${(totalPaid - TotalMostahak).toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${factoryDebit.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${factoryCreditor.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue; ">المصنع</td>
        </tr>`)

    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateProfit(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableId;
    let table2Id;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableId = "kashef";
        table2Id = "kashef2";
        table3Id = "kashef3";
    }
    else {
        area.classList.add('hide');
        tableId = "kashefPrint";
        table2Id = "kashef2Print";
        table3Id = "kashef3Print";
    }
    area.innerHTML = ``
    area.innerHTML = `
                <h1 style="color : black ;"> ${listOfReports.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <table class='arabic' id=${tableId} style="width : 100%">
            <tr>
            <th style="border : 1px solid black ; text-align : center;background-color: lightblue;">اجمالي الصرف</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">اجمالي المصرفات الاخري</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">اجمالي الاجور</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">اجمالي المشتريات الاخرى</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">اجمالي البن</th>
            </tr>
            </table>
                 <h3>اللبن المباع</h3>
        <table class='arabic' id=${table3Id} style="width : 100%">
              <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">الاجمالي</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">قيمة الوحدة</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">الكمية</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">اللبن</th>
            </table>
            <h3>الكميات المنتجة من لبن الفترة</h3>
        <table class='arabic' id=${table2Id} style="width : 100%">
              <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">الاجمالي</th>
            <th style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">قيمة الوحدة</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">الكمية</th>
            <th style="border : 1px solid black ; text-align : center;background-color: lightcoral;">المنتج</th>
            </table>
            `
    let totalMilk1 = 0;
    let totalBuyGamos = 0;
    let totalBuyGamosMoney = 0;
    let totalBuyBakary = 0;
    let totalBuyBakaryMoney = 0;
    let specifiedDays30 = datesSpecifiedCalculation30();
    let specifiedDays = datesSpecifiedCalculation();
    let specifiedDays3 = datesSpecifiedCalculation3();
    for (i = 0; i < milks.length; i++) {
        if (specifiedDays.includes(milks[i].date)) {
            totalMilk1 = totalMilk1 + parseFloat(milks[i].total)+parseFloat(milks[i].addtions)+parseFloat(milks[i].salary);
        }
    }
    let totalSalary1 = 0;
    let totalAddtions = 0;
    let salaryOfHalfDay = 0;
    let specifiedDaysTransport = datesSpecifiedTransport();
    for (let z = 0; z < employes.length; z++) {
        if (employes[z].type == "موظف") {
            for (j = 0; j < specifiedDays30.length; j++) {
                for (i = 0; i < salaries.length; i++) {
                    if (salaries[i].date == specifiedDays30[j] && salaries[i].employee == employes[z].name) {
                        if (salaries[i].type == "موظف") {
                            totalAddtions = totalAddtions + parseFloat(salaries[i].addtions);
                            salaryOfHalfDay = parseFloat(salaries[i].salary) / 60;
                        }
                    }
                }
                totalSalary1 = totalSalary1 + parseFloat(salaryOfHalfDay);
            }
        }
        else if (employes[z].type == "مشال") {
            for (j = 0; j < specifiedDaysTransport.length; j++) {
                for (i = 0; i < salaries.length; i++) {
                    if (salaries[i].date == specifiedDaysTransport[j] && salaries[i].employee == employes[z].name) {
                        if (salaries[i].type == "مشال") {
                            totalAddtions = totalAddtions + parseFloat(salaries[i].addtions);
                            salaryOfHalfDay = parseFloat(salaries[i].salary) / 14;
                        }
                    }
                }
                totalSalary1 = totalSalary1 + parseFloat(salaryOfHalfDay);
            }
        }
    }
    totalSalary1 = totalSalary1 + totalAddtions;
    let totalOther1 = 0;
    for (i = 0; i < others.length; i++) {
        if (others[i].addMasrof && specifiedDays.includes(others[i].date)) {
            totalOther1 = totalOther1 + parseFloat(others[i].total);
        }
    }
    let totalOtherBuy1 = 0;
    for (i = 0; i < othersBuy.length; i++) {
        if (specifiedDays.includes(othersBuy[i].date)) {
            totalOtherBuy1 = totalOtherBuy1 + parseFloat(othersBuy[i].total);
        }
    }
    for (i = 0; i < sales.length; i++) {
        if (specifiedDays.includes(sales[i].date)) {
            if (sales[i].type=="لبن جاموسي"){
                totalBuyGamos = totalBuyGamos + parseFloat(sales[i].amount);
                totalBuyGamosMoney = totalBuyGamosMoney + parseFloat(sales[i].total);
            }
            else if (sales[i].type=="لبن بقري"){
                totalBuyBakary = totalBuyBakary + parseFloat(sales[i].amount);
                totalBuyBakaryMoney = totalBuyBakaryMoney + parseFloat(sales[i].total);
            }
        }
    }
    let kashef = document.querySelector(`#${tableId}`);
    let kashef2 = document.querySelector(`#${table2Id}`);
    let kashef3 = document.querySelector(`#${table3Id}`);
    let out = (totalMilk1 + totalSalary1 + totalOther1 + totalOtherBuy1).toFixed(2);
    kashef.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgrey ;">${out}</td>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${totalOther1.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${totalSalary1.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${totalOtherBuy1.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${totalMilk1.toFixed(2)}</td>
        </tr>`)
    let listOfParteners = [];
    let amountBakary = 0;
    let amountGamos = 0;
    let amount = 0;
    let amountFromMilk = 0;
    let amountSales=0;
    let totalPriceSales=0;
    let totalIn = 0;
    for (let i = 0; i < products.length; i++) {
        if (!listOfParteners.includes(products[i].name)) {
            listOfParteners.push(products[i].name);
        }
    }
    for (let k = 0; k < listOfParteners.length; k++) {
        for (let i = 0; i < productions.length; i++) {
            debugger;
            if (specifiedDays.includes(productions[i].dateMilk) && productions[i].type == listOfParteners[k]) {
                amountFromMilk = amountFromMilk + parseFloat(productions[i].amount);
            }
            else if (specifiedDays.includes(productions[i].date) && productions[i].type == allNames.value) {
                amount = amount + parseFloat(productions[i].amount);
            }
        }
        for (let i = 0; i < sales.length; i++) {
            if (specifiedDays.includes(sales[i].date) && sales[i].type == listOfParteners[k] && listOfParteners[k] == "رومى كبير") {
                amountSales = amountSales + parseFloat(sales[i].weight);
                totalPriceSales = totalPriceSales + parseFloat(sales[i].total);
            }
            else if (specifiedDays.includes(sales[i].date) && sales[i].type == listOfParteners[k] && listOfParteners[k] == "رومى صغير") {

                amountSales = amountSales + parseFloat(sales[i].weight);
                totalPriceSales = totalPriceSales + parseFloat(sales[i].total);
            }
            else if (specifiedDays.includes(sales[i].date) && sales[i].type == listOfParteners[k]) {

                amountSales = amountSales + parseFloat(sales[i].amount);
                totalPriceSales = totalPriceSales + parseFloat(sales[i].total);
            }
        }
        debugger;
        let price = 0;
        if (totalPriceSales <= 0) {
            price = parseFloat(document.querySelector(`#product${k}`).value);
        }
        else {
            price = totalPriceSales / amountSales;
        }
        if (listOfParteners[k]=="رومى كبير"){
            let total = price * amountFromMilk.toFixed(2) * 14 ;
            totalIn = totalIn + price * amountFromMilk.toFixed(2) * 14 ;
            if (amountFromMilk>0){
                kashef2.insertAdjacentHTML('beforeend', `
                    <tr>
                    <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${total}</td>
                    <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${price}</td>
                    <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${amountFromMilk.toFixed(2)*14}</td>
                    <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${listOfParteners[k]}</td>
                </tr>`)
            }
        }
        else if (listOfParteners[k]=="رومى صغير"){
            let total = price * amountFromMilk.toFixed(2) * 2;
            totalIn = totalIn + price * amountFromMilk.toFixed(2) * 2;
            if (amountFromMilk > 0) {
                kashef2.insertAdjacentHTML('beforeend', `
                    <tr>
                    <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${total}</td>
                    <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${price}</td>
                    <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${amountFromMilk.toFixed(2)*2}</td>
                    <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${listOfParteners[k]}</td>
                </tr>`)
            }
        }
        else {
            let total = price * amountFromMilk.toFixed(2);
            totalIn = totalIn + price * amountFromMilk ;
            if (amountFromMilk > 0) {
                kashef2.insertAdjacentHTML('beforeend', `
                    <tr>
                    <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${total}</td>
                    <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${price}</td>
                    <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${amountFromMilk.toFixed(2)}</td>
                    <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">${listOfParteners[k]}</td>
                </tr>`)
            }
        }
        amount = 0;
        amountFromMilk = 0;
        amountSales=0;
        totalPriceSales=0;
    }
    kashef2.insertAdjacentHTML('beforeend', `
                <tr>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${totalIn + totalBuyBakaryMoney + totalBuyGamosMoney}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightblue;" colspan="3"> اجمالي قيمة المنتجات واللبن والمباع</td>
            </tr>`)
    kashef2.insertAdjacentHTML('beforeend', `
                <tr>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;" >${(totalIn + totalBuyBakaryMoney + totalBuyGamosMoney - out).toFixed(2)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightblue;" colspan="3">اجمالي الربح</td>
            </tr>`)
    kashef3.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${totalBuyBakaryMoney.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${(totalBuyBakaryMoney / totalBuyBakary).toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${totalBuyBakary.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">اللبن البقري</td>
        </tr>`)
    kashef3.insertAdjacentHTML('beforeend', `
            <tr>
            <td style="border : 1px solid black ; text-align : center;background-color:lightgoldenrodyellow ;">${totalBuyGamosMoney.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcyan ;">${(totalBuyGamosMoney / totalBuyGamos).toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${totalBuyGamos.toFixed(2)}</td>
            <td style="border : 1px solid black ; text-align : center;background-color: lightblue;">اللبن الجاموسي</td>
        </tr>`)
    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function calculateProfit2(area) {
    debugger;
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    let toDate = toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value;
    let tableId;
    let table2Id;
    if (area.id == 'viewArea') {
        area.classList.add('hide');
        area.classList.remove('hide');
        tableId = "kashef";
        table2Id = "kashef2";
    }
    else {
        area.classList.add('hide');
        tableId = "kashefPrint";
        table2Id = "kashef2Print";
    }
    area.innerHTML = ``
    area.innerHTML = `
                <h1 style="color : black ;"> ${listOfReports.value} في الفترة من ${fromDate} الى ${toDate}</h1>
        <table class='arabic' id=${tableId} style="width : 100%">
          
            </table>
        <table class='arabic' id=${table2Id} style="width : 100%">
            </table>
            `
    let totalMilk1 = 0;
    let specifiedDays30 = datesSpecifiedCalculation30();
    let specifiedDays = datesSpecifiedCalculation();
    let specifiedDaysStart = datesSpecifiedCalculation32();
    let specifiedDaysEnd = datesSpecifiedCalculation3();
    for (i = 0; i < milks.length; i++) {
        if (specifiedDays.includes(milks[i].date)) {
            totalMilk1 = totalMilk1 + parseFloat(milks[i].total) + parseFloat(milks[i].addtions) + parseFloat(milks[i].salary);
        }
    }
    let totalSalary1 = 0;
    let totalAddtions = 0;
    let salaryOfHalfDay = 0;
    let specifiedDaysTransport = datesSpecifiedTransport();
    for (let z = 0; z < employes.length; z++) {
        if (employes[z].type == "موظف") {
            for (j = 0; j < specifiedDays30.length; j++) {
                for (i = 0; i < salaries.length; i++) {
                    if (salaries[i].date == specifiedDays30[j] && salaries[i].employee == employes[z].name) {
                        if (salaries[i].type == "موظف") {
                            totalAddtions = totalAddtions + parseFloat(salaries[i].addtions);
                            salaryOfHalfDay = parseFloat(salaries[i].salary) / 60;
                        }
                    }
                }
                totalSalary1 = totalSalary1 + parseFloat(salaryOfHalfDay);
            }
        }
        else if (employes[z].type == "مشال") {
            for (j = 0; j < specifiedDaysTransport.length; j++) {
                for (i = 0; i < salaries.length; i++) {
                    if (salaries[i].date == specifiedDaysTransport[j] && salaries[i].employee == employes[z].name) {
                        if (salaries[i].type == "مشال") {
                            totalAddtions = totalAddtions + parseFloat(salaries[i].addtions);
                            salaryOfHalfDay = parseFloat(salaries[i].salary) / 14;
                        }
                    }
                }
                totalSalary1 = totalSalary1 + parseFloat(salaryOfHalfDay);
            }
        }
    }
    totalSalary1 = totalSalary1 + totalAddtions;
    let totalOther1 = 0;
    for (i = 0; i < others.length; i++) {
        if (others[i].addMasrof && specifiedDays.includes(others[i].date)) {
            totalOther1 = totalOther1 + parseFloat(others[i].total);
        }
    }
    let totalOtherBuy1 = 0;
    for (i = 0; i < othersBuy.length; i++) {
        if (specifiedDays.includes(othersBuy[i].date)) {
            totalOtherBuy1 = totalOtherBuy1 + parseFloat(othersBuy[i].total);
        }
    }
    let totalsales1 = 0;
    for (i = 0; i < sales.length; i++) {
        if (specifiedDays.includes(sales[i].date)) {
            totalsales1 = totalsales1 + parseFloat(sales[i].total);
        }
    }
    let kashef = document.querySelector(`#${tableId}`);
    let kashef2 = document.querySelector(`#${table2Id}`);
    let out = (totalMilk1 + totalSalary1 + totalOther1 + totalOtherBuy1).toFixed(2);
    let listOfParteners = [];
    let amountBakary = 0;
    let amountGamos = 0;
    let amount = 0;
    let amountFromMilk = 0;
    let amountFromMilkEnd = 0;
    let amountSales = 0;
    let totalPriceSales = 0;
    let totalIn = 0;
    let totalStoreValueInStart = 0;
    let totalStoreValueInEnd = 0;
    let amountInStart = 0;
    let amountInEnd = 0;
    let amountOutStart = 0;
    let amountOutEnd = 0;
    for (let i = 0; i < products.length; i++) {
        if (!listOfParteners.includes(products[i].name)) {
            listOfParteners.push(products[i].name);
        }
    }
    for (let k = 0; k < listOfParteners.length; k++) {
        for (i = 0; i < productions.length; i++) {
            if (productions[i].type === listOfParteners[k] && specifiedDaysStart.includes(productions[i].dateMilk)) {
                amountInStart = amountInStart + parseFloat(productions[i].amount);
            }
            if (productions[i].type === listOfParteners[k] && specifiedDaysEnd.includes(productions[i].dateMilk)) {
                amountInEnd = amountInEnd + parseFloat(productions[i].amount);
            }
        }

        for (i = 0; i < othersBuy.length; i++) {
            if (othersBuy[i].type === listOfParteners[k] && specifiedDaysStart.includes(othersBuy[i].date)) {
                amountInStart = amountInStart + parseFloat(othersBuy[i].amount);
            }
            if (othersBuy[i].type === listOfParteners[k] && specifiedDaysEnd.includes(othersBuy[i].date)) {
                amountInEnd = amountInEnd + parseFloat(othersBuy[i].amount);
            }
        }
        for (i = 0; i < sales.length; i++) {
            if (sales[i].type === listOfParteners[k] && specifiedDaysStart.includes(sales[i].date)) {
                amountOutStart = amountOutStart + parseFloat(sales[i].amount);
            }
            if (sales[i].type === listOfParteners[k] && specifiedDaysEnd.includes(sales[i].date)) {
                amountOutEnd = amountOutEnd + parseFloat(sales[i].amount);
            }
        }
        for (let i = 0; i < sales.length; i++) {
            if (specifiedDays.includes(sales[i].date) && sales[i].type == listOfParteners[k] && listOfParteners[k] == "رومى كبير" ) {
                amountSales = amountSales + parseFloat(sales[i].weight);
                totalPriceSales = totalPriceSales + parseFloat(sales[i].total);
            }
            else if (specifiedDays.includes(sales[i].date) && sales[i].type == listOfParteners[k] && listOfParteners[k] == "رومى صغير" ) {
                
                amountSales = amountSales + parseFloat(sales[i].weight);
                totalPriceSales = totalPriceSales + parseFloat(sales[i].total);
            }
            else if (specifiedDays.includes(sales[i].date) && sales[i].type == listOfParteners[k]) {
                
                amountSales = amountSales + parseFloat(sales[i].amount);
                totalPriceSales = totalPriceSales + parseFloat(sales[i].total);
            }
        }
        debugger;
        let price = 0;
        if (totalPriceSales <= 0) {
            price = parseFloat(document.querySelector(`#product${k}`).value);
        }
        else {
            price =  totalPriceSales / amountSales;
        }
        if (listOfParteners[k] == "رومى كبير") {
            totalStoreValueInStart = totalStoreValueInStart + price * (amountInStart-amountOutStart).toFixed(2) * 14;
            totalStoreValueInEnd = totalStoreValueInEnd + price * (amountInEnd-amountOutEnd).toFixed(2) * 14;
        }
        else if (listOfParteners[k] == "رومى صغير") {
            totalStoreValueInStart = totalStoreValueInStart + price * (amountInStart - amountOutStart).toFixed(2) * 2;
            totalStoreValueInEnd = totalStoreValueInEnd + price * (amountInEnd - amountOutEnd).toFixed(2) * 2;
        }
        else {
            totalStoreValueInStart = totalStoreValueInStart + price * (amountInStart - amountOutStart);
            totalStoreValueInEnd = totalStoreValueInEnd + price * (amountInEnd - amountOutEnd);
        }
        amountInStart=0;
        amountOutStart=0;
        amountInEnd=0;
        amountOutEnd=0;
        amountFromMilk = 0;
        amountSales =0 ;
        totalPriceSales = 0 ;
    }
    kashef2.insertAdjacentHTML('beforeend', `
                <tr>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;">${parseInt(totalsales1)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightblue;" colspan="3">اجمالي قيمة المبيعات في الفترة</td>
            </tr>`)
    kashef2.insertAdjacentHTML('beforeend', `
                <tr>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;" >${parseInt(totalStoreValueInEnd)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightblue;" colspan="3">قيمة المنتجات المتبقية في نهاية الفترة</td>
            </tr>`)
    kashef2.insertAdjacentHTML('beforeend', `
                <tr>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;" >${parseInt(totalMilk1)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightblue;" colspan="3">قيمة مشتريات اللبن خلال الفترة</td>
            </tr>`)
    kashef2.insertAdjacentHTML('beforeend', `
                <tr>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;" >${parseInt(totalOtherBuy1)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightblue;" colspan="3">قيمة المشتريات الاخرى</td>
            </tr>`)
    kashef2.insertAdjacentHTML('beforeend', `
                <tr>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;" >${parseInt(totalStoreValueInStart)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightblue;" colspan="3">قيمة المنتجات المتبقية في بداية الفترة</td>
            </tr>`)
    kashef2.insertAdjacentHTML('beforeend', `
                <tr>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;" >${parseInt(totalsales1 + totalStoreValueInEnd - totalMilk1 - totalOtherBuy1 - totalStoreValueInStart)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightblue;" colspan="3">مجمل الربح</td>
            </tr>`)
    kashef2.insertAdjacentHTML('beforeend', `
                <tr>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;" >${parseInt(totalSalary1)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightblue;" colspan="3">قيمة الاجور</td>
            </tr>`)
    kashef2.insertAdjacentHTML('beforeend', `
                <tr>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;" >${parseInt(totalOther1)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightblue;" colspan="3">قيمة المصروفات الاخرى</td>
            </tr>`)
    kashef2.insertAdjacentHTML('beforeend', `
                <tr>
                <td style="border : 1px solid black ; text-align : center;background-color: lightcoral;" >${parseInt(totalsales1 + totalStoreValueInEnd - totalMilk1 - totalOtherBuy1 - totalStoreValueInStart - totalSalary1 - totalOther1)}</td>
                <td style="border : 1px solid black ; text-align : center;background-color: lightblue;" colspan="3"></td>
            </tr>`)
    if (area.id == 'viewArea') {
        $('#viewArea').persianNum();

    }
    else {
        $('#DivIdToPrint').persianNum();

        printDiv();
    }
}
function printInformation() {
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    //putItemsToSalariesForCalcSalary(fromDate);
    if (allTypes.value == "اللبن") {
        calculateMilkInfoForOne(printArea);
    }
    else if (allTypes.value == "الاجور") {
        calculateSalariesInfoForOne(printArea);
    }
    else if (allTypes.value == "المصروفات الاخري") {
        calculateOthersInfoForOne(printArea);
    }
    else if (allTypes.value == "الملاك") {
        calculateOwnersInfoForOne(printArea);
    }
    else if (allTypes.value == "نوع المشتريات الاخرى") {
        calculateOthersBuyTypesInfoForOne(printArea);
    }
    else if (allTypes.value == "المشتريات الاخري") {
        calculateOthersBuyInfoForOne(printArea);
    }
    else if (allTypes.value == "الانتاج") {
       calculateProductionInfoForOne(printArea);
    }
    else if (allTypes.value == "نوع المبيعات") {
        calculateSalesTypesInfoForOne(printArea);
    }
    else if (allTypes.value == "المبيعات") {
       calculateSalesInfoForOne(printArea);
    }
    else if (allTypes.value == "الكل") {
        calculateAllInfoForOne(printArea);
    }
}
function viewInformation(){
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    //putItemsToSalariesForCalcSalary(fromDate);
    viewArea.classList.add('hide');
    productionsPrices.classList.add('hide');

    if(allTypes.value == "اللبن"){
        calculateMilkInfoForOne(viewArea);
    }
    else if(allTypes.value == "الاجور"){
        calculateSalariesInfoForOne(viewArea);
    }
    else if(allTypes.value == "المصروفات الاخري"){
        calculateOthersInfoForOne(viewArea);
    }
    else if (allTypes.value == "الملاك") {
        calculateOwnersInfoForOne(viewArea);
    }
    else if(allTypes.value == "نوع المشتريات الاخرى"){
        calculateOthersBuyTypesInfoForOne(viewArea);
    }
    else if(allTypes.value == "المشتريات الاخري"){
        calculateOthersBuyInfoForOne(viewArea)
    }
    else if (allTypes.value == "الانتاج") {
        calculateProductionInfoForOne(viewArea)
    }
    else if(allTypes.value == "نوع المبيعات"){
        calculateSalesTypesInfoForOne(viewArea)
    }
    else if(allTypes.value == "المبيعات"){
      calculateSalesInfoForOne(viewArea)
    }
    else if(allTypes.value == "الكل"){
       calculateAllInfoForOne(viewArea)
    }
}
function reportViewInformation(){
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    //putItemsToSalariesForCalcSalary(fromDate);
    viewArea.classList.add('hide');
    productionsPrices.classList.add('hide');

    if (listOfReports.value == "كشف حساب كميات اللبن") {
        calculateMilkAmounts(viewArea);
    }
    else if (listOfReports.value == "كشف حساب الارباح") {
        calculateProfit(viewArea)
    }
    else if (listOfReports.value == "كشف حساب ارباح المبيعات") {
        calculateProfit2(viewArea)
    }
    else if (listOfReports.value == "كشف حساب موردي اللبن"){
          calculateMilkSuppliersKashf(viewArea);
    }
    else if (listOfReports.value == "كشف حساب موردي اللبن الاجمالي"){
calculateMilkSuppliersTotallyKashf(viewArea);
    }
    else if (listOfReports.value == "كشف حساب موردي اللبن التفصيلي"){
     calculateMilkSuppliersDetailsKashf(viewArea);
    }
    else if (listOfReports.value == "كشف حساب الموظفين والمشال"){
      calculateSalariesKashf(viewArea);
    }
    else if (listOfReports.value == "كشف حساب البائعين الاخريين"){
     calculateOtherSellersKashf(viewArea);
    }
    else if (listOfReports.value == "كشف حساب للمشتريين"){
      calculateBuyersKashf(viewArea);
    }
    else if (listOfReports.value == "كشف المصروفات الاخري"){
       calculateOtherExpensesKashf(viewArea);
    }
    else if (listOfReports.value == "كشف كميات المشتريات الاخرى"){
        calculateOtherBuysAmountKashf(viewArea);
    }
    else if (listOfReports.value == "كشف كميات المبيعات"){
calculateSalesAmountKashf(viewArea);
    }
    else if (listOfReports.value == "كشف الانتاج"){
       calculateProductionKashf(viewArea);
    }
    else if (listOfReports.value == "كشف المخزن"){
        calculateStoreKashf(viewArea);
        }
    else if (listOfReports.value == "كشف الدائن والمدين") {
        calculateCreditorAndDebitsKashf(viewArea);
    }
    }
function reportPrintInformation(){
    let fromDate = fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value;
    //putItemsToSalariesForCalcSalary(fromDate);
    if (listOfReports.value == "كشف حساب كميات اللبن") {
        calculateMilkAmounts(printArea);
    }
    else if (listOfReports.value == "كشف حساب الارباح") {
        calculateProfit(printArea);
    }
    else if (listOfReports.value == "كشف حساب ارباح المبيعات") {
        calculateProfit2(printArea);
    }
    else if (listOfReports.value == "كشف حساب موردي اللبن") {
        calculateMilkSuppliersKashf(printArea);;
    }
    else if (listOfReports.value == "كشف حساب موردي اللبن الاجمالي") {
        calculateMilkSuppliersTotallyKashf(printArea);;
    }
    else if (listOfReports.value == "كشف حساب موردي اللبن التفصيلي") {
        calculateMilkSuppliersDetailsKashf(printArea);;
    }
    else if (listOfReports.value == "كشف حساب الموظفين والمشال") {
        calculateSalariesKashf(printArea);;
    }
    else if (listOfReports.value == "كشف حساب البائعين الاخريين") {
        calculateOtherSellersKashf(printArea);;
    }
    else if (listOfReports.value == "كشف حساب للمشتريين") {
        calculateBuyersKashf(printArea);;
    }
    else if (listOfReports.value == "كشف المصروفات الاخري") {
        calculateOtherExpensesKashf(printArea);;
    }
    else if (listOfReports.value == "كشف كميات المشتريات الاخرى") {
        calculateOtherBuysAmountKashf(printArea);;
    }
    else if (listOfReports.value == "كشف كميات المبيعات") {
        calculateSalesAmountKashf(printArea);;
    }
    else if (listOfReports.value == "كشف الانتاج") {
        calculateProductionKashf(printArea);;
    }
    else if (listOfReports.value == "كشف المخزن") {
        calculateStoreKashf(printArea);;
    }
    else if (listOfReports.value == "كشف الدائن والمدين") {
        calculateCreditorAndDebitsKashf(printArea);;
    }
}
function selectAllMilksellers(e){
    console.log(e.target.checked);
    let listOfMilkSellers = [];
    for(let i=0 ; i < sellers.length ; i++){
        listOfMilkSellers.push(sellers[i].name);
    }
    if (e.target.checked){
        for (let i = 0; i < allNames.options.length ; i ++){
            if (listOfMilkSellers.includes(allNames.options[i].value)){
                allNames.options[i].selected = true ;
            }
        }
    }
    else {
        for (let i = 0; i < allNames.options.length ; i ++){
            if (listOfMilkSellers.includes(allNames.options[i].value)){
                allNames.options[i].selected = false ;
            }
        }
    }
}
function checkNameFound(name){
    let found = false ;
    found = checkNameFoundInSellers(name);
    if (found == false){
        found = checkNameFoundInBuys(name);
    }
    if (found == false){
        found = checkNameFoundInEmployees(name);
    }
    if (found == false){
        found = checkNameFoundInOtherTypes(name);
    }
    if (found == false){
        found = checkNameFoundInOwnerNames(name);
    }
    if (found == false){
        found = checkNameFoundInOtherBuyTypes(name);
    }
    if (found == false){
        found = checkNameFoundInOtherBuyNames(name);
    }
    if (found == false){
        found = checkNameFoundInProducts(name);
    }
    return found ;
}
function checkNameFoundInSellers(name){
    let found = false;
    for (let i = 0; i < sellers.length; i++) {
        if (sellers[i].name == name) {
            found = true;
        }
    }
    return found ;
}
function checkNameFoundInBuys(name){
    let found = false;
    for (let i = 0; i < buys.length; i++) {
        if (buys[i].name == name) {
            found = true;
        }
    }
    return found ;
}
function checkNameFoundInEmployees(name){
    let found = false;
    for (let i = 0; i < employes.length; i++) {
        if (employes[i].name == name) {
            found = true;
        }
    }
    return found ;
}
function checkNameFoundInOtherTypes(name){
    let found = false;
    for (let i = 0; i < otherTypes.length; i++) {
        if (otherTypes[i].name == name) {
            found = true;
        }
    }
    return found ;
}
function checkNameFoundInOwnerNames(name){
    let found = false;
    for (let i = 0; i < ownerNames.length; i++) {
        if (ownerNames[i].name == name) {
            found = true;
        }
    }
    return found ;
}
function checkNameFoundInOtherBuyTypes(name){
    let found = false;
    for (let i = 0; i < otherBuyTypes.length; i++) {
        if (otherBuyTypes[i].name == name) {
            found = true;
        }
    }
    return found ;
}
function checkNameFoundInOtherBuyNames(name){
    let found = false;
    for (let i = 0; i < otherBuyNames.length; i++) {
        if (otherBuyNames[i].name == name) {
            found = true;
        }
    }
    return found ;
}
function checkNameFoundInProducts(name){
    let found = false;
    for (let i = 0; i < products.length; i++) {
        if (products[i].name == name) {
            found = true;
        }
    }
    return found ;
}
function hideInfo() {
    viewArea.classList.add('hide');
    productionsPrices.classList.add('hide');
}
function logOut(){
    sessionStorage.setItem('user', '');
    sessionStorage.setItem('passwoed', ''); 
    window.location.reload();
}
function calcReminder(name) {
        let totalPaid = 0;
        let totalMostahak = 0;
        let totalRemainder = 0;
    //putItemsToSalariesForCalcSalary(start);
    let daysFromStart = datesFromStatToNow();
    let daysFromStartTransport = datesFromStatToNowTransport();
    let salaryOfHalfDay = 0;
        for (i = 0; i < milks.length; i++) {
            if (milks[i].seller == name) {
                totalPaid = totalPaid + parseFloat(milks[i].paid) ;
                totalMostahak = totalMostahak + parseFloat(milks[i].total) + parseFloat(milks[i].salary) + parseFloat(milks[i].addtions);
            }
        }
        for (i = 0; i < othersBuy.length; i++) {
            if (othersBuy[i].name == name) {
                totalPaid = totalPaid + parseFloat(othersBuy[i].paid) ;
                totalMostahak = totalMostahak + parseFloat(othersBuy[i].total) ;
            }
        }
        for (i = 0; i < sales.length; i++) {
            if (sales[i].name == name) {
                totalPaid = totalPaid - parseFloat(sales[i].paidFactory) ;
                totalMostahak = totalMostahak - parseFloat(sales[i].total) ;
            }
        }
    let type = '';
    for (let i = 0; i < employes.length; i++) {
        if (employes[i].name == name) {
            type = employes[i].type;
            break;
        }
    }
    if (type=="موظف"){
        for (j = 0; j < daysFromStart.length; j++) {
            for (i = 0; i < salaries.length; i++) {
                if (salaries[i].employee == name && salaries[i].date == daysFromStart[j]) {
                    if (salaries[i].type == "موظف") {
                        totalPaid = totalPaid + parseFloat(salaries[i].paid);
                        totalMostahak = totalMostahak + parseFloat(salaries[i].addtions);
                        salaryOfHalfDay = parseFloat(salaries[i].salary) / 60;
                    }
                }
            }
            totalMostahak = totalMostahak + parseFloat(salaryOfHalfDay);
        }
    }
    else if (type=="مشال"){
        for (j = 0; j < daysFromStartTransport.length; j++) {
            for (i = 0; i < salaries.length; i++) {
                if (salaries[i].employee == name && salaries[i].date == daysFromStartTransport[j]) {
                    if (salaries[i].type == "مشال") {
                        totalPaid = totalPaid + parseFloat(salaries[i].paid);
                        totalMostahak = totalMostahak + parseFloat(salaries[i].addtions);
                        salaryOfHalfDay = parseFloat(salaries[i].salary) / 14;
                    }
                }
            }
            totalMostahak = totalMostahak + parseFloat(salaryOfHalfDay);
        }
    }
    totalRemainder = totalMostahak - totalPaid;
    return totalRemainder.toFixed(2) ;
}
window.onunload = function(){
    debugger;
    dateConstant();
};
function enterProductsInfo(){
    viewArea.classList.add('hide');
    productionsPrices.classList.remove('hide');
}
/*
for(let i = 1270 ; i<1302;i++){
    sellers.push({
            name: milks[i].seller,
            bakaryPrice: milks[i].priceBakary ,
            gamosyPrice: milks[i].priceGamos ,
            order: (i-1270)+1
        })
}

*/
/*let factoryDatabase10000 = idb.open('Factory');
factoryDatabase1.then(function (db) {
    var txMilk = db.transaction('milk', 'readwrite');
    var storeMilk = txMilk.objectStore('milk');
    let index = storeMilk.index('key');
    return index.openCursor();
}).then(function change(cursor) {
    if (!cursor) {
        return 0;
    }
        console.log('Cursored at:', cursor.value);
        let update = cursor.value;
    update.date = numbers.check_from(update.date, 'ar', 'en');
        cursor.update(update);
    return cursor.continue().then(change);

})*/
