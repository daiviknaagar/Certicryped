import "./App.css";
import Web3 from "web3";
import lighthouse from "@lighthouse-web3/sdk";
import axios from "axios";
import { useSelector } from "react-redux";
//++

let account = [];
let certificate = null;
let tokenid = 9;
const message = "Joshi hai God";

export const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x13881" }], // chainId must be in hexadecimal numbers
    });
    await window.ethereum.request({
      method: "eth_requestAccounts",
    });
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x13881" }], // chainId must be in hexadecimal numbers
    });
  } else {
    window.alert("Non Ethereum browser detected");
  }
};
export const loadAccount = async () => {
  const web3 = new Web3(window.web3.currentProvider);
  const accounts = await web3.eth.getAccounts();
  const acc = accounts[0];
  account = acc;
  return account;
};
export const signMessage = async (api_msg) => {
  const web3 = window.web3;
  const signature = await web3.eth.personal.sign(
    api_msg,
    account,
    "Aditya111$"
  );
  return signature;
};
export const loadContract = async () => {
  const web3 = window.web3;

  loadAccount();
  // const network_id = await web3.eth.net.getId();
  const certificate_abi = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "university",
          type: "address",
        },
      ],
      name: "approveUniversity",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Attest",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_fromTokenId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_toTokenId",
          type: "uint256",
        },
      ],
      name: "BatchMetadataUpdate",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "burn",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
      ],
      name: "MetadataUpdate",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "string",
          name: "metadata",
          type: "string",
        },
      ],
      name: "mintCertificate",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Revoke",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "university",
          type: "address",
        },
      ],
      name: "revokeUniversity",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "uri",
          type: "string",
        },
      ],
      name: "safeMint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "university",
          type: "address",
        },
      ],
      name: "UniversityApproved",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "university",
          type: "address",
        },
      ],
      name: "UniversityRevoked",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "string",
          name: "tokenuri",
          type: "string",
        },
      ],
      name: "tokenuri",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "approvedUniversities",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "getAllTokensOfOwner",
      outputs: [
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getApproved",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
      ],
      name: "isApprovedForAll",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ownerOf",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "tokenByIndex",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "tokenOfOwnerByIndex",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "tokenURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const certificate_address = "0xb9Fff27616649d121a54993b8fE5eDA793ECbe87";
  const certi = new web3.eth.Contract(certificate_abi, certificate_address);
  certificate = certi;
  // setcertificate(certificate);
};
export const progressCallback = (progressData) => {
  let percentageDone =
    100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
  console.log(percentageDone);
};
export const uploadFile = async (MetaData) => {
  const output = await lighthouse.uploadText(
    JSON.stringify(MetaData),
    "0040bebe.ece4300144684570902bf7ac1c02de92",
    "Data",
    progressCallback
  );
  console.log("File Status:", output);
  console.log(
    "Visit at https://gateway.lighthouse.storage/ipfs/" + output.data.Hash
  );
  return output.data.Hash;
};

export const retrieve = async (tokenId) => {
  const url = await certificate.methods
    .tokenURI(tokenId)
    .call({ from: account });
  console.log(url);
  const metadata = await axios.get(url);
  console.log(metadata.data);
  return metadata.data;
};

export const getApiKey = async () => {
  const web3 = window.web3;
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  const verificationMessage = (
    await axios.get(
      `https://api.lighthouse.storage/api/auth/get_message?publicKey=${account}`
    )
  ).data;
  const signedMessage = await signMessage(verificationMessage);
  const response = await lighthouse.getApiKey(account, signedMessage);
  console.log(response);
  /* { data: { apiKey: '7d8f3d18.eda91521aa294773a8201d2a7d241a2c' } } */
};
export const userdata = {
  name: "Aditya Roshan Joshi",
  program: "Blockchain",
  position: "Developer",
};

export const mintCertificate = async (holder_key, MetaData) => {
  console.log(account);
  loadAccount();
  console.log(account);
  if (
    MetaData !== { name: "", program: "", holder_key: "" } &&
    holder_key !== 0
  ) {
    console.log("MetaData  =", MetaData);
    //   setMetaData(MetaData);
    console.log("CHALALALALALAL");
    console.log(MetaData);
    const URI = await uploadFile(MetaData);
    try {
      const result = await certificate.methods
        .mintCertificate(holder_key, URI)
        .send({ from: account })
        .on("transactionHash", function (hash) {
          // setTokenid(tokenid + 1);
          tokenid = tokenid + 1;
        })
        .then();
      console.log(result);
    } catch (error) {
      console.log(error);
      alert("Use the correct account");
    }
  } else {
    alert("Bad Input");
  }
};
export const connect = async (event) => {
  const web3 = window.web3;
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const signature = await signMessage(message, account);
  const counter_account = await web3.eth.personal.ecRecover(message, signature);
  let data = {
    public_key: counter_account,
  };
  // console.log(counter_account);
  if (account.toLowerCase() === counter_account) {
    return true;
  } else {
    return false;
  }
};

export const getTokenId = async () => {
  // Call the appropriate function in your contract to get the Token ID
  const tokenId = await certificate.methods.tokenId;
  console.log(tokenId)
  // 'tokenId' now contains the Token ID of the last minted certificate
  return tokenId;
}

export const get_ids_of_owner = async (grantee) => {
  console.log("Entered");
  const result = await certificate.methods
    .getAllTokensOfOwner(grantee)
    .call({ from: account });
  return result;
};
export const getNFTs = async (grantee) => {
  const tokens = await get_ids_of_owner(grantee);
  console.log(tokens);
  console.log(typeof tokens);
  const Metadatas = [];

  if (tokens !== null) {
    // Add a null check here
    const len = tokens.length;
    for (let i = 0; i < len; i++) {
      // Change <= to <
      let data = await retrieve(tokens[i]);
      console.log(data);
      Metadatas.push(data);
    }
  } else {
    console.log("displaying tokens");
    console.log(tokens);
  }

  return Metadatas;
};
export const approve = async (university_pub_key) => {
  let isapproved = false;
  await certificate.methods
    .approveUniversity(university_pub_key)
    .send({ from: account })
    .on("transactionHash", function (hash) {
      console.log("University Approved Successfully");
      isapproved = true;
    });
  return isapproved;
};
export const revoke = async (university_pub_key) => {
  let isrevoked = false;
  await certificate.methods
    .revokeUniversity(university_pub_key)
    .send({ from: account })
    .on("transactionHash", function (hash) {
      console.log("University Revoked Successfully");
      isrevoked = true;
    });
  return isrevoked;
};
