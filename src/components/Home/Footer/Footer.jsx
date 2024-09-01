const Footer = () => {
  return (
    <footer id="footer" className="bg-[#f1f3f6] font-t">
      {/* Footer */}
      <div className="py-10">
        <div className="border-t-8 border-dashed border-[#06223f31]  w-full "></div>
        <div className="flex justify-center items-center mt-8">
          <p className="md:text-base text-sm  color">
            &copy; All Rights Reserved 2023 - {new Date().getFullYear()} |
            Профессор
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
