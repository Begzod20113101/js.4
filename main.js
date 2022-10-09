let ishlar = {
  ertalab :['yuvunish', "ovqatlanish", "kiyinish", "maktabga kettish"  ],
  abetta:["maktabdan kelish", "yuvunish", "dam olish" , "uyishi qilish"],
  kechkipayt:["ovqatlanish", "yuvunish " , "uxlash"]

} 
let order = (fruit_name, call_praduction) =>{
    setTimeout(() =>{
      
        call_praduction()
    },2000)
}
let kuntartibi= () =>{
    setTimeout(() =>{
        console.log("kun tartibi boshlandi");
        setTimeout(() =>{
            console.log(`${ishlar.ertalab[0]}`);
            setTimeout(() =>{
                console.log(`${ishlar.ertalab[1]}`);
                setTimeout(() =>{
                    console.log(`${ishlar.ertalab[2]}`);
                    setTimeout(() =>{
                        console.log(`${ishlar.ertalab[3]}`);
                        setTimeout(() =>{
                            console.log(`${ishlar.ertalab[4]}`);
                            setTimeout(() =>{
                                console.log(`${ishlar.abetta[0]}`);
                                setTimeout(() =>{
                                    console.log(`${ishlar.abetta[1]}`);
                                    setTimeout(() =>{
                                        console.log(`${ishlar.abetta[2]}`);
                                        setTimeout(() =>{
                                            console.log(`${ishlar.abetta[3]}`);
                                            setTimeout(() =>{
                                                console.log(`${ishlar.kechkipayt[0]}`);
                                                setTimeout(() =>{
                                                    console.log(`${ishlar.kechkipayt[1]}`);
                                                    setTimeout(() =>{
                                                        console.log(`${ishlar.kechkipayt[2]}`);
                                                    },5000)
                                                },7000)
                                            },5000)
                                        },3000)
                                    },10000)

                                },3000)
                            },6000)
                        },3000)
                    },3000)
                },3000)
            },3000)
        },3000)
    },000)
}  

order(0,kuntartibi)