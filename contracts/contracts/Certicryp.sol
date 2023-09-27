// Try using this as URI ipfs://bafkreic6ov4qo4ucd4g4uuyve4h72nc4y2lg7ugtq3n3vxnfp3lojvtmdu

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Certicryp is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;
    event Attest(address indexed to, uint256 indexed tokenId);
    event Revoke(address indexed to, uint256 indexed tokenId);
    mapping(address => bool) public approvedUniversities;
    event UniversityApproved(address university);
    event UniversityRevoked(address university);
    modifier onlyUniversity() {
        require(
            approvedUniversities[msg.sender],
            "Only approved universities can perform this action"
        );
        _;
    }

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        virtual
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function approveUniversity(address university) external onlyOwner {
        approvedUniversities[university] = true;
        emit UniversityApproved(university);
    }

    function revokeUniversity(address university) external onlyOwner {
        approvedUniversities[university] = false;
        emit UniversityRevoked(university);
    }

    constructor() ERC721("Certicryp", "CRT") {}

    function mintCertificate(
        address to,
        string memory metadata
    ) public onlyUniversity {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, metadata);
    }

    function burn(uint256 tokenId) external {
        require(
            ownerOf(tokenId) == msg.sender,
            "Only owner of the token can burn it"
        );
        _burn(tokenId);
    }
 
    function revoke(uint256 tokenId) external onlyOwner {
        _burn(tokenId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256
    ) internal pure {
        require(
            from == address(0) || to == address(0),
            "Not allowed to transfer token"
        );
    }

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal {
        if (from == address(0)) {
            emit Attest(to, tokenId);
        } else if (to == address(0)) {
            emit Revoke(to, tokenId);
        }
    }

    function _burn(
        uint256 tokenId
    ) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }
}
