import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { TbMapPinFilled } from "react-icons/tb";

const Contact = () => {
  return (
    <main className="w-full pb-14 pt-[119px] bg-gradient-to-b from-[#1E1E1E] to-white/25 ">
      <div className="w-[80%] mx-auto text-center mb-10">
        <h1 className="font-monument text-2xl md:text-[50px] leading-[1.1] mb-3.5">
          Contact <span className="text-accent">Us</span>
        </h1>
        <p className="font-medium md:text-lg">
          Any question or remarks? React out to us!
        </p>
      </div>
      <div className="w-[80%] mx-auto lg:flex justify-center items-center gap-6 relative">
        <div className="p-6 md:p-12 space-y-10 md:space-y-24 mb-8 lg:mb-0 bg-[#1E1E1E] rounded-[18px] lg:w-1/2">
          <h2 className="font-monument text-lg md:text-[42px] leading-[1.1]">
            Contact Information
          </h2>
          <div className="flex flex-col gap-[18px] text-sm md:text-lg">
            <p className="flex items-center">
              <span className="mr-6">
                <IoLogoWhatsapp />
              </span>
              +62 8439 07625
            </p>
            <p className="flex items-center">
              <span className="mr-6">
                <IoMdMail />
              </span>
              hi@webcrafters.me
            </p>
            <p className="flex items-center w-full md:w-7/12">
              <span className="mr-6">
                <TbMapPinFilled />
              </span>
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </p>
          </div>
        </div>
        <form className="flex-grow">
          <div class="grid gap-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="Name" class="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  required
                  class="py-3 px-4 block w-full rounded-xl text-sm text-black disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Name"
                />
              </div>

              <div>
                <label for="Phone" class="sr-only">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="Phone"
                  id="Phone"
                  required
                  class="py-3 px-4 block w-full rounded-xl text-sm text-black disabled:opacity-50 disabled:pointer-events-none "
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div>
              <label for="Email" class="sr-only">
                Email
              </label>
              <input
                type="email"
                name="Email"
                id="Email"
                autocomplete="email"
                required
                class="py-3 px-4 block w-full rounded-xl text-sm text-black disabled:opacity-50 disabled:pointer-events-none "
                placeholder="Email"
              />
            </div>

            <div>
              <label for="Message" class="sr-only">
                Details
              </label>
              <textarea
                id="Message"
                name="Message"
                rows="7"
                class="py-3 px-4 block w-full rounded-xl text-sm text-black disabled:opacity-50 disabled:pointer-events-none "
                placeholder="Message"
              ></textarea>
            </div>
          </div>

          <div class="mt-4 grid">
            <button
              type="submit"
              class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-xl bg-[#111111] hover:bg-[#111111]/60 disabled:opacity-50 disabled:pointer-events-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;
