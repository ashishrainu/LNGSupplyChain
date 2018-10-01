/**
 * Transaction file for LNG production chain
 */

const namespace = "org.supplychain.LNG.model";

/**
 *
 * @param {org.supplychain.LNG.model.InitTestData} param - model instance
 * @transaction
 */
async function InitTestDataFunction(param) {  
    console.log('init test data');
	
    console.log('Creating a Gas Field State');  
    const factory = getFactory(); 
	
  	// adding a gas field state
    const gasFieldReg = await getParticipantRegistry(namespace + '.GasFieldState');   
    const gasField = await factory.newResource(namespace, 'GasFieldState', "1");
    gasField.stateName = "gas Field";
    gasField.GHG = 100;
    const newAddress = await factory.newConcept(namespace, 'Address');
	newAddress.country = "China";
	newAddress.city = "Bejing";
	newAddress.street = "Xia Mo Street";
    newAddress.hauseNr = 16;
  	gasField.address = newAddress;
  
    await gasFieldReg.add(gasField);       

  	// adding Liquefaction state
    console.log('Creating Liquefaction State');  

    const liquefactionReg = await getParticipantRegistry(namespace + '.ProductionState');   
    const liquefaction = await factory.newResource(namespace, 'ProductionState', "2");
    liquefaction.stateName = "liquefaction";
    liquefaction.GHG = 50;
    const newAddress2 = await factory.newConcept(namespace, 'Address');
	newAddress2.country = "China";
	newAddress2.city = "Hong Kong";
	newAddress2.street = "Mua Mo Street";
    newAddress2.hauseNr = 22;
  	liquefaction.address = newAddress2;
  
    await liquefactionReg.add(liquefaction);       

    // adding Storage state
    console.log('Creating Storage State');  

    const storageReg = await getParticipantRegistry(namespace + '.ProductionState');   
    const storage = await factory.newResource(namespace, 'ProductionState', "3");
    storage.stateName = "Storage";
    storage.GHG = 50;
    const newAddress3 = await factory.newConcept(namespace, 'Address');
	newAddress3.country = "China";
	newAddress3.city = "Hong Kong";
	newAddress3.street = "Mua Mo Street";
    newAddress3.hauseNr = 22;
  	storage.address = newAddress3;
  
    await storageReg.add(storage);       

    // adding Loading state
    console.log('Creating Loading State');  

    const loadingReg = await getParticipantRegistry(namespace + '.ProductionState');   
    const loading = await factory.newResource(namespace, 'ProductionState', "4");
    loading.stateName = "Loading";
    loading.GHG = 50;
    const newAddress4 = await factory.newConcept(namespace, 'Address');
	newAddress4.country = "China";
	newAddress4.city = "Hong Kong";
	newAddress4.street = "Mua Mo Street";
    newAddress4.hauseNr = 22;
  	storage.address = newAddress4;
  
    await loadingReg.add(loading);       

    // adding Transport Balasted state
    console.log('Creating Transport Balasted State');  

    const balastedReg = await getParticipantRegistry(namespace + '.ProductionState');   
    const balasted = await factory.newResource(namespace, 'ProductionState', "5");
    balasted.stateName = "Balasted";
    balasted.GHG = 50;
    const newAddress5 = await factory.newConcept(namespace, 'Address');
	newAddress5.country = "China";
	newAddress5.city = "Hong Kong";
	newAddress5.street = "Mua Mo Street";
    newAddress5.hauseNr = 22;
  	balasted.address = newAddress5;
  
    await balastedReg.add(balasted);       

    // adding Transport Loaded state
    console.log('Creating Transport Loaded State');  

    const loadedReg = await getParticipantRegistry(namespace + '.ProductionState');   
    const loaded = await factory.newResource(namespace, 'ProductionState', "6");
    loaded.stateName = "Loaded";
    loaded.GHG = 50;
    const newAddress6 = await factory.newConcept(namespace, 'Address');
	newAddress6.country = "China";
	newAddress6.city = "Hong Kong";
	newAddress6.street = "Mua Mo Street";
    newAddress6.hauseNr = 22;
  	loaded.address = newAddress6;
  
    await loadedReg.add(loaded);       

    // adding Unloading state
    console.log('Creating Transport Unloading State');  

    const unloadingReg = await getParticipantRegistry(namespace + '.ProductionState');   
    const unloading = await factory.newResource(namespace, 'ProductionState', "7");
    unloading.stateName = "Unloading";
    unloading.GHG = 50;
    const newAddress7 = await factory.newConcept(namespace, 'Address');
	newAddress7.country = "China";
	newAddress7.city = "Hong Kong";
	newAddress7.street = "Mua Mo Street";
    newAddress7.hauseNr = 22;
  	loaded.address = newAddress7;
  
    await unloadingReg.add(unloading);       
  
  
    // adding Storage 2 state
    console.log('Creating Storage 2 State');  

    const storage2Reg = await getParticipantRegistry(namespace + '.ProductionState');   
    const storage2 = await factory.newResource(namespace, 'ProductionState', "8");
    storage2.stateName = "Storage 2";
    storage2.GHG = 50;
    const newAddress8 = await factory.newConcept(namespace, 'Address');
	newAddress8.country = "China";
	newAddress8.city = "Hong Kong";
	newAddress8.street = "Mua Mo Street";
    newAddress8.hauseNr = 22;
  	storage2.address = newAddress8;
  
    await storage2Reg.add(storage2);       

    // adding Regasifiction state
    console.log('Creating Regasifiction State');  

    const regasifictionReg = await getParticipantRegistry(namespace + '.ProductionState'); 
    const regasifiction = await factory.newResource(namespace, 'ProductionState', "9");
    regasifiction.stateName = "Storage";
    regasifiction.GHG = 50;
    const newAddress9 = await factory.newConcept(namespace, 'Address');
	newAddress9.country = "China";
	newAddress9.city = "Hong Kong";
	newAddress9.street = "Mua Mo Street";
    newAddress9.hauseNr = 22;
  	regasifiction.address = newAddress9;
  
    await regasifictionReg.add(regasifiction);       

    // adding LNGToPipeline state
    console.log('Creating lNGToPipeline State');  

    const lNGToPipelineReg = await getParticipantRegistry(namespace + '.LNGToPipelineState'); 
    const lNGToPipeline = await factory.newResource(namespace, 'LNGToPipelineState', "10");
    lNGToPipeline.stateName = "Storage";
    lNGToPipeline.GHG = 50;
    const newAddress10 = await factory.newConcept(namespace, 'Address');
	newAddress10.country = "China";
	newAddress10.city = "Hong Kong";
	newAddress10.street = "Mua Mo Street";
    newAddress10.hauseNr = 22;
  	lNGToPipeline.address = newAddress10;
  
    await lNGToPipelineReg.add(lNGToPipeline);        
}

