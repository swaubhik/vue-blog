const formatExcerpt = (text) => {
  const now = text.substring(0, 200) + "...";

  return now;
};

export default formatExcerpt;
