import { expect } from "chai";
import { ethers } from "hardhat";

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });


describe("Revert-Example", function () {
  it("#Test1 - Owner-Success", async function () {

    try
    {
      const [owner,add1,add2]=await ethers.getSigners();

      const Contract = await ethers.getContractFactory("RevertAssertCon");
      const contract = await Contract.deploy(owner.address);
      await contract.deployed();

      // Assert
      await contract.connect(owner).onlyOwner();

      // Test
      expect(true).to.equal(true);
    }
    catch(ex)
    {
      console.log((<Error>ex).message);
      expect(false).to.equal(true);
    }
  });

  it("#Test2 - Different=Owner-failed", async function () {

    try
    {
      const [owner,add1,add2]=await ethers.getSigners();

      const Contract = await ethers.getContractFactory("RevertAssertCon");
      const contract = await Contract.deploy(owner.address);
      await contract.deployed();

      // Assert
      await contract.connect(add1).onlyOwner();

      // Test
      expect(true).to.equal(true);
    }
    catch(ex)
    {
      console.log((<Error>ex).message);
      expect(false).to.equal(true);
    }
  });

  
  it("#Test3 - 2 ether-success", async function () {

    try
    {
      const [owner,add1,add2]=await ethers.getSigners();

      const Contract = await ethers.getContractFactory("RevertAssertCon");
      const contract = await Contract.deploy(owner.address);
      await contract.deployed();

      // Assert
      await contract.sendEther(ethers.utils.parseEther("2"));

      // Test
      expect(true).to.equal(true);
    }
    catch(ex)
    {
      console.log((<Error>ex).message);
      expect(false).to.equal(true);
    }
  });

  it("#Test4 - 2 ether-failed", async function () {

    try
    {
      const [owner,add1,add2]=await ethers.getSigners();

      const Contract = await ethers.getContractFactory("RevertAssertCon");
      const contract = await Contract.deploy(owner.address);
      await contract.deployed();

      // Assert
      await contract.sendEther(ethers.utils.parseEther("3"));

      // Test
      expect(true).to.equal(true);
    }
    catch(ex)
    {
      console.log((<Error>ex).message);
      expect(false).to.equal(true);
    }
  });

  it.only("#Test5 - Assert-Success",async function(){

    try
    {
      const [owner,add1,add2]=await ethers.getSigners();

      const Contract = await ethers.getContractFactory("RevertAssertCon");
      const contract = await Contract.deploy(owner.address);
      await contract.deployed();

      // Assert
      await contract.sendEther(ethers.utils.parseEther("3"));

      // Test
      expect(true).to.equal(true);
    }
    catch(ex)
    {
      console.log((<Error>ex).message);
      expect(false).to.equal(true);
    }
    
  });

});