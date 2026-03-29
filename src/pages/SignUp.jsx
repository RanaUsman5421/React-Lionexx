import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import ThmBtn from "../components/thmBtn";

const SIGNUP_ENDPOINT =
  "https://helper.lionexcourier.com/api/v2/auth/seller/admin/signup/special/adminseller/request";

const inputClasses =
  "h-[60px] w-full rounded-[6px] border border-black/10 bg-[#f5f5f5] px-[20px] min-[611px]:px-[30px] text-[16px] font-normal text-[#062f3a] outline-none transition-all duration-500 ease-[ease] placeholder:text-[#6a6c6e] focus:border-[#f78134] focus:bg-white";
const fileInputClasses =
  "block h-[60px] w-full rounded-[6px] border border-black/10 bg-[#f5f5f5] px-[20px] py-[17px] min-[611px]:px-[30px] text-[14px] font-normal text-[#6a6c6e] outline-none transition-all duration-500 ease-[ease] file:mr-4 file:rounded-[6px] file:border-0 file:bg-[#f78134] file:px-4 file:py-2 file:text-[14px] file:font-medium file:text-white hover:file:bg-[#062f3a] focus:border-[#f78134] focus:bg-white";
const labelClasses =
  "mb-[10px] block text-[16px] font-medium capitalize leading-[1.4] text-[#062f3a]";
const sectionHeadingClasses =
  "mb-5 mt-2 text-[22px] font-semibold capitalize leading-[1.2] text-[#062f3a]";

const initialFormData = {
  fullName: "",
  email: "",
  phoneNumber: "",
  country: "",
  password: "",
  confirmPassword: "",
  profession: [],
  userName: "",
  fatherName: "",
  cnic: "",
  displayName: "",
  dob: "",
  city: "",
  address: "",
  referenceNumber: "",
  religion: "",
  gender: "Male",
  cast: "",
  accountHolderName: "",
  accountNumber: "",
  ibanNumber: "",
  bankName: "",
  paymentInWeek: "",
  payableDaysNames: [],
  detailsCorrect: false,
  agreeTerms: false,
  comingFrom: "",
};

const initialImages = {
  profile: null,
  selfie: null,
  cnicFront: null,
  cnicBack: null,
  businessPhotos: [],
  bankProof: null,
};

const accountFields = [
  ["fullName", "Full Name", "text", true],
  ["email", "Email", "email", true],
  ["phoneNumber", "Phone Number", "text", true],
  ["country", "Country", "text", true],
  ["userName", "Username", "text", true],
  ["displayName", "Display Name", "text", true],
  ["password", "Password", "password", true],
  ["confirmPassword", "Confirm Password", "password", true],
];

const personalFields = [
  ["fatherName", "Father Name", "text", true],
  ["cnic", "CNIC", "text", true],
  ["dob", "Date of Birth", "date", true],
  ["religion", "Religion", "text", false],
  ["cast", "Cast", "text", false],
  ["referenceNumber", "Reference Number", "text", false],
  ["city", "City", "text", true],
];

const bankFields = [
  ["accountHolderName", "Account Holder Name", "text", true],
  ["bankName", "Bank Name", "text", true],
  ["accountNumber", "Account Number", "text", true],
  ["ibanNumber", "IBAN Number", "text", true],
];

const fileFields = [
  ["profile", "Profile", "text", false],
  ["selfie", "Selfie", "text", false],
  ["cnicFront", "CNIC Front", "text", false],
  ["cnicBack", "CNIC Back", "text", false],
  ["bankProof", "Bank Proof", "text", false],
  ["businessPhotos", "Business Photos", "text", true],
];

const checkboxWrapClasses =
  "rounded-[6px] border border-black/10 bg-[#f5f5f5] px-[20px] py-4 min-[611px]:px-[30px]";
const optionLabelClasses =
  "flex cursor-pointer items-center gap-3 text-[16px] text-[#062f3a]";

const getAxiosErrorMessage = (error) => {
  if (axios.isAxiosError(error)) {
    const responseData = error.response?.data;

    if (typeof responseData === "string" && responseData.trim()) {
      return responseData;
    }

    if (responseData?.message) {
      return responseData.message;
    }

    if (responseData?.error) {
      return responseData.error;
    }

    if (error.code === "ERR_NETWORK") {
      return "Network error or CORS issue while submitting the signup form.";
    }

    return error.message || "Signup request failed. Please try again.";
  }

  return error?.message || "Something went wrong while submitting the form.";
};

