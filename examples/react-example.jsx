import  { useState } from 'react';
import { divisions_bn, districts_bn, upazilas_bn, unions_bn } from '../locationBdDivisonsToUnionsBangla.js';

// You can also use English version:
// import { divisions_en, districts_en, upazilas_en, unions_en } from '../locationBdDivisonsToUnionsEnglish.js';

function LocationSelector() {
  const [selectedDivision, setSelectedDivision] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedUpazila, setSelectedUpazila] = useState('');
  const [selectedUnion, setSelectedUnion] = useState('');
  
  const [availableDistricts, setAvailableDistricts] = useState([]);
  const [availableUpazilas, setAvailableUpazilas] = useState([]);
  const [availableUnions, setAvailableUnions] = useState([]);

  // Handle division change
  const handleDivisionChange = (e) => {
    const divisionId = e.target.value;
    setSelectedDivision(divisionId);
    setSelectedDistrict('');
    setSelectedUpazila('');
    setSelectedUnion('');
    
    if (divisionId) {
      setAvailableDistricts(districts_bn[divisionId] || []);
    } else {
      setAvailableDistricts([]);
    }
    setAvailableUpazilas([]);
    setAvailableUnions([]);
  };

  // Handle district change
  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setSelectedDistrict(districtId);
    setSelectedUpazila('');
    setSelectedUnion('');
    
    if (districtId) {
      setAvailableUpazilas(upazilas_bn[districtId] || []);
    } else {
      setAvailableUpazilas([]);
    }
    setAvailableUnions([]);
  };

  // Handle upazila change
  const handleUpazilaChange = (e) => {
    const upazilaId = e.target.value;
    setSelectedUpazila(upazilaId);
    setSelectedUnion('');
    
    if (upazilaId) {
      setAvailableUnions(unions_bn[upazilaId] || []);
    } else {
      setAvailableUnions([]);
    }
  };

  // Handle union change
  const handleUnionChange = (e) => {
    setSelectedUnion(e.target.value);
  };

  // Get selected location data
  const getSelectedLocationData = () => {
    return {
      division: divisions_bn.find(d => d.value === selectedDivision),
      district: availableDistricts.find(d => d.value === selectedDistrict),
      upazila: availableUpazilas.find(u => u.value === selectedUpazila),
      union: availableUnions.find(u => u.value === selectedUnion)
    };
  };

  return (
    <div className="location-selector">
      <h2>🇧🇩 Bangladesh Location Selector</h2>
      
      {/* Division Select */}
      <div className="form-group">
        <label htmlFor="division">বিভাগ / Division</label>
        <select
          id="division"
          value={selectedDivision}
          onChange={handleDivisionChange}
          className="form-control"
        >
          <option value="">Select Division</option>
          {divisions_bn.map(division => (
            <option key={division.value} value={division.value}>
              {division.title}
            </option>
          ))}
        </select>
      </div>

      {/* District Select */}
      <div className="form-group">
        <label htmlFor="district">জেলা / District</label>
        <select
          id="district"
          value={selectedDistrict}
          onChange={handleDistrictChange}
          disabled={!selectedDivision}
          className="form-control"
        >
          <option value="">
            {selectedDivision ? 'Select District' : 'First select a division'}
          </option>
          {availableDistricts.map(district => (
            <option key={district.value} value={district.value}>
              {district.title}
            </option>
          ))}
        </select>
      </div>

      {/* Upazila Select */}
      <div className="form-group">
        <label htmlFor="upazila">উপজেলা / Upazila</label>
        <select
          id="upazila"
          value={selectedUpazila}
          onChange={handleUpazilaChange}
          disabled={!selectedDistrict}
          className="form-control"
        >
          <option value="">
            {selectedDistrict ? 'Select Upazila' : 'First select a district'}
          </option>
          {availableUpazilas.map(upazila => (
            <option key={upazila.value} value={upazila.value}>
              {upazila.title}
            </option>
          ))}
        </select>
      </div>

      {/* Union Select */}
      <div className="form-group">
        <label htmlFor="union">ইউনিয়ন / Union</label>
        <select
          id="union"
          value={selectedUnion}
          onChange={handleUnionChange}
          disabled={!selectedUpazila}
          className="form-control"
        >
          <option value="">
            {selectedUpazila ? 'Select Union' : 'First select an upazila'}
          </option>
          {availableUnions.map(union => (
            <option key={union.value} value={union.value}>
              {union.title}
            </option>
          ))}
        </select>
      </div>

      {/* Display Selected Data */}
      {selectedDivision && (
        <div className="selected-info">
          <h3>Selected Location:</h3>
          <pre>{JSON.stringify(getSelectedLocationData(), null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default LocationSelector;

// CSS (add to your stylesheet)
const styles = `
.location-selector {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.location-selector h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
}

.form-control {
  width: 100%;
  padding: 10px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: #667eea;
}

.form-control:disabled {
  background: #f5f5f5;
  cursor: not-allowed;
}

.selected-info {
  margin-top: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.selected-info h3 {
  margin-bottom: 10px;
}

.selected-info pre {
  background: white;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
}
`;
