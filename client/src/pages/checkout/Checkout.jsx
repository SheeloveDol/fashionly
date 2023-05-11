import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import Shipping from "./Shipping";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51N6i6REaGMrxHicLwHoGvO03eD7Em56jofjoznFvuBrLQZ5QKMto0hb09xrbakyoLhgL8hP86BycP8YqV4La2Gm200UxMFeg2L"
)

const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  shippingAddress: {
    isSameAddress: true,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  email: "",
  phoneNumber: "",
};

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street1: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street2: yup.string(),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      state: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      zipCode: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
    }),
  }),
  yup.object().shape({
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required"),
  }),
];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);

    //If billing is same as shipping
    if (isFirstStep && values.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      });
    }

    if (isSecondStep) {
      makePayment(values);
    }

    actions.setTouched({});
  };

  const makePayment = async (values) => {
    const stripe = await stripePromise;
    const requestBody = {
      userName: [values.firstName, values.lastName].join(' '),
      email: values.email,
      products: cart.map(({ id, count }) => ({
        id,
        count,
      }))
    };

    const response = await fetch("http://localhost:1337/api/orders", {
      headers: { "Content-Type" : "application/json"},
      body: JSON.stringify(requestBody)
    });

    const session = await response.json();
    await stripe.redirectToCheckout({
      sessionId: session.id
    });
  };

  return (
    <div className="w-4/5 my-24 mx-auto ">
      <ul className="steps w-full">
        <li className={activeStep === 0 ? `step step-primary` : `step`}></li>
        <li className={activeStep === 1 ? `step step-primary` : `step`}></li>
      </ul>

      <div>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema[activeStep]}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              {isFirstStep && (
                <Shipping
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              {isSecondStep && (
                <Payment
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}

              <div className="flex justify-between gap-12">
                {!isFirstStep && (
                  <div
                    className="w-full primary text-white bg-primary-200 rounded-none py-4 px-10"
                    onClick={() => setActiveStep(activeStep - 1)}
                  >
                    Back
                  </div>
                )}

                <div
                  className="w-full btn btn-primary text-white text-center bg-primary rounded-none py-4 px-10 border-2"
                  type="submit"
                >
                  {!isSecondStep ? "NEXT" : "Place Order"}
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Checkout;
