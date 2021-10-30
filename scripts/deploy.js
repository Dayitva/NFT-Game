const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Iron Man ", "Thor", "Captain America"], // Names
    [
      "https://www.cnet.com/a/img/EhTVTdkHlzSEwtOipbUrCQKFvw8=/1200x675/2020/01/17/7da55a03-ac5b-4ec1-b59b-6b3c2414e68b/egdt5idw4aittju.jpg", // Images
      "https://static.wikia.nocookie.net/disney/images/4/4a/Thor_Odinson_TDW_poster_textless.jpg/revision/latest?cb=20130615173905",
      "https://www.aiesec.in/wp-content/uploads/2018/08/Captain-america-1.jpg",
    ],
    [150, 200, 300], // HP values
    [150, 100, 50], // Attack damage values
    "Thanos", // Boss name
    "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/11/10/Pictures/_fea09362-e4d7-11e8-a684-a3b63261dee4.JPG", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  // let txn;
  // txn = await gameContract.mintCharacterNFT(2);
  // await txn.wait();

  // let returnedTokenUri = await gameContract.tokenURI(1);
  // console.log("Token URI:", returnedTokenUri);

  // txn = await gameContract.attackBoss();
  // await txn.wait();

  // txn = await gameContract.attackBoss();
  // await txn.wait();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
