// BloodTestsPage.jsx
import { useState } from "react";


const BloodTest = () => {
  const bloodTestsData = [
    {
      name: "Complete Blood Count (CBC)",
      description:
        "Checks for various conditions, such as anemia, infection, and leukemia.",
      price: "$50",
    },
    {
      name: "Blood Glucose Test",
      description:
        "Measures the amount of glucose (sugar) in your blood. Used to diagnose diabetes or monitor glucose levels.",
      price: "$30",
    },
    {
      name: "Lipid Profile",
      description:
        "Measures cholesterol levels to assess the risk of heart disease and stroke.",
      price: "$60",
    },
    {
      name: "Liver Function Tests (LFTs)",
      description:
        "Evaluates liver function and screens for liver diseases such as hepatitis and cirrhosis.",
      price: "$55",
    },
    {
      name: "Thyroid Function Tests",
      description:
        "Assesses thyroid gland function and screens for thyroid disorders such as hypothyroidism and hyperthyroidism.",
      price: "$40",
    },
    {
      name: "Iron Studies",
      description:
        "Evaluates iron levels in the blood and helps diagnose iron deficiency anemia.",
      price: "$45",
    },
    {
      name: "Kidney Function Tests (Renal Panel)",
      description:
        "Assesses kidney function and screens for kidney diseases such as chronic kidney disease (CKD).",
      price: "$65",
    },
    {
      name: "Electrolyte Panel",
      description:
        "Measures the levels of electrolytes such as sodium, potassium, and chloride in the blood.",
      price: "$35",
    },
    {
      name: "Coagulation Panel (PT/INR)",
      description:
        "Evaluates blood clotting function and monitors the effectiveness of anticoagulant therapy.",
      price: "$50",
    },
    {
      name: "Hepatitis Panel",
      description:
        "Screens for hepatitis A, B, and C viruses and assesses liver function.",
      price: "$75",
    },
    {
      name: "STD Panel",
      description:
        "Screens for sexually transmitted diseases (STDs) such as HIV, syphilis, and gonorrhea.",
      price: "$100",
    },
    {
      name: "Cancer Markers",
      description:
        "Detects specific substances (markers) produced by cancer cells. Used for cancer screening and monitoring.",
      price: "$80",
    },
    {
      name: "Thyroid Antibody Tests",
      description:
        "Tests for antibodies that target thyroid tissue. Used to diagnose autoimmune thyroid diseases such as Hashimoto's thyroiditis.",
      price: "$55",
    },
    {
      name: "Vitamin D Test",
      description:
        "Measures the level of vitamin D in the blood. Used to assess vitamin D deficiency.",
      price: "$40",
    },
    {
      name: "Allergy Testing",
      description:
        "Identifies allergens that trigger allergic reactions. Helps diagnose allergies such as pollen, dust, and food allergies.",
      price: "$70",
    },
    {
      name: "Celiac Disease Panel",
      description:
        "Tests for antibodies associated with celiac disease (an autoimmune disorder triggered by gluten).",
      price: "$60",
    },
    {
      name: "Rheumatoid Arthritis Panel",
      description:
        "Tests for antibodies and markers associated with rheumatoid arthritis, an autoimmune disease that affects the joints.",
      price: "$85",
    },
    {
      name: "Comprehensive Metabolic Panel (CMP)",
      description:
        "Provides information about your body's metabolism, including kidney and liver function, electrolyte levels, and blood sugar levels.",
      price: "$70",
    },
    {
      name: "Hormone Panel",
      description:
        "Measures hormone levels in the blood, including thyroid hormones, sex hormones, and adrenal hormones.",
      price: "$90",
    },
    {
      name: "Genetic Testing",
      description:
        "Analyzes DNA to identify genetic mutations or variations associated with inherited disorders or diseases.",
      price: "$150",
    },
  ];

  const [selectedTest, setSelectedTest] = useState(null);

  const handleBookAppointment = (test) => {
    setSelectedTest(test);
  };

  return (
    <div>
      <header className="headerbt"></header>
      <div className="blood-tests-container">
        {bloodTestsData.map((test, index) => (
          <div key={index} className="blood-test">
            <h2 className="font-bold py-2 text-lg">{test.name}</h2>
            <hr />
            <p>{test.description}</p>
            <p className="font-bold py-4">Price: ${test.price}</p>
            <button onClick={() => handleBookAppointment(test)}>
              Book Appointment
            </button>
          </div>
        ))}
      </div>
      {selectedTest && <AppointmentPage selectedTest={selectedTest} />}
    </div>
  );
};

const AppointmentPage = () => {
  const [distance, setDistance] = useState(0);
  const convenienceCharge = 200; // Convenience charge in Rs
  const petrolChargePerKm = 15; // Petrol charge per km in Rs
  const [totalCharge, setTotalCharge] = useState(null);

  const handleDistanceChange = (event) => {
    setDistance(parseFloat(event.target.value));
  };

  const calculateTotalCharge = () => {
    const charge = convenienceCharge + distance * petrolChargePerKm;
    setTotalCharge(charge);
  };

  return (
    <div className="appointment-page">
      <div className="cart">
        <h2>Cart</h2>
        <div className="cart-item">
          <p>Selected Test: {}</p>
        </div>
        <div className="cart-item">
          <label htmlFor="distance">
            Distance from hospital to your house (km):
          </label>
          <input
            type="number"
            id="distance"
            name="distance"
            value={distance}
            onChange={handleDistanceChange}
          />
        </div>
        <div className="cart-item">
          <button onClick={calculateTotalCharge}>Calculate Total Charge</button>
        </div>
        {totalCharge !== null && (
          <div className="cart-item">Total Charge: ${totalCharge}</div>
        )}
      </div>
    </div>
  );
};

export default BloodTest;