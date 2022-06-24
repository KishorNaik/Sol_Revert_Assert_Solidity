
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract RevertAssertCon{

   struct ErrorMessage{
      string message;
      address add;
   }

   address private owner;

   error throwError(ErrorMessage);

   constructor(address _ownerAddress){
      owner=_ownerAddress;
      console.log("Owner Addres :",owner);
   }

   function onlyOwner() public view {
      
      if(owner!=msg.sender){
         revert throwError(ErrorMessage("Only owner can access the function",msg.sender));
      }
      console.log("Welcome Owner");
   }

   function sendEther(uint _etherValue) public view{
      
      if(_etherValue!=2 ether){
         revert throwError(ErrorMessage("2 ether required",msg.sender));
      }
      console.log("Thanks We got 2 ether");
   }

   function checkOwnerShip() external view {
      assert(owner==0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266);
   }
 

}