/**
 *
 * @param {org.supplychain.LNG.model.ClearData} param - model instance
 * @transaction
 */
async function ClearDataFunction(param) {  
    console.log('clearing test data');

    // deleting assets
    const liquidRegistry = await getAssetRegistry(namespace + '.LNG'); 
    let liqquidAssets = await liquidRegistry.getAll();
    await liquidRegistry.removeAll(liqquidAssets);
  
  	// deleting participants
    const prodStateRegistry = await getParticipantRegistry(namespace + '.ProductionState');
    let prodStates = await prodStateRegistry.getAll();
    await prodStateRegistry.removeAll(prodStates);
    
    const gasFieldRegistry = await getParticipantRegistry(namespace + '.GasFieldState'); 
    let gasFieldState = await gasFieldRegistry.getAll();
    await gasFieldRegistry.removeAll(gasFieldState);
  
    const lNGToPipelineStateRegistry = await getParticipantRegistry(namespace + '.LNGToPipelineState'); 
    let lNGToPipelineStates = await lNGToPipelineStateRegistry.getAll();
    await lNGToPipelineStateRegistry.removeAll(lNGToPipelineStates);

  console.log('clearing all data finished');  
}

/**
 *
 * @param {org.supplychain.LNG.model.ChangeState} param - model instance
 * @transaction
 */
async function ChangeStateFunction(param) {  
	let assetToTransfer = param.assetToTransfer;
    let fromState = param.fromState;
    let toState = param.toState;
      	
  	assetToTransfer.atState = toState;
    assetToTransfer.aggregatedGHG = assetToTransfer.aggregatedGHG + toState.GHG;     	       assetToTransfer.assetStatus = "IN_PROCESS";
  	
    const lNGReg = await getAssetRegistry(namespace + '.LNG'); 
    await lNGReg.update(assetToTransfer);    
  
  	// emitting AssetStateChanged  event
    let factory = await getFactory();

    let stateChangedEvent = factory.newEvent(namespace, 'AssetStateChanged');
  	stateChangedEvent.gHGcarrierAsset = assetToTransfer;
  	stateChangedEvent.transferGHG = assetToTransfer.aggregatedGHG;
    await emit(stateChangedEvent);  	
}

/**
 *
 * @param {org.supplychain.LNG.model.Create} param - model instance
 * @transaction
 */
async function CreateFunction(param) {  
	let gasFieldState = param.gasFieldState;
    let factory = await getFactory();
  
    // creating cell phone
    const lNGReg = await getAssetRegistry(namespace + '.LNG');   

    // getting next id
    let existingLNGs = await lNGReg.getAll();
  	let numberOfLNGs = 0;
  
    await existingLNGs.forEach(function (lng) {
      numberOfLNGs ++;
    });
 	numberOfLNGs ++; 	

    const lNG = await factory.newResource(namespace, 'LNG', numberOfLNGs.toString());
    lNG.assetStatus = "CREATED";
    lNG.aggregatedGHG = gasFieldState.GHG;
    lNG.atState = gasFieldState;
    lNG.amount = 1;
    await lNGReg.add(lNG);       
  
  	// emitting AssetCreated  event

    let createEvent = factory.newEvent(namespace, 'AssetCreated');
  	createEvent.gHGcarrierAsset = lNG;
  	createEvent.creationGHG = lNG.aggregatedGHG;
    await emit(createEvent);  	
}

/**
 *
 * @param {org.supplychain.LNG.model.ToPipieline} param - model instance
 * @transaction
 */
async function ToPipielineFunction(param) {  
	let assetToPipeline = param.assetToPipeline;
    let factory = await getFactory();
 	
  	assetToPipeline.assetStatus = "READY";
  	
    const lNGReg = await getAssetRegistry(namespace + '.LNG'); 
    await lNGReg.update(assetToPipeline);    
  
  	// emitting ToPipieline 

    let ToPipielineEvent  = factory.newEvent(namespace, 'AssetSentToPipeline');
  	ToPipielineEvent.gHGcarrierAsset = assetToPipeline;
  	ToPipielineEvent.sellingGHG = assetToPipeline.aggregatedGHG;
    await emit(ToPipielineEvent);  	
}