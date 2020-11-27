function pheptoan(x1,x2) {  //khai bao ten ham la pheptoan gom 2 bien x1 va x2
    var tong=x1+x2; //khai bao tong=x1+x2
    var hieu=x1-x2; //khai bao hieu=x1+x2
    var nhan=x1*x2; //khai bao nhan=x1+x2
    var chia=x1/x2; //khai bao chia=x1+x2
    var du=x1%x2;   //khai bao chia du=x1+x2
    console.log("Tong cua hai so la:" +tong);   //in ra  ket qua 
    console.log("Hieu cua hai so la:" +hieu);   //in ra  ket qua
    console.log('Nhan cua hai so la:' +nhan);   //in ra  ket qua
    console.log('Chia cua hai so la:' +chia);   //in ra  ket qua
    console.log('Du cua hai so la:' +du);       //in ra  ket qua
  }
  pheptoan(6,9);   //nhap gia tri cho pheptoan la 6,9

//object
  var sinhvien={    //khai bao bien sinhvien gom
    hoten:'LÊ THỊ NGỌC',   //hoten
    ngaysinh:'05/05/2000',  //ngaysinh
    quequan:'Bắc Ninh',     //quequan
  };
  console.log(sinhvien.hoten); //in ra ho ten
  console.log(sinhvien.ngaysinh);  //in ra ngay sinh
  console.log(sinhvien.quequan);   //in ra que quan sinh vien
  console.log(sinhvien);  //in ra sinh vien bao gom co hoten,ngaysinh,quequan
   
  //String & String methonds
  //String
var Mazda1='CX5'; //khai bao bien Mazda1=CX5
var Mazda2="GLC300";  //khai bao bien Mazda2=GLC300
console.log(Mazda1 +" va " +Mazda2);    //noi chuoi va ket qua la CX5 va GLC300
var abc="So thich cua ban la gi?"; //khai bao bien abc la so thich cua ban la gi?
console.log(" Do dai cua chuoi la:" +abc.length); // in ra ket qua do dai chuoi
 // String methonds
 var str="Moi nguoi co thich doc sach khong?";
 var ind= str.indexOf("co"); 
 var last =str.lastIndexOf('Ngoc');
 var tiemkiem = str.search("thich");
 console.log("Vi tri cua chu co la:" +ind); //in ra ket qua cua vi tri chu co
 console.log("vi tri chu Ngoc la:" +last); //in ra ket qua khong tim thaay chu Ngoc
 console.log(tiemkiem);

// Number & Number methonds
//Number 
var a=4; //khai bao bien a=4
var b="6";   //khai bao bien b=6
var c=a+b;  //khai bao bien c=a+b
console.log(c);  //in ra ket qua c=46 vi 6 la chuoi
var m=new Number(123); //khai bao bien m=new Number(123)
var l=1235676  //khai bao bien l=12345676
console.log(m); //in ra ket qua m=123
console.log(l);
console.log(m==l); // ket qua la false vi m khong bang l

var myNumber =32;
//myNumber.toString(10);
//myNumber.toString(32);
myNumber.toString(16);
console.log(myNumber);


