// Dictionary of items.
const ITEMS = [
    {code : 'BAN1', description : 'BANAK 1"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'BAN1B', description :  'BANAK 1 1/2"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'BAN2', description : 'BANAK 2"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'CAB1', description : 'CAOBA BLANCA 1"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'CAB1B', description :  'CAOBA BLANCA 1 1/2', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'CAB2', description : 'CAOBA BLANCA 2"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'POP1', description : 'POPLAR 1"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'POP1B', description :  'POPLAR 1 1/2', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'POP2', description : 'POPLAR 2"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'REG1', description : 'RED GRANDIS 1"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'CEO2', description : 'CEDRO ODORATA 2"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'ENA1', description : 'ENCINO AMERICANO 1"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'ENA1B', description :  'ENCINO AMERICANO 1 1/2"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'ENA2', description : 'ENCINO AMERICANO 2"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'MAP1', description : 'MAPLE 1"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'MOR1', description : 'MOHENA ROSADA 1"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'NOA1', description : 'NOGAL AMERICANO 1"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'TOR1', description : 'TORNILLO (TEKA SUD) 1"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'TOR1B', description :  'TORNILLO (TEKA SUD) 1 1/2"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'TOR2', description : 'TORNILLO (TEKA SUD) 2"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'BAL1', description : 'BALSAMO 1"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'CAT1', description : 'CATALOX 1"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'CAT1B', description :  'CATALOX 1 1/2"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'CHE1', description : 'CHECHEN 1"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'MAC1', description : 'MACHICHE 1"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'MAC1B', description :  'MACHICHE 1 1/2"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'MAC2', description : 'MACHICHE 2"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'PAR1', description : 'GUANACASTLE (PAROTA) 1"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'PAR1B', description :  'GUANACASTLE (PAROTA) 1 1/2"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'PAR2', description : 'GUANACASTLE (PAROTA) 2"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'PUC1', description : 'PUCTE 1"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'PUC1B', description :  'PUCTE 1 1/2"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'PUC2', description : 'PUCTE 2"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'TZA1', description : 'TZALAM 1"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'TZA1B', description :  'TZALAM 1 1/2"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'TZA2', description : 'TZALAM 2"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'ZAP1', description : 'ZAPOTE 1"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'CEN1', description : 'CEDRO NACIONAL 1"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'CEN1B', description :  'CEDRO NACIONAL 1 1/2"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'CEO1', description : 'CEDRO ODORATA 1"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'CEO1B', description :  'CEDRO ODORATA 1 1/2"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'CEO2', description : 'CEDRO ODORATA 2"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'CER1B', description :  'CEDRO REAL 1 1/2"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'CER2', description : 'CEDRO REAL 2"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'CUH1', description : 'CUMAHUAY 1"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'CUM1', description : 'CUMARU 1"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'HAY1', description : 'HAYA 1"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'HAY1B', description :  'HAYA 1 1/2"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'JEQ1', description : 'JEQUITIBA 1"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'JEQ1B', description :  'JEQUITIBA 1 1/2"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'JEQ2', description : 'JEQUITIBA 2"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']},
    {code : 'NOS1', description : 'NOGAL SUDAMERICANO 1"', examples : ['img/mueble-4.jpg', 'img/mueble-5.png', 'img/mueble-6.jpg']},
    {code : 'REQ1', description : 'REQUIA 1"', examples : ['img/mueble-1.jpg', 'img/mueble-2.jpg', 'img/mueble-3.jpg']}
];
