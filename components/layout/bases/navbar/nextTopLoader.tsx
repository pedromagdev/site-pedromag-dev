import NextTopLoader from "nextjs-toploader";

const Loader = () => {
  return (
    <NextTopLoader
      color="#0F2BCD"
      initialPosition={0.08}
      crawlSpeed={100}
      height={3}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={200}
      zIndex={1600}
      showAtBottom={false}
    />
  );
};

export default Loader;
