import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import img from "../../images/4127298.jpg";
import { loadAccount } from "../../functions";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Söhne,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    marginTop: "5rem",
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    // backgroundImage: `url(${img})`,
    backgroundColor: "black",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    overflowX: "hidden",
    overflowY: "",
    // Add transition effect for the blur change
  },
  contentContainer: {
    position: "relative",
    textAlign: "left",
  },
  heading: {
    marginBottom: theme.spacing(3),
    color: "rgba(256, 256, 256, 0.9)",
    fontFamily: "Arial",
    fontSize: "42px",
    fontWeight: "bold",
    // textTransform: "uppercase",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: theme.spacing(1),
    justifyContent: "center",
  },
  blurred: {
    filter: "blur(5px)",
    transition: "filter 0.3s ease",
  },
  card: {
    backgroundColor: "white",
    height: "100px",
    display: "flex",
    width: "90%",
    marginBottom: theme.spacing(2),
    boxShadow: "0px 4px 10px rgba(1, 1, 1, 1)",
    borderRadius: theme.spacing(100),
    cursor: "pointer",
    transition: "transform 0.3s ease",
  },
  cardMedia: {
    height: "100%",
    width: "auto",
    objectFit: "contain",
    marginLeft: "20px",
  },
  poppedOutContainer: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
  },
  poppedOutCard: {
    backgroundColor: "white",
    padding: theme.spacing(2),
    boxShadow: "0px 4px 10px rgba(1, 1, 1, 1)",
  },
  loadingText: {
    color: "rgba(256, 256, 256, 0.9)",
    marginTop: theme.spacing(3),
  },
}));

const GranteePortal = ({ getNFTs, get_ids_of_owner }) => {
  const classes = useStyles();
  const [nftData, setNftData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCardClicked, setCardClicked] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);

  const handleCardClick = (index) => {
    setCardClicked(true);
    setSelectedCardIndex(index);
  };

  const handleCloseCard = () => {
    setCardClicked(false);
    setSelectedCardIndex(-1);
  };

  const fetchNFTData = async () => {
    try {
      const account = await loadAccount();
      const nfts = await getNFTs(account);
      setNftData(nfts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching NFT data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNFTData();
  }, []);

  return (
    <div>
      <Box className={classes.root}>
        <Container maxWidth="md">
          <Box className={classes.contentContainer}>
            <Typography variant="h4" className={classes.heading}>
              Your Certificates
            </Typography>
          </Box>
          {loading ? (
            <Typography variant="h6" className={classes.loadingText}>
              Loading NFT data...
            </Typography>
          ) : (
            <Box
              className={`${classes.cardContainer} ${isCardClicked ? classes.blurred : ""
                }`}
            >
              {nftData.map((nft, index) => (
                <Card
                  key={index}
                  className={classes.card}
                  onClick={() => handleCardClick(index)}
                >
                  <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    src={nft.image}
                  />
                  <CardContent>
                    <Typography variant="h6">{nft.name}</Typography>
                    <Typography variant="body2">{nft.description}</Typography>
                    {nft.attributes.map((attribute, index) => (
                      <Typography key={index} variant="body2">
                        {attribute.trait_type}: {attribute.value}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}
          {selectedCardIndex !== -1 && (
            <Box className={classes.poppedOutContainer}>
              <Card
                className={classes.poppedOutCard}
                onClick={handleCloseCard}
              >
                <CardContent>
                  <Typography variant="h6">
                    {nftData[selectedCardIndex].name}
                  </Typography>
                  <Typography variant="body2">
                    {nftData[selectedCardIndex].description}
                  </Typography>
                  {nftData[selectedCardIndex].attributes.map(
                    (attribute, index) => (
                      <Typography key={index} variant="body2">
                        {attribute.trait_type}: {attribute.value}
                      </Typography>
                    )
                  )}
                </CardContent>
              </Card>
            </Box>
          )}
        </Container>
      </Box>
    </div>
  );
};

export default GranteePortal;
