console.log('Pokemon field guide');

const $berryHeader=$('#berries');
const $berryList=$('#berry-text');
const $berryGrid=$('#berry-grid');
const $berry=$('.berry');
const $berryDialog=$('#berry-dialog');
const baseUrl='https://pokeapi.co/api/v2/';
const berryImageSrc=[
    'cheri.png','chesto.png','pecha.png','rawst.png','aspear.png','leppa.png','oran.png','persim.png',
    'lum.png','sitrus.png','figy.png','wiki.png','mago.png','aguav.png','iapapa.png','razz.png',
    'bluk.png','nanab.png','wepear.png','pinap.png','pomeg.png','kelpsy.png','qualot.png','hondew.png',
    'grepa.png','tamato.png','cornn.png','magost.png','rabuta.png','nomel.png','spelon.png','pamtre.png',
    'watmel.png','durin.png','belue.png','occa.png','passho.png','wacan.png','rindo.png','yache.png',
    'chople.png','kebia.png','shuca.png','coba.png','payapa.png','tanga.png','charti.png','kasib.png',
    'haban.png','colbur.png','babiri.png','chilan.png','liechi.png','ganlon.png','salac.png','petaya.png',
    'apicot.png','lansat.png','starf.png','enigma.png','micle.png','custap.png','jaboca.png','rowap.png'
];

// --------------------------------------------------------------

async function getBerryCount(){
  dataObj=await axios.get(`${baseUrl}berry`);
  const berryCount=dataObj.data.count;
  return berryCount;
}

function capitalizeFirstLetter(str){
  return str.charAt(0).toUpperCase()+str.slice(1);
}

// --------------------------------------------------------------

async function getBerryData(){
  const berryCount=await getBerryCount();
  for(let i=1;i<=berryCount;i++){
   const dataObj=await axios.get(`${baseUrl}berry/${i}`);
   console.log(dataObj.data);
}}

// --------------------------------------------------------------

async function getBerryNames(){
  const names=[];
  const berryCount=await getBerryCount();
   for(let i=1;i<=berryCount;i++){
    const dataObj=await axios.get(`${baseUrl}berry/${i}`);
    const fixedNames=capitalizeFirstLetter(dataObj.data.name);
    names.push(fixedNames);
   }
   return names
}

async function getNamesByIndex(index){
  const names=[];
  const berryCount=await getBerryCount();
   for(let i=1;i<=berryCount;i++){
    const dataObj=await axios.get(`${baseUrl}berry/${i}`);
    const fixedNames=capitalizeFirstLetter(dataObj.data.name);
    names.push(fixedNames);
   }
   return names[index]
}

// --------------------------------------------------------------

async function getBerryFirmness(){
  const firmness=[];
  const berryCount=await getBerryCount();
   for(let i=1;i<=berryCount;i++){
    const dataObj=await axios.get(`${baseUrl}berry/${i}`);
    firmness.push(dataObj.data.firmness.name);
   }
   return firmness
}

async function getFirmnessByIndex(index){
  const firmness=[];
  const berryCount=await getBerryCount();
   for(let i=1;i<=berryCount;i++){
    const dataObj=await axios.get(`${baseUrl}berry/${i}`);
    firmness.push(dataObj.data.firmness.name);
   }
   return firmness[index]
}

// --------------------------------------------------------------

async function getBerryGrowthTime(){
  const growthTimes=[];
  const berryCount=await getBerryCount();
   for(let i=1;i<=berryCount;i++){
    const dataObj=await axios.get(`${baseUrl}berry/${i}`);
    const growthTime=dataObj.data.growth_time;
    const fullGrown=growthTime*4;
    const growthObj={
      growth_time: growthTime,
      full_grown: fullGrown
    };
      growthTimes.push(growthObj);
   }
return growthTimes
}

async function getGrowthTimeByIndex(index){
  const growthTimes=[];
  const berryCount=await getBerryCount();
   for(let i=1;i<=berryCount;i++){
    const dataObj=await axios.get(`${baseUrl}berry/${i}`);
    const growthTime=dataObj.data.growth_time;
    const fullGrown=growthTime*4;
    const growthObj={
      growth_time: growthTime,
      full_grown: fullGrown
    };
      growthTimes.push(growthObj);
   }
  return growthTimes[index]
}

