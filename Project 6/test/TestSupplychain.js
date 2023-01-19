// This script is designed to test the solidity smart contract - SuppyChain.sol -- and the various functions within
// Declare a variable and assign the compiled smart contract artifact
const SupplyChain = artifacts.require('SupplyChain');

contract('SupplyChain', function (accounts) {
    const emptyAddress = '0x0000000000000000000000000000000000000000';

    const sku = 1
    const upc = 1

    const originFarmName = "John Doe"
    const originFarmInformation = "Dubai"
    const originFarmLatitude = "-38.239770"
    const originFarmLongitude = "144.341490"

    const productID = sku + upc;
    const productNotes = "Best beans for Latte"
    const productPrice = web3.utils.toWei("1", "ether")

    const contractOwnerAccount = accounts[0];
    const originFarmerID = accounts[1];
    const distributorID = accounts[2];
    const retailerID = accounts[3];
    const consumerID = accounts[4];

    const State = {
        Harvested: 0,
        Processed: 1,
        Packed: 2,
        ForSale: 3,
        Sold: 4,
        Shipped: 5,
        Received: 6,
        Purchased: 7
    }

    ///Available Accounts
    ///==================
    ///(0) 0x27d8d15cbc94527cadf5ec14b69519ae23288b95
    ///(1) 0x018c2dabef4904ecbd7118350a0c54dbeae3549a
    ///(2) 0xce5144391b4ab80668965f2cc4f2cc102380ef0a
    ///(3) 0x460c31107dd048e34971e57da2f99f659add4f02
    ///(4) 0xd37b7b8c62be2fdde8daa9816483aebdbd356088
    ///(5) 0x27f184bdc0e7a931b507ddd689d76dba10514bcb
    ///(6) 0xfe0df793060c49edca5ac9c104dd8e3375349978
    ///(7) 0xbd58a85c96cc6727859d853086fe8560bc137632
    ///(8) 0xe07b5ee5f738b2f87f88b99aac9c64ff1e0c7917
    ///(9) 0xbd3ff2e3aded055244d66544c9c059fa0851da44

    console.log("ganache-cli accounts used here...")
    console.log("Contract Owner: accounts[0] ", contractOwnerAccount)
    console.log("Farmer: accounts[1] ", originFarmerID)
    console.log("Distributor: accounts[2] ", distributorID)
    console.log("Retailer: accounts[3] ", retailerID)
    console.log("Consumer: accounts[4] ", consumerID)

    let supplyChain;
    let eventEmitted = false;

    before(async () => {
        supplyChain = await SupplyChain.deployed();
        await supplyChain.addFarmer(originFarmerID, {from: contractOwnerAccount});
        await supplyChain.addDistributor(distributorID, {from: contractOwnerAccount});
        await supplyChain.addRetailer(retailerID, {from: contractOwnerAccount});
        await supplyChain.addConsumer(consumerID, {from: contractOwnerAccount});
    });

    // 1st Test
    it("Testing smart contract function harvestItem() that allows a farmer to harvest coffee", async () => {
        console.log('Case: Testing smart contract function harvestItem() that allows a farmer to harvest coffee');

        // init
        await supplyChain.Harvested(emittedEventHandler);

        // prepare test
        await supplyChain.harvestItem(
            upc, originFarmerID, originFarmName, originFarmInformation, originFarmLatitude, originFarmLongitude, productNotes,
            {from: originFarmerID}
        );

        // test
        await assertEmittedEventAndResult(State.Harvested);
    })

    // 2nd Test
    it("Testing smart contract function processItem() that allows a farmer to process coffee", async () => {
        console.log('Case: Testing smart contract function processItem() that allows a farmer to process coffee');

        // init
        await supplyChain.Processed(emittedEventHandler);

        // prepare test
        await supplyChain.processItem(upc, {from: originFarmerID});

        // test
        await assertEmittedEventAndResult(State.Processed);
    })

    // 3rd Test
    it("Testing smart contract function packItem() that allows a farmer to pack coffee", async () => {
        console.log('Case: Testing smart contract function packItem() that allows a farmer to pack coffee');

        // init
        await supplyChain.Packed(emittedEventHandler);

        // prepare test
        await supplyChain.packItem(upc, {from: originFarmerID});

        // test
        await assertEmittedEventAndResult(State.Packed);
    })

    // 4th Test
    it("Testing smart contract function markItemForSale() that allows a farmer to sell coffee", async () => {
        console.log('Case: Testing smart contract function markItemForSale() that allows a farmer to sell coffee');

        // init
        await supplyChain.ForSale(emittedEventHandler);

        // prepare test
        await supplyChain.markItemForSale(upc, productPrice, {from: originFarmerID});

        // test
        await assertEmittedEventAndResult(State.ForSale);
    })

    // 5th Test
    it("Testing smart contract function buyItem() that allows a distributor to buy coffee", async () => {
        console.log('Case: Testing smart contract function buyItem() that allows a distributor to buy coffee');

        // init
        await supplyChain.Sold(emittedEventHandler);

        // prepare test
        await supplyChain.buyItem(upc, {from: distributorID, value: productPrice});

        // test
        await assertEmittedEventAndResult(State.Sold);
    })

    // 6th Test
    it("Testing smart contract function shipItem() that allows a distributor to ship coffee", async () => {
        console.log('Case: Testing smart contract function shipItem() that allows a distributor to ship coffee');

        // init
        await supplyChain.Shipped(emittedEventHandler);

        // prepare test
        await supplyChain.shipItem(upc, {from: distributorID});

        // test
        await assertEmittedEventAndResult(State.Shipped);
    })

    // 7th Test
    it("Testing smart contract function receiveItem() that allows a retailer to mark coffee received", async () => {
        console.log('Case: Testing smart contract function receiveItem() that allows a retailer to mark coffee received');

        // init
        await supplyChain.Received(emittedEventHandler)

        // prepare test
        await supplyChain.receiveItem(upc, {from: retailerID});

        // test
        await assertEmittedEventAndResult(State.Received);
    })

    // 8th Test
    it("Testing smart contract function purchaseItem() that allows a consumer to purchase coffee", async () => {
        console.log('Case: Testing smart contract function purchaseItem() that allows a consumer to purchase coffee');

        // init
        await supplyChain.Purchased(emittedEventHandler)

        // prepare test
        await supplyChain.purchaseItem(upc, {from: consumerID});

        // test
        await assertEmittedEventAndResult(State.Purchased);
    })

    // 9th Test
    it("Testing smart contract function fetchItemBufferOne() that allows anyone to fetch item details from blockchain", async () => {
        console.log('Case: Testing smart contract function fetchItemBufferOne() that allows anyone to fetch item details from blockchain');

        await assertResultBufferOne(State.Purchased);
    })

    // 10th Test
    it("Testing smart contract function fetchItemBufferTwo() that allows anyone to fetch item details from blockchain", async () => {
        console.log('Case: Testing smart contract function fetchItemBufferTwo() that allows anyone to fetch item details from blockchain');

        await assertResultBufferTwo(State.Purchased);
    })

    // Auxiliary functions for assertion
    function emittedEventHandler(error, result) {
        eventEmitted = true;
    }

    async function assertEmittedEventAndResult(expectedState) {
        await assertResultBufferOne(expectedState);
        await assertResultBufferTwo(expectedState);
    }


    async function assertResultBufferOne(expectedState) {
        // prepare test
        const resultBufferOne = await supplyChain.fetchItemBufferOne(upc);

        // test
        assert.equal(resultBufferOne[0], sku, 'Error: Invalid item SKU');
        assert.equal(resultBufferOne[1], upc, 'Error: Invalid item UPC');
        assert.equal(resultBufferOne[2], getExpectedItemOwner(expectedState), 'Error: Missing or Invalid ownerID');
        assert.equal(resultBufferOne[3], originFarmerID, 'Error: Missing or Invalid originFarmerID');
        assert.equal(resultBufferOne[4], originFarmName, 'Error: Missing or Invalid originFarmName');
        assert.equal(resultBufferOne[5], originFarmInformation, 'Error: Missing or Invalid originFarmInformation');
        assert.equal(resultBufferOne[6], originFarmLatitude, 'Error: Missing or Invalid originFarmLatitude');
        assert.equal(resultBufferOne[7], originFarmLongitude, 'Error: Missing or Invalid originFarmLongitude');
    }

    function getExpectedItemOwner(expectedState) {
        switch (expectedState) {
            case State.Harvested:
            case State.Processed:
            case State.Packed:
            case State.ForSale:
                return originFarmerID;
            case State.Sold:
            case State.Shipped:
                return distributorID;
            case State.Received:
                return retailerID;
            case State.Purchased:
                return consumerID;
        }
    }

    async function assertResultBufferTwo(expectedState) {
        // prepare test
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo(upc);

        // test
        assert.equal(resultBufferTwo[0], sku, 'Error: Invalid item SKU');
        assert.equal(resultBufferTwo[1], upc, 'Error: Invalid item UPC');
        assert.equal(resultBufferTwo[2], productID, 'Error: Missing or Invalid productID');
        assert.equal(resultBufferTwo[3], productNotes, 'Error: Missing or Invalid productNotes');
        assert.equal(resultBufferTwo[4], (expectedState >= State.ForSale) ? productPrice : 0, 'Error: Missing or Invalid productPrice');
        assert.equal(resultBufferTwo[5], expectedState, 'Error: Invalid item State');
        assert.equal(resultBufferTwo[6], (expectedState >= State.Sold) ? distributorID : emptyAddress, 'Error: Missing or Invalid distributorID');
        assert.equal(resultBufferTwo[7], (expectedState >= State.Received) ? retailerID : emptyAddress, 'Error: Missing or Invalid retailerID');
        assert.equal(resultBufferTwo[8], (expectedState >= State.Purchased) ? consumerID : emptyAddress, 'Error: Missing or Invalid consumerID');
    }

});
