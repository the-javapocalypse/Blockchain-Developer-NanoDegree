const StarNotary = artifacts.require("StarNotary");

var accounts;
var owner;

contract('StarNotary', (accs) => {
    accounts = accs;
    owner = accounts[0];
});

it('can Create a Star', async() => {
    let tokenId = 1;
    let instance = await StarNotary.deployed();
    await instance.createStar('Awesome Star!', tokenId, {from: accounts[0]})
    assert.equal(await instance.tokenIdToStarInfo.call(tokenId), 'Awesome Star!')
});

it('lets user1 put up their star for sale', async() => {
    let instance = await StarNotary.deployed();
    let user1 = accounts[1];
    let starId = 2;
    let starPrice = web3.utils.toWei(".01", "ether");
    await instance.createStar('awesome star', starId, {from: user1});
    await instance.putStarUpForSale(starId, starPrice, {from: user1});
    assert.equal(await instance.starsForSale.call(starId), starPrice);
});

it('lets user1 get the funds after the sale', async() => {
    let instance = await StarNotary.deployed();
    let user1 = accounts[1];
    let user2 = accounts[2];
    let starId = 3;
    let starPrice = web3.utils.toWei(".01", "ether");
    let balance = web3.utils.toWei(".05", "ether");
    await instance.createStar('awesome star', starId, {from: user1});
    await instance.putStarUpForSale(starId, starPrice, {from: user1});
    let balanceOfUser1BeforeTransaction = await web3.eth.getBalance(user1);
    await instance.buyStar(starId, {from: user2, value: balance});
    let balanceOfUser1AfterTransaction = await web3.eth.getBalance(user1);
    let value1 = Number(balanceOfUser1BeforeTransaction) + Number(starPrice);
    let value2 = Number(balanceOfUser1AfterTransaction);
    assert.equal(value1, value2);
});

it('lets user2 buy a star, if it is put up for sale', async() => {
    let instance = await StarNotary.deployed();
    let user1 = accounts[1];
    let user2 = accounts[2];
    let starId = 4;
    let starPrice = web3.utils.toWei(".01", "ether");
    let balance = web3.utils.toWei(".05", "ether");
    await instance.createStar('awesome star', starId, {from: user1});
    await instance.putStarUpForSale(starId, starPrice, {from: user1});
    let balanceOfUser1BeforeTransaction = await web3.eth.getBalance(user2);
    await instance.buyStar(starId, {from: user2, value: balance});
    assert.equal(await instance.ownerOf.call(starId), user2);
});

it('lets user2 buy a star and decreases its balance in ether', async() => {
    // init
    let instance = await StarNotary.deployed();
    let user1 = accounts[1];
    let user2 = accounts[2];
    let starId = 5;
    let starPrice = web3.utils.toWei(".01", "ether");
    let balance = web3.utils.toWei(".05", "ether");

    // prepare test
    await instance.createStar('awesome star', starId, {from: user1});
    await instance.putStarUpForSale(starId, starPrice, {from: user1});

    let balanceOfUser1BeforeTransaction = await web3.eth.getBalance(user1);
    const balanceOfUser2BeforeTransaction = await web3.eth.getBalance(user2);
    await instance.buyStar(starId, {from: user2, value: balance});
    const balanceAfterUser2BuysStar = await web3.eth.getBalance(user2)

    // test
    let value = Number(balanceOfUser2BeforeTransaction) - Number(balanceAfterUser2BuysStar);
    assert.notEqual(value, starPrice);
});

// Implement Task 2 Add supporting unit tests

it('can add the star name and star symbol properly', async() => {
    // 1. create a Star with different tokenId
    //2. Call the name and symbol properties in your Smart Contract and compare with the name and symbol provided

    // init
    let tokenId = 17;
    const name = 'Star no 17';

    // prepare test case
    let instance = await StarNotary.deployed();
    await instance.createStar(name, tokenId, { from: accounts[0] });
    const starName = await instance.tokenIdToStarInfo.call(tokenId);

    // test
    assert.equal(starName, name);
});

it('lets 2 users exchange stars', async() => {
    // 1. create 2 Stars with different tokenId
    // 2. Call the exchangeStars functions implemented in the Smart Contract
    // 3. Verify that the owners changed


    // init
    let instance = await StarNotary.deployed();
    let user1 = accounts[0];
    let user2 = accounts[1];
    let starId1 = 7;
    let starId2 = 8;
    await instance.createStar('Star 1', starId1, { from: user1 });
    await instance.createStar('Star 2', starId2, { from: user2 });

    // Prepare test
    await instance.approve(user2, starId1, { from: user1 });
    await instance.approve(user1, starId2, { from: user2 });

    await instance.exchangeStars(starId1, starId2, { from: user1 });
    let star1 = await instance.ownerOf.call(starId1);
    let star2 = await instance.ownerOf.call(starId2);

    // test
    assert.equal(star1, user2);
    assert.equal(star2, user1);
});

it('lets a user transfer a star', async() => {
    // 1. create a Star with different tokenId
    // 2. use the transferStar function implemented in the Smart Contract
    // 3. Verify the star owner changed.

    // init
    let user1 = accounts[0];
    let user2 = accounts[1];
    let starId = 9;
    let instance = await StarNotary.deployed();
    await instance.createStar('Star 1', starId, { from: user1 });

    // prepare test case
    await instance.transferStar(user2, starId, { from: user1 });
    let starUser = await instance.ownerOf.call(starId);

    // test
    assert.equal(starUser, user2);
});

it('lookUptokenIdToStarInfo test', async() => {
    // 1. create a Star with different tokenId
    // 2. Call your method lookUptokenIdToStarInfo
    // 3. Verify if you Star name is the same

    // init star
    const star = {
        id: 1997,
        name: 'Star no 1997',
    };
    let instance = await StarNotary.deployed();
    await instance.createStar(star.name, star.id, { from: accounts[0] });

    // prepare test case
    const lookUpStarName = await instance.lookUptokenIdToStarInfo(star.id);
    const starName = await instance.tokenIdToStarInfo.call(star.id);

    // test
    assert.equal(lookUpStarName, starName);
});
