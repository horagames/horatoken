pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract HoraToken is MintableToken {

	string public constant name = "Hora Token";
	string public constant symbol = "HORA";
	uint8 public constant decimals = 6;
	uint256 private constant maxMint = 1000000 * 100000000; // 100M in sun
	uint256 public constant mintTotalLimit = 1000000 * 100000000 * 120; // 12b max minting, 10 years in estimate
	uint private constant mintInterval = 60 * 60 * 24 * 25; // 25 days
	uint private lastMint = 0;

	function mint(
		address _to,
		uint256 _amount
	)
	public
	hasMintPermission
	canMint
	returns (bool)
	{
		_amount = _amount * 1000000;
		require(_amount <= maxMint, "AMOUNT NOT ALLOWED");
		require(now - mintInterval > lastMint, "TIME RANGE LOW");
		require(totalSupply_ < mintTotalLimit, "TOTAL SUPPLY LIMIT HIT");
		totalSupply_ = totalSupply_.add(_amount);
		balances[_to] = balances[_to].add(_amount);
		emit Mint(_to, _amount);
		emit Transfer(address(0), _to, _amount);
		lastMint = now;
		return true;
	}
}