// --------------------------------------------------------------

async function getBerryFlavors() {
  const flavors=[];
  const berryCount=await getBerryCount();
   for(let i=1;i<=berryCount;i++) {
    const dataObj=await axios.get(`${baseUrl}berry/${i}`);
    const flavorArr=dataObj.data.flavors;
    const formattedFlavors=[];
    flavorArr.sort((a,b)=>b.potency-a.potency);
    for(let j=0;j<flavorArr.length;j++) {
      const flavorName=flavorArr[j].flavor.name;
      const potency=flavorArr[j].potency;
      const flavorObject={[flavorName]:potency};
       formattedFlavors.push(flavorObject);
      }
       flavors.push({flavors:formattedFlavors});
   }
return flavors
}

async function getFlavorsByIndex(index) {
  const flavors=[];
  const berryCount=await getBerryCount();
   for(let i=1;i<=berryCount;i++) {
   const dataObj=await axios.get(`${baseUrl}berry/${i}`);
   const flavorArr=dataObj.data.flavors;
   const formattedFlavors=[];
   flavorArr.sort((a,b)=>b.potency-a.potency);
   for(let j=0;j<flavorArr.length;j++) {
    const flavorName=flavorArr[j].flavor.name;
    const potency=flavorArr[j].potency;
    const flavorObject={[flavorName]:potency};
      formattedFlavors.push(flavorObject);
    }
      flavors.push({flavors:formattedFlavors});
  }
  return flavors[index]
}

// --------------------------------------------------------------

async function getBerrySize(){
   const sizes=[];
   const berryCount=await getBerryCount();
   for(let i=1;i<=berryCount;i++){
    const dataObj=await axios.get(`${baseUrl}berry/${i}`);
    sizes.push(dataObj.data.size);
   }
   return sizes
}

async function getSizeByIndex(index){
  const sizes=[];
  const berryCount=await getBerryCount();
  for(let i=1;i<=berryCount;i++){
    const dataObj=await axios.get(`${baseUrl}berry/${i}`);
    sizes.push(dataObj.data.size);
  }
  return sizes[index]
}

// --------------------------------------------------------------

async function getBerryHarvest(){
  const harvest=[];
  const berryCount=await getBerryCount();
  for(let i=1;i<=berryCount;i++){
    const dataObj=await axios.get(`${baseUrl}berry/${i}`);
    harvest.push(dataObj.data.max_harvest);
  }
  return harvest
}

async function getHarvestByIndex(index){
  const harvest=[];
  const berryCount=await getBerryCount();
  for(let i=1;i<=berryCount;i++){
    const dataObj=await axios.get(`${baseUrl}berry/${i}`);
    harvest.push(dataObj.data.max_harvest);
  }
  return harvest[index];
}

// --------------------------------------------------------------

async function getBerryText(){
  const berryText=[];
  const names=await getBerryNames();
  const textures=await getBerryFirmness();
  const sizes=await getBerrySize();
  const harvests=await getBerryHarvest();
  const growthTimes=await getBerryGrowthTime();
  const flavorsArray=await getFlavorText();

  for(let i=0;i<names.length;i++){
   const name=names[i];
   const texture=textures[i];
   const size=sizes[i];
   const harvest=harvests[i];
   const growthTime=growthTimes[i].full_grown;
   const flavorText=flavorsArray[i];

   const text=`The ${name} berry is ${size}mm with a ${texture} texture. The plant grows from seed to tree in ${growthTime} hours, and can grow up to ${harvest} berries at a time. ${flavorText}`;
   berryText.push(text);
  }
  return berryText
}

