function Footer() {
  return (
    <footer className="bg-yellow-600 text-white mt-16">
      <section className="2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md m-auto sm:p-4  py-8 grid lg:grid-cols-3 md:grid-cols-1 gap-8">
        <div>
          <div className="text-2xl flex gap-4">
            <i className="bi bi-cup-hot-fill text-xl"></i>
            <h3 className="font-semibold">Low-Coffee</h3>
          </div>
          <p className="text-base text-balance mt-4">
            Thank you for stopping by the store, and hope you are satisfied with
            our services. See you!
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Contact</h3>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Address</h3>
          <div className="mt-3">
          <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d59826.460393630616!2d106.1256968248726!3d20.417752206973745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3135e0adb8d5f1cd%3A0xb5f4baba00e67462!2zTmFtIMSQ4buLbmgsIE5hbSBEaW5oLCBWaWV0bmFt!3m2!1d20.4388225!2d106.1621053!5e0!3m2!1sen!2s!4v1717860151918!5m2!1sen!2s"
          height="280"></iframe>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