const SignUp = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [images, setImages] = useState(initialImages);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = ({ target: { name, value, type, checked } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleArrayToggle = (event, fieldName) => {
    const { value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [fieldName]: checked
        ? [...prev[fieldName], value]
        : prev[fieldName].filter((item) => item !== value),
    }));
  };

  const handleFileChange = ({ target: { name, files, multiple } }) => {
    setImages((prev) => ({
      ...prev,
      [name]: multiple ? Array.from(files || []) : files?.[0] || null,
    }));
  };

  const renderInput = ([name, label, type, required]) => (
    <div key={name} className="relative block">
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={`${label}...`}
        required={required}
        value={formData[name]}
        onChange={handleInputChange}
        className={inputClasses}
      />
    </div>
  );

  const renderFileInput = ([name, label, accept, multiple]) => (
    <div key={name} className="relative block">
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
      <input
        type="file"
        name={name}
        id={name}
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        className={fileInputClasses}
      />
    </div>
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitError("");

    try {
      if (formData.password !== formData.confirmPassword) {
        setSubmitError("Passwords do not match!");
        setIsSubmitting(false);
        return;
      }

      const payload = new FormData();

      payload.append("userName", formData.displayName.trim());

      Object.entries(formData).forEach(([key, value]) => {
        if (key === "userName") return;

        if (Array.isArray(value)) {
          payload.append(key, JSON.stringify(value));
        } else if (typeof value === "boolean") {
          payload.append(key, value);
        } else if (value !== "") {
          payload.append(key, value.trim());
        }
      });

      Object.entries(images).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((file) => payload.append(key, file));
        } else if (value) {
          payload.append(key, value);
        }
      });

      const { data } = await axios.post(SIGNUP_ENDPOINT, payload, {
        timeout: 30000,
        headers: {
          Accept: "application/json",
        },
      });

      setSubmitMessage(
        data?.message || "Signup request submitted successfully."
      );
      setFormData(initialFormData);
      setImages(initialImages);
      event.target.reset();
    } catch (error) {
      setSubmitError(getAxiosErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageShell title="Create Account" subtitle="Start shipping with Lionex.">
      <section className="relative z-[1] block bg-white px-0 pb-20 pt-[70px] min-[768px]:pb-[100px] min-[768px]:pt-24">
        <div className="mx-auto grid w-full max-w-[720px] px-4 sm:px-6 lg:max-w-[1100px] lg:px-8">
          <div className="relative block">
            <div className="relative block pb-[30px] text-center min-[611px]:pb-[60px]">
              <h2 className="text-[40px] font-bold capitalize leading-[1] min-[611px]:text-[60px]">
                Sing Up
              </h2>
            </div>
            <form
              id="sign-up-one__form"
              name="sign-up-one_form"
              action="#"
              method="post"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              className="relative block bg-white px-5 pb-[64px] pt-[60px] shadow-[0px_0px_80px_rgba(0,0,0,0.06)] min-[480px]:px-6 min-[611px]:px-[50px] lg:px-[60px]"
            >
              <div className="relative block">
                <div className="mb-8">
                  <h3 className={sectionHeadingClasses}>Account Info</h3>
                  <div className="grid grid-cols-1 gap-5 min-[768px]:grid-cols-2 lg:grid-cols-3">
                    {accountFields.map(renderInput)}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className={sectionHeadingClasses}>Personal Info</h3>
                  <div className="grid grid-cols-1 gap-5 min-[768px]:grid-cols-2 lg:grid-cols-3">
                    {personalFields.slice(0, 3).map(renderInput)}
                    <div className="relative block">
                      <label htmlFor="gender" className={labelClasses}>
                        Gender
                      </label>
                      <select
                        name="gender"
                        id="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className={inputClasses}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    {personalFields.slice(3).map(renderInput)}
                    <div className="relative block min-[768px]:col-span-2 lg:col-span-3">
                      <label htmlFor="address" className={labelClasses}>
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address..."
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        className={inputClasses}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className={sectionHeadingClasses}>Business Info</h3>
                  <div className="grid grid-cols-1 gap-5 min-[768px]:grid-cols-2 lg:grid-cols-3">
                    <div className="relative block">
                      <label htmlFor="professionSeller" className={labelClasses}>
                        Profession
                      </label>
                      <div className={checkboxWrapClasses}>
                        <label className={optionLabelClasses}>
                          <input
                            type="checkbox"
                            id="professionSeller"
                            value="seller"
                            checked={formData.profession.includes("seller")}
                            onChange={(event) =>
                              handleArrayToggle(event, "profession")
                            }
                            className="h-4 w-4 accent-[#f78134]"
                          />
                          Seller
                        </label>
                        <label className={`${optionLabelClasses} mt-3`}>
                          <input
                            type="checkbox"
                            value="warehouse_manager"
                            checked={formData.profession.includes("warehouse_manager")}
                            onChange={(event) =>
                              handleArrayToggle(event, "profession")
                            }
                            className="h-4 w-4 accent-[#f78134]"
                          />
                          Warehouse Manager
                        </label>
                      </div>
                    </div>
                    <div className="relative block">
                      <label htmlFor="comingFrom" className={labelClasses}>
                        Coming From
                      </label>
                      <input
                        type="text"
                        name="comingFrom"
                        id="comingFrom"
                        placeholder="Coming From..."
                        value={formData.comingFrom}
                        onChange={handleInputChange}
                        className={inputClasses}
                      />
                    </div>
                    <div className="relative block">
                      <label htmlFor="paymentInWeek" className={labelClasses}>
                        Payment In Week
                      </label>
                      <input
                        type="number"
                        name="paymentInWeek"
                        id="paymentInWeek"
                        placeholder="Payment In Week..."
                        min="1"
                        value={formData.paymentInWeek}
                        onChange={handleInputChange}
                        className={inputClasses}
                      />
                    </div>
                    <div className="relative block">
                      <label htmlFor="payableDayMonday" className={labelClasses}>
                        Payable Days
                      </label>
                      <div className={checkboxWrapClasses}>
                        <label className={optionLabelClasses}>
                          <input
                            type="checkbox"
                            id="payableDayMonday"
                            value="Monday"
                            checked={formData.payableDaysNames.includes("Monday")}
                            onChange={(event) =>
                              handleArrayToggle(event, "payableDaysNames")
                            }
                            className="h-4 w-4 accent-[#f78134]"
                          />
                          Monday
                        </label>
                        <label className={`${optionLabelClasses} mt-3`}>
                          <input
                            type="checkbox"
                            value="Thursday"
                            checked={formData.payableDaysNames.includes("Thursday")}
                            onChange={(event) =>
                              handleArrayToggle(event, "payableDaysNames")
                            }
                            className="h-4 w-4 accent-[#f78134]"
                          />
                          Thursday
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className={sectionHeadingClasses}>Bank Info</h3>
                  <div className="grid grid-cols-1 gap-5 min-[768px]:grid-cols-2 lg:grid-cols-3">
                    {bankFields.map(renderInput)}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className={sectionHeadingClasses}>Documents</h3>
                  <div className="grid grid-cols-1 gap-5 min-[768px]:grid-cols-2 lg:grid-cols-3">
                    {fileFields.map(renderFileInput)}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className={sectionHeadingClasses}>Confirmation</h3>
                  <div className="rounded-[6px] border border-black/10 bg-[#f5f5f5] px-[20px] py-5 min-[611px]:px-[30px]">
                    <label className="flex cursor-pointer items-start gap-3 text-[16px] leading-[1.6] text-[#062f3a]">
                      <input
                        type="checkbox"
                        name="detailsCorrect"
                        checked={formData.detailsCorrect}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 shrink-0 accent-[#f78134]"
                      />
                      I confirm that all entered details are correct.
                    </label>
                    <label className="mt-4 flex cursor-pointer items-start gap-3 text-[16px] leading-[1.6] text-[#062f3a]">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 shrink-0 accent-[#f78134]"
                      />
                      I agree to the terms and conditions.
                    </label>
                  </div>
                </div>

                {submitError ? (
                  <p className="mb-5 text-[15px] font-medium text-red-600">
                    {submitError}
                  </p>
                ) : null}
                {submitMessage ? (
                  <p className="mb-5 text-[15px] font-medium text-green-600">
                    {submitMessage}
                  </p>
                ) : null}

                <div className="relative mb-5 block">
                  <ThmBtn
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full justify-center border-none disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Sign UP"}
                  </ThmBtn>
                </div>
              </div>
              <div className="relative block pt-[22px] text-center">
                <p className="m-0">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium transition-all duration-200 ease-linear hover:text-[#f78134]"
                  >
                    Login Here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default SignUp;
