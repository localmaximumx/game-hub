import noImage from "../assets/noImage.png";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  const target = "media/";
  const index = url.indexOf(target) + target.length; // return the starting index of media/
  const newUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return newUrl;
};

export default getCroppedImageUrl;
