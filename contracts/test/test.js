var CertificateMinter = artifacts.require("CertificateNFT.sol");
let instance;
contract("CertificateNFT", async (accounts) => {
  it("should deploy", async () => {
    instance = await CertificateNFT.deployed();
  });
  it("should approve this university", async () => {
    instance.approveUniversity(accounts[1], { from: accounts[0] });
  });
  it("should mint the certificate", async () => {
    instance.mintCertificate(   
      accounts[0],
      "Aditya Roshan Joshi",
      "20/05/2023",
      "Blockchain",
      { from: accounts[1] }
    );
  });
  it("should transfer the ownership of the generated NFT to the Certificate Holder", async () => {
    instance.transferCertificate(accounts[1], accounts[2], 0, {
      from: accounts[1],
    });
  });
});
