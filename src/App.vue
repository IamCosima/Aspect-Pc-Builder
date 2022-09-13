<template>
  <header class="text-center bg-blue-800 text-white p-4 mb-10">
    <div class="text text-3xl md: text-5xl font-bold mb-3">
      <img class="inline-block mx-auto align-middle text-right" src="./img/Logo.svg" alt="">
      Aspect Pc Builders</div>
  </header>

  <div class="container ">
    <h1 class="text-3xl text-red-500">How to use:</h1>
    <p></p>
    <body class="bg-white w-full h-screen text-black" > 
  <h2 class="font-bold">Case</h2>
  <div class="flex space-x-4 items-baseline justify-start">

  <img src="https://img.icons8.com/sf-regular/96/000000/workstation.png"/>
  <div class="grid place-items-center">
  <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/71kbyr6phxl._sl1300__1024x768_.jpg" alt="">
    <div>
      <h2 class="text-center">
      Cooler Master MCW-L3B2-KN5N MasterBox Lite 3 Micro-ATX Chassis</h2>
      <h3 class="text-red-600 text-center">R599,00</h3>
      <div class="grid place-items-center">
      <button @click= "addtocart('Cooler Master MCW-L3B2-KN5N MasterBox Lite 3 Micro-ATX Chassis','1',599)" 
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button></div>
    </div>
  
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/phanteks-ph-ec300atg_bk01-eclipse-p300a-tg-black-steel-atx-mid-tower-1.jpg" alt="">
    <div>
      <h2 class="text-center">
        Phanteks PH-EC300ATG_BK01 Eclipse P300A Tempered Glass Black Steel ATX Mid Tower Desktop Chassis</h2>
      <h3 class="text-red-600 text-center">R1,249.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Phanteks PH-EC300ATG_BK01 Eclipse P300A Tempered Glass Black Steel ATX Mid Tower Desktop Chassis','1',1249.00)" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button></div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/p400a-digital-rgb-black_1_.jpg" alt="">
    <div>
      <h2 class="text-center">
        Phanteks PH-EC400ATG_DBK01 Eclipse P400A Digital RGB Tempered Glass Satin Black Steel ATX Mid Tower Desktop Chassis</h2>
      <h3 class="text-red-600 text-center">R1,499.00 </h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Phanteks PH-EC400ATG_DBK01 Eclipse P400A Digital RGB Tempered Glass Satin Black Steel ATX Mid Tower Desktop Chassis','1',1499.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/phanteks-ph-ec500atg_dbk-eclipse-p500a-drgb-tg-black-e-atx-mid-tower-1.jpg" alt="">
    <div>
      <h2 class="text-center">
        Phanteks PH-EC500ATG_DBK Eclipse P500A DRGB Tempered Glass Black E-ATX Mid-Tower Desktop Chassis</h2>
      <h3 class="text-red-600 text-center">R2,399.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Phanteks PH-EC500ATG_DBK Eclipse P500A DRGB Tempered Glass Black E-ATX Mid-Tower Desktop Chassis','1',2399.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  

  </div>
 
  <h2 class="font-bold">CPU</h2>
  <div class="flex space-x-4 items-baseline justify-start">
    <img src="https://img.icons8.com/sf-regular/96/000000/processor.png"/>
    <div class="grid place-items-center">
      <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/intel-alder-lake-corei3-box_1__1.jpg" alt="">
    <div>
      <h2 class="text-center">
        Intel BX8071512100 Core i3-12100 Quad Core 3.30GHz 10nm 12MB L3 Alder Lake LGA1700 Desktop CPU</h2>
      <h3 class="text-red-600 text-center">R2,899.00 </h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Intel BX8071512100 Core i3-12100 Quad Core 3.30GHz 10nm 12MB L3 Alder Lake LGA1700 Desktop CPU','1',2899.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/intel-12gen-i5-stndbox-01.jpg" alt=""> 
    <div>
      <h2 class="text-center">
        Intel BX8071512600K Core i5-12600K 10 Core 3.7GHz 10nm Alder Lake Socket LGA1700 Desktop CPU</h2>
      <h3 class="text-red-600 text-center">R5,999.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Intel BX8071512600K Core i5-12600K 10 Core 3.7GHz 10nm Alder Lake Socket LGA1700 Desktop CPU','1',5999.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/intel-12gen-i7-stndbox-01_1.jpg" alt="">
    <div>
      <h2 class="text-center">
        Intel BX8071512700KF Core i7-12700KF 12 Core 3.6GHz 10nm Alder Lake Socket LGA1700 Desktop CPU</h2>
      <h3 class="text-red-600 text-center">R8,999.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Intel BX8071512700KF Core i7-12700KF 12 Core 3.6GHz 10nm Alder Lake Socket LGA1700 Desktop CPU','1',8999.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
  <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/intel-12gen-i9-12900k-box-01_1.jpg" alt="">
    <div>
      <h2 class="text-center">
        Intel BX8071512900 Core i9-12900 16 Core 2.4GHz 10nm Alder Lake Socket LGA1700 Desktop CPU</h2>
      <h3 class="text-red-600 text-center">R11,199.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Intel BX8071512900 Core i9-12900 16 Core 2.4GHz 10nm Alder Lake Socket LGA1700 Desktop CPU','1',11199.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  </div>

  <h2 class="font-bold">Motherboard</h2>
  <div class="flex space-x-4 items-baseline justify-start">
  <img src="https://img.icons8.com/sf-regular/96/000000/motherboard.png"/>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/gigabyte_h610m_h_ddr4_01-ra57tzgs.jpg" alt=""> 
    <div>
      <h2 class="text-center">
        Gigabyte GA-H610M-H-DDR4 H610M H DDR4 Intel H610 Alder Lake LGA1700 Micro-ATX Desktop Motherboard</h2>
      <h3 class="text-red-600 text-center">R1,559.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Gigabyte GA-H610M-H-DDR4 H610M H DDR4 Intel H610 Alder Lake LGA1700 Micro-ATX Desktop Motherboard','1',1559.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/GigabyteB660.jpg" alt="">  
    <div>
      <h2 class="text-center">
        Gigabyte GA-B660M-DS3H-DDR4 B660M DS3H DDR4 Intel B660 Alder Lake LGA1700 Micro-ATX Desktop Motherboard</h2>
      <h3 class="text-red-600 text-center">R2,342.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Gigabyte GA-B660M-DS3H-DDR4 B660M DS3H DDR4 Intel B660 Alder Lake LGA1700 Micro-ATX Desktop Motherboard','1',2342.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/h670pwifid401.jpg" alt=""> 
    <div>
      <h2 class="text-center">
        ASUS TUF GAMING H670-PRO WIFI D4 Wi-Fi Intel H670 Alder Lake Socket LGA1700 ATX DDR4 Desktop Motherboard</h2>
      <h3 class="text-red-600 text-center">R3,838.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('ASUS TUF GAMING H670-PRO WIFI D4 Wi-Fi Intel H670 Alder Lake Socket LGA1700 ATX DDR4 Desktop Motherboard','1',3838.000 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/ga-z690m-ds3h-ddr4_1_.jpg" alt="">  
    <div>
      <h2 class="text-center">
        Gigabyte GA-Z690-UD-AX-DDR4 Z690 UD AX DDR4 Intel Z690 Alder Lake LGA1700 ATX DDR4 Desktop Motherboard</h2>
      <h3 class="text-red-600 text-center">R4,590.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Gigabyte GA-Z690-UD-AX-DDR4 Z690 UD AX DDR4 Intel Z690 Alder Lake LGA1700 ATX DDR4 Desktop Motherboard','1',4590.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  </div>

  <h2 class="font-bold">Ram</h2>
  <div class="flex space-x-4 items-baseline justify-start">
  <img src="https://img.icons8.com/sf-regular/96/000000/memory-slot.png"/>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/RipjawsV8GB.jpg" alt="">  
    <div>
      <h2 class="text-center">
        G.Skill F4-2400C15D-8GVR Ripjaws V 8GB (2x4GB) 2400MHz DDR4 CL15 1.20V Red Desktop Memory</h2>
      <h3 class="text-red-600 text-center">R699</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('G.Skill F4-2400C15D-8GVR Ripjaws V 8GB (2x4GB) 2400MHz DDR4 CL15 1.20V Red Desktop Memory','1',699 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/VengeanceLPX16GB.jpg" alt="">  
    <div>
      <h2 class="text-center">
        Corsair CMK16GX4M2A2666C16R Vengeance LPX 16GB (2x8GB) DDR4-2666MHz CL16 1.2V Red Desktop Memory</h2>
      <h3 class="text-red-600 text-center">R1,599</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Corsair CMK16GX4M2A2666C16R Vengeance LPX 16GB (2x8GB) DDR4-2666MHz CL16 1.2V Red Desktop Memory','1',1599 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/HyperXFury32GB.jpg" alt="">  
    <div>
      <h2 class="text-center">
        Kingston HX426C16FBK2/32 HyperX Fury 32GB (2x16GB) DDR4-2666MHz CL16 1.2V Black Desktop Memory</h2>
      <h3 class="text-red-600 text-center">R2,399.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Kingston HX426C16FBK2/32 HyperX Fury 32GB (2x16GB) DDR4-2666MHz CL16 1.2V Black Desktop Memory','1',2399.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/HyperXFuryRGB64GB.jpg" alt="">  
    <div>
      <h2 class="text-center">
        Kingston HX424C15FB3K2/64 HyperX Fury 64GB (2x32GB) DDR4-2400MHz CL15 1.2V Black Desktop Memory</h2>
      <h3 class="text-red-600 text-center">R4,799.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Kingston HX424C15FB3K2/64 HyperX Fury 64GB (2x32GB) DDR4-2400MHz CL15 1.2V Black Desktop Memory','1',4799.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  </div>
    
   <h2 class="font-bold">Graphics Card</h2>
   <div class="flex space-x-4 items-baseline justify-start">
  <img src="https://img.icons8.com/sf-regular/96/000000/video-card.png"/>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/3050-ventus-2x-8g.png" alt="">  
    <div>
      <h2 class="text-center">
        MSI GeForce RTX 3050 VENTUS 2X OC 8GB GDDR6 128-bit PCI-E 4.0 Desktop Graphics Card</h2>
      <h3 class="text-red-600 text-center">R5,999.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('MSI GeForce RTX 3050 VENTUS 2X OC 8GB GDDR6 128-bit PCI-E 4.0 Desktop Graphics Card','1',5999.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button> 
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/nvidia-geforce-rtx-3060-ti.png" alt="">  
    <div>
      <h2 class="text-center">
        NVIDIA GeForce RTX 3060 Ti Cooling System: Fan Boost Clock Speed: 1.67 GHz GPU Memory Size: 8 GB
      </h2>
      <h3 class="text-red-600 text-center">R8,999.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('NVIDIA GeForce RTX 3060 Ti Cooling System: Fan Boost Clock Speed: 1.67 GHz GPU Memory Size: 8 GB','1',8999.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/3070-ti-back-300x198.png" alt="">  
    <div>
      <h2 class="text-center">
      NVIDIA GeForce RTX 3070 Ti Cooling System: Fan Boost Clock Speed: 1.77 GHz GPU Memory Size: 8 GB
      </h2>
      <h3 class="text-red-600 text-center">R11,499.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('NVIDIA GeForce RTX 3070 Ti Cooling System: Fan Boost Clock Speed: 1.77 GHz GPU Memory Size: 8 GB','1',11499.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/nvidia-geforce-rtx-3090-ti.png" alt="">  
    <div>
      <h2 class="text-center"> 
        NVIDIA GeForce RTX 3090 Ti Cooling System: Fan Boost Clock Speed: 1.86 GHz GPU Memory Size: 24 GB
        </h2>
      <h3 class="text-red-600 text-center">R23,999.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('NVIDIA GeForce RTX 3090 Ti Cooling System: Fan Boost Clock Speed: 1.86 GHz GPU Memory Size: 24 GB','1',23999.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  </div>
   
  <h2 class="font-bold">Solid State Drive</h2>
  <div class="flex space-x-4 items-baseline justify-start">
  <img src="https://img.icons8.com/sf-regular/96/000000/ssd.png"/>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/CrucialCT240BX500SSD1BX500240GB.jpg" alt="">  
    <div>
      <h2 class="text-center">
        Crucial CT240BX500SSD1 BX500 240GB 2.5" SATA 6Gb/s Solid State Drive</h2>
      <h3 class="text-red-600 text-center">R537.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Crucial CT240BX500SSD1 BX500 240GB 2.5 inch SATA 6Gb/s Solid State Drive','1',537.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/CrucialCT480BX500SSD1BX500480GB.jpg" alt="">  
    <div>
      <h2 class="text-center">
        Crucial CT480BX500SSD1 BX500 480GB 2.5" SATA 6Gb/s Solid State Drive</h2>
      <h3 class="text-red-600 text-center">R907.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Crucial CT480BX500SSD1 BX500 480GB 2.5 inch SATA 6Gb/s Solid State Drive','1',907.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/CrucialCT500P2SSD8P2500GB.jpg" alt="">  
    <div>
      <h2 class="text-center">
        Crucial CT1000P2SSD8 P2 1TB M.2 2280 PCI-E 3.0 Solid State Drive</h2>
      <h3 class="text-red-600 text-center">R1,657.00 </h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Crucial CT1000P2SSD8 P2 1TB M.2 2280 PCI-E 3.0 Solid State Drive','1',1657.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/CrucialCT1000MX500SSD1MX5001TB.jpg" alt="">  
    <div>
      <h2 class="text-center">
        Crucial CT1000MX500SSD1 MX500 1TB SATA 2.5" Internal Solid State Drive</h2>
      <h3 class="text-red-600 text-center">R2,090.00 </h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Crucial CT1000MX500SSD1 MX500 1TB SATA 2.5 inch Internal Solid State Drive','1',2090.000 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  </div>
  
  <h2 class="font-bold">Hard Drive</h2>
  <div class="flex space-x-4 items-baseline justify-start">
    <img src="https://img.icons8.com/sf-regular/96/000000/hdd.png"/>
    <div class="grid place-items-center">
      <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/wd5000lpsx_01-uvvaizgs.jpg" alt=""> 
    <div>
      <h2 class="text-center">
        Western Digital WD10SPSX Black 1TB 7200rpm SATA 6Gb/s 64MB Cache 2.5 Inch Internal Hard Drive</h2>
      <h3 class="text-red-600 text-center">R899.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Western Digital WD10SPSX Black 1TB 7200rpm SATA 6Gb/s 64MB Cache 2.5 Inch Internal Hard Drive','1',899.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/wd_blue_3tb_01.jpg" alt="">  
    <div>
      <h2 class="text-center">
        Western-Digital WD20EZAZ Blue 2TB 5400rpm SATA 6Gb/s 256MB Cache 3.5-Inch Internal Hard Drive</h2>
      <h3 class="text-red-600 text-center">R1,179.00 </h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Western-Digital WD20EZAZ Blue 2TB 5400rpm SATA 6Gb/s 256MB Cache 3.5-Inch Internal Hard Drive','1',1179.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/wd_blue_3tb_01.jpg" alt=""> 
    <div>
      <h2 class="text-center">
        Western Digital WD30EZAZ WD Blue 3TB 5400rpm SATA 6Gb/s 256MB Cache 3.5 Inch Internal Hard Drive</h2>
      <h3 class="text-red-600 text-center">R1,258.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Western Digital WD30EZAZ WD Blue 3TB 5400rpm SATA 6Gb/s 256MB Cache 3.5 Inch Internal Hard Drive','1',1258.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/western-digital-wd40ezaz-01.jpg" alt="">
    <div>
      <h2 class="text-center">
        Western-Digital WD40EZAZ Blue 4TB 5400rpm SATA 6Gb/s 256MB Cache 3.5-Inch Internal Hard Drive</h2>
      <h3 class="text-red-600 text-center">R1,691.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart(' Western-Digital WD40EZAZ Blue 4TB 5400rpm SATA 6Gb/s 256MB Cache 3.5-Inch Internal Hard Drive','1',1691.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  </div>

  <h2 class="font-bold">Power Supply</h2>
  <div class="flex space-x-4 items-baseline justify-start">
  <img src="https://img.icons8.com/sf-regular/96/000000/lightning-bolt.png"/>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/CorsairCP9020210CVSeries550W80PlusBronzeCertifiedNonModularBlackDesktopPowerSupply.jpg" alt="">  
    <div>
      <h2 class="text-center">
        Corsair CP-9020210 CV Series 550W 80 Plus Bronze Certified Non-Modular Black Desktop Power Supply</h2>
      <h3 class="text-red-600 text-center">R921.00 </h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Corsair CP-9020210 CV Series 550W 80 Plus Bronze Certified Non-Modular Black Desktop Power Supply','1',921.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/CorsairCP9020221CX650M650W80PlusBronzeSemiModularBlackDesktopPowerSupply.jpg" alt=""> 
    <div>
      <h2 class="text-center">
        Corsair CP-9020211 CV Series 650W 80 Plus Bronze Certified Non-Modular Black Desktop Power Supply</h2>
      <h3 class="text-red-600 text-center">R947.00 </h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Corsair CP-9020211 CV Series 650W 80 Plus Bronze Certified Non-Modular Black Desktop Power Supply','1',947.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/CorsairCP9020138HX850850W80PlusPlatinumCertifiedFullyModularDesktopPowerSupply.jpg" alt=""> 
    <div>
      <h2 class="text-center">
        Corsair CP-9020138 HX850 850W 80 Plus Platinum Certified Fully Modular Desktop Power Supply</h2>
      <h3 class="text-red-600 text-center">R3,183.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Corsair CP-9020138 HX850 850W 80 Plus Platinum Certified Fully Modular Desktop Power Supply','1',3183.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  <div class="grid place-items-center">
    <img class="-mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 " src="./img/CorsairCP9020139HX10001000W80PlusPlatinumCertifiedFullyModularDesktopPowerSupply.jpg" alt="">  
    <div>
      <h2 class="text-center">
        Corsair CP-9020139 HX1000 1000W 80 Plus Platinum Certified Fully Modular Desktop Power Supply</h2>
      <h3 class="text-red-600 text-center">R4,162.00</h3>
      <div class="grid place-items-center">
        <button @click= "addtocart('Corsair CP-9020139 HX1000 1000W 80 Plus Platinum Certified Fully Modular Desktop Power Supply','1',4162.00 )" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select</button>
      </div>
    </div>
  </div>
  </div>
  <div class="grid place-items-center">
    <button @click = "total()"   class="bg-red-800 hover:bg-red-500 text-white font-bold py-2 my-4 pb-5 px-10 mx-50 rounded-full">Order</button>
  </div>
  <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table v-if="table" class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th>Name</th>
            <th>Quanity</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
            <tr  v-for="(item, index) in rowData" :key="index">
              <th scope="row">{{ item.components }}</th>
              <td>{{ item.quatity }}</td>
              <td>R{{ item.price }}</td>
            </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>TOTAL: </td>
            <td>R{{grandtotal}}</td>
        </tr>
    </tfoot>
</table>
  </div>
</body>
</div>
  


</template>

<script>
  export default {
    data(){
      return{
      arrcomponents : [],
      arrPrice : [],
      arrQuantity : [],
      table: false,
      grandtotal : 0,
      rowData:[],
      }
    },
    methods: {
      addtocart(name,qty,pr){
        var row_Object = {
          components : name,
          quatity : qty,
          price : pr,
        }
        this.rowData.push(row_Object);
        //this.arrcomponents.push(name);
        //this.arrQuantity.push(qty);
        this.arrPrice.push(pr);
      },
      total(){

        for (let index = 0; index < this.arrPrice.length; index++) {
          this.grandtotal = this.grandtotal + this.arrPrice[index];
        }
        this.table = true;
          
        

      },
    }
    }
  
  </script>

<style src="./assets/tailwind.css"></style >