async function getFlavorText(){
  const flavorText=[];
  const flavorArray=await getBerryFlavors();
  for(let i=0;i<flavorArray.length;i++){
    const flavors=flavorArray[i].flavors;
    const sortedFlavors=flavors.sort((a,b)=>b[Object.keys(b)[0]]-a[Object.keys(a)[0]]);
    const filteredFlavors=sortedFlavors.filter(flavor=>flavor[Object.keys(flavor)[0]]>0);
    const count=filteredFlavors.length;
    const [flavor1,flavor2,flavor3,flavor4,flavor5]=sortedFlavors;
    
    let text;

    let flavorName1,flavorName2,flavorName3,flavorName4,flavorName5,
    potency1,potency2,potency3,potency4,potency5;

    switch(count){
      case 1:
        flavorName1=Object.keys(flavor1)[0];
        potency1=flavor1[flavorName1];
        if(potency1<15){
          text=`It tastes slightly ${flavorName1}.`
        }else{
          text=`It has a mild ${flavorName1} taste.`
        }
        break;
      case 2:
        flavorName1=Object.keys(flavor1)[0];
        potency1=flavor1[flavorName1];

        flavorName2=Object.keys(flavor2)[0];
        potency2=flavor2[flavorName2];
        
        const gap=potency1-potency2;

        if(gap>=30){
          text=`It has a strong ${flavorName1} flavor with a ${flavorName2} aftertaste.`;
        }else if(gap>=15&&gap<30){
          text=`It is very ${flavorName1} with a slightly ${flavorName2} taste.`;
        }else{
          text=`It tastes ${flavorName1} and ${flavorName2}.`
        }
        break;
      case 3:
        flavorName1=Object.keys(flavor1)[0];
        potency1=flavor1[flavorName1];

        flavorName2=Object.keys(flavor2)[0];
        potency2=flavor2[flavorName2];

        flavorName3=Object.keys(flavor3)[0];
        potency3=flavor3[flavorName3];

        if(potency1===potency2&&potency2===potency3){
          text=`It has an equally balanced blend of ${flavorName1}, ${flavorName2}, and ${flavorName3}.`
        }else if(potency1===potency2&&potency2>potency3){
          text=`It is ${flavorName1}, ${flavorName2}, and slightly ${flavorName3}.`
        }else{
          text=`It tastes ${flavorName1}, with notes of ${flavorName2} and ${flavorName3}.`
        }
        break;
      case 4:
        flavorName1=Object.keys(flavor1)[0];
        potency1=flavor1[flavorName1];

        flavorName2=Object.keys(flavor2)[0];
        potency2=flavor2[flavorName2];

        flavorName3=Object.keys(flavor3)[0];
        potency3=flavor3[flavorName3];

        flavorName4=Object.keys(flavor4)[0];
        potency4=flavor4[flavorName4];

        text=`It has a very balanced ${flavorName1}, ${flavorName2}, ${flavorName3}, and ${flavorName4} flavor.`;
        break;
      case 5:
        flavorName1=Object.keys(flavor1)[0];
        potency1=flavor1[flavorName1];

        flavorName2=Object.keys(flavor2)[0];
        potency2=flavor2[flavorName2];

        flavorName3=Object.keys(flavor3)[0];
        potency3=flavor3[flavorName3];

        flavorName4=Object.keys(flavor4)[0];
        potency4=flavor4[flavorName4];

        flavorName5=Object.keys(flavor5)[0];
        potency5=flavor5[flavorName5];

        if(potency1===potency2&&potency1===potency3&&potency2===potency4&&potency3===potency5){
          text=`It has a perfect blend of every flavor.`;
        }else if(potency1===potency2&&potency1===potency3&&potency4===potency5&&potency1>potency4){
          text=`It is ${flavorName1}, ${flavorName2}, and ${flavorName3}, with hints of ${flavorName4} and ${flavorName5}.`;
        }
        break;
      default:
        text='blah blah blah';
    }
    flavorText.push(text);
  }
  return flavorText
}





async function getTextByIndex(index){
  const berryText=await getBerryText();
  return berryText[index];
}


$(document).ready(function(){
    $berryHeader.on('click',function(){
        $berryGrid.html('');
        for(let i=0;i<berryImageSrc.length;i++){
            const $img=$('<img>').attr('src',berryImageSrc[i]).attr('data-index',i).addClass('berry');
            $berryGrid.append($img);
        }
    });
    $(document).on('click','.berry', async function(){
        const berryIndex=$(this).attr('data-index');
        $('#berry-name').text(await getNamesByIndex(berryIndex));
        $('#berry-image').attr('src',berryImageSrc[berryIndex]);
        $('#berry-text').text(await getTextByIndex(berryIndex));
        document.getElementById('berry-dialog').showModal();
    });
    $('#berry-dialog button').on('click',function(){
        document.getElementById('berry-dialog').close();
    })
});
