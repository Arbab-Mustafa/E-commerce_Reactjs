const GoogleMap = () => {
  return (
    <div className="map-area">
      <div className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13267.064687768343!2d72.81821775242884!3d33.76670774269839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa436e082015d%3A0xf729c78e5ac28d57!2sUniversity%20of%20Engineering%20and%20Technology%20(UET)%2C%20Taxila!5e0!3m2!1sen!2s!4v1705842200435!5m2!1sen!2s"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
