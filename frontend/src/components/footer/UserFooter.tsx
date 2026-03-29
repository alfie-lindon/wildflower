const UserFooter = () => {
  return (
    <footer className="bg-white py-12 px-30">
      <div className="flex justify-between">
        {/* Left Section */}
        <div className="flex flex-col justify-between gap-6">
          <div className="flex gap-20">
            {/* Follow Us */}
            <div>
              <p className="font-playfair">
                <b>Follow us</b><br />
                Facebook<br />
                Instagram
              </p>
            </div>

            {/* Contact */}
            <div>
              <p className="font-playfair">
                <b>Contact</b><br />
                09754463215<br />
                johndoe@gmail.com
              </p>
            </div>

            {/* Location */}
            <div>
              <p className="font-playfair">
                <b>Location</b><br />
                701 N Washington Ave Suite 700,<br />
                Metro Manila, Quezon City 1127
              </p>
            </div>
          </div>

          <p className="mt-2">
            2025 Wildflower Brewing Co.
          </p>
        </div>
        {/* Right Section */}
        <div>
          <img
            src="@/assets/wf_logo.png"
            alt="Footer logo"
            className="w-40"
          />
        </div>
      </div>
    </footer>
  )
}

export default UserFooter