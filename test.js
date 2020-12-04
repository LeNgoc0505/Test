//Array
var flower=['hoa hong','hoa mai','hoa ly','hoa cuc'];  //khai bao mang flower  
flower[3]='hoa luc binh';  //thay phan tu 3 la cuc thanh hoa luc binh
console.log("Phan tu thu 1 trong mang la: " +flower[1]);  //lay phan tu thu 1 trong mang in ra kq la mai
console.log(flower);    //in ra mang la hoa,mai,lu,hoa luc binh


var last =flower[flower.length-1];   //phan tu cuoi cung 
console.log('Phan tu cuoi cung la:' +last);  //in ra ket qua la hoa luc binh


 flower.push('hoa dao');  //them phan tu hoa dao
console.log(flower); //in ra ket qua la da co them phan tu dao trong mang


flower.pop();//xoa bo phan tu cuoi cung
console.log(flower); //in ra kq mang la mang khong co phan tu hoa dao

flower.push("hoa cuc hoa mi");  //them mot phan tu hoa cuc hoa mi ơ cuoi mang
console.log(flower);

flower.shift(); //loai bo phan tu mang dau tien
console.log(flower);

flower.unshift("hoa huong duong");  //them mot phan tu hoa huong duong vao dau mang
console.log(flower);

flower.sort();  //phan loai mang theo chu cai abc
console.log(flower);

flower.reverse();//sap xep mang theo thu tu giam dan
console.log(flower);

//Sap xep theo so 

var x=[1,6,30,3,20,100];  //khai bao mot mang x gom cac phan tu 1,6,30,3,20,100
x.sort(function (a,b) { return a-b});  //sap xep mang theo thu tu tang  dan
console.log(x); //in kq la 1,3,6,20,30,100

x.sort(function(a,b) {return b-a}); //sap xep mang theo thu tu giam dan
console.log(x);  //in ra ket qua 100,30,20,6,3,1

x.sort(function(a,b){return 0.5-Math.random()});  //sap xep ngau nhien cac phan tu trong mang
console.log(x);

function cdx (arr) {
    return Math.max.apply(null,arr);  //phan tu lon nhat cua mang 

}
console.log("Phan tu lon nhat la:" + cdx(x));  //ket qua  100

function cdz (arr) {
    return Math.min.apply(null,arr);   //phan tu nho nhat cua mang 
}
console.log('Phan tu nho nhat la: '+ cdz(x));  //kq la 1

function vbc(arr){
    var len=arr.length;
    var max=-Infinity;
    while(len--){
        if(arr[len]>max){
            max=arr[len];
        }
    }
    return max;
}
console.log(vbc(x));


var number1=[1,3,4,6,8,11,33,44];  //khai bao mang gom cac day so
var number2=number1.map(cb);    //khai bao mot mang moi cac phan tu trong mang giong mang number1
function cb(value){
    return value*2;   //cac gia tri trong mang *2
}
console.log(("Ket qua cua mang la:"+number2))   


var lon10=number1.filter(db);    //khai bao mang va duyet cac phan tu  trong mang
function db(value){
    return value>10;   //cac phan tu >10
}
console.log(lon10);

var sum=number1.reduce(eb,20);   //khai bao ham tinh tong cong them 20
function eb(total,value){     
    return total + value;  
}
console.log("Tong cu mang+20la:"+sum);

var sum=number1.reduce(eb);   //khai bao ham tinh tong
function eb(total,value){
    return total +value;
}
console.log("Tong cua mang la:"+sum);  

var sum=number1.reduceRight(eb);
function eb(total,value){
    return total +value;
}
console.log(sum);

var lon10=number1.every(db);    //khai bao mang va duyet cac phan tu  trong mang 
function db(value){
    return value>10;   //kiem tra dieu kien va tra ve kq
}
console.log("Kq cac pt trong mang >10 la:"+lon10);  

var lon10=number1.some(db);    //khai bao mang va duyet cac phan tu  trong mang
function db(value){
    return value>10;   // kiem tra xem cac phan tu >10
}
console.log(" mot so pt trong mang >10 la:"+lon10);

var first=number1.find(xb);   //khai bao bien first va duyet cac phan tu trong mang
function xb (value) {
    return value>12;   //kiem tra dieu kien cac phan tu trong mang phan tu dau tien >12
}
console.log("Phan tu dau tien >12 la:"+first);

var mm=flower.lastIndexOf("hoa ly");
console.log(mm);

var mn=number1.indexOf("6");
console.log(mn);

var one=number1.findIndex(cb);
function cb (value){
    return value >7; 
}
console.log("Vi tri xuat hien va chi so >7 la:"+one);



var pr=[]; //khai bao mot mang pr gom 
pr[0]="Le";//phan tu 0 gan la Le
pr[1]="Nguyen";  //phan tu 1 gan la Nguyen
pr[2]="25";     //phan tu 2 gan la 25
var x=pr.length;  //khai bao x = do dai cua mang
console.log("Do dai cua mang la:"+ x); //in ra ket qua do dai cua mang la 3
console.log('Cho biet thong tin cua pr la :'+ pr[0] + ''+pr[1] + '' + pr[2]);   


var d=new Date(2020,12,2,22,45,56,0);  //khai bao nam,thang,ngay,gio,phut,giay
console.log(d);

var m=new Date (2020,12,2);  //khai bao nam,thang,ngay
console.log(m);

var mg=new Date("2020-12-01");
console.log(mg)

var nam=new Date("2020");  //khai bao nam
console.log(nam);

var day =new Date("3/3/2021");
console.log(day );

var nam= new Date("2020/12");
console.log(nam);


var th=new Date();
console.log("Thang cua nam la:"+th.getMonth());   

var na=new Date(); 
console.log("Nam cua nam nay la:"+na.getFullYear());

var time=new Date();
console.log("Gio la:"+ time.getTime());

var da= new Date();
console.log("Ngay la:"+da.getDate());
var ho =new Date();
console.log("Gio la:"+ho.getHours());

var se =new Date();
console.log("Tra ve giay:"+se.getSeconds());  //tra ve giay

var mi=new Date();
console.log("Tra ve milin giay la:"+mi.getUTCMilliseconds());  //Phuong phap tra ve mili giay cua ngay

var da = new Date();
var dys = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log('Tra ve thu cua ngay hom nay a:'+dys[da.getDay()]);

var dy = new Date();
dy.setFullYear(2020);   //thiet lap nam
console.log('Nam la:'+dy);
var dn = new Date();
dn.setFullYear(2020,3,6);
console.log(""+dn);

//Toan tu
console.log("So ngyen la:"+Math.round(4,5));
console.log("Luy thua la:"+Math.pow(4,3));
console.log("Can bac hai cua 81 la:"+Math.sqrt(81));
console.log("Gia tri tuyet doi la:"+Math.abs(-4,5));
console.log("Lam tron so nguyen gan nhat la:"+Math.ceil(4,5));


console.log("So lon nhat la:"+Math.max(2,5,89,56,45,67));
    
console.log("So nho  nhat la:"+Math.min(2,5,89,56,45,67));
    
console.log ("So bat ky nhan voi 10 la: "+Math.floor(Math.random() * 10));  //so bat ky nhan voi 10

console.log("Ket qua la:"+Boolean(10 > 9));

var x = false;
var y = new Boolean(false);
console.log(x);
console.log(y);
